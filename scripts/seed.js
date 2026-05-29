// FlowPro seed script — run with: node scripts/seed.js [optional_password]
// Sets ADMIN_PASSWORD_HASH in .env.local and seeds 10 plumbing blog posts.

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ENV_PATH = path.join(__dirname, '..', '.env.local');

function parseEnv(raw) {
  const env = {};
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
  return env;
}

async function main() {
  const raw = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, 'utf8') : '';
  const env = parseEnv(raw);
  const MONGODB_URI = env.MONGODB_URI;
  if (!MONGODB_URI || MONGODB_URI.includes('CHANGE_ME')) {
    console.error('❌  Set MONGODB_URI in .env.local first.');
    process.exit(1);
  }

  // Hash password and write to .env.local
  const password = process.argv[2] || env.ADMIN_PASSWORD || 'Admin@1234';
  const hash = await bcrypt.hash(password, 12);
  const updated = raw.includes('ADMIN_PASSWORD_HASH=')
    ? raw.replace(/ADMIN_PASSWORD_HASH=.*/, `ADMIN_PASSWORD_HASH=${hash}`)
    : raw + `\nADMIN_PASSWORD_HASH=${hash}\n`;
  fs.writeFileSync(ENV_PATH, updated, 'utf8');
  console.log('✅  Admin password hashed and saved to .env.local');

  // Connect and seed
  await mongoose.connect(MONGODB_URI);
  console.log('✅  Connected to MongoDB (flowpro)');

  const BlogPostSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: String, content: String, coverImage: String,
    category: String, tags: [String],
    status: { type: String, default: 'published' },
    publishedAt: Date, viewCount: { type: Number, default: 0 },
  }, { timestamps: true });

  const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);

  const posts = [
    {
      slug: '10-signs-you-need-a-plumber',
      title: '10 Signs You Need a Plumber Before It Becomes an Emergency',
      category: 'General',
      tags: ['plumbing tips', 'prevention', 'warning signs'],
      excerpt: 'Ignoring these 10 warning signs could turn a $200 repair into a $5,000 emergency. Our licensed plumbers explain what to watch for.',
      content: '<h2>Why Early Detection Saves Money</h2><p>Most plumbing emergencies don\'t happen overnight — they develop slowly from small warning signs that homeowners miss or ignore. Catching these signs early is the difference between a minor repair and a major disaster.</p><h2>10 Warning Signs</h2><ul><li><strong>Slow drains</strong> — Gradual slowdown in multiple drains often signals a main line blockage forming.</li><li><strong>Water pressure drops</strong> — Sudden or gradual pressure loss can indicate a hidden leak or corroding pipe.</li><li><strong>Discolored water</strong> — Rust-colored or cloudy water signals pipe corrosion or sediment buildup.</li><li><strong>Higher water bill</strong> — An unexplained jump in usage almost always means a hidden leak.</li><li><strong>Wet spots on walls or ceiling</strong> — Any unexplained moisture inside walls is an emergency waiting to happen.</li><li><strong>Gurgling sounds</strong> — Gurgling from drains or toilets indicates drain venting issues or partial blockages.</li><li><strong>Low water heater performance</strong> — Running out of hot water faster or seeing rusty water from taps signals water heater failure.</li><li><strong>Sewage smell</strong> — Any sewage odor inside the home needs immediate professional attention.</li><li><strong>Frequent clogs</strong> — Recurring clogs in the same drain usually mean a deeper structural issue in the line.</li><li><strong>Visible pipe corrosion</strong> — Green staining on copper pipes or rust on iron pipes means active corrosion that will fail soon.</li></ul><h2>What to Do</h2><p>If you notice any of these signs, call a licensed plumber before they become emergencies. A diagnostic visit is typically far less expensive than emergency repair plus water damage remediation.</p><p>FlowPro licensed plumbers are available same-day for diagnostics. Call us — the estimate is always free.</p>',
    },
    {
      slug: 'how-to-prevent-frozen-pipes',
      title: 'How to Prevent Frozen Pipes This Winter',
      category: 'Pipe Maintenance',
      tags: ['winter plumbing', 'frozen pipes', 'pipe maintenance'],
      excerpt: 'A burst pipe from freezing can release 100+ gallons per hour. Our plumbers share the exact steps to prevent it — and what to do if it\'s too late.',
      content: '<h2>Why Frozen Pipes Are Dangerous</h2><p>Water expands when it freezes, and pipes can only withstand so much pressure. When a pipe freezes and bursts, the damage happens when it thaws — releasing 100+ gallons per hour into your home if you\'re not there to stop it.</p><h2>Prevention Steps</h2><ul><li>Keep the thermostat above 55°F even when away from home</li><li>Open cabinet doors under sinks on exterior walls to allow warm air to circulate</li><li>Let faucets drip slightly during extreme cold snaps to keep water moving</li><li>Insulate exposed pipes in attics, crawl spaces, and garages with foam pipe insulation</li><li>Seal gaps and cracks in exterior walls near pipes with caulk or spray foam</li><li>Know where your main water shutoff is before you need it</li><li>Disconnect outdoor hoses before the first freeze</li></ul><h2>If You Suspect a Frozen Pipe</h2><p>If you turn on a faucet and get little to no water during cold weather, you likely have a frozen pipe. Do NOT attempt to thaw with an open flame — use a hair dryer or heat lamp and work from the faucet toward the frozen section.</p><p>If you\'re not sure where the freeze is, or if the pipe has already burst, turn off your main water supply immediately and call a licensed plumber.</p>',
    },
    {
      slug: 'tankless-vs-tank-water-heater',
      title: 'Tankless vs. Tank Water Heater: Which Is Right for Your Home?',
      category: 'Water Heater',
      tags: ['water heater', 'tankless', 'energy efficiency'],
      excerpt: 'The right choice depends on your household size, hot water demand, and budget. Our certified water heater technicians break it down.',
      content: '<h2>The Basic Difference</h2><p>Tank water heaters store 40–80 gallons of hot water ready at all times. Tankless (on-demand) heaters heat water only when a faucet is opened. Each has distinct advantages depending on your situation.</p><h2>Tank Water Heaters</h2><p><strong>Pros:</strong> Lower upfront cost ($500–$1,500 installed), simpler technology, familiar to most homeowners.</p><p><strong>Cons:</strong> Higher monthly energy cost (constantly keeping water hot), limited capacity (run out during heavy use), typically 8–12 year lifespan.</p><h2>Tankless Water Heaters</h2><p><strong>Pros:</strong> Endless hot water, 30–40% lower energy bills, 20+ year lifespan, smaller physical footprint.</p><p><strong>Cons:</strong> Higher upfront cost ($1,500–$3,500 installed), may require gas line or electrical upgrades, some lag time at distant faucets.</p><h2>Which Should You Choose?</h2><ul><li>Small household (1–2 people): Tank is usually fine and more affordable.</li><li>Family of 3+: Tankless makes strong sense — no more cold showers during peak use.</li><li>Planning to stay in the home long-term: Tankless pays back its premium within 4–6 years.</li><li>Frequently runs out of hot water: This is the clearest sign to go tankless.</li></ul><p>FlowPro technicians can assess your home\'s gas or electrical capacity and recommend the optimal unit for your specific situation. All estimates are free.</p>',
    },
    {
      slug: '5-reasons-drain-keeps-clogging',
      title: '5 Reasons Your Drain Keeps Clogging (And How to Fix Them)',
      category: 'Drain Tips',
      tags: ['drain cleaning', 'clogged drain', 'plumbing tips'],
      excerpt: 'If your drain keeps clogging after you clear it, something deeper is wrong. Our plumbers explain the 5 most common causes and the permanent fix for each.',
      content: '<h2>When a Drain Keeps Coming Back</h2><p>A one-time clog is normal. A drain that clogs every few weeks is telling you something. Here are the five most common causes of recurring drain clogs and what actually fixes them.</p><h2>1. Partial Blockage (Not Fully Cleared)</h2><p>Most hardware-store drain cleaners and basic snaking only punch a hole through a blockage — they don\'t remove it. Grease, soap scum, and organic matter reaccumulate quickly. The fix: hydro-jetting, which scours the entire pipe wall clean.</p><h2>2. Root Intrusion</h2><p>Tree roots naturally seek moisture and will find tiny cracks in sewer pipes. They grow into the pipe and cause recurring blockages. The fix: camera inspection to confirm, followed by root cutting and often pipe lining.</p><h2>3. Pipe Sag (Belly in the Line)</h2><p>Over time, soil shifts can cause a section of sewer pipe to sag, creating a low point where waste accumulates. No amount of snaking fixes this permanently. The fix: pipe replacement or trenchless repair of the affected section.</p><h2>4. Grease Buildup</h2><p>Even if you never pour grease directly down the drain, cooking fats coat pipes gradually. The fix: hot water hydro-jetting dissolves and flushes grease buildup completely.</p><h2>5. Incorrect Pipe Venting</h2><p>Drain vents allow air into the system to let waste flow smoothly. Blocked or incorrectly installed vents cause slow drainage that mimics blockages. The fix: a licensed plumber diagnoses and corrects the venting.</p>',
    },
    {
      slug: 'how-to-shut-off-home-water',
      title: 'How to Shut Off Your Home\'s Water in an Emergency',
      category: 'Emergency Plumbing',
      tags: ['emergency plumbing', 'water shutoff', 'burst pipe'],
      excerpt: 'Every homeowner should know where their water shutoff is. Find it before you need it — this guide shows you where to look and how to use it.',
      content: '<h2>Why This Matters</h2><p>When a pipe bursts, a faucet won\'t turn off, or a water heater fails, every second of delay increases damage. Knowing how to shut off your home\'s water is one of the most important things you can do as a homeowner.</p><h2>Types of Water Shutoffs</h2><p><strong>Main Shutoff:</strong> Usually located where the water supply enters your home — in the basement, crawl space, utility closet, or outside near the foundation. Turning this off stops all water to the house.</p><p><strong>Individual Fixture Shutoffs:</strong> Every sink, toilet, and appliance has its own shutoff valve — usually located directly behind or beneath the fixture. These let you isolate one problem without shutting off the whole house.</p><h2>How to Shut Off the Main Valve</h2><ul><li>Gate valves (round handle): Turn clockwise until it stops. May take several full turns.</li><li>Ball valves (lever handle): Turn 90 degrees perpendicular to the pipe to close.</li></ul><h2>What to Do After Shutoff</h2><p>Once the water is off, turn on the lowest faucet in the house to drain remaining pressure. Then call a licensed plumber. The sooner a plumber diagnoses and repairs the issue, the less water damage you\'ll have to deal with.</p><p>Do this now: locate your main shutoff and make sure everyone in your household knows where it is and how to use it.</p>',
    },
    {
      slug: 'why-you-should-never-ignore-dripping-faucet',
      title: 'Why You Should Never Ignore a Dripping Faucet',
      category: 'Pipe Maintenance',
      tags: ['faucet repair', 'water waste', 'plumbing maintenance'],
      excerpt: 'A single dripping faucet can waste 3,000+ gallons of water per year and cost you $200 in utility bills. Here\'s why — and the fix.',
      content: '<h2>It Seems Small But Isn\'t</h2><p>A faucet dripping once per second wastes over 3,000 gallons of water per year. At average US water rates, that\'s $150–$250 added to your annual utility bills — from a single faucet. Multiple dripping fixtures multiply that cost.</p><h2>The Real Damage Goes Deeper</h2><p>Beyond wasted water, a constantly dripping faucet indicates a worn valve seat, corroded packing, or degraded O-rings. Left unaddressed, these issues worsen — eventually requiring full faucet replacement rather than a simple washer repair.</p><h2>Common Causes</h2><ul><li><strong>Worn washers</strong> — The most common cause in compression faucets. The washer presses against the valve seat every use and gradually wears down.</li><li><strong>Worn O-rings</strong> — The stem screw on cartridge faucets uses O-rings that degrade over time.</li><li><strong>Corroded valve seat</strong> — Sediment accumulates in the valve seat, causing uneven sealing and leakage.</li><li><strong>Loose packing nut</strong> — Worn packing around the stem allows water to seep through.</li></ul><h2>When to Call a Plumber</h2><p>Basic washer replacement on a standard faucet is DIY-friendly. However, if you\'ve replaced the washer and the drip persists, the valve seat may be corroded — this requires professional tools to resurface or replace. A licensed FlowPro plumber can diagnose and repair any faucet type quickly with an upfront flat rate.</p>',
    },
    {
      slug: 'hydro-jetting-vs-snaking',
      title: 'Hydro-Jetting vs. Snaking: What\'s the Difference?',
      category: 'Drain Tips',
      tags: ['hydro-jetting', 'drain cleaning', 'drain snake'],
      excerpt: 'Both clear clogs, but only one actually cleans your pipes. Our licensed drain specialists explain when to use each method.',
      content: '<h2>Two Different Tools for Two Different Jobs</h2><p>When your drain is clogged, a plumber has two primary clearing methods: snaking and hydro-jetting. They\'re not interchangeable — choosing the right one depends on the type and severity of the blockage.</p><h2>Drain Snaking (Mechanical Augering)</h2><p>A drain snake (or auger) is a long, flexible metal cable that a plumber feeds into the drain to physically break up or grab a blockage. It punches a hole through the clog, restoring basic flow.</p><p><strong>Best for:</strong> Soft blockages close to the drain (hair, small objects, minor grease), toilets, and situations where a quick fix is needed.</p><p><strong>Limitations:</strong> Doesn\'t remove buildup from pipe walls. The blockage typically returns within weeks or months because residue remains.</p><h2>Hydro-Jetting</h2><p>Hydro-jetting uses pressurized water (typically 4,000+ PSI) through a specialized nozzle to scour the entire circumference of the pipe. It doesn\'t just punch through a clog — it removes every layer of buildup, leaving the pipe as clean as when it was installed.</p><p><strong>Best for:</strong> Recurring clogs, grease buildup, tree roots (combined with root cutting), main sewer line cleaning, and preventive maintenance.</p><p><strong>Limitations:</strong> Not appropriate for severely deteriorated pipes that might not withstand pressure. A camera inspection first is always recommended.</p><h2>Which Do You Need?</h2><p>First-time clog? Try snaking. Drain keeps coming back? That\'s a hydro-jetting job. Our FlowPro plumbers carry both on every truck and will recommend the right method after a camera inspection — at no extra charge for the assessment.</p>',
    },
    {
      slug: 'complete-guide-water-heater-maintenance',
      title: 'The Complete Guide to Water Heater Maintenance',
      category: 'Water Heater',
      tags: ['water heater maintenance', 'anode rod', 'water heater tips'],
      excerpt: 'Regular maintenance can extend your water heater\'s life by 5–7 years. Our certified technicians explain exactly what to check and how often.',
      content: '<h2>Why Maintenance Matters</h2><p>The average water heater lasts 8–12 years with no maintenance. With proper maintenance, that same unit can last 15–20 years. The tasks are simple, inexpensive, and pay for themselves many times over in avoided replacement costs.</p><h2>Annual Tasks</h2><p><strong>Flush the tank:</strong> Sediment accumulates at the bottom of tank water heaters over time, reducing efficiency and eventually causing failure. Flushing the tank annually (or every 6 months in hard water areas) removes this buildup. Attach a hose to the drain valve and empty a few gallons until the water runs clear.</p><p><strong>Inspect the anode rod:</strong> The anode rod is a sacrificial metal rod inside the tank that prevents corrosion. When it\'s consumed, the tank starts corroding. Check it annually — if it\'s less than ½ inch thick or heavily crusted, replace it. This single step can add 5+ years to your water heater\'s life.</p><p><strong>Test the temperature-pressure relief valve:</strong> The T&P valve is a safety device that prevents the tank from over-pressurizing. Lift the lever briefly to make sure it operates and isn\'t corroded shut. If it doesn\'t open, replace it immediately.</p><h2>Every 3–5 Years</h2><p><strong>Insulate the pipes and tank</strong> — Pipe insulation on the first few feet of hot and cold supply lines reduces heat loss. Tank insulation blankets reduce standby heat loss on older units.</p><h2>Signs You Need Professional Service</h2><ul><li>Popping or rumbling sounds (severe sediment buildup)</li><li>Rusty water (tank corrosion underway)</li><li>Insufficient hot water (sediment reducing tank capacity)</li><li>Visible corrosion or moisture around the unit</li></ul>',
    },
    {
      slug: 'how-to-detect-hidden-pipe-leak',
      title: 'How to Detect a Hidden Pipe Leak Before It Causes Damage',
      category: 'Pipe Maintenance',
      tags: ['leak detection', 'hidden leak', 'pipe maintenance'],
      excerpt: 'Hidden leaks can go undetected for months while causing thousands in damage. Here\'s how to catch them early using simple checks any homeowner can do.',
      content: '<h2>The Hidden Leak Problem</h2><p>Not all pipe leaks announce themselves with dripping water or wet floors. Many leaks happen inside walls, under slabs, or in crawl spaces — slowly destroying structural materials and growing mold colonies for months before you notice anything visible.</p><h2>DIY Detection Methods</h2><p><strong>Check your water meter:</strong> Turn off all water in the house. Note the meter reading. Wait 2 hours without using any water. If the meter moved, you have a leak. This is the single most reliable early detection method.</p><p><strong>Monitor your water bill:</strong> A sudden unexplained increase of 15%+ with normal usage is a strong indicator of a hidden leak. Compare the same month year-over-year for seasonal context.</p><p><strong>Check under sinks and around appliances:</strong> Look for water staining, mineral deposits, soft drywall, or musty odors under every sink, behind the refrigerator, and around the dishwasher.</p><p><strong>Look for hot spots on the floor:</strong> If you have a hot water slab leak, warm sections of the floor near the water heater path are a tell-tale sign.</p><p><strong>Watch for unexplained wet spots or staining:</strong> Ceiling stains, soft drywall, and musty smells in certain rooms often indicate leaks from pipes running above or behind those surfaces.</p><h2>When to Call a Professional</h2><p>If your meter test confirms a leak but you can\'t find it visually, you need professional acoustic leak detection. FlowPro uses specialized equipment to pinpoint leaks behind walls and under slabs — often without any excavation.</p>',
    },
    {
      slug: 'what-to-do-burst-pipe',
      title: 'What to Do When You Have a Burst Pipe',
      category: 'Emergency Plumbing',
      tags: ['burst pipe', 'emergency plumbing', 'water damage'],
      excerpt: 'A burst pipe releases 100+ gallons per hour. Every minute counts. Follow these exact steps to minimize damage before the plumber arrives.',
      content: '<h2>Stay Calm and Act Immediately</h2><p>A burst pipe is a household emergency, but panic makes things worse. Follow these steps in order — you have about 10–15 minutes before damage becomes severe.</p><h2>Step 1: Shut Off the Main Water Supply</h2><p>Locate your main water shutoff (typically in the basement, utility room, or near the front foundation) and turn it off immediately. If it\'s a gate valve (round wheel), turn clockwise until it stops. If it\'s a ball valve (lever), turn it perpendicular to the pipe.</p><h2>Step 2: Open Faucets to Drain Remaining Water</h2><p>Open the lowest faucet in your home to drain residual water from the pipes. This reduces pressure on the broken pipe and limits continued flow through the burst area.</p><h2>Step 3: Turn Off the Water Heater</h2><p>If you have a tank water heater, turn it off to prevent damage from running without water. Electric heaters especially can be damaged by heating an empty tank.</p><h2>Step 4: Document the Damage</h2><p>Before any cleanup, photograph everything — the burst pipe location, water damage, affected materials. This is essential for insurance claims.</p><h2>Step 5: Begin Minimal Water Extraction</h2><p>Remove standing water if you have a wet/dry vacuum or can use towels safely. Don\'t use standard vacuums or electrical equipment near standing water.</p><h2>Step 6: Call a Licensed Plumber Immediately</h2><p>Don\'t wait to see if it \'settles down.\' Call FlowPro\'s emergency line for 24/7 dispatch. Our plumbers arrive with repair parts and can stop the damage and make a permanent repair on the same visit in most cases.</p>',
    },
  ];

  let created = 0;
  let skipped = 0;

  for (const post of posts) {
    const existing = await BlogPost.findOne({ slug: post.slug });
    if (existing) { skipped++; continue; }

    const daysAgo = Math.floor(Math.random() * 90) + 1;
    const publishedAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
    const viewCount = Math.floor(Math.random() * 120);

    await BlogPost.create({ ...post, publishedAt, viewCount });
    created++;
    console.log(`  ✅  "${post.title}"`);
  }

  console.log(`\n✅  Done! ${created} posts created, ${skipped} skipped (already exist).`);
  console.log('\n📋  Next steps:');
  console.log('   1. cd flowpro && npm install');
  console.log('   2. npm run dev  (runs on http://localhost:3000)');
  console.log(`   3. Admin panel: http://localhost:3000/admin/login`);
  console.log(`   4. Username: ${env.ADMIN_USERNAME || 'admin'}  Password: ${password}`);

  await mongoose.disconnect();
}

main().catch(err => { console.error(err); process.exit(1); });
