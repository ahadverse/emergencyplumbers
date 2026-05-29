import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connect';
import BlogPost from '@/lib/db/models/BlogPost';
import { getSessionFromCookies } from '@/lib/auth';

export async function GET(req: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') ?? '';
  const sort = searchParams.get('sort') ?? 'newest';
  const page = Math.max(1, Number(searchParams.get('page') ?? 1));
  const limit = Math.min(50, Number(searchParams.get('limit') ?? 9));

  const session = await getSessionFromCookies();
  const statusFilter = session
    ? (searchParams.get('status') ?? 'published')
    : 'published';

  const query: Record<string, unknown> = { status: statusFilter === 'all' && session ? { $in: ['draft', 'published'] } : statusFilter };
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { excerpt: { $regex: search, $options: 'i' } },
      { tags: { $regex: search, $options: 'i' } },
    ];
  }

  const sortMap: Record<string, Record<string, 1 | -1>> = {
    newest: { publishedAt: -1 },
    oldest: { publishedAt: 1 },
    popular: { viewCount: -1 },
  };

  const total = await BlogPost.countDocuments(query);
  const posts = await BlogPost.find(query)
    .sort(sortMap[sort] ?? sortMap.newest)
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return NextResponse.json({ posts, total, page, pages: Math.ceil(total / limit) });
}

export async function POST(req: NextRequest) {
  const session = await getSessionFromCookies();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const body = await req.json();
  if (body.status === 'published' && !body.publishedAt) body.publishedAt = new Date();

  const post = await BlogPost.create(body);
  return NextResponse.json(post, { status: 201 });
}
