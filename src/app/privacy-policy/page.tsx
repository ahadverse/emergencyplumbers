import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy — Emergency Plumbers',
  description: 'Emergency Plumbers\'s privacy policy explains how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Legal</div>
        <h1>Privacy Policy</h1>
        <p>How we collect, use, and protect your personal information.</p>
      </section>
      <div className="cpage-body">
        <div className="cpage-legal">
          <p className="cpage-legal-date">Last updated: January 1, 2025</p>
          <h2>1. Introduction</h2>
          <p>Emergency Plumbers Inc. (&ldquo;Emergency Plumbers,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.</p>
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Personal Data:</strong> Name, email, phone number, address when booking a service.</li>
            <li><strong>Service Data:</strong> Service type, location, scheduling details, and job notes.</li>
            <li><strong>Payment Data:</strong> Billing information processed through our payment processor. Full card numbers are never stored on our servers.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and timestamps collected automatically.</li>
          </ul>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Process and fulfill service bookings</li>
            <li>Communicate about appointments, confirmations, and reminders</li>
            <li>Connect you with licensed plumbers in your area</li>
            <li>Process payments and send invoices</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2>4. Sharing Your Information</h2>
          <p>We share your name, address, and service details with the Emergency Plumbers plumber assigned to your job. We share data with payment processors and analytics providers bound by data protection agreements. We do not sell your personal information.</p>
          <h2>5. Cookies</h2>
          <p>We use cookies for analytics and session management. You can disable cookies in your browser settings, though some features may not function properly.</p>
          <h2>6. Data Retention</h2>
          <p>We retain your personal information as long as needed to provide services, comply with legal obligations, and resolve disputes. Service records are typically retained for 7 years.</p>
          <h2>7. Your Rights</h2>
          <p>You may access, correct, or request deletion of your personal data by contacting privacy@emergencyplumbers.live. We process requests within 30 days.</p>
          <h2>8. Security</h2>
          <p>We implement administrative, technical, and physical security measures to protect your data. No internet transmission is 100% secure.</p>
          <h2>9. Children&apos;s Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect data from children.</p>
          <h2>10. Changes to This Policy</h2>
          <p>We may update this policy periodically. Continued use after changes constitutes acceptance.</p>
          <h2>11. Contact Us</h2>
          <ul>
            <li>Email: privacy@emergencyplumbers.live</li>
            <li>Phone: {PHONE}</li>
          </ul>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
