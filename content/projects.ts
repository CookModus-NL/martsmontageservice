/**
 * Portfolio Marts Montage Service.
 * Foto's in public/images/work/ — door Mart zelf gestuurd, uit zijn Facebook.
 */

export type Project = {
  slug: string
  title: string
  location: string
  date: string
  category: 'keuken' | 'verbouwing' | 'timmerwerk' | 'sanitair' | 'klus' | 'maatwerk'
  description: string
  hero: string
  gallery: string[]
  quote?: { text: string; author: string }
}

export const projects: Project[] = [
  {
    slug: 'kaptafel-houten-lattenwand',
    title: 'Kaptafel met houten lattenwand',
    location: 'Regio Moerdijk',
    date: '2024',
    category: 'maatwerk',
    description:
      'Make-up tafel op maat met ronde led-spiegel en achterwand van houten latten. Strak ingemonteerd, op de millimeter passend in de hoek.',
    hero: '/images/work/mart-01.jpg',
    gallery: ['/images/work/mart-01.jpg'],
  },
  {
    slug: 'keuken-eiland-plaatsing',
    title: 'Modern keukeneiland plaatsen',
    location: 'Regio Moerdijk',
    date: '2024',
    category: 'keuken',
    description:
      'Compleet keukeneiland geplaatst en afgewerkt in nieuwbouw villa. Witte fronten, strakke spoeleilanden, geïntegreerde apparatuur.',
    hero: '/images/work/mart-02.jpg',
    gallery: ['/images/work/mart-02.jpg'],
  },
  {
    slug: 'trapconstructie-zwevend',
    title: 'Zwevende trap met maatwerk-kast',
    location: 'Regio Moerdijk',
    date: '2024',
    category: 'timmerwerk',
    description:
      'Volledig op maat gebouwde houten trap met inbouwkast eronder. Plaatmateriaal gemonteerd, klaar voor finish.',
    hero: '/images/work/mart-03.jpg',
    gallery: ['/images/work/mart-03.jpg'],
  },
  {
    slug: 'kapconstructie-renovatie',
    title: 'Compleet nieuwe kapconstructie',
    location: 'Regio Moerdijk',
    date: '2024',
    category: 'verbouwing',
    description:
      'Volledig vervangen kapconstructie in massief hout. Constructief berekend, monumentaal werk in originele stijl.',
    hero: '/images/work/mart-05.jpg',
    gallery: ['/images/work/mart-05.jpg', '/images/work/mart-06.jpg', '/images/work/mart-07.jpg'],
  },
]
