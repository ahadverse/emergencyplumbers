import type { Metadata } from 'next';
import { API_BASE } from '@/lib/apiUrl';

export const revalidate = 3600; // 1 hour
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import BlogViewTracker from '@/components/blog/BlogViewTracker';
import { PHONE, PHONE_HREF } from '@/lib/constants';

interface Post {
  _id: string; title: string; slug: string; excerpt: string; content: string;
  coverImage?: string; category: string; tags: string[]; publishedAt?: string; viewCount: number;
  metaTitle?: string; metaKeywords?: string; metaDescription?: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `${API_BASE}/api/blogs/${slug}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Not Found' };
  const seoTitle = post.metaTitle || post.title;
  const seoDescription = post.metaDescription || post.excerpt;
  const seoKeywords = post.metaKeywords
    ? post.metaKeywords.split(',').map(k => k.trim()).filter(Boolean)
    : post.tags;
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle, description: seoDescription, type: 'article',
      publishedTime: post.publishedAt,
      images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630, alt: seoTitle }] : [],
    },
    twitter: {
      card: 'summary_large_image', title: seoTitle, description: seoDescription,
      images: post.coverImage ? [post.coverImage] : [],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || (post as unknown as { status?: string }).status === 'draft') notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: post.title, description: post.excerpt, image: post.coverImage ?? '',
    datePublished: post.publishedAt ?? '',
    author: { '@type': 'Organization', name: 'Emergency Plumbers' },
    publisher: { '@type': 'Organization', name: 'Emergency Plumbers' },
  };

  return (
    <>
      <Navigation variant="service" />
      <BlogViewTracker slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="blog-detail-page">
        <article className="blog-article">
          <header className="blog-article-header">
            <span className="blog-article-cat">{post.category}</span>
            <h1 className="blog-article-title">{post.title}</h1>
            <div className="blog-article-meta">
              {date && <span>{date}</span>}
              <span>👁 {post.viewCount} views</span>
            </div>
            {post.tags.length > 0 && (
              <div className="blog-article-tags">
                {post.tags.map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
              </div>
            )}
          </header>
          {post.coverImage && (
            <div className="blog-article-cover">
              <Image src={post.coverImage} alt={post.title} width={1200} height={630} style={{ width: '100%', height: 'auto' }} priority />
            </div>
          )}
          <div className="blog-article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="blog-article-cta">
            <h2>Need a licensed plumber?</h2>
            <p>Our certified plumbers are available 24/7 for same-day service across all 50 states.</p>
            <a href={PHONE_HREF} className="btn-blue">📞 Call {PHONE} — It&apos;s Free</a>
          </div>
        </article>
      </main>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
