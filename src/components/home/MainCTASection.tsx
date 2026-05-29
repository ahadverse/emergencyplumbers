'use client';
import { PHONE, PHONE_HREF } from '@/lib/constants';
import { trackEvent } from '@/lib/trackEvent';

export default function MainCTASection() {
  return (
    <section className="main-cta-section">
      <div className="main-cta-inner">
        <h2 className="main-cta-title">
          Plumbing Problem?<br />
          Call the Pros. It&apos;s Free.
        </h2>
        <p className="main-cta-sub">
          Free estimates. Licensed plumbers available today. One call gets you an upfront
          price and a guaranteed fix — or your money back.
        </p>
        <div className="main-cta-actions">
          <a href={PHONE_HREF} className="btn-blue-lg">📞 Call {PHONE}</a>
          <a href={PHONE_HREF} className="btn-outline" onClick={() => trackEvent('call_click')}>📞 Get a Free Estimate</a>
        </div>
        <p className="main-cta-phone">Available 24/7 · No call fee · No obligation</p>
      </div>
    </section>
  );
}
