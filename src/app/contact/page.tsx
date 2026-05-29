import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import EmergencyBar from '@/components/layout/EmergencyBar';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Emergency Plumbers — Get a Free Quote',
  description: 'Contact Emergency Plumbers for a free plumbing estimate. Call 24/7 for emergencies or submit a request for standard service. Licensed plumbers in your area.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <EmergencyBar message="24/7 Emergency Plumbing — Call Now for Immediate Dispatch —" />
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Get in Touch</div>
        <h1>Get a Free Quote.<br />No Obligation.</h1>
        <p>Call us for the fastest response — our team answers 24/7. For standard service requests, choose your preferred contact method below.</p>
      </section>
      <div className="cpage-body">
        <div className="cpage-phone-hero">
          <h2>Fastest Way to Reach Us</h2>
          <p>Call <strong>{PHONE}</strong> — our dispatch team answers 24/7, including holidays and overnight for emergencies.</p>
          <a href={PHONE_HREF}>📞 Call {PHONE}</a>
        </div>
        <section className="cpage-section">
          <h2>Other Contact Options</h2>
          <div className="cpage-grid-3">
            {[
              { icon: '📞', title: '24/7 Phone', desc: 'Call for the fastest response. Emergency line answers in under 2 minutes.', link: PHONE_HREF, linkText: PHONE },
              { icon: '✉️', title: 'Email Support', desc: 'For billing questions and non-urgent inquiries. We respond within 4 business hours.', link: 'mailto:support@emergencyplumbers.live', linkText: 'support@emergencyplumbers.live' },
              { icon: '🕐', title: 'Emergency Line', desc: 'Burst pipe, sewage backup, flooding — 24/7/365 emergency dispatch. No wait menus.', link: PHONE_HREF, linkText: 'Call Emergency Line' },
            ].map(({ icon, title, desc, link, linkText }) => (
              <div className="cpage-contact-card" key={title}>
                <div className="cpage-contact-icon">{icon}</div>
                <div><h3>{title}</h3><p>{desc}<br /><a href={link}>{linkText}</a></p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="cpage-section">
          <h2>What to Have Ready</h2>
          <p>To get a fast quote over the phone, it helps to have:</p>
          <ul>
            <li>Your zip code and address</li>
            <li>A brief description of the issue (drain slow, pipe leaking, no hot water, etc.)</li>
            <li>How long the problem has been occurring</li>
            <li>Whether it&apos;s an emergency or a scheduled service</li>
          </ul>
          <p>That&apos;s it — our team handles the rest.</p>
        </section>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
