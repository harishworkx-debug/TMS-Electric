import { mainLocation } from './business';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  date: string;
  author: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-electrician-cost-oceanside',
    title: `How Much Does an Electrician Cost in ${mainLocation.name}, CA?`,
    excerpt: `A comprehensive guide to electrician costs, hourly rates, and flat fees for common electrical projects in ${mainLocation.name} and North County San Diego.`,
    date: '2023-11-01',
    author: 'Tyler (TMS Electric)',
    imageUrl: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    metaTitle: `How Much Does an Electrician Cost in ${mainLocation.name}? | TMS Electric`,
    metaDescription: `Wondering about electrician costs in ${mainLocation.name}, CA? Learn about hourly rates, panel upgrade costs, and pricing factors from a licensed local professional.`,
    content: `
      <h2>The True Cost of Hiring an Electrician in ${mainLocation.name}, CA</h2>
      <p>When you need electrical work done, the first question is usually, "How much is this going to cost?" While prices vary based on the complexity of the job, understanding the average costs in ${mainLocation.name} can help you budget and avoid surprises.</p>
      
      <h3>Hourly Rates vs. Flat Pricing</h3>
      <p>Most reputable electricians in California charge between $80 and $150 per hour. However, at TMS Electric, we often provide <strong>flat-rate, upfront pricing</strong>. This means you know exactly what the job will cost before we start, regardless of how many hours it takes us.</p>
      
      <h3>Common Electrical Project Costs</h3>
      <ul>
        <li><strong>Service Call / Diagnosis:</strong> Typically ranges from $75 to $150, which is often waived or applied to the repair cost if you hire the electrician for the job.</li>
        <li><strong>Outlet or Switch Replacement:</strong> Between $100 and $250 depending on whether it requires running new wire or upgrading to a GFCI/AFCI.</li>
        <li><strong>Electrical Panel Upgrade:</strong> Upgrading from 100 amps to 200 amps in ${mainLocation.name} generally costs between $2,500 and $4,500, depending on permit fees, SDG&E requirements, and stucco repair.</li>
        <li><strong>EV Charger Installation:</strong> Usually falls between $500 and $1,200 for the installation alone, assuming your current panel has the capacity.</li>
      </ul>

      <h3>Why You Shouldn't Just Choose the Cheapest Option</h3>
      <p>Electricity is not a place to cut corners. Hiring an unlicensed handyman might save you a few dollars upfront, but poor wiring is a leading cause of house fires. Always ensure your electrician holds a valid C-10 California contractor's license, is fully insured, and pulls the necessary city permits.</p>

      <p><em>Need a free, accurate estimate for your specific project? <a href="/contact">Contact TMS Electric today</a>.</em></p>
    `
  },
  {
    slug: 'why-does-circuit-breaker-keep-tripping',
    title: 'Why Does My Circuit Breaker Keep Tripping? (Diagnosis & Safety Guide)',
    excerpt: 'Is your circuit breaker repeatedly clicking off? Learn the difference between an overloaded circuit, a hazardous short circuit, and a deteriorating breaker box.',
    date: '2024-01-15',
    author: 'Tyler (TMS Electric)',
    imageUrl: 'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    metaTitle: 'Why Does My Circuit Breaker Keep Tripping? | TMS Electric Oceanside',
    metaDescription: 'Find out why your circuit breaker keeps tripping. Understand overloads, short circuits, and when to call a licensed electrician for repair in Oceanside, CA.',
    content: `
      <h2>Why Does Your Circuit Breaker Keep Shutting Off?</h2>
      <p>A tripped circuit breaker is one of the most common electrical frustrations homeowners face. While it is tempting to just push the switch back on and move on, a breaker is an intentional safety mechanism engineered to prevent electrical fires and wire melting. If a breaker trips repeatedly, it is warning you of an active condition that needs attention.</p>

      <h3>1. Overloaded Circuit (Most Common)</h3>
      <p>An overload occurs when the electrical demand on a specific branch circuit exceeds its designed amperage capacity (typically 15 or 20 amps). For example, running a hair dryer and a portable space heater on the same bathroom or bedroom circuit often pulls more than 1,800 watts at once, triggering the breaker’s thermal trip mechanism.</p>
      <p><em>Solution:</em> Unplug high-draw devices and test them on separate circuits. If your household demands more power, consider adding dedicated circuits or a <a href="/electrical-panel-upgrade-oceanside/">panel capacity upgrade</a>.</p>

      <h3>2. Short Circuit</h3>
      <p>A short circuit is a more dangerous condition caused when a hot wire contacts a neutral wire or metal enclosure. This creates an immediate drop in resistance and a sudden, massive surge of electrical current. You will often hear a distinct "pop" sound or see a brief flash inside the panel or receptacle.</p>
      <p><em>Safety Warning:</em> Never force a breaker to stay on if it trips immediately upon reset. This indicates a live short that requires professional <a href="/electrical-repair-oceanside/">electrical troubleshooting and repair</a>.</p>

      <h3>3. Ground Fault</h3>
      <p>Similar to a short circuit, a ground fault occurs when an energized hot wire makes contact with a bare ground wire, the metal junction box, or moisture. Ground faults are particularly common in outdoor outlets, kitchens, and garages, which is why California code mandates GFCI (Ground Fault Circuit Interrupter) protection in these areas.</p>

      <h3>4. Faulty or Weakened Circuit Breaker</h3>
      <p>Circuit breakers are mechanical devices that degrade over 20 to 30 years of thermal expansion and contraction. An aged breaker may trip under normal everyday electrical loads because its internal bimetallic strip has weakened. In older panels, deteriorated busbars can also generate excess heat.</p>

      <p>If you suspect an unsafe wiring issue or your breaker will not stay reset, turn off the affected circuit and schedule an appointment with our licensed team at <a href="/contact">TMS Electric</a> or call <strong>(760) 205-8556</strong>.</p>
    `
  },
  {
    slug: 'signs-you-need-electrical-panel-upgrade',
    title: '5 Warning Signs Your Home Needs an Electrical Panel Upgrade',
    excerpt: 'Still relying on a 100-amp or obsolete breaker panel? Here are the critical signs your Oceanside home needs a 200-amp electrical service upgrade.',
    date: '2024-02-10',
    author: 'Tyler (TMS Electric)',
    imageUrl: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    metaTitle: '5 Signs You Need an Electrical Panel Upgrade | TMS Electric',
    metaDescription: 'Is your electrical panel outdated? Learn the 5 warning signs that you need a 200-amp panel upgrade in Oceanside, CA. Protect your home and prepare for EV charging.',
    content: `
      <h2>Is Your Home’s Electrical Panel Prepared for Modern Demands?</h2>
      <p>Many homes in Oceanside, Vista, and coastal North County were constructed between the 1960s and 1980s. When these neighborhoods were built, household electricity powered little more than a refrigerator, an oven, and a television. Today, central air conditioning, induction cooktops, home theaters, and electric vehicle charging place unprecedented demands on residential wiring.</p>

      <h3>Sign 1: You Have a 100-Amp or Smaller Service Panel</h3>
      <p>Look at your main service breaker. If the number stamped on the main switch is 100 or less, your entire home is restricted to 100 amps of total electrical capacity. Installing a modern Level 2 EV charger alone requires a 50-amp dedicated circuit, consuming half of your home's total baseline capacity.</p>

      <h3>Sign 2: Hazardous Panel Brands (Zinsco & Federal Pacific)</h3>
      <p>If your panel box bears the brand name <em>Federal Pacific Electric (FPE Stab-Lok)</em>, <em>Zinsco</em>, or <em>Sylvania</em>, it has documented design defects. Independent testing has shown that breakers in these panels frequently fail to trip under overcurrent conditions, creating extreme fire hazards. Many insurance carriers in California now refuse to write homeowner policies until these panels are replaced.</p>

      <h3>Sign 3: Flickering Lights When Heavy Appliances Turn On</h3>
      <p>When your air conditioning compressor, microwave, or clothes dryer kicks on, do your lights dim or flicker for a second? This is a clear indicator that your current panel cannot supply the sudden inrush current demanded by large motor loads.</p>

      <h3>Sign 4: You Are Planning Rooftop Solar, an EV Charger, or an ADU</h3>
      <p>Adding solar power, an accessory dwelling unit (ADU), or a fast vehicle charger requires physical breaker space and certified busbar capacity. A <a href="/electrical-panel-upgrade-oceanside/">200-amp panel upgrade</a> ensures you have the necessary breaker slots and headroom required by SDG&E and municipal building inspectors.</p>

      <h3>Sign 5: Coastal Salt-Air Corrosion</h3>
      <p>Because Oceanside is situated along the Pacific coast, salt-laden marine air enters exterior meter main combos. If you see rust, greenish oxidation on copper terminals, or a burning smell, immediate replacement is essential for safety.</p>

      <p><em>Ready to evaluate your home's capacity? Check our <a href="/electrical-panel-upgrade-oceanside/">Oceanside electrical panel upgrade services</a> or call <strong>(760) 205-8556</strong> for an on-site load evaluation.</em></p>
    `
  },
  {
    slug: 'california-ev-charger-installation-requirements',
    title: 'California Home EV Charger Installation: Requirements & Permits',
    excerpt: 'Planning to install a Level 2 or Tesla Wall Connector in your garage? Here are the California electrical code requirements, panel specs, and permit steps.',
    date: '2024-03-01',
    author: 'Tyler (TMS Electric)',
    imageUrl: 'https://images.pexels.com/photos/19696238/pexels-photo-19696238.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    metaTitle: 'California EV Charger Installation Guide | TMS Electric Oceanside',
    metaDescription: 'Complete guide to California EV charger installation. Electrical panel requirements, 240V dedicated circuits, permits, and professional installation in Oceanside, CA.',
    content: `
      <h2>Installing a Level 2 EV Charger at Your California Home</h2>
      <p>Transitioning to an electric vehicle is exciting, but relying on a standard 120V household outlet (Level 1 charging) only provides 3 to 5 miles of range per hour of charging. To achieve overnight full charging (25 to 45 miles of range per hour), California homeowners install a dedicated 240V Level 2 charging station or Tesla Wall Connector.</p>

      <h3>1. Dedicated 240V Circuit Requirements</h3>
      <p>Under the National Electrical Code (NEC) and California Electrical Code (Title 24), an EV charger is classified as a <strong>continuous load</strong>. Continuous loads are legally required to operate at no more than 80% of the circuit breaker’s rated capacity:</p>
      <ul>
        <li>A 40-amp charger requires a dedicated <strong>50-amp circuit breaker</strong> and 6-gauge copper wiring.</li>
        <li>A 48-amp hardwired charger (like the Tesla Wall Connector) requires a dedicated <strong>60-amp circuit breaker</strong>.</li>
        <li>The circuit must be fully dedicated—no lights, receptacles, or other appliances may share the line.</li>
      </ul>

      <h3>2. Does Your Main Electrical Panel Have Enough Capacity?</h3>
      <p>Before installing the charging station, a licensed electrician must perform a formal NEC load calculation. If your home has a 100-amp service panel and already powers an electric range and central air conditioner, adding a 50-amp continuous load may exceed the safety threshold. In such cases, an <a href="/electrical-panel-upgrade-oceanside/">electrical panel upgrade</a> to 200 amps is recommended before charger commissioning.</p>

      <h3>3. Permitting and City of Oceanside Inspections</h3>
      <p>In the City of Oceanside and surrounding San Diego County communities, an electrical permit is required for any new 240V circuit installation. Pulling a permit ensures that wire gauges, conduit routing, GFCI protection, and breaker sizing comply with fire safety standards and protects your vehicle manufacturer warranty.</p>

      <p><em>Need a certified professional to assess your garage setup? Explore our <a href="/ev-charger-installation-oceanside/">Oceanside EV charger installation service</a> or call TMS Electric at <strong>(760) 205-8556</strong>.</em></p>
    `
  },
  {
    slug: 'when-to-call-electrician-for-outlet-problem',
    title: 'When to Call an Electrician for an Outlet Problem: DIY vs. Hazard',
    excerpt: 'Dead outlet, warm wall plate, or loose plugs? Learn what you can safely check yourself and when an outlet problem is an urgent fire hazard.',
    date: '2024-03-20',
    author: 'Tyler (TMS Electric)',
    imageUrl: 'https://images.pexels.com/photos/8293680/pexels-photo-8293680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    metaTitle: 'When to Call an Electrician for Outlet Problems | TMS Electric',
    metaDescription: 'Learn when an outlet problem is a simple fix vs a serious fire hazard. Guidance on warm outlets, sparking, and GFCI resets from licensed Oceanside electricians.',
    content: `
      <h2>When Is an Outlet Problem a Dangerous Fire Risk?</h2>
      <p>Every year, faulty electrical receptacles cause thousands of residential structure fires across the United States. While some outlet issues are simple nuisances, others are urgent warnings of loose connections, arcing, or deteriorated insulation inside your walls.</p>

      <h3>Safe Steps You Can Check Yourself (DIY)</h3>
      <ul>
        <li><strong>GFCI Reset Button:</strong> In kitchens, bathrooms, and garages, outlets are connected in series with a GFCI outlet. If an outlet stops working, look for a nearby GFCI outlet with a popped 'RESET' button and press it firmly.</li>
        <li><strong>Main Breaker Trip:</strong> Check your electrical panel to see if a breaker handle is sitting midway between ON and OFF. Switch it completely OFF, then firmly to ON.</li>
        <li><strong>Wall Switch Control:</strong> Many living rooms and bedrooms have half-hot receptacles controlled by an ordinary wall light switch.</li>
      </ul>

      <h3>When to Stop and Call a Licensed Electrician Immediately</h3>
      <ul>
        <li><strong>The Wall Plate Is Warm or Hot to the Touch:</strong> Receptacles should never generate noticeable heat. A hot outlet indicates excessive resistance and loose terminal screws—a leading cause of electrical fires.</li>
        <li><strong>Visible Sparking or Popping Sounds:</strong> If plugging in a device produces a noticeable spark or crackle, the contact points inside the outlet have worn out or loose wires are arcing.</li>
        <li><strong>Discoloration or Scorching:</strong> Yellowish, brown, or black scorch marks on the plastic faceplate indicate that temperatures inside the electrical box have reached hazardous levels.</li>
        <li><strong>Loose Plugs That Fall Out:</strong> Over time, the internal brass contact blades weaken. Loose contacts cause arcing, overheating, and erratic power delivery to your electronics.</li>
      </ul>

      <p>If you notice any of these warning signs, turn off the circuit breaker immediately. Our licensed team at <a href="/outlet-switch-repair-oceanside/">TMS Electric Outlet & Switch Repair</a> can inspect the branch wiring, install modern tamper-resistant GFCI/AFCI receptacles, and make your home safe. Call us at <strong>(760) 205-8556</strong> for prompt service.</p>
    `
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
