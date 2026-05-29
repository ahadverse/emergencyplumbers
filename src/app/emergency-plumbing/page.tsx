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
  EMERGENCY_STATS, EMERGENCY_SERVICES, EMERGENCY_WHY,
  EMERGENCY_URGENCY, EMERGENCY_REVIEWS, PLUMBER_PROCESS, PHONE,
} from '@/lib/constants';

const OG_IMAGE = 'https://images.unsplash.com/photo-1542013936693-884638332954?w=1200&h=630&fit=crop&q=80&fm=webp';

export const metadata: Metadata = {
  title: 'Emergency Plumber Nashville TN — 60-Min Response 24/7',
  description: `24/7 emergency plumber in Nashville, TN. Burst pipes, sewage backup, flooding — licensed plumbers respond in 60 minutes. Serving Brentwood, Franklin, Murfreesboro & all Middle Tennessee. No call fee. Call ${PHONE}.`,
  keywords: ['emergency plumber nashville tn', 'emergency plumber nashville', '24/7 plumber nashville', 'burst pipe nashville tn', 'plumber near me nashville', 'after hours plumber nashville', 'emergency plumber brentwood tn', 'emergency plumber franklin tn', 'emergency plumber murfreesboro tn'],
  openGraph: {
    title: 'Emergency Plumber Nashville TN — Emergency Plumbers',
    description: 'Emergency plumber in Nashville TN — 60-min response, burst pipes, sewage backup. No call fee. 24/7/365.',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '24/7 emergency plumber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Plumbing — Emergency Plumbers',
    description: '60-min response. Licensed plumbers. No call fee. Burst pipes, sewage, flooding. 24/7/365.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: '/emergency-plumbing' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '24/7 Emergency Plumbing',
  serviceType: 'Emergency Plumbing Service',
  provider: { '@type': 'Organization', name: 'Emergency Plumbers', url: 'https://emergencyplumbers.live' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description: '24/7 emergency plumbing dispatch for burst pipes, sewage backups, major leaks, and flooding. Licensed plumbers respond in 60 minutes or less with a $0 call fee.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD' } },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://emergencyplumbers.live' },
    { '@type': 'ListItem', position: 2, name: 'Emergency Plumbing', item: 'https://emergencyplumbers.live/emergency-plumbing' },
  ],
};

export default function EmergencyPlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <EmergencyBar message="Plumbing Emergency? Live Dispatch Available Right Now — Call Immediately —" />
      <Navigation variant="service" activeHref="/emergency-plumbing" />
      <ServiceHero
        heroImageUrl="https://images.unsplash.com/photo-1542013936693-884638332954?w=1600&q=80&fm=webp"
        heroImageAlt="Emergency plumber responding to a burst pipe"
        breadcrumbLabel="Emergency Plumbing"
        tag="24/7 Emergency Dispatch"
        title={<>Plumbing Emergency?<br />We&apos;re There<br />in 1 Hour.</>}
        sub="60-Min Response. $0 Call Fee. Live Dispatch. 24/7 — No Automated Menus."
        primaryCta="📞 Call Emergency Line — Free"
        secondaryCta="Learn What We Handle"
        trustPills={['60-Min Response', '24/7 365 Days', 'Live Dispatch', '$0 Call Fee']}
      />
      <ServiceQuickStats stats={EMERGENCY_STATS} />
      <ServicesGrid
        label="Emergency Services"
        title={<>Every Plumbing Emergency<br />Covered.</>}
        sub="No matter the time of day or night — if it&apos;s a plumbing emergency, we have a licensed plumber ready to respond."
        items={EMERGENCY_SERVICES}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <CallStrip
        heading="Active Emergency? Call Us Right Now."
        subtext="Don't submit a form — call directly. Our emergency line is answered by a live dispatcher 24/7/365."
        ctaLabel="📞 Emergency Line — Call Now"
      />
      <WhySection
        label="Why Emergency Plumbers"
        title={<>60-Minute Response.<br />Every Time.</>}
        imageUrl="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&fm=webp"
        imageAlt="Emergency plumber at work"
        items={EMERGENCY_WHY}
        bgStyle={{ background: 'var(--warm-gray)' }}
      />
      <ProcessStrip steps={PLUMBER_PROCESS} />
      <UrgencySection
        label="Act Immediately"
        title="Every Minute of Delay Costs You"
        items={EMERGENCY_URGENCY}
      />
      <ReviewsSection
        label="Emergency Response Reviews"
        title="When It Mattered Most"
        reviews={EMERGENCY_REVIEWS}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <ServiceCTA
        heading={<>Plumbing Emergency?<br />Call Us Right Now.</>}
        subtext="$0 call fee. Licensed plumbers dispatched in 60 minutes or less. Available every hour of every day."
        ctaLabel={`📞 Call ${PHONE} — Emergency Line`}
        subLabel="Live dispatcher answers 24/7"
      />
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
