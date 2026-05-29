'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PHONE_HREF } from '@/lib/constants';
import { trackEvent } from '@/lib/trackEvent';

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!mounted || !visible) return null;

  return createPortal(
    <>
      <div className="float-call-label" style={{ zIndex: 9999 }}>Call Us Free</div>
      <a href={PHONE_HREF} className="float-call" style={{ zIndex: 9999 }} onClick={() => trackEvent('call_click')}>📞</a>
    </>,
    document.body
  );
}
