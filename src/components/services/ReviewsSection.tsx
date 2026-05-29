import type { CSSProperties } from 'react';
import type { ReviewItem } from '@/types';

interface Props {
  label?: string;
  title?: string;
  reviews: ReviewItem[];
  bgStyle?: CSSProperties;
}

export default function ReviewsSection({ label, title, reviews, bgStyle }: Props) {
  return (
    <section className="reviews-section" style={bgStyle}>
      <div className="reviews-inner">
        {(label || title) && (
          <div style={{ marginBottom: '0' }}>
            {label && <span className="section-label">{label}</span>}
            {title && <h2 className="section-title" style={{ marginTop: '8px' }}>{title}</h2>}
          </div>
        )}
        <div className="reviews-grid">
          {reviews.map(({ text, author, location }) => (
            <div key={author} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{text}</p>
              <div className="review-author">{author}</div>
              <div className="review-location">{location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
