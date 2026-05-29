import Link from 'next/link';
import { HOME_SERVICE_CARDS } from '@/lib/constants';

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-section-inner">
        <span className="section-label">Our Services</span>
        <h2 className="section-title">
          Every Plumbing Problem.<br />
          One Trusted Team.
        </h2>
        <p className="section-sub">
          From a clogged drain to a burst pipe emergency — Emergency Plumbers licensed plumbers handle every job
          with precision, transparency, and a guarantee.
        </p>
        <div className="services-grid">
          {HOME_SERVICE_CARDS.map(card => (
            <Link key={card.href} href={card.href} className="svc-card">
              <div className="svc-card-bg" style={{ backgroundImage: `url(${card.imageUrl})` }} />
              <div className="svc-card-body">
                <span className="svc-card-tag">{card.tag}</span>
                <div className="svc-card-title">{card.title}</div>
                <div className="svc-card-desc">{card.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
