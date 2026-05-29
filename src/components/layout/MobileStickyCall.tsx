'use client';
import { PHONE, PHONE_HREF } from '@/lib/constants';
import { trackEvent } from '@/lib/trackEvent';

export default function MobileStickyCall() {
  return (
    <div className="mobile-sticky-cta">
      <div className="mobile-sticky-inner">
        <div className="mobile-sticky-text">
          <span className="mobile-sticky-avail">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
            Available Now — 24/7 Emergency
          </span>
          <span className="mobile-sticky-name">Emergency Plumbers</span>
        </div>
        <a
          href={PHONE_HREF}
          className="mobile-sticky-btn"
          onClick={() => trackEvent('call_click')}
        >
          📞 Call Free
        </a>
      </div>
    </div>
  );
}
