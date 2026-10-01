import { useSeo } from '@/hooks/useSeo';
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema, buildLocalBusinessSchema } from '@/lib/schema';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { ContactSection } from '@/components/ContactSection';
import { ServiceGrid } from '@/components/ServiceGrid';
import { CallButton } from '@/components/CallButton';
import { CheckCircle2, Phone } from 'lucide-react';
import { business, services, getService, getLocation, mainLocation } from '@/data/business';
import { Link } from 'react-router-dom';
import { RecentProjects } from '@/components/RecentProjects';

export function ServicePage({ serviceSlug, locationSlug = 'oceanside' }: { serviceSlug: string, locationSlug?: string }) {
  const service = getService(serviceSlug);
  const loc = getLocation(locationSlug) || mainLocation;
  if (!service) {
    return <div>Service not found</div>;
  }

  const path = `/${service.slug}-${loc.slug}`;
  const serviceName = service.title;
  const locName = loc.name;

  useSeo({
    title: `${service.title} in ${locName}, CA | ${business.name}`,
    description: `Need ${service.title.toLowerCase()} in ${locName}, CA? ${business.name} provides professional ${service.title.toLowerCase()} and electrical solutions. Call ${business.phoneDisplay}.`,
    canonical: path,
    schema: [
      buildLocalBusinessSchema(),
      buildServiceSchema(serviceName, locName, service.description, service.faqs),
      buildFaqSchema(service.faqs),
      buildBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: serviceName, url: path },
      ]),
    ],
  });

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <Hero
        title={service.h1}
        subtitle={service.tagline}
        backgroundImage={service.heroImage}
        backgroundAlt={service.heroAlt}
        location={locName}
      />
      <TrustBar />

      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: serviceName }]} />
        </div>
      </div>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
          </div>

          {service.contentSections ? (
            service.contentSections.map((section, idx) => (
              <div key={idx} className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.heading}
                </h2>
                <div 
                  className="prose prose-lg max-w-none text-slate-600 marker:text-amber-500 prose-ul:pl-0"
                  dangerouslySetInnerHTML={{ __html: section.content }} 
                />
              </div>
            ))
          ) : (
            <>
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  When Do You Need {service.shortTitle}?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Recognizing the right time for {serviceName.toLowerCase()} can save you from unexpected electrical failures. Whether you are dealing with frequent disruptions or planning a new project in {locName}, addressing it early ensures safety and compliance with current electrical codes.
                </p>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Signs It Is Time for {service.shortTitle}
                </h2>
                <ul className="list-disc pl-6 text-lg text-slate-600 space-y-2 marker:text-amber-500">
                  <li>Flickering lights or inconsistent power delivery</li>
                  <li>Frequently tripping breakers or blown fuses</li>
                  <li>Outdated components that do not support modern electrical needs</li>
                  <li>Visible wear, rust, or damage to electrical systems</li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {service.shortTitle} Cost Factors in {locName}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The cost of {serviceName.toLowerCase()} in {locName} varies based on the complexity of the project, required permits, and material costs. At TMS Electric, we provide upfront, transparent pricing before any work begins, so there are never any surprises.
                </p>
              </div>
            </>
          )}

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Ready for {serviceName.toLowerCase()} in {locName}?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Call now for fast, reliable service and upfront pricing.
                </p>
              </div>
              <CallButton label={business.phoneDisplay} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.process.map((step, i) => (
              <div key={i} className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-900">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why Choose TMS Electric in {locName}?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyChoosePoints.map((point, i) => (
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
        title={`Need a ${serviceName.toLowerCase()} in ${locName}?`}
        subtitle={`Call TMS Electric now at ${business.phoneDisplay}. Licensed, insured, and ready to help.`}
        locationName={locName}
      />

      <FaqSection faqs={service.faqs} title={`${serviceName} ${locName} FAQs`} />

      <RecentProjects />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Other Electrical Services in {locName}
          </h2>
          <ServiceGrid locationSlug={loc.slug} />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Also Serving These North County San Diego Communities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Oceanside', slug: 'oceanside' },
              { name: 'Vista', slug: 'vista' },
              { name: 'Carlsbad', slug: 'carlsbad' },
              { name: 'San Marcos', slug: 'san-marcos' },
              { name: 'Encinitas', slug: 'encinitas' },
              { name: 'Escondido', slug: 'escondido' },
            ].map((area) => (
              <Link
                key={area.slug}
                to={`/electrician-${area.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-black/5 transition-all hover:bg-amber-100 hover:text-amber-700"
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

const whyChoosePoints = [
  {
    title: 'Licensed & Insured',
    description: `California License #${business.license}. Fully insured for your protection.`,
  },
  {
    title: 'Upfront Pricing',
    description: 'You always know the cost before we start. No surprises.',
  },
  {
    title: 'On-Time Service',
    description: 'We respect your time and show up when we say we will.',
  },
  {
    title: `${business.yearsInBusiness}+ Years Experience`,
    description: `Trusted by ${mainLocation.name} homeowners and businesses since ${business.founded}.`,
  },
];
