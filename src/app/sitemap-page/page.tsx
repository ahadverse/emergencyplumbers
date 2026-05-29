import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { PHONE, PHONE_HREF } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sitemap — Emergency Plumbers',
  description: 'A complete directory of all pages on emergencyplumbers.live.',
  alternates: { canonical: '/sitemap-page' },
};

export default function SitemapPage() {
  return (
    <>
      <Navigation variant="service" />
      <section className="cpage-hero">
        <div className="cpage-hero-tag">Navigation</div>
        <h1>Sitemap</h1>
        <p>A complete directory of all pages on emergencyplumbers.live.</p>
      </section>
      <div className="cpage-body-wide" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="cpage-sitemap-cols">
          <div className="cpage-sitemap-col">
            <h2>Services</h2>
            <Link href="/drain-cleaning">Drain Cleaning</Link>
            <Link href="/pipe-repair">Pipe Repair</Link>
            <Link href="/water-heater">Water Heater</Link>
            <Link href="/emergency-plumbing">Emergency Plumbing</Link>
            <a href={PHONE_HREF}>📞 Call to Book</a>
          </div>
          <div className="cpage-sitemap-col">
            <h2>Company</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About Emergency Plumbers</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/our-plumbers">Our Plumbers</Link>
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/reviews">Customer Reviews</Link>
            <Link href="/financing">Financing</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="cpage-sitemap-col">
            <h2>Legal</h2>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap.xml">XML Sitemap</Link>
            <h2 style={{ marginTop: '32px' }}>Emergency</h2>
            <a href={PHONE_HREF}>Call {PHONE}</a>
            <Link href="/drain-cleaning">Drain Emergency</Link>
            <Link href="/pipe-repair">Burst Pipe</Link>
            <Link href="/emergency-plumbing">24/7 Dispatch</Link>
          </div>
        </div>
      </div>
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
