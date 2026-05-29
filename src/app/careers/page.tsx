import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Plumbing Careers — Join Emergency Plumbers',
  description: 'Join Emergency Plumbers\'s network of licensed plumbers or our operations team. Flexible scheduling, competitive pay, and steady work across all 50 states.',
  alternates: { canonical: '/careers' },
};

const JOBS = [
  { title: 'Licensed Plumber', location: 'Nationwide', type: 'Independent Contractor', description: 'State-licensed plumbers for residential and light commercial work.' },
  { title: 'Master Plumber', location: 'Nationwide', type: 'Independent Contractor', description: 'Senior plumbers for complex leak detection, repipe, and gas line work.' },
  { title: 'Customer Experience Specialist', location: 'Remote', type: 'Full-Time', description: 'Support homeowners and plumbers via phone and chat. Empathy-first.' },
  { title: 'Dispatch Coordinator', location: 'Remote / Hybrid', type: 'Full-Time', description: 'Match homeowners with available plumbers in real time.' },
];

const BENEFITS = [
  { icon: '📅', title: 'Flexible Scheduling', description: 'Set your own hours and service radius. No minimums, no penalties.' },
  { icon: '💰', title: 'Competitive Pay', description: 'Earn $65–$130/hr depending on trade and location. Direct deposit in 2 business days.' },
  { icon: '🔧', title: 'Steady Work', description: 'Our dispatch keeps calendars full. New plumbers average 18+ jobs in their first 30 days.' },
  { icon: '📱', title: 'Simple App', description: 'Accept jobs, update status, collect payment, and read reviews — all from one mobile app.' },
];

export default function CareersPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Join Emergency Plumbers</div>
        <h1>Do Great Plumbing Work.<br />Get Paid Well.</h1>
        <p>Whether you&apos;re a licensed plumber looking for steady quality jobs, or someone who wants to support homeowners behind the scenes — there&apos;s a place for you at Emergency Plumbers.</p>
      </section>
      <div className="cpage-body">
        <div className="cpage-stat-strip" style={{ marginBottom: '48px' }}>
          {[{ num: '2,100+', label: 'Active Plumbers' }, { num: '50K+', label: 'Jobs Per Year' }, { num: '50', label: 'States' }, { num: '4.9★', label: 'Avg Rating' }].map(({ num, label }) => (
            <div className="cpage-stat" key={label}><span className="cpage-stat-num">{num}</span><span className="cpage-stat-label">{label}</span></div>
          ))}
        </div>
        <section className="cpage-section">
          <h2>Why Work with Emergency Plumbers</h2>
          <div className="cpage-grid-2">
            {BENEFITS.map(({ icon, title, description }) => (
              <div className="cpage-card" key={title}><div className="cpage-card-icon">{icon}</div><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
        </section>
        <section className="cpage-section">
          <h2>Open Positions</h2>
          {JOBS.map(({ title, location, type, description }) => (
            <div className="cpage-job-card" key={title}>
              <div><h3>{title}</h3><p>{location} · {description}</p></div>
              <span className="cpage-job-tag">{type}</span>
            </div>
          ))}
        </section>
        <div className="cpage-phone-hero">
          <h2>Ready to Join?</h2>
          <p>Call us to discuss open positions or get started today.</p>
          <a href={PHONE_HREF}>📞 Call {PHONE}</a>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
