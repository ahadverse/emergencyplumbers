import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { HOME_REVIEWS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Customer Reviews — 4.9★ Rated Plumbing Service',
  description: 'See what homeowners say about Emergency Plumbers. Thousands of 5-star reviews across drain cleaning, pipe repair, water heaters, and emergency plumbing.',
  alternates: { canonical: '/reviews' },
};

const MORE_REVIEWS = [
  { text: '"Third time using Emergency Plumbers. Every single time — on time, upfront price, clean work. This is my plumber for life."', author: 'Daniel R.', location: 'Seattle, WA', service: 'Pipe Repair' },
  { text: '"Slab leak under our foundation. Emergency Plumbers used acoustic detection, found it in 20 minutes, and repaired it with minimal concrete removal. Life savers."', author: 'Keiko M.', location: 'Phoenix, AZ', service: 'Leak Detection' },
  { text: '"Kitchen drain was so bad nothing would clear it. They hydro-jetted and now it flows faster than the day we moved in. Worth every penny."', author: 'Bob G.', location: 'Miami, FL', service: 'Drain Cleaning' },
  { text: '"My water heater failed the day before Thanksgiving. New tankless unit was installed by 1 PM. Dinner was saved. Genuinely incredible service."', author: 'Amy C.', location: 'Atlanta, GA', service: 'Water Heater' },
  { text: '"Gas line leak at 10 PM. They came in 40 minutes, found and sealed the leak, and made the house safe. Professional and calm under pressure."', author: 'Ed T.', location: 'Chicago, IL', service: 'Emergency Plumbing' },
  { text: '"Called 4 plumbers. Emergency Plumbers was the only one who gave me a firm price before starting. Turns out it mattered — others would have charged double."', author: 'Susan L.', location: 'Denver, CO', service: 'Drain Cleaning' },
];

export default function ReviewsPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Customer Reviews</div>
        <h1>4.9★ Average.<br />30,000+ Jobs.</h1>
        <p>Every Emergency Plumbers plumber is rated after every job. Our 4.9-star average isn&apos;t curated — it&apos;s earned.</p>
      </section>
      <div className="cpage-body-wide" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="cpage-stat-strip" style={{ marginBottom: '48px' }}>
          {[{ num: '4.9★', label: 'Average Rating' }, { num: '30K+', label: 'Reviews' }, { num: '98%', label: 'Satisfaction Rate' }, { num: '1yr', label: 'Guarantee' }].map(({ num, label }) => (
            <div className="cpage-stat" key={label}><span className="cpage-stat-num">{num}</span><span className="cpage-stat-label">{label}</span></div>
          ))}
        </div>
        <div className="testimonials-grid">
          {[...HOME_REVIEWS, ...MORE_REVIEWS].map(({ text, author, location }) => (
            <div key={author} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">{text}</p>
              <div className="testimonial-author">
                <div><div className="testimonial-name">{author}</div><div className="testimonial-location">{location}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
