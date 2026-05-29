/**
 * Marts Montage Service — diensten
 * Bron: martsmontageservice.nl + persoonlijke aanvulling
 */

import type { LucideIcon } from 'lucide-react'
import { ChefHat, Hammer, Home, Paintbrush, Layers, Wrench } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  tagline: string
  short: string
  long: string
  bullets?: string[]
  icon: LucideIcon
  hero: string
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'keukens-plaatsen',
    title: 'Keuken plaatsen',
    tagline: 'Strakke montage van jouw nieuwe keuken',
    short:
      'Je nieuwe keuken vakkundig geplaatst. Van demontage oude keuken tot strakke afwerking. Werk samen met IKEA, Mandemakers, of welke leverancier dan ook.',
    long: `Heb je je keuken al gekocht en zoek je een vakman die hem goed plaatst? Ik werk met alle gangbare merken: IKEA, Mandemakers, Bruynzeel, Brugman of een lokale keukenboer. Demonteren oude keuken, leidingwerk checken, montage volgens tekening, sanitair aansluiten, afkitten.\n\nGemiddeld 2 tot 5 werkdagen voor een complete plaatsing. We bespreken vooraf de planning zodat je weet waar je aan toe bent.`,
    bullets: [
      'Sloop oude keuken',
      'Werkblad op maat zagen',
      'Apparatuur aansluiten',
      'Sanitair plaatsen',
      'Strak afkitten',
      'Werk samen met IKEA en alle ketens',
    ],
    icon: ChefHat,
    hero: '/images/projects/keuken-1.jpg',
    faqs: [
      { q: 'Werk je samen met IKEA?', a: 'Ja, ik plaats regelmatig IKEA Metod keukens. Ervaring met alle relevante onderdelen.' },
      { q: 'Hoe lang duurt een keukenplaatsing?', a: 'Standaard 2 tot 5 werkdagen. Afhankelijk van grootte, sanitair en eventueel tegelwerk dat erbij komt.' },
      { q: 'Wat als er extra leidingwerk nodig is?', a: 'Dat bekijken we vooraf. Ik werk waar nodig samen met loodgieters en elektriciens.' },
    ],
  },
  {
    slug: 'verbouwingen',
    title: 'Verbouwingen en renovaties',
    tagline: 'Van kleine aanpassing tot complete renovatie',
    short:
      'Kamer slopen, doorbraak maken, nieuwe muren plaatsen, of een complete renovatie van A tot Z. Ik regel het.',
    long: `Of het nu om een doorbraak gaat, een uitbouw, een complete kamerrenovatie of het scheiden van een grote ruimte. Ik werk samen met vaste vakmensen voor leidingwerk, elektra en stuc. Eén aanspreekpunt voor het hele project.\n\nWe maken vooraf een planning met de stappen en data. Tussendoor houd ik je op de hoogte van vertraging of materiaalkwesties.`,
    bullets: [
      'Slopen en verwijderen',
      'Doorbraak maken (met statische berekening waar nodig)',
      'Nieuwe scheidingswanden',
      'Plafonds en vloeren',
      'Samenwerking met installatie-vakmensen',
      'Eén aanspreekpunt',
    ],
    icon: Home,
    hero: '/images/projects/verbouwing-1.jpg',
    faqs: [
      { q: 'Heb je een vergunning nodig voor doorbraak?', a: 'Vaak wel. Bij dragende muren altijd. Ik help met de aanvraag en werk met een constructeur voor de berekening.' },
      { q: 'Hoe lang van plan tot oplevering?', a: 'Variabel. Een kamer in 1-2 weken, een hele verbouwing 4-12 weken.' },
    ],
  },
  {
    slug: 'timmerwerk',
    title: 'Timmerwerk',
    tagline: 'Kozijnen, vloeren, deuren, betimmering',
    short:
      'Klassiek timmerwerk: laminaat en houten vloeren leggen, kozijnen vervangen, deuren hangen, plinten en lijsten plaatsen, betimmering aanbrengen.',
    long: `Het stille werk dat een huis afmaakt: nette plinten, strak gehangen deuren, betimmering achter de tv, dakkapel binnenwerk. Ook laminaat en houten vloeren leg ik regelmatig.\n\nVoor losse klussen werk ik op uurbasis. Voor grotere projecten een vaste prijs vooraf.`,
    bullets: [
      'Laminaat en houten vloeren',
      'Kozijnen vervangen',
      'Deuren hangen en afhangen',
      'Plinten en lijsten',
      'Betimmering en kasten op maat',
      'Dakkapel binnenwerk',
    ],
    icon: Hammer,
    hero: '/images/projects/timmerwerk-1.jpg',
    faqs: [
      { q: 'Kun je ook een vloer voorbereiden?', a: 'Ja, ondervloer egaliseren waar nodig en isolatie aanbrengen.' },
    ],
  },
  {
    slug: 'sanitair',
    title: 'Sanitair plaatsen',
    tagline: 'Wastafels, douches, toiletten aansluiten',
    short:
      'Nieuwe wastafel, douchecabine, toilet of badmeubel plaatsen en aansluiten. Ook bij vervanging of opwaardering.',
    long: `Voor losse sanitair-klussen of als onderdeel van een grotere renovatie. Wastafels, kranen, doucheafvoeren, toiletten, badmeubels. Ik zorg voor de aanvoer- en afvoerleidingen, monteer strak en kit alles goed af.\n\nVoor complete badkamerrenovatie werk ik samen met vaste tegelzetters. Eén aanspreekpunt voor het hele project.`,
    bullets: [
      'Wastafels en kranen aansluiten',
      'Douchecabine en afvoer plaatsen',
      'Toilet vervangen',
      'Badmeubel monteren',
      'Leidingwerk aanpassen waar nodig',
    ],
    icon: Wrench,
    hero: '/images/projects/sanitair-1.jpg',
    faqs: [
      { q: 'Werk je samen met tegelzetters voor complete badkamer?', a: 'Ja, ik werk samen met vaste tegelzetters. Eén aanspreekpunt voor het hele project.' },
    ],
  },
  {
    slug: 'schilderwerk',
    title: 'Schilderwerk',
    tagline: 'Binnen- en buitenschilderwerk',
    short:
      'Plafonds, muren, kozijnen, deuren. Voorbereiding, gronden, afwerklaag. Strak resultaat, geen druppels op de vloer.',
    long: `Goed schilderwerk staat of valt bij de voorbereiding. Schuren, gaten dichtmaken, ontvetten, gronden. Dan pas verven. Voor binnenwerk gebruik ik watergedragen verf van topkwaliteit (Sigma, Wijzonol, Sikkens). Voor buiten alkyd of speciale duurzame coatings.\n\nIk reken voorbereidingstijd ALTIJD mee in de offerte. Geen verrassingen achteraf.`,
    bullets: [
      'Voorbereiding (schuren, plamuren, gronden)',
      'Plafonds en wanden',
      'Kozijnen binnen en buiten',
      'Deuren',
      'Premium verf-leveranciers',
    ],
    icon: Paintbrush,
    hero: '/images/projects/schilderwerk-1.jpg',
    faqs: [
      { q: 'Welke verf gebruik je?', a: 'Voor binnen: Sigma S2U Nova, Wijzonol of Sikkens Alpha. Premium kwaliteit, blijft langer mooi.' },
    ],
  },
  {
    slug: 'klusbedrijf',
    title: 'Klusjes en kleine reparaties',
    tagline: 'Voor alles wat niet in een categorie past',
    short:
      'Heb je iets dat gefixt moet worden? Stuur een berichtje. Van losse plank ophangen tot een complete deur vervangen.',
    long: `Niet elk werk past in een grote categorie. Een kapotte deur, een wankele kast, een rolgordijn ophangen, een muurtje weghalen, een paar tegels vervangen. Voor losse klussen werk ik op uurbasis, prijs op aanvraag.\n\nIdeaal voor mensen die niet handig zijn maar wel willen dat hun huis er netjes uitziet.`,
    bullets: [
      'Losse reparaties',
      'Ophangen van planken, kasten, lampen',
      'Deuren afhangen en bijschuren',
      'Kleine timmerwerken',
      'Snel inplanbaar',
    ],
    icon: Layers,
    hero: '/images/projects/klusbedrijf-1.jpg',
    faqs: [
      { q: 'Wat is het uurtarief?', a: 'Voor losse klussen werk ik op uurbasis. Stuur een berichtje voor het actuele tarief.' },
      { q: 'Hoe snel kun je komen?', a: 'Voor kleine klussen meestal binnen 1-2 weken. Spoed bekijken we per geval.' },
    ],
  },
]

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
