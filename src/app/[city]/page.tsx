import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EmergencyBar from '@/components/layout/EmergencyBar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import ServiceCTA from '@/components/services/ServiceCTA';
import { getCityBySlug, CITY_SLUGS } from '@/lib/cities';
import { PHONE, PHONE_HREF } from '@/lib/constants';
import { getHeroBlurb, getServicesHeadline, getFaqHeadline } from '@/lib/contentSpinner';

export async function generateStaticParams() {
  return CITY_SLUGS.map(city => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: 'Not Found' };

  return {
    title: `Plumber ${city.name} TN — Licensed & Available 24/7`,
    description: `Licensed plumber in ${city.name}, TN — emergency plumbing, drain cleaning, burst pipe repair, and water heater installation. Same-day service in ${city.county}. Upfront pricing, 1-year guarantee. Call ${PHONE}.`,
    keywords: [
      city.primaryKeyword,
      city.emergencyKeyword,
      city.drainKeyword,
      city.waterHeaterKeyword,
      city.burstPipeKeyword,
      city.pipeRepairKeyword,
      `plumber ${city.name}`,
      `${city.name} plumber near me`,
      `24/7 plumber ${city.name} tn`,
    ],
    openGraph: {
      title: `Plumber ${city.name} TN — Emergency Plumbers`,
      description: `Licensed plumber in ${city.name}, TN. 24/7 emergency service, upfront pricing, 1-year guarantee.`,
      type: 'website',
    },
    alternates: { canonical: `/${slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://emergencyplumbers.live' },
      { '@type': 'ListItem', position: 2, name: 'Tennessee', item: 'https://emergencyplumbers.live/service-areas' },
      { '@type': 'ListItem', position: 3, name: `Plumber ${city.name} TN`, item: `https://emergencyplumbers.live/${slug}` },
    ],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Emergency Plumbers',
    url: `https://emergencyplumbers.live/${slug}`,
    telephone: PHONE,
    image: 'https://emergencyplumbers.live/logo.png',
    priceRange: '$$',
    description: `Licensed plumber serving ${city.name}, ${city.stateAbbr} and surrounding areas of ${city.county}.`,
    areaServed: [
      { '@type': 'City', name: city.name, sameAs: `https://en.wikipedia.org/wiki/${city.name.replace(/'/g, '').replace(/ /g, '_')},_Tennessee`, containedInPlace: { '@type': 'State', name: city.state } },
      ...city.nearbyAreas.map(area => ({ '@type': 'City', name: area })),
    ],
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressRegion: city.stateAbbr, postalCode: city.zipCodes[0], addressCountry: 'US' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00', closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1200',
      bestRating: '5',
    },
  };

  const SERVICES = [
    { icon: '🚿', title: 'Drain Cleaning', desc: `Clogged drains cleared same-day in ${city.name}. Camera inspection included.`, href: '/drain-cleaning' },
    { icon: '🔧', title: 'Pipe Repair', desc: `Leak detection and pipe repair throughout ${city.county}.`, href: '/pipe-repair' },
    { icon: '🔥', title: 'Water Heater', desc: `Tank & tankless water heater install and repair in ${city.name}.`, href: '/water-heater' },
    { icon: '🚨', title: 'Emergency Plumbing', desc: `24/7 emergency plumbing in ${city.name} — ${city.avgResponseTime} average response.`, href: '/emergency-plumbing' },
  ];

  const FAQS = [
    {
      q: `Do you serve the ${city.zipCodes[0]} zip code in ${city.name}?`,
      a: `Yes — Emergency Plumbers serves ${city.zipCodes.join(', ')} and all surrounding zip codes in ${city.county}. Call ${PHONE} and our dispatch team will confirm availability at your exact address in under 60 seconds.`,
    },
    {
      q: `How fast can you get a plumber to ${city.name}?`,
      a: `Our average response time in ${city.name} is ${city.avgResponseTime}. For emergencies — burst pipes, sewage backup, no hot water — we dispatch immediately. Standard bookings are available same-day or next morning.`,
    },
    {
      q: `Are your plumbers licensed in Tennessee?`,
      a: `Yes. Every Emergency Plumbers plumber holds a valid Tennessee state plumbing license, carries $2M liability insurance, and has passed a criminal background check. We re-verify credentials annually.`,
    },
    {
      q: `Do you offer free estimates in ${city.name}?`,
      a: `Absolutely. All estimates are 100% free with no obligation. We provide a firm upfront price before any work starts — what we quote is exactly what you pay. No hourly surprises.`,
    },
    {
      q: `Do you also serve areas near ${city.name}?`,
      a: `Yes — in addition to ${city.name}, we also serve ${city.nearbyAreas.join(', ')} and surrounding communities. Call us to confirm coverage in your specific area.`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <EmergencyBar message={`24/7 Emergency Plumbing in ${city.name} — Same-Hour Response Guaranteed —`} />
      <Navigation variant="service" />

      {/* ── HERO ── */}
      <section className="city-hero">
        <div className="city-hero-content">
          <div className="service-breadcrumb" style={{ marginBottom: '14px' }}>
            <Link href="/">Home</Link> <span>›</span>
            <Link href="/service-areas"> Tennessee</Link> <span>›</span>
            <span> {city.name}</span>
          </div>

          <div className="hero-live-tag">
            <span className="pulse" />
            Available Now in {city.name}, {city.stateAbbr}
          </div>

          <h1 className="city-hero-title">
            Licensed Plumber in<br />
            <span>{city.name}, TN</span>
          </h1>

          <p className="city-hero-sub">{city.heroSub}</p>
          <p className="city-hero-desc" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.97rem', marginTop: '-8px', marginBottom: '16px', lineHeight: 1.7 }}>{getHeroBlurb(city)}</p>

          <div className="hero-trust-row" style={{ marginBottom: '28px' }}>
            {[{ icon: '⭐', text: '4.9/5 Google · 1,200+ Reviews' }, { icon: '🏅', text: 'Licensed & Insured' }, { icon: '✅', text: 'BBB Accredited' }].map(({ icon, text }, i, arr) => (
              <React.Fragment key={text}>
                <div className="hero-trust-item"><span>{icon}</span><span>{text}</span></div>
                {i < arr.length - 1 && <span className="hero-trust-sep">|</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="hero-cta-group">
            <a href={PHONE_HREF} className="btn-cta-call">📞 CALL NOW — {PHONE}</a>
            <p className="hero-cta-note">✓ Free estimate &nbsp;·&nbsp; ✓ No call fee &nbsp;·&nbsp; ✓ Available 24/7</p>
          </div>

          <div className="hero-pills" style={{ marginTop: '20px' }}>
            {['Licensed & Insured', 'Background-Checked', 'Same-Day Service', '1-Year Guarantee'].map(p => (
              <span key={p} className="hero-pill">✓ {p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: 'var(--cream)', padding: '72px 5vw' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-label">Our Services in {city.name}</span>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            {getServicesHeadline(city).split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </h2>
          <div className="services-list-grid" style={{ marginTop: '36px' }}>
            {SERVICES.map(({ icon, title, desc, href }) => (
              <Link key={title} href={href} className="svc-list-card" style={{ textDecoration: 'none' }}>
                <div className="svc-icon">{icon}</div>
                <div className="svc-list-title">{title}</div>
                <div className="svc-list-desc">{desc}</div>
                <span className="svc-list-cta">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL FACT ── */}
      <section style={{ background: 'var(--navy)', padding: '56px 5vw' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, marginBottom: '16px' }}>
            Serving {city.name} & {city.county}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '28px' }}>
            {city.localFact}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
            Zip codes served: {city.zipCodes.join(' · ')}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', marginTop: '6px' }}>
            Also serving: {city.nearbyAreas.join(' · ')}
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '72px 5vw' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '32px' }}>
            {getFaqHeadline(city)}
          </h2>
          {FAQS.map(({ q, a }) => (
            <div key={q} className="faq-item">
              <div className="faq-question">{q}</div>
              <div className="faq-answer">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <ServiceCTA
        heading={<>Need a Plumber in {city.name}?<br />Call Us — It&apos;s Free.</>}
        subtext={`Free estimates · Same-day availability · Licensed & insured in ${city.county}`}
        ctaLabel={`📞 Call ${PHONE}`}
        subLabel={`Serving ${city.name} & surrounding areas`}
      />

      <Footer variant="simple" />
      <FloatingCallButton />
    </>
  );
}
