import Image from 'next/image';
import { HOME_REVIEWS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title" style={{ marginTop: '8px' }}>What Homeowners Say</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Over 30,000 completed jobs — here&apos;s what real customers experienced.
          </p>
        </div>
        <div className="testimonials-grid">
          {HOME_REVIEWS.map(({ text, author, location, avatarUrl }) => (
            <div key={author} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{text}</p>
              <div className="testimonial-author">
                {avatarUrl && (
                  <Image src={avatarUrl} alt={author} width={42} height={42} className="testimonial-avatar" />
                )}
                <div>
                  <div className="testimonial-name">{author}</div>
                  <div className="testimonial-location">{location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
