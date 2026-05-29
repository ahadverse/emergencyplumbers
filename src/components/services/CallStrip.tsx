'use client';
import { PHONE_HREF } from '@/lib/constants';
import { trackEvent } from '@/lib/trackEvent';

interface Props {
  heading: string;
  subtext: string;
  ctaLabel: string;
}

export default function CallStrip({ heading, subtext, ctaLabel }: Props) {
  return (
    <div className="call-strip">
      <div className="call-strip-text">
        <h3>{heading}</h3>
        <p>{subtext}</p>
      </div>
      <a href={PHONE_HREF} className="call-strip-btn" onClick={() => trackEvent('call_click')}>
        {ctaLabel}
      </a>
    </div>
  );
}
