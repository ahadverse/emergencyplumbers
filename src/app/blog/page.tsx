import type { Metadata } from 'next';
import { API_BASE } from '@/lib/apiUrl';

export const revalidate = 1800; // revalidate every 30 minutes
import { Suspense } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import BlogSearch from '@/components/blog/BlogSearch';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Guides',
  description: 'Expert plumbing advice from licensed master plumbers — drain cleaning tips, pipe maintenance, water heater guides, and emergency plumbing know-how.',
  openGraph: {
    title: 'Emergency Plumbers Blog — Plumbing Tips & Guides',
    description: 'Expert plumbing advice from licensed master plumbers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Plumbers Blog — Plumbing Tips & Guides',
    description: 'Expert plumbing advice from licensed master plumbers.',
  },
  alternates: { canonical: '/blog' },
};

interface Post {
  _id: string; title: string; slug: string; excerpt: string;
  coverImage?: string; category: string; publishedAt?: string; viewCount: number;
}

async function getPosts(search: string, sort: string, page: number) {
  const params = new URLSearchParams({ search, sort, page: String(page), limit: '9' });
  try {
    const res = await fetch(
      `${API_BASE}/api/blogs?${params}`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return { posts: [], total: 0, pages: 1 };
    return res.json();
  } catch {
    return { posts: [], total: 0, pages: 1 };
  }
}

export default async function BlogListPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const sp = await searchParams;
  const search = sp.search ?? '';
  const sort = sp.sort ?? 'newest';
  const page = Math.max(1, Number(sp.page ?? 1));
  const { posts, total, pages } = await getPosts(search, sort, page);

  return (
    <>
      <Navigation variant="service" />
      <main className="blog-list-page">
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <h1>Plumbing Tips &amp; Guides</h1>
            <p>Expert advice from Emergency Plumbers licensed master plumbers</p>
          </div>
        </section>
        <section className="blog-content">
          <Suspense><BlogSearch /></Suspense>
          {total === 0 ? (
            <div className="blog-empty">
              {search ? `No articles found for "${search}"` : 'No articles published yet.'}
            </div>
          ) : (
            <>
              <div className="blog-grid">
                {(posts as Post[]).map(post => (
                  <BlogCard key={post._id} title={post.title} slug={post.slug} excerpt={post.excerpt}
                    coverImage={post.coverImage} category={post.category} publishedAt={post.publishedAt} viewCount={post.viewCount} />
                ))}
              </div>
              {pages > 1 && (
                <div className="blog-pagination">
                  {page > 1 && <Link href={`/blog?search=${search}&sort=${sort}&page=${page - 1}`} className="blog-page-btn">← Previous</Link>}
                  <span>Page {page} of {pages}</span>
                  {page < pages && <Link href={`/blog?search=${search}&sort=${sort}&page=${page + 1}`} className="blog-page-btn">Next →</Link>}
                </div>
              )}
            </>
          )}
        </section>
      </main>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
