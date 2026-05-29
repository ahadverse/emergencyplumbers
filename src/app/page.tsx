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
  title: { absolute: 'Plumber Nashville TN — Licensed & Available 24/7 | Emergency Plumbers' },
  description:
    'Licensed plumber in Nashville, TN serving Brentwood, Franklin, Murfreesboro, Spring Hill and all of Tennessee. Emergency plumbing, drain cleaning, pipe repair, water heater installation. Same-day service, upfront pricing, 1-year guarantee.',
  keywords: [
    'plumber nashville tn',
    'emergency plumber nashville',
    'plumber nashville',
    'nashville plumber',
    'drain cleaning nashville tn',
    'water heater installation nashville tn',
    'pipe repair nashville tn',
    'burst pipe nashville tn',
    'plumber tennessee',
    'licensed plumber nashville',
    '24/7 plumber nashville',
    'plumber near me nashville',
  ],
  openGraph: {
    title: 'Plumber Nashville TN — Licensed & Available 24/7 | Emergency Plumbers',
    description: 'Licensed plumber serving Nashville, Brentwood, Franklin & all of Tennessee. Emergency plumbing, drain cleaning, water heaters. Same-day service.',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Licensed plumber at work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumber Nashville TN — Licensed & Available 24/7',
    description: 'Licensed plumbers in Nashville TN. Emergency, drain, pipe repair, water heaters. Same-day.',
    images: [OG_IMAGE],
  },
  alternates: { canonical: '/' },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Emergency Plumbers Plumbing',
  url: 'https://emergencyplumbers.live',
  telephone: PHONE,
  contactPoint: { '@type': 'ContactPoint', telephone: PHONE_HREF, contactType: 'customer service', availableLanguage: 'English' },
  description:
    'Licensed master plumbers for drain cleaning, pipe repair, water heater installation, and 24/7 emergency plumbing across all 50 states.',
  areaServed: { '@type': 'Country', name: 'United States' },
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
