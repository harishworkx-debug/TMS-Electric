import { useSeo } from '@/hooks/useSeo';
import { buildLocalBusinessSchema, buildFaqSchema } from '@/lib/schema';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ServiceGrid } from '@/components/ServiceGrid';
import { ServiceAreaGrid } from '@/components/ServiceAreaGrid';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { ContactSection } from '@/components/ContactSection';
import { business, mainLocation, services } from '@/data/business';

export function HomePage() {
  useSeo({
    title: `Electrician ${mainLocation.name}, CA | ${business.name} | ${business.phoneDisplay}`,
    description: `Trusted licensed electrician in ${mainLocation.name}, CA. Residential & commercial electrical services, panel upgrades, EV chargers, emergency repairs. ${business.yearsInBusiness}+ years experience. Call ${business.phoneDisplay}.`,
    canonical: '/',
    schema: { ...buildLocalBusinessSchema(), ...buildFaqSchema(homeFaqs) },
  });

  return (
    <>
      <Hero
        title={`Electrician in ${mainLocation.name}, CA`}
        subtitle={`Licensed, trusted, and ready to help. TMS Electric has been powering ${mainLocation.name} homes and businesses for over ${business.yearsInBusiness} years with expert electrical service and honest pricing.`}
        backgroundImage="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
        backgroundAlt="Professional electrician working on a circuit breaker panel in Oceanside, CA"
        location={mainLocation.name}
      />
      <TrustBar />

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Electrical Services in {mainLocation.name}
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              From simple outlet repairs to full panel upgrades and EV charger installations, we handle every electrical need for {mainLocation.name} homes and businesses.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why {mainLocation.name} Chooses TMS Electric
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              We have earned the trust of thousands of North County San Diego residents through honest work, fair pricing, and electrical service that lasts.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Areas We Serve in North County San Diego
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Based in {mainLocation.name}, we provide expert electrical services throughout North County San Diego. Click your city to learn more.
            </p>
          </div>
          <ServiceAreaGrid />
        </div>
      </section>

      <CtaSection
        title={`Need an Electrician in ${mainLocation.name}?`}
        subtitle="Call now for fast, friendly service and upfront pricing. We are ready to help with any electrical project, big or small."
        locationName={mainLocation.name}
      />

      <FaqSection faqs={homeFaqs} title={`${mainLocation.name} Electrician FAQs`} />

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
            Your Trusted Local Electrician in {mainLocation.name}, CA
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At {business.name}, we pride ourselves on delivering top-tier electrical services for residential and commercial properties. Whether you need a simple outlet repair, a complete electrical panel upgrade, or a custom lighting installation, our team of licensed professionals is here to help. We are dedicated to safety, quality, and customer satisfaction, ensuring that every project is completed to the highest standards. Thank you for choosing us as your go-to electrical contractor in North County San Diego.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

const whyChooseUs = [
  {
    icon: '⚡',
    title: 'Fast Response Times',
    description: `When you call TMS Electric, you get a real person, not a call center. We dispatch quickly and show up when we say we will, every time.`,
  },
  {
    icon: '💰',
    title: 'Upfront, Honest Pricing',
    description: 'You always know the cost before we start. No hidden fees, no surprise charges, no unnecessary work. Just fair, transparent pricing.',
  },
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: `California contractor license #${business.license}. Fully insured and bonded for your protection and peace of mind.`,
  },
  {
    icon: '🏆',
    title: `${business.yearsInBusiness}+ Years of Experience`,
    description: `We have been serving ${mainLocation.name} and North County San Diego since ${business.founded}. Our experience means your job is done right the first time.`,
  },
  {
    icon: '🔧',
    title: 'Comprehensive Services',
    description: 'From a single outlet to a full panel upgrade, residential or commercial, we handle every electrical need under one roof.',
  },
  {
    icon: '⭐',
    title: '5-Star Reputation',
    description: `With a ${business.rating}.0 rating and ${business.reviewCount}+ reviews, our customers consistently recommend us to their friends and neighbors.`,
  },
];

const homeFaqs = [
  {
    question: `How do I hire an electrician in ${mainLocation.name}?`,
    answer: `Call TMS Electric at ${business.phoneDisplay}. We will schedule a visit at a time that works for you, assess the work needed, and provide an upfront estimate before starting any job.`,
  },
  {
    question: `Are you a licensed electrician in ${mainLocation.name}?`,
    answer: `Yes. TMS Electric holds California contractor license #${business.license} and is fully insured. We have been serving ${mainLocation.name} and North County San Diego for over ${business.yearsInBusiness} years.`,
  },
  {
    question: `Do you offer emergency electrical service in ${mainLocation.name}?`,
    answer: `Yes. We offer emergency electrical service throughout ${mainLocation.name} and North County San Diego. If you have sparking, a burning smell, or a power loss, call ${business.phoneDisplay} right away.`,
  },
  {
    question: `What areas do you serve around ${mainLocation.name}?`,
    answer: `We serve Oceanside, Vista, Carlsbad, San Marcos, Encinitas, Escondido, and the surrounding North County San Diego communities. Call us to confirm we serve your area.`,
  },
  {
    question: `How much does an electrician cost in ${mainLocation.name}?`,
    answer: `Costs vary by job type and complexity. We provide upfront pricing on every project so you know the full cost before we begin. Call ${business.phoneDisplay} for a quote.`,
  },
];
