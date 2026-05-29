import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/connect';
import BlogPost from '@/lib/db/models/BlogPost';
import { getSessionFromCookies } from '@/lib/auth';

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const POSTS = [
  {
    title: '5 Signs Your Drain Needs Professional Cleaning Today',
    category: 'Drain Tips',
    tags: ['drain cleaning', 'clogged drain', 'warning signs'],
    excerpt: 'A slow drain is more than an annoyance — it\'s a warning. Our licensed plumbers explain 5 signs your drain needs professional attention before it becomes an emergency.',
    content: `<h2>Why You Shouldn't Wait on a Slow Drain</h2>
<p>Most homeowners treat a slow drain as a minor inconvenience and reach for a bottle of chemical drain cleaner. The problem: chemical cleaners only punch a hole through a clog — they don't remove it. Within weeks, the buildup returns, often worse. And behind that slow drain could be something far more serious than surface buildup.</p>
<p>Here are five signs that your drain needs professional attention — and why waiting costs you more than calling today.</p>
<h2>1. It Drains Slowly Every Time — Not Just Occasionally</h2>
<p>An occasional slow drain after heavy use can be normal. A drain that's consistently slow after every use is telling you there's a partial blockage forming in the pipe. At this stage, a professional drain clearing and hydro-jet clean can restore full flow and prevent a complete blockage from developing.</p>
<h2>2. You Hear Gurgling From Other Drains</h2>
<p>When you flush the toilet and hear gurgling from the nearby sink, or run the kitchen sink and see bubbling in the tub, that's air being pushed back through the drain system. It indicates a blockage in a shared drain line or a venting issue — neither of which resolves on its own.</p>
<h2>3. Water Backs Up Into Other Fixtures</h2>
<p>This is a clear sign of a main sewer line blockage, not a single fixture clog. Running the washing machine and seeing water come up in the floor drain? Flushing the toilet and having water rise in the tub? These are sewer emergencies. Don't wait — call immediately.</p>
<h2>4. There's a Persistent Sewer Smell</h2>
<p>Healthy drains shouldn't smell. A persistent sewage or rotten egg odor from your drains indicates either a dry P-trap (run water to fix), a partial blockage trapping organic matter, or a cracked sewer pipe letting sewer gas enter your home. The latter is a health hazard.</p>
<h2>5. You've Used Store Chemicals and the Clog Came Back</h2>
<p>If you've treated a drain with store-bought drain cleaner two or more times for the same clog, the underlying cause isn't being addressed. Chemical cleaners can also damage older pipes. A camera inspection will show exactly what's causing the recurring blockage and determine the right permanent solution.</p>
<h2>What Professional Drain Cleaning Actually Does</h2>
<p>A professional drain cleaning doesn't just clear the blockage — it removes the source. Hydro-jetting uses pressurized water at 4,000+ PSI to scour the entire pipe wall, removing grease, soap scum, scale, and organic matter that chemical treatments leave behind. Combined with a camera inspection, it gives you a complete picture of your drain system's health.</p>
<p>All Emergency Plumbers drain cleanings include a camera inspection on major blockages. Call us — the estimate is always free.</p>`,
  },
  {
    title: 'How to Know If You Have a Slab Leak (And What Happens If You Ignore It)',
    category: 'Pipe Maintenance',
    tags: ['slab leak', 'leak detection', 'pipe repair'],
    excerpt: 'Slab leaks are invisible until the damage is severe. Our licensed plumbers explain the warning signs, the detection process, and why early action is critical.',
    content: `<h2>What Is a Slab Leak?</h2>
<p>A slab leak is a water or sewer line leak that occurs in the pipes running beneath your home's concrete foundation (the slab). Because these pipes are inaccessible without excavation, slab leaks often go undetected for months — causing foundation damage, mold growth, and skyrocketing water bills before a homeowner notices anything unusual.</p>
<h2>Warning Signs of a Slab Leak</h2>
<ul>
<li><strong>Unexplained spike in your water bill</strong> — A slab leak can add $150–$500 per month to your water bill before you see any visible damage.</li>
<li><strong>Warm or hot spots on the floor</strong> — A hot water line leak beneath the slab heats the concrete above it. If certain sections of your floor are noticeably warmer, especially near the water heater, this is a strong indicator.</li>
<li><strong>Sound of running water when everything is off</strong> — If you can hear water moving through your home but all faucets and appliances are off, water is flowing somewhere it shouldn't.</li>
<li><strong>Cracks appearing in walls or flooring</strong> — Water saturating the soil beneath your foundation causes soil movement, which transmits as cracks in walls, floors, and even the exterior of your home.</li>
<li><strong>Wet or damp flooring</strong> — Unexplained moisture on your floors, especially near the water heater or on the ground floor, can indicate water seeping up from a slab leak below.</li>
<li><strong>Mold or mildew odor</strong> — Chronic moisture beneath the floor creates conditions for mold growth inside the slab and subfloor materials.</li>
</ul>
<h2>How Slab Leaks Are Detected</h2>
<p>Professional slab leak detection uses acoustic listening devices and thermal imaging to locate leaks without any excavation. Our technicians can pinpoint a leak to within inches — meaning repair is targeted rather than tearing up the entire floor to find the problem.</p>
<h2>What Happens If You Ignore It</h2>
<p>A slab leak left unaddressed doesn't stabilize — it grows. The ongoing water flow erodes the soil beneath the foundation, creating voids that cause the slab to settle unevenly. This can crack the foundation itself, requiring structural repairs that cost tens of thousands of dollars. Additionally, chronic moisture promotes mold growth in subfloor materials that can spread to walls and affect air quality throughout the home.</p>
<h2>The Good News</h2>
<p>Caught early, most slab leaks are repaired through pipe rerouting or trenchless pipe lining — minimal disruption, no jackhammering, and costs that are often covered by homeowner's insurance. The key is acting on the warning signs before the foundation is compromised.</p>`,
  },
  {
    title: 'Water Heater Making Noise? Here\'s What Each Sound Means',
    category: 'Water Heater',
    tags: ['water heater repair', 'water heater maintenance', 'water heater noise'],
    excerpt: 'Popping, rumbling, hissing, or whining — your water heater is trying to tell you something. Our certified technicians decode every noise and explain when it needs attention.',
    content: `<h2>Your Water Heater Shouldn't Sound Like This</h2>
<p>A functioning water heater should be nearly silent. When it starts making noises, it's a sign that something inside has changed — and ignoring those sounds can mean the difference between a $200 maintenance visit and a full $1,500+ replacement.</p>
<p>Here's what each common water heater sound means and what to do about it.</p>
<h2>Popping or Cracking</h2>
<p><strong>Cause:</strong> Sediment. Minerals from hard water accumulate at the bottom of the tank over time. When water gets trapped beneath the sediment layer and boils, it forces its way through the buildup — creating that characteristic popping sound.</p>
<p><strong>Urgency:</strong> Moderate. Sediment reduces efficiency (your heater works harder to heat the same water) and eventually damages the tank lining. Annual flushing prevents this. If the popping is loud and frequent, a professional flush should be done soon.</p>
<h2>Rumbling or Kettling</h2>
<p><strong>Cause:</strong> Severe sediment buildup, usually in areas with very hard water. When the sediment layer becomes thick, the heating element is essentially cooking through a thick layer of mineral deposits, creating a rumbling or boiling sound.</p>
<p><strong>Urgency:</strong> High. This level of buildup significantly shortens tank life. A professional flush or descaling is needed promptly — if the tank has been neglected for years, replacement may be more cost-effective.</p>
<h2>Hissing or Sizzling</h2>
<p><strong>Cause:</strong> On gas water heaters, this often indicates condensation dripping onto the burner. On electric heaters, a hissing sound can mean water is leaking onto the heating element. If the sound comes from the temperature-pressure relief valve, the valve is intermittently releasing pressure — which means the pressure inside the tank is too high.</p>
<p><strong>Urgency:</strong> High. A T&P valve releasing intermittently is a safety issue that needs professional attention immediately.</p>
<h2>Ticking or Tapping</h2>
<p><strong>Cause:</strong> Usually thermal expansion — pipes expanding and contracting as they heat and cool. This is often harmless but can indicate inadequate heat traps on the supply lines or missing or failed expansion tanks in closed plumbing systems.</p>
<p><strong>Urgency:</strong> Low to moderate. If it's new or getting louder, have a plumber check the expansion tank.</p>
<h2>Screeching or High-Pitched Whining</h2>
<p><strong>Cause:</strong> Usually a valve that's not fully open — inlet valve, outlet valve, or the pressure-reducing valve. The noise is water being forced through a narrow opening.</p>
<p><strong>Urgency:</strong> Moderate. Check that all valves around the water heater are fully open. If the noise persists, call a plumber to inspect the pressure-reducing valve.</p>
<h2>When to Replace Instead of Repair</h2>
<p>If your water heater is over 10 years old and making loud or multiple noises, the calculus often shifts toward replacement. A new high-efficiency unit, especially a tankless, will pay back its cost in energy savings within 4–6 years while giving you reliable performance for 20+ years.</p>`,
  },
  {
    title: 'The 7 Plumbing Checks Every Homeowner Should Do Twice a Year',
    category: 'General',
    tags: ['plumbing maintenance', 'home maintenance', 'preventive plumbing'],
    excerpt: 'Two 30-minute inspections per year can prevent 80% of common plumbing emergencies. Our licensed plumbers share the exact checklist they use.',
    content: `<h2>Why Preventive Plumbing Matters</h2>
<p>Most major plumbing emergencies — burst pipes, sewage backups, water heater failures — don't happen without warning. They develop from small, ignored problems over months or years. Two semi-annual inspections, taking no more than 30 minutes each, catch these problems while they're still inexpensive to fix.</p>
<p>Here's the exact checklist our licensed plumbers recommend every homeowner follow twice a year — once in spring and once in fall.</p>
<h2>Check 1: Inspect Under Every Sink</h2>
<p>Open every cabinet under every sink in the house. Look for: water staining, mineral deposits (white or green crust on pipes), soft or swollen cabinet floors, or any sign of moisture. These are early signs of slow leaks from supply lines, drain connections, or disposal seals. Caught here, repairs cost $50–$150. Found after the cabinet floor has rotted through, add a zero.</p>
<h2>Check 2: Test All Toilet Mechanisms</h2>
<p>Add a few drops of food coloring to every toilet tank. Wait 10 minutes without flushing. If color appears in the bowl, the flapper is leaking. A leaking toilet flapper wastes 200+ gallons per day — $100+ per month on a typical water bill. New flappers cost $5–$15 and take 10 minutes to replace.</p>
<h2>Check 3: Test Your Water Pressure</h2>
<p>Attach an inexpensive pressure gauge to an outdoor hose bib. Normal residential water pressure is 45–65 PSI. Over 80 PSI damages appliances, accelerates pipe wear, and can cause water hammer. Under 40 PSI may indicate a leak or a failing pressure-reducing valve.</p>
<h2>Check 4: Inspect the Water Heater</h2>
<p>Look for: water staining around the base, rust on the tank, corrosion on supply connections, and any moisture on the floor nearby. Test the temperature-pressure relief valve by lifting the lever briefly to confirm it operates. If water continues flowing after you release the lever, or if it doesn't open at all, replace it immediately.</p>
<h2>Check 5: Run Water in Unused Drains</h2>
<p>Every drain has a P-trap — a U-shaped pipe that holds water to block sewer gas. In guest bathrooms, laundry rooms, and basement floor drains that rarely see use, this water can evaporate, allowing sewer gas (which includes hydrogen sulfide and methane) to enter the home. Run water in every drain for 30 seconds every few months.</p>
<h2>Check 6: Inspect Exterior Hose Bibs and Shutoffs</h2>
<p>Examine each outdoor hose bib for dripping or leaks. Turn the shutoff valve in the utility room (if present) to confirm it still operates. Before winter, disconnect hoses and turn off interior shutoff valves to prevent freezing.</p>
<h2>Check 7: Check Your Main Water Meter</h2>
<p>Turn off all water in the house for 30 minutes. Check the water meter before and after. If the reading changed, you have a leak somewhere in the system — even if you can't see or hear it. This is the most reliable hidden leak test available to homeowners.</p>
<h2>What to Do If You Find Something</h2>
<p>Many of these checks will turn up issues that need professional attention. Don't wait — small plumbing problems grow. Call Emergency Plumbers for a free diagnostic. Our licensed plumbers will assess the issue, give you an upfront quote, and fix it right the first time.</p>`,
  },
  {
    title: 'Why DIY Plumbing Repairs Can Cost You More in the Long Run',
    category: 'General',
    tags: ['DIY plumbing', 'plumbing mistakes', 'licensed plumber'],
    excerpt: 'YouTube makes plumbing look easy. But the #1 cause of expensive plumbing emergencies is a DIY repair gone wrong. Here\'s what our licensed plumbers see most often.',
    content: `<h2>The DIY Plumbing Temptation</h2>
<p>With video tutorials for every conceivable plumbing task available online, it's tempting to handle repairs yourself. Some plumbing tasks genuinely are DIY-friendly — replacing a showerhead, swapping a toilet flapper, or unclogging a simple fixture drain. But many homeowners discover the hard way that the gap between a tutorial and a real plumbing system in a real house is significant.</p>
<p>Here are the most common DIY plumbing mistakes our licensed plumbers are called to repair — and why they typically cost far more than the original professional repair would have.</p>
<h2>1. Using the Wrong Pipe Material or Fittings</h2>
<p>Mixing incompatible pipe materials causes dielectric corrosion — a chemical reaction that corrodes connections from the inside out. Copper and galvanized steel, for example, cannot connect directly. They require dielectric unions. A DIY repair that connects them directly looks fine for months, then fails completely as the connection corrodes through. The resulting leak often goes undetected until water damage appears.</p>
<h2>2. Over-Tightening Connections</h2>
<p>Plumbing connections follow a "snug plus a quarter turn" rule, not "as tight as possible." Over-tightening plastic fittings cracks them. Over-tightening metal fittings strips threads. Both create leaks that can take weeks to manifest — often behind walls where the damage compounds before it's discovered.</p>
<h2>3. Incorrect Slope on Drain Lines</h2>
<p>Drain lines need to slope at exactly 1/4 inch per foot — enough to carry waste but not so steep that liquid outruns solids, leaving debris behind. DIY drain work frequently gets this wrong in both directions, creating lines that either drain too slowly or allow solid waste to accumulate and create chronic blockages.</p>
<h2>4. Bypassing Permits on Permitted Work</h2>
<p>Many plumbing projects — new fixture installations, water heater replacements, any work involving gas lines — require permits and inspections. Skipping permits to save money creates problems when you sell the home (unpermitted work can kill a sale or require expensive remediation) and potentially voids your homeowner's insurance coverage if the unpermitted work causes damage.</p>
<h2>5. Not Knowing When to Stop</h2>
<p>The most expensive DIY plumbing repair pattern we see: a homeowner starts a simple job, discovers it's more complex, tries to push through, makes it worse, then calls us. By this point, the repair is more extensive and expensive than it would have been if we'd been called at the start. Knowing when to stop and call a professional is itself a skill.</p>
<h2>What's Actually DIY-Safe</h2>
<p>Toilet flappers and handles, aerators, showerheads, basic drain covers, and outdoor hose bibbs are genuinely simple to replace with basic tools and an online tutorial. Everything involving supply line connections, drain reconfiguration, water heater work, and anything related to gas lines should be handled by a licensed plumber.</p>
<p>When in doubt, the free estimate from a licensed Emergency Plumbers plumber will tell you exactly what you're dealing with — no obligation, no pressure.</p>`,
  },
];

export async function POST() {
  const session = await getSessionFromCookies();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  let created = 0;

  for (const post of POSTS) {
    const slug = slugify(post.title);
    const exists = await BlogPost.findOne({ slug });
    if (exists) continue;

    await BlogPost.create({
      slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags,
      status: 'published',
      publishedAt: new Date(Date.now() - Math.floor(Math.random() * 60) * 24 * 60 * 60 * 1000),
      viewCount: Math.floor(Math.random() * 90),
    });
    created++;
  }

  return NextResponse.json({ created });
}
