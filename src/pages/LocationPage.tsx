import { useSeo } from '@/hooks/useSeo';
import { buildLocalBusinessSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { ContactSection } from '@/components/ContactSection';
import { ServiceGrid } from '@/components/ServiceGrid';
import { CallButton } from '@/components/CallButton';
import { CheckCircle2, Phone, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business, services, getLocation } from '@/data/business';
import { RecentProjects } from '@/components/RecentProjects';

export function LocationPage({ locationSlug }: { locationSlug: string }) {
  const loc = getLocation(locationSlug);
  if (!loc) {
    return <div>Location not found</div>;
  }

  const path = `/electrician-${loc.slug}`;
  const locName = loc.name;

  useSeo({
    title: `Electrician in ${locName}, CA | ${business.name}`,
    description: `Need a licensed electrician in ${locName}, CA? TMS Electric provides residential & commercial electrical services, panel upgrades, EV chargers, emergency repairs. Call ${business.phoneDisplay}.`,
    canonical: path,
    schema: [
      buildLocalBusinessSchema(),
      buildFaqSchema(locationFaqs(locName)),
      buildBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: `Electrician ${locName}`, url: path },
      ]),
    ],
  });

  return (
    <>
      <Hero
        title={`Electrician in ${locName}, CA`}
        subtitle={`Licensed electrician serving ${locName} and the surrounding North County San Diego area. TMS Electric delivers reliable residential and commercial electrical services with upfront pricing and ${business.yearsInBusiness}+ years of experience.`}
        backgroundImage="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        backgroundAlt={`Professional electrician installing wiring in ${locName}, CA`}
        location={locName}
      />
      <TrustBar />

      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: `Electrician ${locName}` }]} />
        </div>
      </div>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Your Trusted Electrician in {locName}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">{loc.description}</p>
          
          {/* Unique Location Content */}
          {loc.uniqueContent && (
            <div 
              className="prose prose-lg max-w-none text-slate-600 mb-8 marker:text-amber-500"
              dangerouslySetInnerHTML={{ __html: loc.uniqueContent }} 
            />
          )}

          <p className="text-lg text-slate-600 leading-relaxed">
            At TMS Electric, we are proud to serve the {locName} community with a full range of electrical services. Whether you need a simple outlet repair, a complete panel upgrade, or an EV charger installed at your home, our licensed electricians deliver clean, code-compliant work that stands the test of time. We are based just minutes away in {business.city}, so we can reach {locName} quickly for both scheduled appointments and emergency calls.
          </p>

          {/* Location-Specific Common Needs */}
          {loc.commonNeeds && loc.commonNeeds.length > 0 && (
            <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">
                Common Electrical Needs in {locName}
              </h3>
              <ul className="space-y-3">
                {loc.commonNeeds.map((need: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-amber-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Need an electrician in {locName} now?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Call us for fast, reliable service and upfront pricing.
                </p>
              </div>
              <CallButton label={business.phoneDisplay} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Electrical Services We Provide in {locName}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${loc.slug}`}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md hover:ring-amber-200"
              >
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{s.title} in {locName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why {locName} Residents Trust TMS Electric
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyChoosePoints(locName).map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">{point.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {loc.neighborhoods.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Neighborhoods We Serve in {locName}
            </h2>
            <p className="text-slate-600 mb-6">
              TMS Electric proudly serves all neighborhoods in {locName}, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {loc.neighborhoods.map((n) => (
                <span key={n} className="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
                  <MapPin className="h-3.5 w-3.5 text-amber-500" />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        title={`Need an Electrician in ${locName}?`}
        subtitle={`Call TMS Electric now at ${business.phoneDisplay}. Licensed, insured, and serving all of ${locName}.`}
        locationName={locName}
      />

      <FaqSection faqs={locationFaqs(locName)} title={`${locName} Electrician FAQs`} />

      <RecentProjects />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Other Areas We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Oceanside', slug: 'oceanside' },
              { name: 'Vista', slug: 'vista' },
              { name: 'Carlsbad', slug: 'carlsbad' },
              { name: 'San Marcos', slug: 'san-marcos' },
              { name: 'Encinitas', slug: 'encinitas' },
              { name: 'Escondido', slug: 'escondido' },
            ]
              .filter((a) => a.slug !== loc.slug)
              .map((area) => (
                <Link
                  key={area.slug}
                  to={`/electrician-${area.slug}`}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-amber-100 hover:text-amber-700"
                >
                  Electrician {area.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ContactSection locationName={locName} />
    </>
  );
}

function whyChoosePoints(locName: string) {
  return [
    {
      title: 'Licensed & Insured',
      description: `California License #${business.license}. Fully insured for your protection.`,
    },
    {
      title: 'Fast Response in ' + locName,
      description: `Based in ${business.city}, we reach ${locName} quickly for scheduled and emergency calls.`,
    },
    {
      title: 'Upfront Pricing',
      description: 'You always know the cost before we start. No hidden fees, ever.',
    },
    {
      title: `${business.yearsInBusiness}+ Years Experience`,
      description: `Serving North County San Diego since ${business.founded} with a 5-star reputation.`,
    },
  ];
}

function locationFaqs(locName: string) {
  return [
    {
      question: `Do you serve ${locName} for electrical service?`,
      answer: `Yes. TMS Electric serves ${locName} and all of North County San Diego. We are based in ${business.city} and can reach ${locName} quickly. Call ${business.phoneDisplay} to schedule.`,
    },
    {
      question: `Are you a licensed electrician in ${locName}?`,
      answer: `Yes. TMS Electric holds California contractor license #${business.license} and is fully insured. We serve ${locName} and surrounding communities.`,
    },
    {
      question: `Do you offer emergency electrical service in ${locName}?`,
      answer: `Yes. We offer emergency electrical service throughout ${locName} and North County San Diego. Call ${business.phoneDisplay} any time for urgent electrical issues.`,
    },
    {
      question: `What electrical services do you offer in ${locName}?`,
      answer: `We offer residential and commercial electrical services including panel upgrades, EV charger installation, lighting, outlet and switch repair, ceiling fan installation, electrical inspections, and emergency repairs in ${locName}.`,
    },
    {
      question: `How fast can you get to my ${locName} home?`,
      answer: `We are based in nearby ${business.city}, so we can typically reach ${locName} within 30 to 45 minutes for emergency calls. For scheduled appointments, we offer flexible timing including same-day service when available.`,
    },
  ];
}
