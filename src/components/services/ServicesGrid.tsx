import type { CSSProperties, ReactNode } from 'react';
import type { ServiceItem } from '@/types';

interface Props {
  label: string;
  title: ReactNode;
  sub?: string;
  items: ServiceItem[];
  bgStyle?: CSSProperties;
}

export default function ServicesGrid({ label, title, sub, items, bgStyle }: Props) {
  return (
    <section className="svc-grid-section" style={bgStyle}>
      <div className="svc-grid-inner">
        <div className="svc-grid-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title" style={{ marginTop: '8px' }}>{title}</h2>
          {sub && <p className="section-sub">{sub}</p>}
        </div>
        <div className="services-list-grid">
          {items.map(({ icon, title: t, description, ctaText, ctaHref }) => (
            <div key={t} className="svc-list-card">
              <div className="svc-icon">{icon}</div>
              <div className="svc-list-title">{t}</div>
              <div className="svc-list-desc">{description}</div>
              {ctaText && ctaHref && (
                <a href={ctaHref} className="svc-list-cta">{ctaText}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
