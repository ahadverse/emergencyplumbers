import type { Metadata } from 'next';
import { PHONE_HREF } from '@/lib/constants';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import EmergencyBar from '@/components/layout/EmergencyBar';
import { HOME_STATS, HOME_WHY_FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Emergency Plumbers — Licensed Plumbers Since 2003',
  description: 'Emergency Plumbers has connected homeowners with licensed, background-checked master plumbers for over 20 years. Learn about our mission, standards, and guarantee.',
  openGraph: { title: 'About Emergency Plumbers', description: '20+ years connecting homeowners with licensed plumbers across all 50 states.', type: 'website' },
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <EmergencyBar message="24/7 Emergency Plumbing — Same-Hour Response Guaranteed —" />
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Our Story</div>
        <h1>Built on Trust.<br />Fixed by Experts.</h1>
        <p>For over 20 years, Emergency Plumbers has been the homeowner&apos;s most trusted partner for plumbing — licensed professionals, upfront pricing, and a satisfaction guarantee on every job.</p>
      </section>
      <div className="cpage-body">
        <section className="cpage-section">
          <h2>Our Mission</h2>
          <p>Homeownership is one of the biggest investments of your life. When your plumbing fails, finding a trustworthy professional shouldn&apos;t be a gamble. Our mission: make plumbing repair easy, transparent, and guaranteed — so you can focus on your home, not stress about who&apos;s in it.</p>
          <p>Every Emergency Plumbers plumber is state-licensed, carries $2M liability insurance, has passed a criminal background check, and maintains a minimum 4.9-star rating. We re-verify annually.</p>
        </section>
        <div className="cpage-stat-strip">
          {HOME_STATS.map(({ num, label }) => (
            <div className="cpage-stat" key={label}><span className="cpage-stat-num">{num}</span><span className="cpage-stat-label">{label}</span></div>
          ))}
        </div>
        <section className="cpage-section">
          <h2>Our Story</h2>
          <p>Emergency Plumbers was founded in 2003 by a family frustrated with unreliable plumbers — missed appointments, surprise bills, and poor workmanship with no recourse. We started by carefully vetting local plumbers and building a simple guarantee: if the work isn&apos;t right, we make it right.</p>
          <p>That model grew city by city. Today Emergency Plumbers operates across all 50 states with over 2,100 vetted plumbers and 30,000+ completed jobs.</p>
          <div className="cpage-highlight"><p>&ldquo;We built Emergency Plumbers because homeowners deserve licensed pros, honest prices, and a real guarantee — not a prayer and a crossed finger.&rdquo;</p></div>
        </section>
        <section className="cpage-section">
          <h2>Why Homeowners Choose Us</h2>
          <div className="cpage-grid-2">
            {HOME_WHY_FEATURES.map(({ icon, title, description }) => (
              <div className="cpage-card" key={title}><div className="cpage-card-icon">{icon}</div><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
        </section>
        <div style={{ textAlign: 'center' }}>
          <a href={PHONE_HREF} className="btn-blue" style={{ display: 'inline-flex' }}>📞 Call to Book a Plumber</a>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
