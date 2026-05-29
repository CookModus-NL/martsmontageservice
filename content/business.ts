/**
 * Single source of truth voor Marts Montage Service.
 * Bron: facebook.com/martsmontageservice + KvK 71626980.
 */

export const business = {
  name: 'Marts Montage Service',
  legalName: 'Marts Montage Service',
  ownerFirstName: 'Mart',
  tagline: 'All-round klusbedrijf uit de regio Moerdijk',
  description:
    'All-round klusbedrijf voor keukens plaatsen, verbouwingen, timmerwerk, sanitair en alle klusjes daartussenin. Persoonlijke aanpak, één vaste vakman: Mart. Vanuit Langeweg voor de regio Moerdijk en omstreken.',

  /** Mart's persoonlijke statement van Facebook */
  manifesto: 'Een persoonlijke aanpak en gedegen overleg met de klant is waar ik voor sta.',

  kvk: '71626980',
  vestigingsnummer: '',
  btw: 'NL000000000B01',

  founded: '2018',
  foundedMonth: '2018-05',

  address: {
    street: 'Wethouder Trompersstraat 46',
    postalCode: '4771 RW',
    city: 'Langeweg',
    municipality: 'Moerdijk',
    province: 'Noord-Brabant',
    country: 'NL',
  },

  phone: '06-33047631',
  phoneE164: '+31633047631',
  whatsapp: '+31633047631',
  email: 'info@martsmontageservice.nl',

  url: 'https://martsmontageservice.nl',

  openingHours: [
    { day: 'Monday', opens: '07:30', closes: '17:30' },
    { day: 'Tuesday', opens: '07:30', closes: '17:30' },
    { day: 'Wednesday', opens: '07:30', closes: '17:30' },
    { day: 'Thursday', opens: '07:30', closes: '17:30' },
    { day: 'Friday', opens: '07:30', closes: '17:30' },
  ],

  social: {
    facebook: 'https://www.facebook.com/martsmontageservice/',
    facebookHandle: 'martsmontageservice',
    instagram: '',
    google: '',
  },

  /** Regio Moerdijk + omstreken — Mart werkt bewust lokaal */
  serviceArea: [
    'Regio Moerdijk',
    'Langeweg', 'Zevenbergen', 'Moerdijk', 'Klundert', 'Standdaarbuiten',
    'Fijnaart', 'Willemstad', 'Made', 'Hooge Zwaluwe', 'Lage Zwaluwe',
    'Terheijden', 'Drimmelen', 'Geertruidenberg', 'Raamsdonksveer',
    'Etten-Leur', 'Breda', 'Oosterhout',
  ],
  serviceAreaCore: ['Langeweg', 'Zevenbergen', 'Moerdijk', 'Klundert', 'Standdaarbuiten', 'Fijnaart'],

  whatsappPrefills: {
    general: 'Hi Mart, ik heb een vraag over een klus.',
    offerte: 'Hi Mart, ik wil graag een vrijblijvende offerte. Ik stuur zo wat foto’s en details door.',
    keuken: 'Hi Mart, ik wil graag mijn keuken laten plaatsen. Hoor graag van je.',
    verbouwing: 'Hi Mart, ik heb plannen voor een verbouwing. Kunnen we een afspraak inplannen?',
    klus: 'Hi Mart, ik heb een klus te doen. Hoor graag of je tijd hebt.',
    sanitair: 'Hi Mart, ik wil graag sanitair laten vervangen of aansluiten. Hoor graag van je.',
  },
} as const

export type Business = typeof business
