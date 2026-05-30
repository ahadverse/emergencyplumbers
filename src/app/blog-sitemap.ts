import type { MetadataRoute } from 'next';
import { API_BASE } from '@/lib/apiUrl';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://emergencyplumbers.live';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(`${API_BASE}/api/blogs?limit=200&page=1`, { cache: 'no-store' });
    if (!res.ok) return [];
    const { posts } = await res.json();
    return ((posts ?? []) as Array<{ slug: string; publishedAt?: string }>).map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch { return []; }
}
