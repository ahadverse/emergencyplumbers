import type { ProcessStep } from '@/types';

export default function ProcessStrip({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="process-strip">
      <div className="process-strip-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.12)' }}>
            Our Process
          </span>
          <h2 className="section-title" style={{ color: 'white', marginTop: '8px' }}>
            How We Work
          </h2>
        </div>
        <div className="process-steps">
          {steps.map(({ num, title, description }) => (
            <div key={num} className="p-step">
              <div className="p-step-num">{num}</div>
              <div className="p-step-title">{title}</div>
              <div className="p-step-desc">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
