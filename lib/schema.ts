/**
 * JSON-LD structured data — kritisch voor lokale SEO + rich results.
 * Geverifieerd tegen schema.org/LocalBusiness + Google's rich result guidelines.
 */

import { business } from '@/content/business'
import { services } from '@/content/services'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    alternateName: ['Marts Montage', 'MMS', 'Mart Klusbedrijf Moerdijk'],
    description: business.description,
    slogan: business.tagline,
    disambiguatingDescription: business.manifesto,
    url: business.url,
    logo: {
      '@type': 'ImageObject',
      url: `${business.url}/logo.svg`,
    },
    image: `${business.url}/opengraph-image`,
    telephone: business.phoneE164,
    email: business.email,
    foundingDate: business.foundedMonth,
    founder: {
      '@type': 'Person',
      name: 'Mart',
      jobTitle: 'Eigenaar en vakman',
      worksFor: { '@id': `${business.url}/#business` },
    },
    knowsLanguage: ['nl-NL'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.6534,
      longitude: 4.6147,
    },
    areaServed: business.serviceArea.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    identifier: [
      { '@type': 'PropertyValue', name: 'KvK', value: business.kvk },
    ],
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: '€€',
    paymentAccepted: ['Cash', 'Bank transfer', 'Tikkie', 'Pin'],
    currenciesAccepted: 'EUR',
    sameAs: [business.social.facebook].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: business.phoneE164,
        contactType: 'customer service',
        areaServed: 'NL',
        availableLanguage: ['Dutch'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Klusbedrijf diensten',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          provider: { '@id': `${business.url}/#business` },
          areaServed: business.serviceAreaCore.map((c) => ({ '@type': 'City', name: c })),
          url: `${business.url}/diensten/${s.slug}`,
        },
      })),
    },
  }
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug)
  if (!service) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.long,
    serviceType: service.title,
    provider: { '@id': `${business.url}/#business` },
    areaServed: business.serviceArea.map((c) => ({ '@type': 'City', name: c })),
    url: `${business.url}/diensten/${slug}`,
    image: service.hero,
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
