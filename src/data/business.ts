export const business = {
  name: 'TMS Electric',
  shortName: 'TMS Electric',
  domain: 'tmselectric.net',
  phone: '+1 760-673-8092',
  phoneRaw: '17606738092',
  phoneDisplay: '(760) 769-1759 ',
  email: 'info@tmselectric.net',
  address: '565 Lands End Way',
  city: 'Oceanside',
  state: 'CA',
  zip: '92058',
  license: '1069895',
  hours: 'Mon–Sat 6:00 AM – 4:30 PM',
  mapsUrl: 'https://maps.app.goo.gl/ty9bCFBRYCkkdbk97',
  mapsEmbed:
    'https://www.google.com/maps?q=TMS+Electric+565+Lands+End+Way+Oceanside+CA+92058&output=embed',
  rating: 5,
  reviewCount: 73,
  yearsInBusiness: 15,
  founded: 2010,
  serviceArea: 'North County San Diego',
  social: {
    facebook: '',
    yelp: 'https://www.yelp.com/biz/tms-electric-oceanside-2',
  },
};

export const mainLocation = {
  slug: 'oceanside',
  name: 'Oceanside',
  state: 'CA',
  county: 'San Diego County',
  description:
    'Oceanside is a coastal city in North County San Diego, home to over 170,000 residents. TMS Electric has proudly served Oceanside homeowners and businesses for over 15 years, providing reliable electrical services from our base on Lands End Way.',
  neighborhoods: [
    'Downtown Oceanside',
    'South Oceanside',
    'North Oceanside',
    'Rancho Del Oro',
    'Ivey Ranch',
    'El Camino Real',
    'Fire Mountain',
    'Loma Alta',
  ],
};

