'use client';
import type { ReactNode } from 'react';
import { PHONE_HREF } from '@/lib/constants';
import { trackEvent } from '@/lib/trackEvent';

interface Props {
  heading: ReactNode;
  subtext: string;
  ctaLabel: string;
  subLabel: string;
}

export default function ServiceCTA({ heading, subtext, ctaLabel, subLabel }: Props) {
  return (
    <section className="service-cta">
      <div className="service-cta-inner">
        <div>
          <h2 className="service-cta-title">{heading}</h2>
          <p className="service-cta-sub">{subtext}</p>
        </div>
        <div className="service-cta-actions">
          <a href={PHONE_HREF} className="service-cta-btn" onClick={() => trackEvent('call_click')}>
            {ctaLabel}
          </a>
          <span className="service-cta-label">{subLabel}</span>
        </div>
      </div>
    </section>
  );
}
