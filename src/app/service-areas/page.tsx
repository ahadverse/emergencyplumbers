import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { SERVICE_AREAS_TN, PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Plumbing Service Areas — All of Tennessee',
  description: 'Emergency Plumbers licensed plumbers serve 32+ cities across Tennessee — Nashville, Brentwood, Franklin, Murfreesboro, Knoxville, Chattanooga, Memphis suburbs and more.',
  alternates: { canonical: '/service-areas' },
};

const ALL_CITIES = [
  ...SERVICE_AREAS_TN.middle,
  ...SERVICE_AREAS_TN.west,
  ...SERVICE_AREAS_TN.east,
];

const REGIONS = [
  { label: 'Middle Tennessee', cities: SERVICE_AREAS_TN.middle },
  { label: 'West Tennessee', cities: SERVICE_AREAS_TN.west },
  { label: 'East Tennessee', cities: SERVICE_AREAS_TN.east },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Service Coverage</div>
        <h1>We Serve<br />All of Tennessee</h1>
        <p>Emergency Plumbers licensed plumbers cover 32+ cities across Middle, West, and East Tennessee. Same-day availability in most areas.</p>
      </section>
      <div className="cpage-body-wide" style={{ paddingTop: '56px', paddingBottom: '80px' }}>

        <div className="tn-areas-grid" style={{ marginBottom: '48px' }}>
          {REGIONS.map(({ label, cities }) => (
            <div key={label} className="tn-region">
              <div className="tn-region-title">{label}</div>
              <ul className="tn-city-list">
                {cities.map(({ name, slug }) => (
                  <li key={name}>
                    {slug ? (
                      <Link href={`/${slug}`} className="tn-city-link tn-city-active">
                        <span className="area-dot" style={{ background: 'var(--sky)' }} />
                        {name}
                        <span className="tn-city-badge">Page Live</span>
                      </Link>
                    ) : (
                      <span className="tn-city-link">
                        <span className="area-dot" />
                        {name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cpage-phone-hero">
          <h2>Don&apos;t See Your City?</h2>
          <p>Call us — we likely still serve your area. Our dispatch team confirms coverage in under 60 seconds.</p>
          <a href={PHONE_HREF}>📞 Call {PHONE}</a>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
