import { business } from '@/data/business';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `https://${business.domain}/#business`,
    name: business.name,
    image: `https://${business.domain}/og-image.jpg`,
    logo: `https://${business.domain}/logo.png`,
    url: `https://${business.domain}`,
    telephone: business.phone,
    priceRange: '$$',
    sameAs: [
      business.mapsUrl,
      business.social.yelp,
      business.social.facebook,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.2115,
      longitude: -117.3506,
    },
    areaServed: [
      'Oceanside, CA',
      'Vista, CA',
      'Carlsbad, CA',
      'San Marcos, CA',
      'Encinitas, CA',
      'Escondido, CA',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '06:00',
        closes: '16:30',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Electrician' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Electrician' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Panel Upgrade' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EV Charger Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Electrician' } },
      ],
    },
    license: business.license,
  };
}

export function buildServiceSchema(serviceName: string, location: string, description: string, faqs?: { question: string; answer: string }[]) {
  const schema: object = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${location}, CA`,
    description: description.slice(0, 300),
    provider: {
      '@type': 'Electrician',
      name: business.name,
      telephone: business.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address,
        addressLocality: business.city,
        addressRegion: business.state,
        postalCode: business.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${location}, CA`,
    },
  };

  if (faqs && faqs.length > 0) {
    (schema as Record<string, unknown>)['hasOfferCatalog'] = undefined;
  }

  return schema;
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `https://${business.domain}${b.url}`,
    })),
  };
}
