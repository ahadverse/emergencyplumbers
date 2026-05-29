import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { API_BASE } from '@/lib/apiUrl';

interface Post {
  _id: string; title: string; slug: string; excerpt: string;
  coverImage?: string; category: string; publishedAt?: string; viewCount: number;
}

async function getLatestPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `${API_BASE}/api/blogs?limit=3&sort=newest`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const { posts } = await res.json();
    return posts ?? [];
  } catch {
    return [];
  }
}

export default async function BlogSection() {
  const posts = await getLatestPosts();
  if (posts.length === 0) return null;

  return (
    <section className="blog-home-section">
      <div className="blog-home-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-label">From the Blog</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>Plumbing Tips &amp; Guides</h2>
          </div>
          <Link href="/blog" style={{ color: 'var(--sky)', fontWeight: 700, fontSize: '14px' }}>
            View All Articles →
          </Link>
        </div>
        <div className="blog-home-grid">
          {posts.map(post => (
            <BlogCard
              key={post._id}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              category={post.category}
              publishedAt={post.publishedAt}
              viewCount={post.viewCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
