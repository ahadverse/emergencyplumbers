import Link from 'next/link';
import { PHONE_HREF, PHONE } from '@/lib/constants';
import { SERVICE_AREAS_TN } from '@/lib/constants';

const REGIONS = [
  { label: 'Middle Tennessee', cities: SERVICE_AREAS_TN.middle },
  { label: 'West Tennessee', cities: SERVICE_AREAS_TN.west },
  { label: 'East Tennessee', cities: SERVICE_AREAS_TN.east },
];

export default function ServiceAreasSection() {
  return (
    <section className="areas-section">
      <div className="areas-inner">
        <span className="section-label">Service Coverage</span>
        <h2 className="section-title" style={{ marginTop: '8px' }}>
          We Serve All of Tennessee
        </h2>
        <p className="section-sub">
          Emergency Plumbers licensed plumbers cover 32+ cities across Middle, West, and East Tennessee.
          Same-day availability in most areas.
        </p>

        <div className="tn-areas-grid">
          {REGIONS.map(({ label, cities }) => (
            <div key={label} className="tn-region">
              <h3 className="tn-region-title">{label}</h3>
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

        <div className="tn-areas-cta">
          <p>Don&apos;t see your city? We likely still serve you.</p>
          <a href={PHONE_HREF} className="btn-cta-call" style={{ fontSize: '15px', padding: '13px 28px' }}>
            📞 Call {PHONE} — Check Your Area
          </a>
        </div>
      </div>
    </section>
  );
}
