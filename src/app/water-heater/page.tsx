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
  WATER_HEATER_STATS, WATER_HEATER_SERVICES, WATER_HEATER_WHY,
  WATER_HEATER_URGENCY, WATER_HEATER_REVIEWS, PLUMBER_PROCESS, PHONE,
} from '@/lib/constants';

const OG_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&q=80&fm=webp';

export const metadata: Metadata = {
  title: 'Water Heater Installation Nashville TN — Tank & Tankless',
  description: `Same-day water heater installation & repair in Nashville, TN. Tank, tankless & hybrid — all brands. Serving Brentwood, Franklin, Murfreesboro & all Middle Tennessee. 10-year warranty. Call ${PHONE}.`,
  keywords: ['water heater installation nashville tn', 'water heater repair nashville', 'tankless water heater nashville tn', 'water heater replacement nashville', 'no hot water nashville', 'water heater nashville', 'water heater brentwood tn', 'water heater franklin tn'],
  openGraph: {
    title: 'Water Heater Installation Nashville TN — Emergency Plumbers',
    description: 'Same-day water heater install & repair in Nashville TN. All brands, tank & tankless. 10-year warranty.',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Water heater installation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Heater Installation & Repair — Emergency Plumbers',
    description: 'Same-day install. All brands. Tank + tankless. 10-year warranty options.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: '/water-heater' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Water Heater Installation and Repair',
  serviceType: 'Water Heater Service',
  provider: { '@type': 'Organization', name: 'Emergency Plumbers', url: 'https://emergencyplumbers.live' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description: 'Tank, tankless, and hybrid water heater installation, repair, and replacement by certified plumbers. Same-day service available. All brands.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD' } },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://emergencyplumbers.live' },
    { '@type': 'ListItem', position: 2, name: 'Water Heater', item: 'https://emergencyplumbers.live/water-heater' },
  ],
};

export default function WaterHeaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <EmergencyBar message="No Hot Water? Same-Day Water Heater Installation Available —" />
      <Navigation variant="service" activeHref="/water-heater" />
      <ServiceHero
        heroImageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fm=webp"
        heroImageAlt="Water heater installation by a plumber"
        breadcrumbLabel="Water Heater"
        tag="All Brands — Tank & Tankless"
        title={<>No Hot Water?<br />New Heater Installed<br />Same Day.</>}
        sub="All Brands. Tank & Tankless. Same-Day Install. 10-Year Warranty Options."
        primaryCta="📞 Call for Same-Day Install"
        secondaryCta="Get a Free Estimate"
        trustPills={['Same-Day Install', 'All Brands', '10-Year Warranty', 'Free Estimate']}
      />
      <ServiceQuickStats stats={WATER_HEATER_STATS} />
      <ServicesGrid
        label="Water Heater Services"
        title={<>Tank. Tankless. Hybrid.<br />We Handle All Three.</>}
        sub="Whether you need a quick repair or a full upgrade to tankless — our certified technicians deliver same-day."
        items={WATER_HEATER_SERVICES}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <CallStrip
        heading="No Hot Water? Don't Shower in the Cold."
        subtext="We stock the most common units. Call by noon and your new water heater is usually in by evening."
        ctaLabel="📞 Call Now — Free Estimate"
      />
      <WhySection
        label="Why Emergency Plumbers Water Heaters"
        title={<>Right Size. Right Brand.<br />Same Day.</>}
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fm=webp"
        imageAlt="Water heater installation"
        items={WATER_HEATER_WHY}
        bgStyle={{ background: 'var(--warm-gray)' }}
      />
      <ProcessStrip steps={PLUMBER_PROCESS} />
      <UrgencySection
        label="Act Fast"
        title="Why You Shouldn't Wait on a Water Heater"
        items={WATER_HEATER_URGENCY}
      />
      <ReviewsSection
        label="Customer Reviews"
        title="What Our Customers Say"
        reviews={WATER_HEATER_REVIEWS}
        bgStyle={{ background: 'var(--cream)' }}
      />
      <ServiceCTA
        heading={<>Need a Water Heater Today?<br />Call Us — It&apos;s Free.</>}
        subtext="Free estimates. Same-day install available. All brands in stock. Licensed plumbers standing by."
        ctaLabel={`📞 Call ${PHONE}`}
        subLabel="Same-Day Available"
      />
      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
