import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  category: string;
  publishedAt?: string;
  viewCount: number;
}

export default function BlogCard({ title, slug, excerpt, coverImage, category, publishedAt, viewCount }: Props) {
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '';

  return (
    <Link href={`/blog/${slug}`} className="blog-card">
      <div className="blog-card-img">
        {coverImage ? (
          <Image src={coverImage} alt={title} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div className="blog-card-placeholder"><span>FP</span></div>
        )}
        <span className="blog-card-cat">{category}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-title">{title}</div>
        <div className="blog-card-excerpt">{excerpt}</div>
        <div className="blog-card-meta">
          {date && <span>{date}</span>}
          <span>👁 {viewCount}</span>
        </div>
      </div>
    </Link>
  );
}
