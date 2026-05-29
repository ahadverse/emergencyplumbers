import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Plumbing Financing — 0% APR for Qualified Customers',
  description: 'Emergency Plumbers offers 0% APR financing for plumbing jobs over $1,000. Instant decision, no hard credit pull. Get the repair done today and pay over time.',
  alternates: { canonical: '/financing' },
};

const OPTIONS = [
  { icon: '0️⃣', title: '0% APR Financing', description: 'For qualified customers on jobs over $1,000. No interest for 12 months when you pay on time.' },
  { icon: '⚡', title: 'Instant Decision', description: 'Apply at checkout for an instant credit decision — no hard pull, no waiting for approval.' },
  { icon: '💳', title: 'Flexible Terms', description: 'Choose from 6, 12, or 18-month repayment options depending on your job size and eligibility.' },
  { icon: '🛡️', title: 'No Pre-Payment Penalty', description: 'Pay off your balance early at any time with zero penalties. You stay in control.' },
];

export default function FinancingPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Flexible Payment</div>
        <h1>Don&apos;t Let Cost<br />Delay a Necessary Repair.</h1>
        <p>Emergency Plumbers partners with trusted lenders to offer 0% APR financing for qualified customers on plumbing jobs over $1,000. Get the repair done today and pay over time.</p>
      </section>
      <div className="cpage-body">
        <div className="cpage-grid-2">
          {OPTIONS.map(({ icon, title, description }) => (
            <div className="cpage-card" key={title}><div className="cpage-card-icon">{icon}</div><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
        <div className="cpage-section" style={{ marginTop: '48px' }}>
          <h2>How to Apply</h2>
          <div className="cpage-step">
            <div className="cpage-step-num">1</div>
            <div className="cpage-step-content"><h3>Book Your Service</h3><p>Call us or book online. Once you have an upfront quote for a job over $1,000, mention you&apos;d like to explore financing.</p></div>
          </div>
          <div className="cpage-step">
            <div className="cpage-step-num">2</div>
            <div className="cpage-step-content"><h3>Apply at Checkout</h3><p>Complete a short application at the time of booking. An instant decision is provided — no hard credit pull required.</p></div>
          </div>
          <div className="cpage-step">
            <div className="cpage-step-num">3</div>
            <div className="cpage-step-content"><h3>Get the Work Done</h3><p>Approved customers proceed immediately. The work is completed, guaranteed, and you pay on your flexible schedule.</p></div>
          </div>
        </div>
        <div className="cpage-highlight"><p>Financing is available through our lending partner. Subject to credit approval. Terms and APR may vary based on creditworthiness. 0% APR available for qualifying customers.</p></div>
        <div className="cpage-phone-hero">
          <h2>Questions About Financing?</h2>
          <p>Our team can walk you through options before your appointment. Call us free.</p>
          <a href={PHONE_HREF}>📞 Call {PHONE}</a>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
