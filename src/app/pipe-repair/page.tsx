import type { Metadata } from 'next';
import EmergencyBar from '@/components/layout/EmergencyBar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceQuickStats from '@/components/services/ServiceQuickStats';
import ServicesGrid from '@/components/services/ServicesGrid';
import CallStrip from '@/components/services/CallStrip';
import WhySection from '@/components/services/WhySection';
import ProcessStrip from '@/components/services/ProcessStrip';
import UrgencySection from '@/components/services/UrgencySection';
import ReviewsSection from '@/components/services/ReviewsSection';
import ServiceCTA from '@/components/services/ServiceCTA';
import {
  PIPE_STATS, PIPE_SERVICES, PIPE_WHY, PIPE_URGENCY, PIPE_REVIEWS,
  PLUMBER_PROCESS, PHONE,
} from '@/lib/constants';

const OG_IMAGE = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&q=80&fm=webp';

export const metadata: Metadata = {
  title: 'Pipe Repair Nashville TN — Burst Pipe & Leak Detection',
  description: `Licensed pipe repair in Nashville, TN — leak detection, burst pipe emergency, full repipe & trenchless repair. Serving Brentwood, Franklin, Murfreesboro & all Middle Tennessee. Call ${PHONE}.`,
  keywords: ['pipe repair nashville tn', 'burst pipe repair nashville', 'leak detection nashville tn', 'pipe repair nashville', 'repipe nashville tn', 'trenchless pipe repair nashville', 'slab leak nashville tn', 'pipe repair brentwood tn', 'pipe repair franklin tn'],
  openGraph: {
    title: 'Pipe Repair Nashville TN — Emergency Plumbers',
    description: 'Leak detection, burst pipe repair & repiping in Nashville TN. Same-day emergency response.',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Pipe repair plumber at work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipe Repair & Replacement — Emergency Plumbers',
    description: 'Licensed plumbers. Leak detection, burst pipes, full repipe. Same-day emergency service.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: '/pipe-repair' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pipe Repair and Replacement',
  serviceType: 'Plumbing Pipe Repair',
  provider: { '@type': 'Organization', name: 'Emergency Plumbers', url: 'https://emergencyplumbers.live' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description: 'Leak detection, burst pipe emergency repair, full home repiping, trenchless pipe repair, and gas line services by state-licensed master plumbers.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD' } },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://emergencyplumbers.live' },
    { '@type': 'ListItem', position: 2, name: 'Pipe Repair', item: 'https://emergencyplumbers.live/pipe-repair' },
  ],
};

export default function PipeRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <EmergencyBar message="Burst Pipe? Emergency Pipe Repair Available 24/7 —" />
      <Navigation variant="service" activeHref="/pipe-repair" />
      <ServiceHero
        heroImageUrl="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80&fm=webp"
        heroImageAlt="Licensed plumber repairing a pipe"
        breadcrumbLabel="Pipe Repair"
        tag="State-Licensed Master Plumbers"
        title={<>Leaking Pipe?<br />We Find It.<br />We Fix It. Fast.</>}
        sub="Acoustic Detection. No-Dig Options. Same-Day Fix. 1-Year Guarantee."
        primaryCta="📞 Call for Emergency Service"
        secondaryCta="Get a Free Quote"
        trustPills={['Leak Detection', 'No-Dig Options', 'Same-Day Fix', 'Licensed & Insured']}
      />
      <ServiceQuickStats stats={PIPE_STATS} />
      <ServicesGrid
        label="Pipe Services"
        title={<>Leaks. Bursts. Repipes.<br />All Handled.</>}
        sub="From a pinhole leak to a full whole-home repipe — our licensed plumbers carry the tools and the expertise."
        items={PIPE_SERVICES}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <CallStrip
        heading="Burst Pipe or Active Leak? Act Now."
        subtext="Water damage grows by the minute. We dispatch within 2 hours — 24 hours a day, 7 days a week."
        ctaLabel="📞 Emergency Line — Call Free"
      />
      <WhySection
        label="Why Emergency Plumbers Pipe Repair"
        title={<>We Find It Before<br />We Fix It.</>}
        imageUrl="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=80&fm=webp"
        imageAlt="Plumber repairing pipe leak"
        items={PIPE_WHY}
        bgStyle={{ background: 'var(--warm-gray)' }}
      />
      <ProcessStrip steps={PLUMBER_PROCESS} />
      <UrgencySection
        label="Act Fast"
        title="Why Pipe Problems Can't Wait"
        items={PIPE_URGENCY}
      />
      <ReviewsSection
        label="Customer Reviews"
        title="What Our Customers Say"
        reviews={PIPE_REVIEWS}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <ServiceCTA
        heading={<>Need a Plumber Today?<br />Call Us — It&apos;s Free.</>}
        subtext="Free leak detection estimates. Same-day emergency availability. Licensed pros in your area right now."
        ctaLabel={`📞 Call ${PHONE}`}
        subLabel="Available 24/7"
      />
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
