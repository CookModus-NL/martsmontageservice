import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { services } from '@/content/services'

export function Footer() {
  return (
    <footer className="bg-steel-900 text-steel-300 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

      {/* Big CTA wordmark */}
      <div className="border-b-2 border-steel-700">
        <div className="container-x py-20">
          <Link href="/contact" className="group block">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-mart-500 mb-6">
              Klus die niet wacht?
            </div>
            <div className="font-display font-black text-[clamp(2.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.04em] text-white">
              Bel me direct{' '}
              <span className="text-mart-500">{business.phone}</span>{' '}
              <ArrowUpRight className="inline-block h-12 w-12 lg:h-20 lg:w-20 align-baseline text-steel-500 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
            </div>
          </Link>
        </div>
      </div>

      <div className="container-x pt-20 pb-12">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-12">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative grid h-12 w-12 place-items-center rounded-full bg-mart-500 ring-2 ring-white">
                <span className="font-display font-black text-2xl text-steel-700 leading-none -mt-0.5">M</span>
              </div>
              <span className="font-display text-[14px] font-bold uppercase tracking-tight text-white">
                Marts <span className="text-steel-400 font-medium normal-case tracking-normal">Montage Service</span>
              </span>
            </Link>
            <p className="mt-8 max-w-md text-base leading-relaxed text-steel-400">
              Mart van Marts Montage Service. All-Round Klusbedrijf uit de regio Moerdijk — vanuit Langeweg. Persoonlijke aanpak, vaste vakman, sinds {business.founded}.
            </p>

            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a href={`tel:${business.phoneE164}`} className="group inline-flex items-center gap-2 text-white hover:text-mart-500 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="tabular-nums font-semibold">{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="group inline-flex items-center gap-2 text-steel-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              {business.social.facebook && (
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-steel-300 hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                  facebook.com/{business.social.facebookHandle}
                </a>
              )}
              <div className="inline-flex items-start gap-2 text-steel-400 mt-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-mart-500" />
                <span>{business.address.street}<br/>{business.address.postalCode} {business.address.city}</span>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-mart-500">Diensten</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/diensten/${s.slug}`} className="text-steel-300 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="col-span-6 lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-mart-500">Site</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ['/projecten', 'Werk'],
                ['/over-ons', 'Over Mart'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-steel-300 hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Juridisch */}
          <div className="col-span-12 lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-mart-500">Juridisch</h3>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link href="/privacy" className="text-steel-300 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-steel-300 hover:text-white transition-colors">Algemene voorwaarden</Link></li>
            </ul>
            <div className="mt-8 space-y-1 text-[11px] text-steel-500">
              <div>KvK {business.kvk}</div>
              <div>SBI 4332 / 4334</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-steel-700">
        <div className="container-x py-6 flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em] text-steel-500 md:flex-row md:justify-between md:items-center">
          <div>© {new Date().getFullYear()} {business.legalName} · alle rechten voorbehouden</div>
          <div className="flex items-center gap-3">
            <span>Vakwerk uit Langeweg</span>
            <span className="h-1 w-1 rounded-full bg-mart-500" />
            <span>Regio Moerdijk en omstreken</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
