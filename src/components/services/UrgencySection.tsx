import type { ReactNode } from 'react';
import type { UrgencyItem } from '@/types';

interface Props {
  label: string;
  title: ReactNode;
  items: UrgencyItem[];
}

export default function UrgencySection({ label, title, items }: Props) {
  return (
    <section className="urgency-section">
      <div className="urgency-inner">
        <span className="section-label" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.12)' }}>
          {label}
        </span>
        <h2 className="section-title" style={{ color: 'white', marginTop: '8px' }}>{title}</h2>
        <div className="urgency-grid">
          {items.map(({ icon, title: t, description }) => (
            <div key={t} className="urgency-card">
              <div className="urgency-icon">{icon}</div>
              <div className="urgency-title">{t}</div>
              <div className="urgency-desc">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
