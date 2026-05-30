import type { Metadata } from 'next';

export const revalidate = 3600; // rebuild homepage every hour
import EmergencyBar from '@/components/layout/EmergencyBar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import FAQSection from '@/components/home/FAQSection';
import BlogSection from '@/components/home/BlogSection';
import MainCTASection from '@/components/home/MainCTASection';
import { HOME_FAQ, PHONE, PHONE_HREF } from '@/lib/constants';

const OG_IMAGE =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&q=80&fm=webp';

export const metadata: Metadata = {
  title: { absolute: 'Emergency Plumbers Tennessee | 24/7 Licensed Dispatch' },
  description:
    'Licensed plumbers across Tennessee — Nashville, Knoxville, Chattanooga, Memphis suburbs and more. 24/7 emergency service, upfront pricing, 1-year guarantee. Call now.',
  keywords: [
    'emergency plumber tennessee',
    'plumber tennessee',
    '24/7 plumber tn',
    'licensed plumber tennessee',
    'emergency plumbing tennessee',
    'drain cleaning tennessee',
    'water heater tennessee',
    'burst pipe tennessee',
  ],
  openGraph: {
    title: 'Emergency Plumbers Tennessee | 24/7 Licensed Dispatch',
    description: 'Licensed plumbers serving 38+ cities across Tennessee. 24/7 emergency plumbing, drain cleaning, water heaters. Same-day service.',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Licensed plumber at work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Plumbers Tennessee | 24/7 Licensed Dispatch',
    description: 'Licensed plumbers in Tennessee. Emergency, drain, pipe repair, water heaters. Same-day.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: '/' },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PlumbingService',
  name: 'Emergency Plumbers Tennessee',
  url: 'https://emergencyplumbers.live',
  telephone: PHONE,
  image: 'https://emergencyplumbers.live/logo.png',
  priceRange: '$$',
  contactPoint: { '@type': 'ContactPoint', telephone: PHONE_HREF, contactType: 'customer service', availableLanguage: 'English' },
  description: 'Licensed plumbers for drain cleaning, pipe repair, water heater installation, and 24/7 emergency plumbing across Tennessee.',
  areaServed: { '@type': 'State', name: 'Tennessee' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1200',
    bestRating: '5',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipe Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Heater Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Emergency Plumbing' } },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <EmergencyBar message="Burst Pipe? Clogged Drain? 24/7 Emergency Plumbing — Same-Hour Response Guaranteed —" />
      <Navigation variant="home" />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <StatsSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FAQSection />
      <BlogSection />
      <MainCTASection />
      <Footer variant="full" />
      <FloatingCallButton />
    </>
  );
}
