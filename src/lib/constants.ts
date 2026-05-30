import type {
  NavService, ServiceCard, StepItem, WhyFeature, ReviewItem,
  FaqItem, TeamMember, ProjectItem, StatItem, ServiceItem,
  WhyCheckItem, UrgencyItem, ProcessStep,
} from "@/types";

export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "1-800-FLOW-PRO";
export const PHONE_HREF = process.env.NEXT_PUBLIC_PHONE_HREF ?? "tel:18003569776";

export const NAV_SERVICES: NavService[] = [
  { href: "/drain-cleaning", label: "Drain Cleaning", sub: "Clogs, hydro-jetting, camera inspection", imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=120&q=70&fm=webp" },
  { href: "/pipe-repair", label: "Pipe Repair", sub: "Leaks, burst pipes, full replacement", imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&q=70&fm=webp" },
  { href: "/water-heater", label: "Water Heater", sub: "Tank & tankless, install & repair", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70&fm=webp" },
  { href: "/emergency-plumbing", label: "Emergency", sub: "24/7 same-hour emergency dispatch", imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?w=120&q=70&fm=webp" },
];

export const HOME_SERVICE_CARDS: ServiceCard[] = [
  { href: "/drain-cleaning", imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&fm=webp", imageAlt: "Drain cleaning", tag: "Same-Day", title: "Drain Cleaning", description: "Clogged drains cleared with hydro-jetting and rooter service. Camera inspection included on all major blockages." },
  { href: "/pipe-repair", imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&fm=webp", imageAlt: "Pipe repair", tag: "Licensed Pros", title: "Pipe Repair", description: "Leak detection, burst pipe repair, full repipe, and trenchless no-dig solutions by licensed master plumbers." },
  { href: "/water-heater", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fm=webp", imageAlt: "Water heater", tag: "All Brands", title: "Water Heater", description: "Tank and tankless water heater installation, repair, and replacement. All brands. Same-day service available." },
  { href: "/emergency-plumbing", imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?w=800&q=80&fm=webp", imageAlt: "Emergency plumbing", tag: "24/7", title: "Emergency Plumbing", description: "Burst pipes, sewage backups, flooding — we dispatch a licensed plumber to your door in 60 minutes or less." },
];

export const HOME_STEPS: StepItem[] = [
  { icon: "📞", title: "Call or Book in 60 Seconds", description: "Call us or submit a request online. Tell us the issue and your zip code — no account, no forms, no wait." },
  { icon: "💬", title: "Get Your Upfront Quote", description: "We give you a clear, flat-rate price before any work starts. You approve it. We never start without your go-ahead." },
  { icon: "🔧", title: "Licensed Plumber Arrives", description: "A licensed, background-checked plumber arrives in a marked vehicle, on time, uniformed and fully equipped." },
  { icon: "✅", title: "Fixed & Guaranteed", description: "Work is completed, tested, and backed by our 1-year workmanship guarantee. You only pay when satisfied." },
];

export const HOME_WHY_FEATURES: WhyFeature[] = [
  { icon: "🏅", title: "State-Licensed Every Time", description: "Every Emergency Plumbers plumber holds a valid state plumbing license. We verify credentials annually — no exceptions." },
  { icon: "💰", title: "Upfront Flat-Rate Pricing", description: "You approve the price before we turn a wrench. What we quote is exactly what you pay — no hourly surprises." },
  { icon: "⚡", title: "60-Minute Emergency Response", description: "Plumbing emergencies don't wait. Our 24/7 dispatch connects you to a local plumber in under 60 minutes." },
  { icon: "🔒", title: "$2M Liability on Every Job", description: "All work is fully bonded and insured for $2M. If anything goes wrong on the job, you're completely protected." },
];

export const HOME_STATS: StatItem[] = [
  { num: "30,000+", label: "Jobs Completed" },
  { num: "4.9★", label: "Average Rating" },
  { num: "2,100+", label: "Licensed Plumbers" },
  { num: "20 yrs", label: "In Business" },
];

export const HOME_REVIEWS: ReviewItem[] = [
  { text: '"Burst pipe at 11 PM on a Sunday. Emergency Plumbers had a plumber at my door in 45 minutes. Fixed it, cleaned up, and the price was exactly what they quoted. Absolutely incredible service."', author: "Sarah M.", location: "Franklin, TN", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fm=webp" },
  { text: '"Our water heater died on Christmas Eve. They installed a brand new tankless unit by 2 PM. Hot water for Christmas dinner. I cannot recommend Emergency Plumbers enough — true lifesavers."', author: "James R.", location: "Brentwood, TN", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fm=webp" },
  { text: '"The quote was fair, the plumber arrived on time, explained everything clearly, and the drain has worked perfectly for 6 months. First time I\'ve ever felt like I wasn\'t being ripped off by a plumber."', author: "Linda K.", location: "Nashville, TN", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fm=webp" },
];

export const HOME_FAQ: FaqItem[] = [
  { question: "How fast can you get a plumber to my home?", answer: "Standard bookings are scheduled within 24–48 hours. For emergencies — burst pipes, sewage backup, no hot water — we dispatch same-day, typically within 60 minutes. Call us directly for the fastest response." },
  { question: "Are your plumbers licensed and background-checked?", answer: "Yes — every Emergency Plumbers plumber holds a valid state license and has passed a comprehensive criminal background check, license verification, and insurance confirmation before their first job. We re-verify annually." },
  { question: "What if the plumbing problem comes back?", answer: "Every job is backed by our 1-year workmanship guarantee. If the issue recurs within 12 months, we return at no cost to fix it. If we still can't make it right, you receive a full refund." },
  { question: "Do you charge for estimates?", answer: "Never. All estimates and quotes are 100% free with no obligation. We provide a firm upfront price before any work begins — what we quote is what you pay." },
  { question: "Do you offer financing for large plumbing jobs?", answer: `Yes — for jobs over $1,000 we offer 0% APR financing for qualified customers. Apply at checkout for an instant decision with no hard credit pull. Call ${PHONE} to learn more.` },
  { question: "Do you serve my area?", answer: `We serve 38+ cities across Tennessee. Call ${PHONE} and our dispatch team will confirm coverage in your zip code in under 60 seconds.` },
];

export const HOME_TEAM: TeamMember[] = [
  { imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fm=webp", name: "Mike Torres", role: "Master Plumber · 18 yrs" },
  { imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fm=webp", name: "Dave Chen", role: "Licensed Plumber · 11 yrs" },
  { imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&q=80&fm=webp", name: "Carlos Reyes", role: "Pipefitting Specialist · 14 yrs" },
];

export const HOME_PROJECTS: ProjectItem[] = [
  { imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1800&q=80&fm=webp", imageAlt: "Pipe fitting and repair", title: "Full Kitchen Repipe", location: "Seattle, WA" },
  { imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1800&q=80&fm=webp", imageAlt: "Plumber working on pipes", title: "Master Bath Renovation", location: "Miami, FL" },
  { imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1800&q=80&fm=webp", imageAlt: "Drain hydro-jetting", title: "Main Line Hydro-Jet", location: "Denver, CO" },
  { imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80&fm=webp", imageAlt: "Tankless water heater install", title: "Tankless Water Heater", location: "Chicago, IL" },
];

export const SERVICE_AREAS_TN = {
  middle: [
    { name: "Nashville", slug: "nashville" },
    { name: "Brentwood", slug: "brentwood" },
    { name: "Franklin", slug: "franklin" },
    { name: "Spring Hill", slug: "spring-hill" },
    { name: "Murfreesboro", slug: "murfreesboro" },
    { name: "Mount Juliet", slug: "mount-juliet" },
    { name: "Hendersonville", slug: "hendersonville" },
    { name: "Clarksville", slug: "clarksville" },
    { name: "Gallatin", slug: "gallatin" },
    { name: "Lebanon", slug: "lebanon" },
    { name: "Smyrna", slug: "smyrna" },
    { name: "Nolensville", slug: "nolensville" },
    { name: "Columbia", slug: "columbia" },
    { name: "La Vergne", slug: "la-vergne" },
    { name: "Goodlettsville", slug: "goodlettsville" },
    { name: "Thompson's Station", slug: "thompsons-station" },
    { name: "Shelbyville", slug: "shelbyville" },
    { name: "Tullahoma", slug: "tullahoma" },
  ],
  west: [
    { name: "Germantown", slug: "germantown" },
    { name: "Collierville", slug: "collierville" },
    { name: "Bartlett", slug: "bartlett" },
    { name: "Arlington", slug: "arlington" },
    { name: "Lakeland", slug: "lakeland" },
    { name: "Memphis", slug: "memphis" },
    { name: "Millington", slug: "millington" },
  ],
  east: [
    { name: "Knoxville", slug: "knoxville" },
    { name: "Farragut", slug: "farragut" },
    { name: "Chattanooga", slug: "chattanooga" },
    { name: "Maryville", slug: "maryville" },
    { name: "Oak Ridge", slug: "oak-ridge" },
    { name: "Cleveland", slug: "cleveland" },
    { name: "Cookeville", slug: "cookeville" },
    { name: "Kingsport", slug: "kingsport" },
    { name: "Johnson City", slug: "johnson-city" },
    { name: "Hixson", slug: "hixson" },
    { name: "Bristol", slug: "bristol" },
    { name: "Morristown", slug: "morristown" },
    { name: "Elizabethton", slug: "elizabethton" },
  ],
};

// ── DRAIN CLEANING ──
export const DRAIN_STATS: StatItem[] = [
  { num: "1hr", label: "Avg Response Time" },
  { num: "4.9★", label: "Customer Rating" },
  { num: "8,000+", label: "Drains Cleared" },
  { num: "1 yr", label: "Guarantee" },
];
export const DRAIN_SERVICES: ServiceItem[] = [
  { icon: "🚿", title: "Shower & Tub Drains", description: "Hair, soap scum, and debris cleared fast. We inspect with a camera to ensure nothing is left behind.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🍽️", title: "Kitchen Drain Clearing", description: "Grease, food buildup, and blockages removed. Hydro-jetting option for stubborn grease lines.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🚽", title: "Toilet Clogs", description: "Toilet auger and professional snaking for all toilet clogs, including hard-to-reach blockages.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🏠", title: "Main Sewer Line", description: "Full main line clearing with hydro-jetting and camera inspection. Root intrusion and full blockages handled.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "📷", title: "Camera Inspection", description: "High-definition sewer camera inspection to locate the exact source of blockages, cracks, or root intrusion.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "💦", title: "Hydro-Jetting", description: "High-pressure water jetting blasts away years of buildup — the most effective drain cleaning method available.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
];
export const DRAIN_WHY: WhyCheckItem[] = [
  { title: "Camera inspection included", description: "We don't guess — we see exactly where the blockage is before we clear it." },
  { title: "Hydro-jet capable on every truck", description: "Most drain services only snake. We hydro-jet when needed, at no extra dispatch charge." },
  { title: "No recurring problems", description: "Our clearing method removes the root cause, not just the symptom. Guaranteed for 1 year." },
  { title: "Same-day availability", description: "Clogged drain is an emergency in any home. We treat it that way — available 24/7." },
  { title: "Upfront flat-rate pricing", description: "One price quoted before we start. No hourly rate, no surprise line items on the invoice." },
];
export const DRAIN_URGENCY: UrgencyItem[] = [
  { icon: "🦠", title: "Sewage Backups Are a Health Hazard", description: "Backed-up drains expose your family to harmful bacteria and pathogens. The longer you wait, the higher the health risk." },
  { icon: "💸", title: "Small Clogs Become Major Repairs", description: "A $150 drain clearing today prevents a $3,000 sewer line replacement next year. Don't let a clog turn structural." },
  { icon: "🏚️", title: "Water Damage Compounds Fast", description: "Slow drains can cause overflow, floor damage, and mold. 24 hours of standing water doubles remediation costs." },
];
export const DRAIN_REVIEWS: ReviewItem[] = [
  { text: '"Emergency Plumbers cleared our main line in under 2 hours. The camera inspection showed exactly where the root intrusion was. Fixed cleanly, no mess. 5 stars."', author: "Tom B.", location: "Phoenix, AZ" },
  { text: '"Kitchen drain had been slow for months. They hydro-jetted it and it flows like new. Wish I had called sooner."', author: "Rachel H.", location: "Dallas, TX" },
  { text: '"Professional, punctual, priced exactly what they quoted. Our whole drainage system was inspected and cleared in one visit."', author: "Marcus W.", location: "Denver, CO" },
];

// ── PIPE REPAIR ──
export const PIPE_STATS: StatItem[] = [
  { num: "2hr", label: "Avg Emergency Response" },
  { num: "4.9★", label: "Customer Rating" },
  { num: "12,000+", label: "Pipes Repaired" },
  { num: "$0", label: "Hidden Fees" },
];
export const PIPE_SERVICES: ServiceItem[] = [
  { icon: "🔍", title: "Leak Detection", description: "Acoustic and thermal leak detection technology locates hidden leaks in walls, slabs, and underground pipes.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "💧", title: "Leak Repair", description: "Pinhole leaks, joint leaks, cracked pipes — repaired correctly the first time with a 1-year guarantee.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🚨", title: "Burst Pipe Emergency", description: "24/7 emergency burst pipe response. We stop the flooding, assess the damage, and repair same-day.", ctaText: "Emergency? Call Now →", ctaHref: PHONE_HREF },
  { icon: "🏠", title: "Whole-Home Repipe", description: "Full repiping in copper or PEX. Replaces aging galvanized or polybutylene pipes. Permit and inspection included.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🌿", title: "Trenchless Pipe Repair", description: "No-dig pipe lining and pipe bursting — fix pipes under slabs or yards without tearing up your property.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🛠️", title: "Gas Line Services", description: "Licensed gas line repair, installation, and leak testing. Permitted and code-compliant on every job.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
];
export const PIPE_WHY: WhyCheckItem[] = [
  { title: "Non-invasive leak detection first", description: "We find the leak before we cut anything — saving you drywall, tile, and unnecessary repair costs." },
  { title: "Trenchless options available", description: "No-dig pipe repair means less damage to your yard, floors, and walls. Ask us if you qualify." },
  { title: "All pipe materials and brands", description: "Copper, PEX, PVC, cast iron, galvanized — our plumbers are certified on every pipe type." },
  { title: "Permitted when required", description: "We pull all required permits and schedule inspections so your repair is code-compliant and insurable." },
  { title: "1-year workmanship guarantee", description: "Every repair is backed in writing. If it fails within 12 months, we return and fix it at no cost." },
];
export const PIPE_URGENCY: UrgencyItem[] = [
  { icon: "💦", title: "Water Damage Escalates by the Hour", description: "A burst pipe can release 100+ gallons of water per hour. Every minute of delay increases structural damage and mold risk exponentially." },
  { icon: "📉", title: "Hidden Leaks Waste Thousands", description: "A small hidden leak can add $500–$1,500 to your annual water bill. Early detection pays for itself within weeks." },
  { icon: "🏚️", title: "Unrepaired Pipes Fail Completely", description: "Corroded or cracked pipes don't stabilize — they fail. A $400 repair today avoids a $5,000 emergency later." },
];
export const PIPE_REVIEWS: ReviewItem[] = [
  { text: '"They found our slab leak in 20 minutes using acoustic detection. Minimal concrete work, repaired in a day. Saved us from a full tear-out. Incredible."', author: "Patricia L.", location: "Houston, TX" },
  { text: '"Burst pipe on a Saturday night. Plumber arrived in 50 minutes. Total professional. Damage was minimal because of how fast they responded."', author: "Kevin M.", location: "Chicago, IL" },
  { text: '"Full repipe of our 1960s home. They worked around our schedule, kept everything tidy, and passed inspection on the first visit."', author: "Ann T.", location: "Boston, MA" },
];

// ── WATER HEATER ──
export const WATER_HEATER_STATS: StatItem[] = [
  { num: "Same-Day", label: "Install Available" },
  { num: "4.9★", label: "Customer Rating" },
  { num: "5,000+", label: "Units Installed" },
  { num: "10 yr", label: "Warranty Options" },
];
export const WATER_HEATER_SERVICES: ServiceItem[] = [
  { icon: "🔥", title: "Water Heater Repair", description: "No hot water, strange noises, or rusty water — we diagnose and fix all water heater problems same-day.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🔄", title: "Water Heater Replacement", description: "Straightforward replacement of failed or aging tank water heaters. Same-day install in most cases.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "⚡", title: "Tankless Water Heater", description: "Endless hot water, lower energy bills, longer lifespan. We install and service all major tankless brands.", ctaText: "Get a Free Quote →", ctaHref: PHONE_HREF },
  { icon: "🌡️", title: "Hybrid Heat Pump Heaters", description: "The most energy-efficient water heating option. We size, install, and configure hybrid units for maximum savings.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🛡️", title: "Anode Rod Replacement", description: "Extend your water heater's life by 5+ years with a fresh anode rod. Fast service, no replacement needed.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
  { icon: "🔧", title: "Expansion Tank Installation", description: "Required by code in many municipalities. We assess, install, and certify expansion tanks on all new installs.", ctaText: "Book Now →", ctaHref: PHONE_HREF },
];
export const WATER_HEATER_WHY: WhyCheckItem[] = [
  { title: "All brands — tank and tankless", description: "Rheem, Bradford White, Navien, Rinnai, A.O. Smith — we're certified on every major brand." },
  { title: "Same-day install in most areas", description: "We stock the most common sizes. Call by noon and your new heater is usually in by evening." },
  { title: "Upfront permit-included pricing", description: "Our quote includes the permit where required. No surprise permit fees after the fact." },
  { title: "Proper sizing for your home", description: "We calculate exactly the right size — undersized heaters run out, oversized heaters waste energy." },
  { title: "10-year warranty options available", description: "We can source water heaters with up to 10-year manufacturer warranties on parts and tank." },
];
export const WATER_HEATER_URGENCY: UrgencyItem[] = [
  { icon: "🚿", title: "No Hot Water Disrupts Everything", description: "Showering, cooking, cleaning — all grind to a halt. Same-day replacement means one day of inconvenience, not a week." },
  { icon: "💸", title: "Old Heaters Cost You Every Month", description: "A 10-year-old water heater runs 30–40% less efficiently than a new one. Replacement often pays back in under 3 years." },
  { icon: "💧", title: "Leaking Heaters Cause Serious Damage", description: "A slow-leaking water heater can release 40+ gallons silently. By the time you notice, the floor and subfloor are damaged." },
];
export const WATER_HEATER_REVIEWS: ReviewItem[] = [
  { text: '"Called at 8 AM with no hot water. New tankless unit installed by 3 PM. The technician was knowledgeable, efficient, and genuinely kind. Best home service experience I\'ve had."', author: "Jennifer S.", location: "Nashville, TN" },
  { text: '"Switched from tank to tankless. Emergency Plumbers handled the gas line upgrade, venting, and city permit all in one visit. Endless hot water now and my gas bill dropped 25%."', author: "Robert K.", location: "Atlanta, GA" },
  { text: '"Fair quote, showed up on time, cleaned up after themselves. Water heater has worked perfectly for 8 months. Highly recommend."', author: "Diane F.", location: "Seattle, WA" },
];

// ── EMERGENCY PLUMBING ──
export const EMERGENCY_STATS: StatItem[] = [
  { num: "60min", label: "Avg Response Time" },
  { num: "24/7", label: "365 Days a Year" },
  { num: "500+", label: "Cities Covered" },
  { num: "$0", label: "Emergency Call Fee" },
];
export const EMERGENCY_SERVICES: ServiceItem[] = [
  { icon: "💥", title: "Burst Pipe Response", description: "We stop the flooding fast — shutoff, assessment, temporary repair, and permanent fix. Available around the clock.", ctaText: "Call Now — Emergency →", ctaHref: PHONE_HREF },
  { icon: "🚨", title: "Sewage Backup", description: "Sewage backup is a health emergency. We dispatch certified technicians immediately to clear the blockage and sanitize.", ctaText: "Call Now →", ctaHref: PHONE_HREF },
  { icon: "🌊", title: "Major Water Leak", description: "Active leaks destroying walls, floors, and ceilings — we locate, isolate, and repair before damage compounds.", ctaText: "Call Now →", ctaHref: PHONE_HREF },
  { icon: "🚽", title: "Overflowing Toilet", description: "Toilet overflow flooding your bathroom? We clear the obstruction and prevent water damage within the hour.", ctaText: "Call Now →", ctaHref: PHONE_HREF },
  { icon: "🔥", title: "Water Heater Failure", description: "No hot water, leaking tank, or burning smell — water heater emergencies diagnosed and resolved same-day.", ctaText: "Call Now →", ctaHref: PHONE_HREF },
  { icon: "💨", title: "Gas Line Leak", description: "Gas leak? Leave the property and call us immediately. Our licensed gas plumbers respond as a priority emergency.", ctaText: "Emergency — Call Now →", ctaHref: PHONE_HREF },
];
export const EMERGENCY_WHY: WhyCheckItem[] = [
  { title: "60-minute average response", description: "We measure our emergency response time and hold our dispatchers accountable to it — 24 hours a day." },
  { title: "Licensed plumber every time", description: "No unlicensed helpers on emergency calls. Every responder holds a valid state plumbing license." },
  { title: "Zero call fee, zero diagnosis fee", description: `We don't charge to show up or diagnose. Call ${PHONE} — free, any time.` },
  { title: "Fully stocked emergency trucks", description: "Our trucks carry parts for the most common emergencies. Most jobs are completed on the first visit." },
  { title: "Water damage coordination", description: "We work directly with water damage restoration companies and can coordinate the full repair process." },
];
export const EMERGENCY_URGENCY: UrgencyItem[] = [
  { icon: "💧", title: "Water Destroys Fast", description: "Uncontrolled water can ruin flooring, drywall, insulation, and structural wood in hours. Every minute matters." },
  { icon: "🦠", title: "Sewage Is a Biohazard", description: "Raw sewage contains E. coli, hepatitis, and other dangerous pathogens. Do not wait — call immediately." },
  { icon: "💸", title: "Delay Multiplies Costs", description: "A $500 emergency repair called immediately often becomes a $5,000–$15,000 remediation project if you wait 24 hours." },
];
export const EMERGENCY_REVIEWS: ReviewItem[] = [
  { text: '"Pipe burst in my basement at 2 AM. Emergency Plumbers plumber was there in 55 minutes. Calm, professional, fixed it completely. I honestly don\'t know what I would have done without them."', author: "Mark J.", location: "Los Angeles, CA" },
  { text: '"Sewage backed up on Thanksgiving. They came within an hour, cleared it, and sanitized the entire area. Family dinner was only delayed by 2 hours. Incredible response."', author: "Carla V.", location: "San Antonio, TX" },
  { text: '"Gas smell late at night. Called Emergency Plumbers and they treated it as the emergency it was — arrived in 40 minutes, found the leak, made it safe. Real professionals."', author: "Brian N.", location: "Philadelphia, PA" },
];

// ── PROCESS STEPS (shared) ──
export const PLUMBER_PROCESS: ProcessStep[] = [
  { num: "1", title: "Call or Book Online", description: `Call ${PHONE} or submit a service request. Available 24/7 — no automated menus for emergencies.` },
  { num: "2", title: "Upfront Price Given", description: "We give you a firm flat-rate quote over the phone or on arrival. You approve it before any work starts." },
  { num: "3", title: "Licensed Plumber Arrives", description: "A background-checked, licensed plumber arrives on time in a marked vehicle with all needed equipment." },
  { num: "4", title: "Work Done & Guaranteed", description: "Job completed to code, tested, and photographed. 1-year workmanship guarantee issued in writing." },
];
