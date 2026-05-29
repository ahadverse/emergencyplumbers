import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE_HREF } from '@/lib/constants';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import EmergencyBar from '@/components/layout/EmergencyBar';
import { HOME_STEPS, HOME_WHY_FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How It Works — Book a Licensed Plumber in 60 Seconds',
  description: 'See how Emergency Plumbers makes plumbing simple. Four steps from booking to a guaranteed fix — upfront pricing, background-checked pros, 1-year workmanship guarantee.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksPage() {
  return (
    <>
      <EmergencyBar message="24/7 Emergency Plumbing — Same-Hour Response Guaranteed —" />
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Simple Process</div>
        <h1>Plumbing Fixed in<br />4 Simple Steps.</h1>
        <p>We designed Emergency Plumbers around the homeowner experience — fast, transparent, and always on your side. From the moment you call to the moment the job is guaranteed complete.</p>
      </section>
      <div className="cpage-body">
        <section className="cpage-section">
          <h2>The Process</h2>
          {HOME_STEPS.map(({ icon, title, description }, i) => (
            <div className="cpage-step" key={title}>
              <div className="cpage-step-num">{i + 1}</div>
              <div className="cpage-step-content"><h3>{icon} {title}</h3><p>{description}</p></div>
            </div>
          ))}
        </section>
        <div className="cpage-highlight"><p>Every Emergency Plumbers plumber arrives in a marked vehicle, uniformed and carrying their license and insurance documents. You can verify credentials before any work begins.</p></div>
        <section className="cpage-section">
          <h2>Our Guarantee</h2>
          <p>Every job is backed by our <strong>1-year workmanship guarantee</strong>. If the work fails within 12 months, we return at no cost and fix it. Still not right? Full refund — no questions asked.</p>
          <div style={{ marginTop: '24px' }}><Link href="/reviews" style={{ color: 'var(--sky)', fontWeight: 700 }}>Read what customers say →</Link></div>
        </section>
        <section className="cpage-section">
          <h2>Why Emergency Plumbers Is Different</h2>
          <div className="cpage-grid-2">
            {HOME_WHY_FEATURES.map(({ icon, title, description }) => (
              <div className="cpage-card" key={title}><div className="cpage-card-icon">{icon}</div><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
        </section>
        <div style={{ textAlign: 'center' }}><a href={PHONE_HREF} className="btn-blue" style={{ display: 'inline-flex' }}>📞 Call to Book a Plumber Now</a></div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
