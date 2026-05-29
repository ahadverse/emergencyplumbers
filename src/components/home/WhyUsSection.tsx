import { HOME_WHY_FEATURES } from '@/lib/constants';

export default function WhyUsSection() {
  return (
    <section className="why-section">
      <div className="why-section-inner">
        <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
          Why Emergency Plumbers
        </span>
        <h2 className="section-title" style={{ color: 'white', marginTop: '8px' }}>
          The Standard Every<br />Plumber Should Meet.
        </h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
          We built our vetting process around what homeowners actually need — not just a warm body with a wrench.
        </p>
        <div className="why-grid">
          {HOME_WHY_FEATURES.map(({ icon, title, description }) => (
            <div key={title} className="why-card">
              <div className="why-icon">{icon}</div>
              <div className="why-title">{title}</div>
              <div className="why-desc">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
