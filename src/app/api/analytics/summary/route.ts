import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/connect';
import AnalyticsEvent from '@/lib/db/models/AnalyticsEvent';
import BlogPost from '@/lib/db/models/BlogPost';
import { getSessionFromCookies } from '@/lib/auth';

export async function GET() {
  const session = await getSessionFromCookies();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const now = new Date();
  const day7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const day30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [views7, views30, calls7, calls30, topBlogs] = await Promise.all([
    AnalyticsEvent.countDocuments({ type: 'blog_view', timestamp: { $gte: day7 } }),
    AnalyticsEvent.countDocuments({ type: 'blog_view', timestamp: { $gte: day30 } }),
    AnalyticsEvent.countDocuments({ type: 'call_click', timestamp: { $gte: day7 } }),
    AnalyticsEvent.countDocuments({ type: 'call_click', timestamp: { $gte: day30 } }),
    BlogPost.find({ status: 'published' }).sort({ viewCount: -1 }).limit(5).select('title slug viewCount publishedAt').lean(),
  ]);

  return NextResponse.json({ views7, views30, calls7, calls30, topBlogs });
}
