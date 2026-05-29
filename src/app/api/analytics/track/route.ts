import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connect';
import AnalyticsEvent from '@/lib/db/models/AnalyticsEvent';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { type, blogSlug, page } = await req.json();
    await AnalyticsEvent.create({ type, blogSlug, page, timestamp: new Date() });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
