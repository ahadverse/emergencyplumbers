import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connect';
import BlogPost from '@/lib/db/models/BlogPost';
import { getSessionFromCookies } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ identifier: string }> }) {
  await connectDB();
  const { identifier } = await params;
  const isId = mongoose.Types.ObjectId.isValid(identifier);
  const post = isId
    ? await BlogPost.findById(identifier).lean()
    : await BlogPost.findOneAndUpdate({ slug: identifier }, { $inc: { viewCount: 1 } }, { new: true }).lean();

  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ identifier: string }> }) {
  const session = await getSessionFromCookies();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const { identifier } = await params;
  const body = await req.json();
  if (body.status === 'published' && !body.publishedAt) body.publishedAt = new Date();

  const post = await BlogPost.findByIdAndUpdate(identifier, body, { new: true }).lean();
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ identifier: string }> }) {
  const session = await getSessionFromCookies();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const { identifier } = await params;
  await BlogPost.findByIdAndDelete(identifier);
  return NextResponse.json({ ok: true });
}
