export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  county: string;
  population: string;
  zipCodes: string[];
  nearbyAreas: string[];
  primaryKeyword: string;
  emergencyKeyword: string;
  drainKeyword: string;
  waterHeaterKeyword: string;
  burstPipeKeyword: string;
  pipeRepairKeyword: string;
  avgResponseTime: string;
  heroTagline: string;
  heroSub: string;
  localFact: string;
}

export const CITIES: CityData[] = [
  {
    slug: 'nashville',
    name: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Davidson County',
    population: '700,000+',
    zipCodes: ['37201', '37203', '37205', '37206', '37207', '37208', '37209', '37210', '37211', '37212', '37213', '37214', '37215', '37216', '37217', '37218', '37219', '37220', '37221'],
    nearbyAreas: ['Brentwood', 'Franklin', 'Antioch', 'Bellevue', 'Hermitage', 'Madison'],
    primaryKeyword: 'plumber nashville tn',
    emergencyKeyword: 'emergency plumber nashville',
    drainKeyword: 'drain cleaning nashville tn',
    waterHeaterKeyword: 'water heater installation nashville tn',
    burstPipeKeyword: 'burst pipe repair nashville tn',
    pipeRepairKeyword: 'pipe repair nashville tn',
    avgResponseTime: '45 minutes',
    heroTagline: 'Nashville\'s 24/7 Licensed Plumber',
    heroSub: 'Same-Hour Emergency. Upfront Pricing. 1-Year Guarantee.',
    localFact: 'Nashville\'s aging water infrastructure and rapid growth mean plumbing issues are common. Our licensed master plumbers serve all of Davidson County.',
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Williamson County',
    population: '45,000',
    zipCodes: ['37027'],
    nearbyAreas: ['Franklin', 'Nashville', 'Nolensville', 'Antioch'],
    primaryKeyword: 'plumber brentwood tn',
    emergencyKeyword: 'emergency plumber brentwood tn',
    drainKeyword: 'drain cleaning brentwood tn',
    waterHeaterKeyword: 'water heater installation brentwood tn',
    burstPipeKeyword: 'burst pipe repair brentwood tn',
    pipeRepairKeyword: 'pipe repair brentwood tn',
    avgResponseTime: '35 minutes',
    heroTagline: 'Brentwood\'s #1 Licensed Plumber',
    heroSub: 'Williamson County\'s Trusted Plumbing Pros. Licensed. Insured. Same-Day.',
    localFact: 'Brentwood\'s premium homes deserve premium plumbing service. We specialize in high-end fixture installation, tankless water heaters, and whole-home repipes for Williamson County\'s finest properties.',
  },
  {
    slug: 'franklin',
    name: 'Franklin',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Williamson County',
    population: '85,000',
    zipCodes: ['37064', '37067', '37069'],
    nearbyAreas: ['Brentwood', 'Spring Hill', 'Thompson\'s Station', 'Nolensville'],
    primaryKeyword: 'plumber franklin tn',
    emergencyKeyword: 'emergency plumber franklin tn',
    drainKeyword: 'drain cleaning franklin tn',
    waterHeaterKeyword: 'water heater installation franklin tn',
    burstPipeKeyword: 'burst pipe repair franklin tn',
    pipeRepairKeyword: 'pipe repair franklin tn',
    avgResponseTime: '40 minutes',
    heroTagline: 'Franklin TN\'s Trusted Plumber',
    heroSub: 'Licensed. Background-Checked. Same-Day Service in Franklin & Williamson County.',
    localFact: 'Franklin is one of the fastest-growing cities in the US. With thousands of new homes and older historic properties, licensed plumbing service is in constant demand across all of Franklin.',
  },
  {
    slug: 'spring-hill',
    name: 'Spring Hill',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Williamson / Maury County',
    population: '50,000',
    zipCodes: ['37174'],
    nearbyAreas: ['Franklin', 'Columbia', 'Thompson\'s Station', 'Nolensville'],
    primaryKeyword: 'plumber spring hill tn',
    emergencyKeyword: 'emergency plumber spring hill tn',
    drainKeyword: 'drain cleaning spring hill tn',
    waterHeaterKeyword: 'water heater installation spring hill tn',
    burstPipeKeyword: 'burst pipe repair spring hill tn',
    pipeRepairKeyword: 'pipe repair spring hill tn',
    avgResponseTime: '45 minutes',
    heroTagline: 'Spring Hill TN\'s Licensed Plumber',
    heroSub: 'Fast-Growing Spring Hill Deserves Fast, Reliable Plumbing Service.',
    localFact: 'Spring Hill is the fastest-growing suburb in Tennessee. New construction means new water heater installs, and the area\'s rapid development brings unique plumbing demands that our licensed team handles daily.',
  },
  {
    slug: 'murfreesboro',
    name: 'Murfreesboro',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Rutherford County',
    population: '155,000',
    zipCodes: ['37127', '37128', '37129', '37130', '37132'],
    nearbyAreas: ['Nashville', 'Smyrna', 'La Vergne', 'Lavergne', 'Christiana'],
    primaryKeyword: 'plumber murfreesboro tn',
    emergencyKeyword: 'emergency plumber murfreesboro tn',
    drainKeyword: 'drain cleaning murfreesboro tn',
    waterHeaterKeyword: 'water heater installation murfreesboro tn',
    burstPipeKeyword: 'burst pipe repair murfreesboro tn',
    pipeRepairKeyword: 'pipe repair murfreesboro tn',
    avgResponseTime: '50 minutes',
    heroTagline: 'Murfreesboro\'s 24/7 Licensed Plumber',
    heroSub: 'Rutherford County\'s Fastest Plumbing Response. Licensed & Insured.',
    localFact: 'As one of Tennessee\'s largest and fastest-growing cities, Murfreesboro has a mix of new construction and older homes — both need expert plumbing attention. We serve all of Rutherford County.',
  },
  {
    slug: 'mount-juliet',
    name: 'Mount Juliet',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Wilson County',
    population: '40,000',
    zipCodes: ['37122'],
    nearbyAreas: ['Lebanon', 'Hermitage', 'Nashville', 'Donelson'],
    primaryKeyword: 'plumber mount juliet tn',
    emergencyKeyword: 'emergency plumber mount juliet tn',
    drainKeyword: 'drain cleaning mount juliet tn',
    waterHeaterKeyword: 'water heater installation mount juliet tn',
    burstPipeKeyword: 'burst pipe repair mount juliet tn',
    pipeRepairKeyword: 'pipe repair mount juliet tn',
    avgResponseTime: '45 minutes',
    heroTagline: 'Mount Juliet TN\'s Trusted Plumber',
    heroSub: 'Wilson County Licensed Plumbers. Same-Day. Upfront Pricing.',
    localFact: 'Mount Juliet\'s growing Wilson County community needs reliable local plumbing. We cover all of the 37122 zip code with same-day availability and transparent pricing.',
  },
  {
    slug: 'hendersonville',
    name: 'Hendersonville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    county: 'Sumner County',
    population: '65,000',
    zipCodes: ['37075', '37077'],
    nearbyAreas: ['Goodlettsville', 'Gallatin', 'Madison', 'Nashville'],
    primaryKeyword: 'plumber hendersonville tn',
    emergencyKeyword: 'emergency plumber hendersonville tn',
    drainKeyword: 'drain cleaning hendersonville tn',
    waterHeaterKeyword: 'water heater installation hendersonville tn',
    burstPipeKeyword: 'burst pipe repair hendersonville tn',
    pipeRepairKeyword: 'pipe repair hendersonville tn',
    avgResponseTime: '40 minutes',
    heroTagline: 'Hendersonville TN\'s Licensed Plumber',
    heroSub: 'Sumner County\'s Most Trusted Plumbing Team. Available 24/7.',
    localFact: 'Hendersonville is one of Sumner County\'s most established communities. With many homes built in the 1980s and 90s now needing pipe and water heater upgrades, our licensed team is the go-to choice.',
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find(c => c.slug === slug);
}

export const CITY_SLUGS = CITIES.map(c => c.slug);
