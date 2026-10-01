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
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business, services, getLocation } from '@/data/business';

export function ServicesLocationPage({ locationSlug }: { locationSlug: string }) {
  const loc = getLocation(locationSlug);
  if (!loc) {
    return <div>Location not found</div>;
  }

  const path = `/electrical-services-${loc.slug}`;
  const locName = loc.name;

  useSeo({
    title: `Electrical Services in ${locName}, CA | ${business.name}`,
    description: `Professional electrical services in ${locName}, CA. Panel upgrades, EV chargers, lighting, repairs, inspections, and more. Licensed electricians. Call ${business.phoneDisplay}.`,
    canonical: path,
    schema: [
      buildLocalBusinessSchema(),
      buildFaqSchema(servicesLocationFaqs(locName)),
      buildBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: `Electrical Services ${locName}`, url: path },
      ]),
    ],
  });

  return (
    <>
      <Hero
        title={`Electrical Services in ${locName}, CA`}
        subtitle={`Comprehensive residential and commercial electrical services in ${locName}. From panel upgrades to EV chargers, lighting to emergency repairs, TMS Electric is your trusted local electrician in North County San Diego.`}
        backgroundImage="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        backgroundAlt={`Electrical services being performed by a licensed electrician in ${locName}, CA`}
        location={locName}
      />
      <TrustBar />

      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: `Electrical Services ${locName}` }]} />
        </div>
      </div>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Complete Electrical Services in {locName}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">{loc.description}</p>
          <p className="text-lg text-slate-600 leading-relaxed">
            TMS Electric provides a full range of electrical services for {locName} homeowners and businesses. Our licensed electricians handle everything from routine repairs and installations to major panel upgrades, EV charger installations, and commercial electrical work. We are based in nearby {business.city}, which means fast response times for {locName} residents and businesses. Every job is done to code, with upfront pricing and a workmanship guarantee.
          </p>

          <div className="mt-8 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Looking for electrical services in {locName}?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Call us for a free estimate and fast, reliable service.
                </p>
              </div>
              <CallButton label={business.phoneDisplay} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Electrical Services in {locName}
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Click any service below to learn more about how we can help with your specific electrical needs in {locName}.
            </p>
          </div>
          <ServiceGrid locationSlug={loc.slug} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why {locName} Chooses TMS Electric
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

      <CtaSection
        title={`Electrical Services in ${locName}? Call Us Today`}
        subtitle={`TMS Electric is ready to help with any electrical project in ${locName}. Call ${business.phoneDisplay} for fast, reliable service.`}
        locationName={locName}
      />

      <FaqSection faqs={servicesLocationFaqs(locName)} title={`Electrical Services ${locName} FAQs`} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Also Serving These North County Communities
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
                  to={`/electrical-services-${area.slug}`}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-amber-100 hover:text-amber-700"
                >
                  Electrical Services {area.name}
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
      title: 'Full-Service Electrical Contractor',
      description: `From small repairs to major installations, we handle every electrical need for ${locName} homes and businesses.`,
    },
    {
      title: 'Licensed & Insured',
      description: `California License #${business.license}. Fully insured for your protection and peace of mind.`,
    },
    {
      title: 'Fast Response in ' + locName,
      description: `Based in nearby ${business.city}, we reach ${locName} quickly for scheduled and emergency service.`,
    },
    {
      title: 'Upfront, Honest Pricing',
      description: 'You always know the cost before we start. No hidden fees, no unnecessary work.',
    },
  ];
}

function servicesLocationFaqs(locName: string) {
  return [
    {
      question: `What electrical services do you offer in ${locName}?`,
      answer: `We offer a complete range of electrical services in ${locName}, including residential and commercial electrical work, panel upgrades, EV charger installation, lighting installation, outlet and switch repair, ceiling fan installation, electrical inspections, and emergency repairs.`,
    },
    {
      question: `How much do electrical services cost in ${locName}?`,
      answer: `Costs vary depending on the service. We provide upfront pricing on every job so you know the full cost before we begin. Call ${business.phoneDisplay} for a free estimate.`,
    },
    {
      question: `Do you provide emergency electrical services in ${locName}?`,
      answer: `Yes. TMS Electric offers emergency electrical service throughout ${locName} and North County San Diego. Call ${business.phoneDisplay} any time for urgent electrical issues.`,
    },
    {
      question: `Are you licensed to do electrical work in ${locName}?`,
      answer: `Yes. TMS Electric holds California contractor license #${business.license} and is fully insured. We serve ${locName} and all surrounding North County San Diego communities.`,
    },
    {
      question: `Can you install an EV charger at my ${locName} home?`,
      answer: `Yes. We install Level 2 home EV chargers, including Tesla Wall Connectors, ChargePoint, and all major brands. We also assess your panel capacity and upgrade it if needed. Call ${business.phoneDisplay} to schedule.`,
    },
  ];
}
