'use client';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';
// Link kept for breadcrumb navigation
import { trackEvent } from '@/lib/trackEvent';
import type { ReactNode } from 'react';

interface Props {
  heroImageUrl: string;
  heroImageAlt: string;
  breadcrumbLabel: string;
  tag: string;
  title: ReactNode;
  sub: string;
  primaryCta: string;
  secondaryCta: string;
  trustPills: string[];
}

const TRUST_BADGES = [
  { icon: '⭐', text: '4.9/5 Google' },
  { icon: '🏅', text: 'Licensed & Insured' },
  { icon: '✅', text: 'BBB Accredited' },
  { icon: '🔒', text: 'Background-Checked' },
];

export default function ServiceHero({ heroImageUrl, heroImageAlt, breadcrumbLabel, tag, title, sub, primaryCta, secondaryCta, trustPills }: Props) {
  return (
    <section className="service-hero">
      <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
      <div className="service-hero-bg" style={{ backgroundImage: `url(${heroImageUrl})` }} role="img" aria-label={heroImageAlt} />
      <div className="service-hero-content">

        <div className="service-breadcrumb">
          <Link href="/">Home</Link> <span>›</span> <span>{breadcrumbLabel}</span>
        </div>

        <div className="service-hero-tag">{tag}</div>
        <h1 className="service-hero-title">{title}</h1>

        {/* Short punchy tagline instead of paragraph */}
        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: '20px', letterSpacing: '0.3px' }}>
          {sub}
        </p>

        {/* Trust badges */}
        <div className="service-trust-row">
          {TRUST_BADGES.map(({ icon, text }) => (
            <div key={text} className="service-trust-item">
              <span className="service-trust-icon">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="service-hero-actions">
          <a href={PHONE_HREF} className="btn-cta-call" style={{ fontSize: '16px', padding: '15px 28px' }} onClick={() => trackEvent('call_click')}>
            📞 {PHONE}
          </a>
          <a href={PHONE_HREF} className="btn-outline" onClick={() => trackEvent('call_click')}>{secondaryCta}</a>
        </div>

        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
          ✓ Free estimate &nbsp;·&nbsp; ✓ No call fee &nbsp;·&nbsp; ✓ Available 24/7
        </p>

        {/* Trust pills */}
        <div className="service-hero-pills">
          {trustPills.map(p => <span key={p} className="service-hero-pill">✓ {p}</span>)}
        </div>

      </div>
    </section>
  );
}
