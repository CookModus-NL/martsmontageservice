import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFloating } from '@/components/whatsapp-floating'
import { localBusinessSchema } from '@/lib/schema'
import { business } from '@/content/business'
import '@fontsource-variable/inter'
import './globals.css'

const HOME_TITLE = 'Klusbedrijf regio Moerdijk · Marts Montage Service'
const HOME_DESC =
  `All-Round Klusbedrijf uit de regio Moerdijk. Mart helpt met keukens plaatsen, verbouwingen, timmerwerk, sanitair, schilderwerk en alle klusjes daartussenin — vanuit Langeweg voor regio Moerdijk en omstreken. Persoonlijke aanpak, één vaste vakman, sinds ${business.founded}.`

export const viewport: Viewport = {
  themeColor: '#FF6B1F',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: HOME_TITLE,
    template: '%s | Marts Montage Service',
  },
  description: HOME_DESC,
  keywords: [
    // Core
    'klusbedrijf', 'klusjesman', 'montagebedrijf', 'all-round klusbedrijf',
    // Locatie
    'klusbedrijf Moerdijk', 'klusbedrijf Langeweg', 'klusbedrijf Zevenbergen',
    'klusbedrijf Klundert', 'klusbedrijf Standdaarbuiten', 'klusbedrijf Fijnaart',
    'klusbedrijf Willemstad', 'klusbedrijf Made', 'klusbedrijf Hooge Zwaluwe',
    'klusbedrijf Lage Zwaluwe', 'klusbedrijf Terheijden', 'klusbedrijf Drimmelen',
    'klusbedrijf Etten-Leur', 'klusbedrijf Breda', 'klusbedrijf Oosterhout',
    'klusbedrijf West-Brabant',
    // Diensten
    'keuken plaatsen Moerdijk', 'keukenzetter Zevenbergen', 'keukenmontage West-Brabant',
    'verbouwing Moerdijk', 'timmerman Langeweg', 'timmerwerk Moerdijk',
    'sanitair plaatsen Moerdijk', 'schilderwerk Moerdijk',
    'IKEA keuken plaatsen', 'Mandemakers keuken plaatsen',
    // Maker
    'Mart Marts Montage Service',
  ],
  authors: [{ name: 'Mart · Marts Montage Service' }],
  creator: business.name,
  publisher: business.name,
  applicationName: business.name,
  category: 'Klusbedrijf',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: HOME_TITLE,
    description: HOME_DESC,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Marts Montage Service · klusbedrijf regio Moerdijk' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: `All-Round Klusbedrijf uit regio Moerdijk. Vaste vakman: Mart. Sinds ${business.founded}.`,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    'geo.region': 'NL-NB',
    'geo.placename': 'Langeweg',
    'geo.position': '51.6534;4.6147',
    'ICBM': '51.6534, 4.6147',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col antialiased bg-bone text-steel-700">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
