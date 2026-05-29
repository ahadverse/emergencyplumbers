'use client';
import { useEffect } from 'react';

export default function BlogViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'blog_view', blogSlug: slug, page: `/blog/${slug}` }),
    }).catch(() => {});
  }, [slug]);
  return null;
}
