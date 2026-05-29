import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import type { WhyCheckItem } from '@/types';

interface Props {
  label: string;
  title: ReactNode;
  imageUrl: string;
  imageAlt: string;
  items: WhyCheckItem[];
  bgStyle?: CSSProperties;
}

export default function WhySection({ label, title, imageUrl, imageAlt, items, bgStyle }: Props) {
  return (
    <section className="why-service-section" style={bgStyle}>
      <div className="why-service-inner">
        <div className="why-service-img">
          <Image src={imageUrl} alt={imageAlt} width={900} height={600} style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="why-service-content">
          <span className="section-label">{label}</span>
          <h2 className="section-title" style={{ marginTop: '8px' }}>{title}</h2>
          <div className="why-checklist">
            {items.map(({ title: t, description }) => (
              <div key={t} className="why-check-item">
                <div className="why-check-icon">✓</div>
                <div>
                  <div className="why-check-title">{t}</div>
                  <div className="why-check-desc">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
