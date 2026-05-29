import { HOME_STEPS } from '@/lib/constants';

export default function HowItWorksSection() {
  return (
    <section className="how-section">
      <div className="how-section-inner">
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span className="section-label">Simple Process</span>
        </div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Booked, Fixed &amp; Guaranteed<br />in 4 Simple Steps.
        </h2>
        <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
          We built Emergency Plumbers around the homeowner experience — transparent, fast, and always on your side.
        </p>
        <div className="steps-grid">
          {HOME_STEPS.map((step, i) => (
            <div key={step.title} className="step-card">
              <div className="step-num">{i + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
