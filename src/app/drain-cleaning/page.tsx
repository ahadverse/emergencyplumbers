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
  DRAIN_STATS, DRAIN_SERVICES, DRAIN_WHY, DRAIN_URGENCY, DRAIN_REVIEWS,
  PLUMBER_PROCESS, PHONE,
} from '@/lib/constants';

const OG_IMAGE = 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=630&fit=crop&q=80&fm=webp';

export const metadata: Metadata = {
  title: 'Drain Cleaning Nashville TN — Same-Day Hydro-Jet Service',
  description: `Professional drain cleaning in Nashville, TN serving Brentwood, Franklin, Murfreesboro & all of Middle Tennessee. Hydro-jetting, camera inspection, same-day clog clearing. Call ${PHONE}.`,
  keywords: ['drain cleaning nashville tn', 'drain cleaning nashville', 'clogged drain nashville', 'hydro-jetting nashville', 'sewer cleaning nashville tn', 'drain clearing tennessee', 'rooter service nashville', 'drain cleaning brentwood tn', 'drain cleaning franklin tn'],
  openGraph: {
    title: 'Drain Cleaning Nashville TN — Emergency Plumbers',
    description: 'Professional drain cleaning in Nashville TN. Hydro-jetting, camera inspection, same-day service, 1-year guarantee.',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Drain cleaning service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drain Cleaning & Clog Removal — Emergency Plumbers',
    description: 'Camera inspection + hydro-jetting. Same-day drain clearing. 1-year guarantee.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: '/drain-cleaning' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Drain Cleaning',
  serviceType: 'Drain Cleaning and Clog Removal',
  provider: { '@type': 'Organization', name: 'Emergency Plumbers', url: 'https://emergencyplumbers.live' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description: 'Professional drain cleaning including camera inspection, hydro-jetting, and rooter service for all residential and commercial drains.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD' } },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://emergencyplumbers.live' },
    { '@type': 'ListItem', position: 2, name: 'Drain Cleaning', item: 'https://emergencyplumbers.live/drain-cleaning' },
  ],
};

export default function DrainCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <EmergencyBar message="Clogged Drain? Same-Day Clearing Available Now —" />
      <Navigation variant="service" activeHref="/drain-cleaning" />
      <ServiceHero
        heroImageUrl="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80&fm=webp"
        heroImageAlt="Drain cleaning professional at work"
        breadcrumbLabel="Drain Cleaning"
        tag="Hydro-Jet & Rooter Certified"
        title={<>Clogged Drain?<br />Cleared in 1 Hour.<br />Guaranteed.</>}
        sub="Camera Inspection Included. Hydro-Jet Cleared. Same-Day. 1-Year Guarantee."
        primaryCta="📞 Call for Same-Day Service"
        secondaryCta="Get a Free Quote"
        trustPills={['Same-Day Service', 'Hydro-Jetting', 'Camera Inspection', '1-Year Guarantee']}
      />
      <ServiceQuickStats stats={DRAIN_STATS} />
      <ServicesGrid
        label="Drain Services"
        title={<>Every Drain.<br />Every Blockage.</>}
        sub="We clear every type of drain clog — shower, kitchen, main sewer, and more — with the right tool every time."
        items={DRAIN_SERVICES}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <CallStrip
        heading="Drain Still Blocked? Don't Wait."
        subtext="Standing water leads to mold and water damage. We respond in under 2 hours — day or night."
        ctaLabel="📞 Call Now — Same-Day"
      />
      <WhySection
        label="Why Emergency Plumbers Drain Cleaning"
        title={<>Camera-First.<br />Clear Every Time.</>}
        imageUrl="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80&fm=webp"
        imageAlt="Drain pipe cleaning with hydro-jet"
        items={DRAIN_WHY}
        bgStyle={{ background: 'var(--warm-gray)' }}
      />
      <ProcessStrip steps={PLUMBER_PROCESS} />
      <UrgencySection
        label="Act Fast"
        title="Why a Clogged Drain Can't Wait"
        items={DRAIN_URGENCY}
      />
      <ReviewsSection
        label="Customer Reviews"
        title="What Our Customers Say"
        reviews={DRAIN_REVIEWS}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <ServiceCTA
        heading={<>Drain Problem?<br />Call Us — It&apos;s Free.</>}
        subtext="Free camera inspection on major blockages. Upfront pricing. Same-day availability in most areas."
        ctaLabel={`📞 Call ${PHONE}`}
        subLabel="Available 24/7"
      />
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
