import type { Metadata } from 'next';
import { montserrat, inter } from '@/lib/fonts';
import { PHONE, PHONE_HREF } from '@/lib/constants';
import MobileStickyCall from '@/components/layout/MobileStickyCall';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'https://emergencyplumbers.live'),
  title: {
    template: '%s — Emergency Plumbers',
    default: 'Emergency Plumbers — Licensed Plumbers Available 24/7',
  },
  description:
    'Emergency Plumbers connects homeowners with licensed, background-checked plumbers for drain cleaning, pipe repair, water heaters, and 24/7 emergency plumbing across Tennessee.',
  openGraph: {
    siteName: 'Emergency Plumbers',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', site: '@emergencyplumbers' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Emergency Plumbers',
  url: 'https://emergencyplumbers.live',
  telephone: PHONE,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_HREF,
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: 'Mo-Su 00:00-23:59',
  },
  logo: 'https://emergencyplumbers.live/favicon.ico',
  areaServed: { '@type': 'State', name: 'Tennessee' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1200',
    bestRating: '5',
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <MobileStickyCall />
      </body>
    </html>
  );
}