export const serviceAreas = [
  {
    slug: 'oceanside',
    name: 'Oceanside',
    state: 'CA',
    zip: '92058',
    description:
      'Our home base. TMS Electric is headquartered at 565 Lands End Way in Oceanside, serving the entire city and surrounding neighborhoods with fast, reliable electrical service.',
    neighborhoods: [
      'Downtown Oceanside',
      'South Oceanside',
      'Rancho Del Oro',
      'Ivey Ranch',
      'Fire Mountain',
      'Loma Alta',
    ],
  },
  {
    slug: 'vista',
    name: 'Vista',
    state: 'CA',
    zip: '92081',
    description:
      'Just inland from Oceanside, Vista is a growing city with a mix of residential and commercial properties. TMS Electric provides full electrical services throughout Vista, from downtown to the Shadowridge area.',
    neighborhoods: ['Downtown Vista', 'Shadowridge', 'Vista Village', 'Buena Creek', 'Montgomery Heights'],
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    state: 'CA',
    zip: '92008',
    description:
      'A thriving coastal city known for its villages and business parks. TMS Electric serves Carlsbad homeowners and businesses with expert electrical installations, panel upgrades, and EV charger installations.',
    neighborhoods: ['Old Carlsbad', 'La Costa', 'Aviara', 'Bressi Ranch', 'Calavera Hills', 'Sage Creek'],
  },
  {
    slug: 'san-marcos',
    name: 'San Marcos',
    state: 'CA',
    zip: '92078',
    description:
      'Home to Cal State San Marcos and a growing tech corridor, San Marcos is a key service area for TMS Electric. We handle everything from residential rewiring to commercial tenant improvements.',
    neighborhoods: ['San Marcos City Center', 'Lake San Marcos', 'Discovery Hills', 'Richland', 'Santa Fe Hills'],
  },
  {
    slug: 'encinitas',
    name: 'Encinitas',
    state: 'CA',
    zip: '92024',
    description:
      'A picturesque coastal community with a mix of historic and modern homes. TMS Electric serves Encinitas with electrical repairs, lighting installations, and panel upgrades tailored to coastal living.',
    neighborhoods: ['Old Encinitas', 'Leucadia', 'Cardiff-by-the-Sea', 'Olivenhain', 'New Encinitas'],
  },
  {
    slug: 'escondido',
    name: 'Escondido',
    state: 'CA',
    zip: '92025',
    description:
      'One of North County\'s largest cities, Escondido has a diverse mix of older homes and new developments. TMS Electric provides comprehensive electrical services including panel upgrades, EV chargers, and emergency repairs.',
    neighborhoods: ['Downtown Escondido', 'North Escondido', 'South Escondido', 'East Valley', 'Hidden Meadows'],
  },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'residential-electrician',
    title: 'Residential Electrician',
    shortTitle: 'Residential Electrician',
    icon: 'Home',
    heroImage: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Licensed residential electrician inspecting a home fuse box in Oceanside, CA',
    metaTitle: 'Residential Electrician Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Need a trusted residential electrician in Oceanside, CA? TMS Electric handles home wiring, panel upgrades, lighting, outlets, and more. Licensed & insured. Call (760) 769-1759 .',
    h1: 'Residential Electrician in Oceanside, CA',
    tagline: 'Your home\'s electrical system, done right the first time.',
    description:
      'Your home deserves an electrician who treats it like their own. At TMS Electric, we provide comprehensive residential electrical services throughout Oceanside and North County San Diego. From routine outlet installations to full panel upgrades and whole-home rewiring, our licensed electricians deliver clean, code-compliant work that stands the test of time. We show up on time, explain everything in plain terms, and never recommend work you do not need.',
    benefits: [
      'Whole-home electrical inspections and troubleshooting',
      'New construction and remodel wiring',
      'Code compliance corrections for older homes',
      'Whole-home surge protection installation',
      'Smoke and carbon monoxide detector installation',
      'Attic and crawl space lighting',
    ],
    process: [
      {
        title: 'Schedule Your Visit',
        description: 'Call us at (760) 769-1759  or request service online. We will find a time that works for you, often with same-day availability for urgent issues.',
      },
      {
        title: 'On-Site Assessment',
        description: 'Our electrician arrives on time, inspects the issue or project scope, and provides a clear, upfront estimate before any work begins.',
      },
      {
        title: 'Clean, Professional Work',
        description: 'We complete the job to code, clean up after ourselves, and walk you through everything we did before we leave.',
      },
    ],
    faqs: [
      {
        question: 'Are you a licensed residential electrician in Oceanside?',
        answer: 'Yes. TMS Electric holds California contractor license #1069895 and is fully insured. We have been serving Oceanside homeowners for over 15 years.',
      },
      {
        question: 'Do you offer free estimates for residential electrical work?',
        answer: 'We provide upfront pricing on every job. For most residential repairs and installations, we can give you a clear estimate after a quick on-site assessment. Call (760) 769-1759  to schedule.',
      },
      {
        question: 'Can you upgrade the electrical panel in an older Oceanside home?',
        answer: 'Absolutely. Many homes in Oceanside were built with 100-amp or smaller panels that cannot handle modern loads. We specialize in upgrading to 200-amp service safely and efficiently.',
      },
      {
        question: 'Do you handle whole-home rewiring?',
        answer: 'Yes. Whether your home has outdated aluminum wiring, knob-and-tube, or you are remodeling, we can rewire your entire home to current code with minimal disruption.',
      },
    ],
  },
  {
    slug: 'commercial-electrician',
    title: 'Commercial Electrician',
    shortTitle: 'Commercial Electrician',
    icon: 'Building2',
    heroImage: 'https://images.pexels.com/photos/17842843/pexels-photo-17842843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Commercial electrician inspecting industrial electrical panels in Oceanside, CA',
    metaTitle: 'Commercial Electrician Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Commercial electrician in Oceanside, CA for offices, retail, restaurants, and industrial facilities. Tenant improvements, wiring, lighting, panels. Call (760) 769-1759 .',
    h1: 'Commercial Electrician in Oceanside, CA',
    tagline: 'Keep your business powered, safe, and up to code.',
    description:
      'When your business depends on reliable power, you need a commercial electrician who understands uptime. TMS Electric provides commercial electrical services across Oceanside and North County San Diego for offices, retail spaces, restaurants, warehouses, and industrial facilities. From tenant improvements and new build-outs to emergency repairs and preventative maintenance, we keep your operations running smoothly with minimal disruption to your business.',
    benefits: [
      'Tenant improvements and build-outs',
      'Commercial lighting design and installation',
      'Three-phase power installation and repair',
      'Commercial panel and switchgear work',
      'Exit and emergency lighting systems',
      'Preventative maintenance contracts',
    ],
    process: [
      {
        title: 'Consultation & Scope',
        description: 'We meet with you on-site to understand your business needs, timeline, and budget. You get a detailed scope of work and transparent pricing.',
      },
      {
        title: 'Scheduling That Works',
        description: 'We work around your business hours, including nights and weekends, so your operations are not interrupted.',
      },
      {
        title: 'Code-Compliant Completion',
        description: 'All commercial work is done to NEC and local code standards, inspected, and documented for your records.',
      },
    ],
    faqs: [
      {
        question: 'What types of commercial properties do you service in Oceanside?',
        answer: 'We service offices, retail stores, restaurants, medical offices, warehouses, and light industrial facilities throughout Oceanside and North County San Diego.',
      },
      {
        question: 'Can you work after hours to avoid business disruption?',
        answer: 'Yes. We schedule commercial work around your operating hours, including nights and weekends, so your business stays up and running.',
      },
      {
        question: 'Do you offer maintenance contracts for commercial properties?',
        answer: 'We do. Preventative maintenance contracts help catch problems before they cause downtime. Call us at (760) 769-1759  to discuss a plan for your facility.',
      },
      {
        question: 'Are you experienced with three-phase power systems?',
        answer: 'Yes. Our commercial electricians are fully trained in three-phase power installation, troubleshooting, and repair for industrial and commercial applications.',
      },
    ],
  },
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair',
    shortTitle: 'Electrical Repair',
    icon: 'Wrench',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Electrician repairing a circuit breaker panel with colorful wires in Oceanside, CA',
    metaTitle: 'Electrical Repair Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Fast, reliable electrical repair in Oceanside, CA. Flickering lights, tripping breakers, dead outlets, and more. Licensed electricians. Call (760) 769-1759  today.',
    h1: 'Electrical Repair in Oceanside, CA',
    tagline: 'Safe, lasting fixes for every electrical problem.',
    description:
      'Electrical problems do not wait for a convenient time. Whether your breakers keep tripping, your lights flicker when you plug in the microwave, or an outlet stopped working entirely, TMS Electric provides fast, accurate electrical repair throughout Oceanside. Our electricians do not just treat symptoms, we find the root cause and fix it right, so the problem does not come back.',
    benefits: [
      'Circuit breaker tripping diagnosis and repair',
      'Flickering or dimming light troubleshooting',
      'Dead or intermittent outlet repair',
      'Short circuit and ground fault repair',
      'Aluminum wiring remediation',
      'Burning smell or hot outlet investigation',
    ],
    process: [
      {
        title: 'Describe the Problem',
        description: 'Call us at (760) 769-1759  and tell us what you are experiencing. We can often schedule same-day service for urgent repairs.',
      },
      {
        title: 'Thorough Diagnosis',
        description: 'Our electrician traces the problem to its source using professional diagnostic tools, not guesswork.',
      },
      {
        title: 'Lasting Repair',
        description: 'We fix the root cause, test the circuit, and confirm everything works safely before we pack up.',
      },
    ],
    faqs: [
      {
        question: 'How much does electrical repair cost in Oceanside?',
        answer: 'Costs vary depending on the problem. We provide upfront pricing after diagnosing the issue, so you know the cost before we start any repair work. Call (760) 769-1759  for a quote.',
      },
      {
        question: 'Can you fix a breaker that keeps tripping?',
        answer: 'Yes. A tripping breaker usually means an overloaded circuit, a short, or a bad breaker. We diagnose the exact cause and fix it safely so it does not recur.',
      },
      {
        question: 'Is a burning smell from an outlet dangerous?',
        answer: 'Yes, a burning smell or warm outlet is a serious safety hazard. Turn off the breaker to that circuit and call us immediately at (760) 769-1759 . Do not use the outlet until it has been inspected and repaired.',
      },
      {
        question: 'Do you repair aluminum wiring in older homes?',
        answer: 'Yes. We are experienced in aluminum wiring remediation, including pigtailing with copper connectors and full rewiring where needed to meet current safety standards.',
      },
    ],
  },
  {
    slug: 'emergency-electrician',
    title: 'Emergency Electrician',
    shortTitle: 'Emergency Electrician',
    icon: 'Siren',
    heroImage: 'https://images.pexels.com/photos/34610697/pexels-photo-34610697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Emergency electrician crew repairing damaged electrical lines in Oceanside, CA',
    metaTitle: 'Emergency Electrician Oceanside CA 24/7 | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Emergency electrician in Oceanside, CA. Power out, sparking outlets, burning smell? TMS Electric offers fast emergency electrical service. Call (760) 769-1759  now.',
    h1: 'Emergency Electrician in Oceanside, CA',
    tagline: 'When you need an electrician now, we are ready.',
    description:
      'Electrical emergencies do not keep business hours, and neither do we. If you have sparking outlets, a burning smell, a panel that is hot to the touch, or you have lost power to part of your home, call TMS Electric right away. Our emergency electricians serve Oceanside and all of North County San Diego with fast response times and the expertise to make your home safe again.',
    benefits: [
      'Sparking or arcing outlet response',
      'Burning smell or hot panel investigation',
      'Partial or complete power loss repair',
      'Storm and water damage electrical repair',
      'Tripped breaker that will not reset',
      'Downed or damaged wiring repair',
    ],
    process: [
      {
        title: 'Call Immediately',
        description: 'Call (760) 769-1759 . If there is an active fire risk, turn off your main breaker and call 911 first. Otherwise, we will dispatch an electrician as quickly as possible.',
      },
      {
        title: 'Rapid Response',
        description: 'Our emergency electrician arrives as quickly as possible to assess the situation and make it safe.',
      },
      {
        title: 'Safe & Stable',
        description: 'We stabilize the immediate hazard, then provide a clear plan for any permanent repairs needed.',
      },
    ],
    faqs: [
      {
        question: 'Do you offer 24/7 emergency electrical service in Oceanside?',
        answer: 'Yes. TMS Electric provides emergency electrical service throughout Oceanside and North County San Diego. Call (760) 769-1759  any time, day or night.',
      },
      {
        question: 'What counts as an electrical emergency?',
        answer: 'Sparking outlets, a burning or fishy smell near electrical panels, a hot breaker panel, partial power loss, or any situation where you feel unsafe should be treated as an emergency. When in doubt, call us.',
      },
      {
        question: 'What should I do if I smell burning from my electrical panel?',
        answer: 'Turn off your main breaker immediately if you can do so safely. Do not touch the panel if it is hot. Call 911 if you see smoke or fire. Then call us at (760) 769-1759  for an emergency inspection and repair.',
      },
      {
        question: 'How fast can an emergency electrician get to my Oceanside home?',
        answer: 'Response times depend on our current call volume and your location, but we prioritize emergencies and aim to reach Oceanside homes as quickly as possible. Call (760) 769-1759  and we will give you an ETA.',
      },
    ],
  },
  {
    slug: 'electrical-panel-upgrade',
    title: 'Electrical Panel Upgrade',
    shortTitle: 'Panel Upgrade',
    icon: 'Zap',
    heroImage: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Electrician installing a new electrical panel upgrade in Oceanside, CA',
    metaTitle: 'Electrical Panel Upgrade Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Upgrade your electrical panel in Oceanside, CA. 100 to 200 amp service, sub-panel installation, and panel replacement. Licensed electricians. Call (760) 769-1759 .',
    h1: 'Electrical Panel Upgrade in Oceanside, CA',
    tagline: 'More power, more safety, more capacity for modern living.',
    description:
      'If your home still has a 100-amp panel, a fuse box, or a panel from the 1980s or earlier, it is time for an upgrade. Modern homes run air conditioning, EV chargers, electric dryers, and whole-home entertainment systems that older panels were never designed to handle. TMS Electric specializes in electrical panel upgrades throughout Oceanside, bringing your home up to 200-amp service safely and to code.',
    benefits: [
      '100-amp to 200-amp service upgrades',
      'Sub-panel installation for additions and ADUs',
      'Outdated fuse box replacement',
      'Zinsco and Federal Pacific panel replacement',
      'Smart panel installation with circuit monitoring',
      'Permit and inspection coordination',
    ],
    process: [
      {
        title: 'Load Assessment',
        description: 'We calculate your home\'s electrical load and recommend the right panel size for your current and future needs, including EV charging and solar.',
      },
      {
        title: 'Permit & Installation',
        description: 'We pull all necessary permits, install your new panel to code, and coordinate the utility connection. Most upgrades are completed in a single day.',
      },
      {
        title: 'Inspection & Activation',
        description: 'We schedule the city inspection, walk you through your new panel, and make sure every circuit is properly labeled.',
      },
    ],
    faqs: [
      {
        question: 'How much does a panel upgrade cost in Oceanside?',
        answer: 'Panel upgrade costs depend on your current setup, the new panel size, and whether your service entrance needs updating. We provide free, upfront quotes. Call (760) 769-1759  to schedule an assessment.',
      },
      {
        question: 'How long does an electrical panel upgrade take?',
        answer: 'Most residential panel upgrades are completed in a single day. We coordinate with SDG&E for any service upgrades and handle all permits and inspections.',
      },
      {
        question: 'Do I need a 200-amp panel for an EV charger?',
        answer: 'Most Level 2 EV chargers require a 50-amp dedicated circuit. If your current panel is 100 amps, you may need an upgrade to 200 amps to safely support EV charging along with your other loads.',
      },
      {
        question: 'Should I replace my Zinsco or Federal Pacific panel?',
        answer: 'Yes. Zinsco and Federal Pacific Electric panels have known safety defects and are no longer manufactured. If your Oceanside home has one, we strongly recommend replacement. Call (760) 769-1759  to schedule.',
      },
    ],
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    shortTitle: 'EV Charger Installation',
    icon: 'BatteryCharging',
    heroImage: 'https://images.pexels.com/photos/9799732/pexels-photo-9799732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Electric vehicle charger being plugged in at a home charging station in Oceanside, CA',
    metaTitle: 'EV Charger Installation Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'EV charger installation in Oceanside, CA. Level 2 home charging stations, Tesla Wall Connector, and commercial EV chargers. Licensed electricians. Call (760) 769-1759 .',
    h1: 'EV Charger Installation in Oceanside, CA',
    tagline: 'Charge at home. Wake up full every morning.',
    description:
      'Driving electric is the future, and charging at home is the most convenient and cost-effective way to power your EV. TMS Electric installs Level 2 home charging stations throughout Oceanside and North County San Diego. Whether you drive a Tesla, a Rivian, a Ford, or any other EV, we will install the right charger on a dedicated circuit that is safe, fast, and ready for daily use.',
    benefits: [
      'Level 2 home charging station installation',
      'Tesla Wall Connector installation',
      'ChargePoint and JuiceBox installation',
      'Dedicated 50-amp or 60-amp circuit installation',
      'Outdoor and garage charging setup',
      'Commercial EV charging station installation',
    ],
    process: [
      {
        title: 'Charger & Site Assessment',
        description: 'We help you choose the right charger for your EV and assess your panel capacity, installation location, and routing.',
      },
      {
        title: 'Dedicated Circuit Installation',
        description: 'We install a dedicated circuit from your panel to the charger location, ensuring safe, code-compliant power delivery.',
      },
      {
        title: 'Mount, Connect & Test',
        description: 'We mount the charger, connect it, test it with your vehicle, and walk you through setup and usage.',
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to install an EV charger at home in Oceanside?',
        answer: 'Installation costs depend on your panel capacity, the distance from the panel to the charger, and the charger model. We provide free, upfront quotes. Call (760) 769-1759  to schedule.',
      },
      {
        question: 'Can you install a Tesla Wall Connector?',
        answer: 'Yes. We install Tesla Wall Connectors and all major Level 2 EV chargers, including ChargePoint, JuiceBox, Grizzl-E, and more.',
      },
      {
        question: 'Do I need a panel upgrade before installing an EV charger?',
        answer: 'If your panel has spare capacity for a 50-amp or 60-amp dedicated circuit, you may not need an upgrade. If your panel is full or only 100 amps, we may recommend upgrading to 200 amps first. We will assess this during your consultation.',
      },
      {
        question: 'How long does EV charger installation take?',
        answer: 'Most home EV charger installations are completed in 2 to 4 hours, assuming your panel has adequate capacity and the charger location is reasonably accessible.',
      },
    ],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortTitle: 'Lighting Installation',
    icon: 'Lightbulb',
    heroImage: 'https://images.pexels.com/photos/10164897/pexels-photo-10164897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Modern kitchen lighting installation with pendant lights in Oceanside, CA',
    metaTitle: 'Lighting Installation Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Lighting installation in Oceanside, CA. Recessed lighting, pendant lights, outdoor lighting, landscape lighting, and LED retrofits. Licensed electricians. Call (760) 769-1759 .',
    h1: 'Lighting Installation in Oceanside, CA',
    tagline: 'Beautiful, efficient lighting that transforms your space.',
    description:
      'The right lighting changes everything about how a space feels and functions. TMS Electric installs indoor and outdoor lighting throughout Oceanside, from recessed LED retrofits to landscape lighting, pendant fixtures, and security lighting. Whether you are remodeling a kitchen, upgrading your outdoor living space, or replacing every bulb in your home with energy-efficient LEDs, our electricians deliver clean, professional installations that look great and last.',
    benefits: [
      'Recessed and can lighting installation',
      'Pendant and chandelier installation',
      'Outdoor and landscape lighting',
      'LED retrofit and conversion',
      'Security and motion-sensor lighting',
      'Dimmer switch installation',
    ],
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your goals, recommend fixture types and placement, and provide a clear estimate for the full installation.',
      },
      {
        title: 'Clean Installation',
        description: 'Our electricians install fixtures, run wiring, and set up switches and dimmers with minimal disruption and no mess left behind.',
      },
      {
        title: 'Test & Adjust',
        description: 'We test every fixture, adjust dimmer levels, and make sure you are happy with the result before we leave.',
      },
    ],
    faqs: [
      {
        question: 'Can you install recessed lighting in an existing Oceanside home?',
        answer: 'Yes. We install recessed lighting in existing ceilings, including retrofit LED can lights that do not require attic access. We also handle new construction installations.',
      },
      {
        question: 'Do you install outdoor and landscape lighting?',
        answer: 'Yes. We install pathway lighting, uplighting, string lighting, security lighting, and smart-controlled outdoor lighting throughout Oceanside and North County San Diego.',
      },
      {
        question: 'Can you convert my old light fixtures to LED?',
        answer: 'Yes. We can retrofit existing fixtures with LED bulbs or replace them entirely with integrated LED fixtures that last longer and use a fraction of the energy.',
      },
      {
        question: 'Do you install dimmer switches?',
        answer: 'Yes. We install dimmer switches compatible with LED, incandescent, and smart lighting systems. We make sure the dimmer is matched to your fixture type to prevent flickering.',
      },
    ],
  },
  {
    slug: 'outlet-switch-repair',
    title: 'Outlet & Switch Repair',
    shortTitle: 'Outlet & Switch Repair',
    icon: 'Plug',
    heroImage: 'https://images.pexels.com/photos/36738243/pexels-photo-36738243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Electrical outlet and switch on a wall being repaired in Oceanside, CA',
    metaTitle: 'Outlet & Switch Repair Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Outlet and switch repair in Oceanside, CA. GFCI, AFCI, dead outlets, loose switches, and new installations. Licensed electricians. Call (760) 769-1759 .',
    h1: 'Outlet & Switch Repair in Oceanside, CA',
    tagline: 'Safe, reliable power where you need it most.',
    description:
      'Outlets and switches are the most-used parts of your electrical system, and they wear out over time. If you have a dead outlet, a switch that feels loose, or a GFCI that keeps tripping, TMS Electric provides fast, reliable outlet and switch repair throughout Oceanside. We also install new outlets and switches where you need them, including USB outlets, smart switches, and outdoor GFCI receptacles.',
    benefits: [
      'GFCI outlet installation and replacement',
      'AFCI protection installation',
      'Dead or intermittent outlet repair',
      'Loose or sparking switch replacement',
      'USB and smart outlet installation',
      'Outdoor weatherproof outlet installation',
    ],
    process: [
      {
        title: 'Identify the Issue',
        description: 'We test the outlet or switch, trace the wiring, and determine whether it is a fixture problem, a wiring issue, or a circuit problem.',
      },
      {
        title: 'Safe Repair or Replacement',
        description: 'We replace the faulty outlet or switch with a high-quality unit, or repair the underlying wiring issue if that is the root cause.',
      },
      {
        title: 'Test & Verify',
        description: 'We test the repaired outlet or switch under load and confirm it is safe and working before we finish.',
      },
    ],
    faqs: [
      {
        question: 'Why does my GFCI outlet keep tripping in my Oceanside home?',
        answer: 'GFCI outlets trip when they detect a ground fault, which could be caused by moisture, a faulty appliance, or degraded wiring. We diagnose the exact cause and repair it so the outlet works reliably.',
      },
      {
        question: 'Can you install USB outlets?',
        answer: 'Yes. We install USB and USB-C combination outlets that let you charge devices directly without a power adapter. These are great for kitchens, bedrooms, and home offices.',
      },
      {
        question: 'Do I need GFCI outlets in my kitchen and bathroom?',
        answer: 'Yes. Current electrical code requires GFCI protection in kitchens, bathrooms, garages, outdoors, and other wet areas. If your home does not have GFCI outlets in these areas, we can install them to bring you up to code.',
      },
      {
        question: 'Can you install a smart switch that works with Alexa or Google Home?',
        answer: 'Yes. We install smart switches and dimmers that work with Alexa, Google Home, and Apple HomeKit. We make sure the wiring and neutral wire are compatible for a clean installation.',
      },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fan Installation',
    icon: 'Fan',
    heroImage: 'https://images.pexels.com/photos/3935316/pexels-photo-3935316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Ceiling fan installation in a living room in Oceanside, CA',
    metaTitle: 'Ceiling Fan Installation Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Ceiling fan installation in Oceanside, CA. Indoor and outdoor ceiling fans, fan with light, fan replacement, and junction box installation. Call (760) 769-1759 .',
    h1: 'Ceiling Fan Installation in Oceanside, CA',
    tagline: 'Stay cool and comfortable year-round.',
    description:
      'A ceiling fan is one of the most cost-effective ways to keep your Oceanside home comfortable while reducing your energy bills. TMS Electric installs ceiling fans throughout North County San Diego, from bedrooms and living rooms to patios and outdoor living spaces. We ensure the junction box is rated for the fan weight, the wiring is safe, and the fan is balanced and secured properly.',
    benefits: [
      'Indoor ceiling fan installation',
      'Outdoor and damp-rated fan installation',
      'Fan with light kit installation',
      'Junction box upgrade for fan support',
      'Smart fan switch installation',
      'Old fan removal and replacement',
    ],
    process: [
      {
        title: 'Assess the Location',
        description: 'We check the existing junction box to make sure it is rated for a ceiling fan. If not, we install a fan-rated box and run wiring if needed.',
      },
      {
        title: 'Secure Installation',
        description: 'We mount the fan securely, wire it to the switch, and balance the blades for smooth, wobble-free operation.',
      },
      {
        title: 'Test & Remote Setup',
        description: 'We test all speeds and lighting, pair any remotes or smart controls, and confirm everything works perfectly.',
      },
    ],
    faqs: [
      {
        question: 'Can you install a ceiling fan where there is no existing fixture?',
        answer: 'Yes. We can run wiring from your switch or panel to a new ceiling location, install a fan-rated junction box, and mount the fan. This is a common request in Oceanside homes with flat ceilings.',
      },
      {
        question: 'Do I need a special junction box for a ceiling fan?',
        answer: 'Yes. Ceiling fans require a fan-rated junction box that is securely anchored to a ceiling joist or support brace. Standard light fixture boxes are not strong enough to safely support a fan.',
      },
      {
        question: 'Can you install a ceiling fan outdoors on a patio?',
        answer: 'Yes. We install damp-rated and wet-rated ceiling fans for outdoor patios, pergolas, and covered areas throughout Oceanside. We make sure the fan and wiring are rated for outdoor use.',
      },
      {
        question: 'How long does ceiling fan installation take?',
        answer: 'If a fan-rated box is already in place, installation typically takes 30 to 60 minutes. If we need to run wiring or install a new junction box, it may take 1 to 2 hours.',
      },
    ],
  },
  {
    slug: 'electrical-inspection',
    title: 'Electrical Inspection',
    shortTitle: 'Electrical Inspection',
    icon: 'ClipboardCheck',
    heroImage: 'https://images.pexels.com/photos/8293680/pexels-photo-8293680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    heroAlt: 'Electrician performing an electrical safety inspection with checklist in Oceanside, CA',
    metaTitle: 'Electrical Inspection Oceanside CA | TMS Electric | (760) 769-1759 ',
    metaDescription:
      'Electrical inspection in Oceanside, CA. Whole-home safety inspections, pre-purchase inspections, and code compliance checks. Licensed electricians. Call (760) 769-1759 .',
    h1: 'Electrical Inspection in Oceanside, CA',
    tagline: 'Know your home is safe, up to code, and ready for the future.',
    description:
      'Whether you are buying a home, planning a remodel, or just want peace of mind, a professional electrical inspection is one of the smartest investments you can make. TMS Electric provides thorough electrical safety inspections throughout Oceanside and North County San Diego. We check your panel, wiring, outlets, grounding, and every circuit, then give you a clear report of what is safe, what needs attention, and what should be prioritized.',
    benefits: [
      'Whole-home electrical safety inspection',
      'Pre-purchase and pre-listing inspections',
      'Code compliance evaluation',
      'Panel and grounding system assessment',
      'Aluminum and knob-and-tube wiring identification',
      'Detailed written report with recommendations',
    ],
    process: [
      {
        title: 'Comprehensive Walkthrough',
        description: 'Our electrician inspects your panel, tests outlets and circuits, checks grounding and bonding, and evaluates the overall condition of your electrical system.',
      },
      {
        title: 'Detailed Report',
        description: 'You receive a written report with photos, findings, and prioritized recommendations so you can make informed decisions.',
      },
      {
        title: 'Clear Next Steps',
        description: 'We explain what is urgent, what can wait, and what upgrades would improve safety and value. No pressure, just honest guidance.',
      },
    ],
    faqs: [
      {
        question: 'How much does an electrical inspection cost in Oceanside?',
        answer: 'We offer affordable whole-home electrical inspections. The cost depends on the size and age of your home. Call (760) 769-1759  for a quote and to schedule.',
      },
      {
        question: 'Should I get an electrical inspection before buying a home?',
        answer: 'Absolutely. A general home inspector checks electrical basics, but a licensed electrician can identify hidden issues like outdated wiring, undersized panels, or code violations that could cost thousands to fix.',
      },
      {
        question: 'How often should I have my home\'s electrical system inspected?',
        answer: 'We recommend a professional electrical inspection every 5 to 10 years for older homes, and any time you buy a home, plan a major remodel, or add significant new electrical loads like an EV charger or solar.',
      },
      {
        question: 'What do you check during an electrical inspection?',
        answer: 'We inspect the panel, breakers, wiring type and condition, outlet functionality, GFCI and AFCI protection, grounding and bonding, smoke detectors, and outdoor electrical. You get a full written report.',
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getLocation(slug: string) {
  return serviceAreas.find((l) => l.slug === slug);
}

export const allRoutes = (() => {
  const routes: { path: string; priority: string; changefreq: string }[] = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: 'contact', priority: '0.9', changefreq: 'monthly' },
  ];

  for (const service of services) {
    routes.push({
      path: `${service.slug}-${mainLocation.slug}`,
      priority: '0.9',
      changefreq: 'monthly',
    });
  }

  for (const area of serviceAreas) {
    routes.push({
      path: `electrician-${area.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
    routes.push({
      path: `electrical-services-${area.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  }

  return routes;
})();
