'use client';
import React from 'react';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/constants';
import { trackEvent } from '@/lib/trackEvent';

const TRUST = [
  { icon: '⭐', text: '4.9/5 Google · 1,200+ Reviews' },
  { icon: '🏅', text: 'Licensed & Insured' },
  { icon: '✅', text: 'BBB Accredited' },
];

const HERO_IMG = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=75&fm=webp';

export default function HeroSection() {
  return (
    <section id="hero">
      {/* Preload LCP image */}
      <link rel="preload" as="image" href={HERO_IMG} fetchPriority="high" />
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        role="img"
        aria-label="Licensed plumber working on pipes"
      />
      <div className="hero-content">

        {/* Live alert tag */}
        <div className="hero-live-tag">
          <span className="pulse" />
          Available Now — Emergency Dispatch Active
        </div>

        {/* Main headline */}
        <h1 className="hero-title">
          24/7 Emergency Plumbers<br />
          <span>Across Tennessee</span>
        </h1>

        {/* Punchy tagline — no paragraph */}
        <p className="hero-tagline">
          Licensed. Insured. Same-Hour Response. No Call Fee.
        </p>

        {/* Trust badges row */}
        <div className="hero-trust-row">
          {TRUST.map(({ icon, text }, i) => (
            <React.Fragment key={text}>
              <div className="hero-trust-item">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
              {i < TRUST.length - 1 && <span className="hero-trust-sep">|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* CTA group */}
        <div className="hero-cta-group">
          <a
            href={PHONE_HREF}
            className="btn-cta-call"
            onClick={() => trackEvent('call_click')}
          >
            📞 CALL NOW — {PHONE}
          </a>
          <p className="hero-cta-note" style={{ marginTop: '14px' }}>
            ✓ Free estimate &nbsp;·&nbsp; ✓ No call fee &nbsp;·&nbsp; ✓ Available 24/7
          </p>
          <a href={PHONE_HREF} className="btn-ghost-link" onClick={() => trackEvent('call_click')}>
            📞 Get a Free Estimate — Call Now →
          </a>
        </div>

        {/* Trust pills */}
        <div className="hero-pills">
          {['Licensed & Insured', 'Background-Checked', 'Same-Day Service', '1-Year Guarantee'].map(p => (
            <span key={p} className="hero-pill">✓ {p}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
