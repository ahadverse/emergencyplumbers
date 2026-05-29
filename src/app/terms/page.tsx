import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service — Emergency Plumbers',
  description: 'Emergency Plumbers\'s terms of service govern the use of our platform and services. Please read before booking.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Legal</div>
        <h1>Terms of Service</h1>
        <p>The terms that govern your use of Emergency Plumbers&apos;s platform and services.</p>
      </section>
      <div className="cpage-body">
        <div className="cpage-legal">
          <p className="cpage-legal-date">Last updated: January 1, 2025</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By using Emergency Plumbers&apos;s platform (&ldquo;Service&rdquo;), you agree to these Terms of Service. If you disagree, do not use the Service.</p>
          <h2>2. Description of Service</h2>
          <p>Emergency Plumbers is a marketplace that connects homeowners (&ldquo;Customers&rdquo;) with independent, licensed plumbing professionals (&ldquo;Plumbers&rdquo;). Plumbers are independent contractors, not Emergency Plumbers employees. Emergency Plumbers facilitates bookings and stands behind all work with our satisfaction guarantee.</p>
          <h2>3. Booking & Service Agreement</h2>
          <ul>
            <li>Bookings are subject to plumber availability in your area.</li>
            <li>Quoted prices are firm and will not change without your approval.</li>
            <li>Emergency calls are dispatched on a best-effort basis, targeting 60-minute response.</li>
            <li>Cancellations made less than 2 hours before scheduled appointment may incur a $25 fee.</li>
          </ul>
          <h2>4. Payment Terms</h2>
          <p>Payment is due upon job completion. Emergency Plumbers collects payment on behalf of the Plumber. By providing payment information, you authorize Emergency Plumbers to charge the full service amount upon completion. Financing is subject to separate lender terms.</p>
          <h2>5. Satisfaction Guarantee</h2>
          <p>Emergency Plumbers provides a 1-year workmanship guarantee on all labor. If the work fails within 12 months, we return at no cost to fix it. If still unresolved, a full refund of labor charges is issued. Details at emergencyplumbers.live/how-it-works.</p>
          <h2>6. Plumber Independence</h2>
          <p>Plumbers set their own schedules and use their own equipment. Emergency Plumbers requires all Plumbers to maintain valid licenses, insurance, and comply with our quality standards.</p>
          <h2>7. Prohibited Uses</h2>
          <ul>
            <li>Booking services for fraudulent or illegal purposes</li>
            <li>Circumventing the platform to hire Plumbers directly</li>
            <li>Submitting false or abusive reviews</li>
            <li>Harassing Plumbers or Emergency Plumbers staff</li>
          </ul>
          <h2>8. Limitation of Liability</h2>
          <p>Emergency Plumbers&apos;s liability for any claim shall not exceed the total amount paid for the specific service giving rise to the claim in the prior 12 months.</p>
          <h2>9. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict of law provisions.</p>
          <h2>10. Changes to Terms</h2>
          <p>Emergency Plumbers may modify these Terms at any time. Continued use constitutes acceptance of the revised Terms.</p>
          <h2>11. Contact</h2>
          <p>Questions: legal@emergencyplumbers.live or {PHONE}.</p>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
