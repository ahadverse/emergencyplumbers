import type { Metadata } from 'next';
import { PHONE_HREF } from '@/lib/constants';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import EmergencyBar from '@/components/layout/EmergencyBar';

export const metadata: Metadata = {
  title: 'Our Licensed Plumbers — Background-Checked & Insured',
  description: 'Every Emergency Plumbers plumber is state-licensed, carries $2M liability insurance, passes a criminal background check, and maintains a 4.9★ minimum rating. Learn how we vet our pros.',
  alternates: { canonical: '/our-plumbers' },
};

const VETTING = [
  { title: 'License & Certification Verification', description: 'Every applicant must provide a valid state plumbing license. We verify directly with the issuing state agency — no self-reporting accepted.' },
  { title: 'Insurance Confirmation', description: 'Plumbers must carry minimum $2M general liability. We request certificates of insurance directly from their carrier to prevent fraud.' },
  { title: 'Criminal Background Check', description: 'A comprehensive national criminal background check is run through a licensed third-party screening company. Any felony disqualifies permanently.' },
  { title: 'Technical Skills Assessment', description: 'Applicants complete a written technical test and a video interview with our quality team. We assess real plumbing knowledge, not just credentials.' },
  { title: 'Ongoing Rating Monitoring', description: 'Every job triggers a customer rating request. Plumbers who fall below 4.9★ enter a 30-day improvement period. Sustained poor ratings result in removal.' },
];

export default function OurPlumbersPage() {
  return (
    <>
      <EmergencyBar message="24/7 Emergency Plumbing — Same-Hour Response Guaranteed —" />
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Our Professionals</div>
        <h1>Less Than 1 in 5<br />Applicants Qualify.</h1>
        <p>Every Emergency Plumbers plumber is state-licensed, insured, background-checked, and held to a strict performance standard. You always know exactly who is coming to your home — and why they earned the right to be there.</p>
      </section>
      <div className="cpage-body">
        <div className="cpage-stat-strip">
          {[{ num: '2,100+', label: 'Active Plumbers' }, { num: '4.9★', label: 'Minimum Rating' }, { num: '<20%', label: 'Acceptance Rate' }, { num: '$2M', label: 'Liability Insurance' }].map(({ num, label }) => (
            <div className="cpage-stat" key={label}><span className="cpage-stat-num">{num}</span><span className="cpage-stat-label">{label}</span></div>
          ))}
        </div>
        <section className="cpage-section">
          <h2>Our 5-Step Vetting Process</h2>
          {VETTING.map((step, i) => (
            <div className="cpage-step" key={step.title}>
              <div className="cpage-step-num">{i + 1}</div>
              <div className="cpage-step-content"><h3>{step.title}</h3><p>{step.description}</p></div>
            </div>
          ))}
        </section>
        <section className="cpage-section">
          <h2>Requirements to Join Emergency Plumbers</h2>
          <ul>
            {['3+ years of verifiable field experience', 'Valid state plumbing license', '$2M minimum general liability insurance', 'Clean criminal background (no felonies)', 'Pass written technical assessment', 'Maintain 4.9★ average rating', 'Annual re-verification of credentials'].map(r => <li key={r}>{r}</li>)}
          </ul>
        </section>
        <div className="cpage-highlight"><p>Our plumbers are re-verified every 12 months. License renewals, insurance updates, and any new background information are reviewed before access is renewed.</p></div>
        <div style={{ textAlign: 'center' }}><a href={PHONE_HREF} className="btn-blue" style={{ display: 'inline-flex' }}>📞 Call to Book a Vetted Plumber</a></div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
