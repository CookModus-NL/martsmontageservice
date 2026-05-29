import Link from 'next/link'
import { ArrowRight, MessageCircle, MapPin, Quote, Hammer, Star } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Mart · klusbedrijf uit de regio Moerdijk',
  description: `Mart van Marts Montage Service — vaste vakman uit Langeweg. All-Round Klusbedrijf voor de regio Moerdijk sinds ${business.founded}. Persoonlijke aanpak, gedegen overleg.`,
}

export default function OverOnsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bone pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div aria-hidden className="absolute inset-0 -z-10 work-grid opacity-40" />

        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7 reveal">
              <div className="eyebrow">Over Mart</div>
              <h1 className="mt-6 font-display font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.94] tracking-[-0.04em] text-steel-900">
                Vaste vakman,<br/>
                <span className="text-mart-500">vaste kwaliteit.</span>
              </h1>
              <div className="mt-10 space-y-5 text-lg leading-relaxed text-steel-700 max-w-xl">
                <p>
                  Ik ben <strong className="text-steel-900">Mart</strong>, eigenaar van <strong className="text-steel-900">Marts Montage Service</strong>. Klusbedrijf uit Langeweg, sinds {business.founded} actief in de regio Moerdijk.
                </p>
                <p>
                  Eén vakman die het hele plaatje overziet: van keuken plaatsen tot complete verbouwing, van timmerwerk tot sanitair. Geen schakels tussen jou en de uitvoering. Korte lijnen, duidelijke afspraken en werk waar ik aan het eind van de dag tevreden mee de auto in stap.
                </p>
                <p>
                  Voor specialistisch werk dat buiten mijn vak valt — denk aan stucwerk, elektra of zware installaties — werk ik samen met een vast netwerk van vakmensen. De regie hou ik bij mezelf.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-accent">
                  <MessageCircle className="h-4 w-4" /> Maak kennis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Quote-card */}
            <div className="col-span-12 lg:col-span-5 reveal reveal-delay-2">
              <div className="card-mart relative">
                <Quote className="h-10 w-10 text-white/30" strokeWidth={3} />
                <p className="mt-6 font-display text-2xl lg:text-3xl font-bold leading-[1.15] text-white">
                  "{business.manifesto}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white ring-2 ring-steel-900">
                    <span className="font-display font-black text-2xl text-steel-900 leading-none -mt-0.5">M</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Mart</div>
                    <div className="text-sm text-white/80">Eigenaar · vakman op de klus</div>
                  </div>
                </div>
              </div>

              {/* Sub mini-card */}
              <div className="mt-6 card">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-mart-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-mart-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-mart-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-mart-500" fill="currentColor" />
                  <Star className="h-5 w-5 text-mart-500" fill="currentColor" />
                </div>
                <div className="mt-4 font-display font-bold text-steel-900">Sinds {business.founded} aan het werk</div>
                <div className="mt-1 text-sm text-steel-600">Voor particulieren in regio Moerdijk en omstreken</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIJLERS */}
      <section className="bg-steel-900 text-white py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-16 reveal">
            <div className="eyebrow !text-mart-400">Hoe ik werk</div>
            <h2 className="mt-6 font-display font-black text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.96] tracking-[-0.035em] text-white">
              Drie principes,<br/>
              <span className="text-mart-500">elke klus.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Eerlijke prijsopgaaf',
                body: 'Je weet vooraf wat het kost. Geen verrassingen achteraf, geen verborgen meerwerk.',
              },
              {
                num: '02',
                title: 'Strakke planning',
                body: 'Afspraak is afspraak. Inplannen, datum vast, en die datum hou ik aan.',
              },
              {
                num: '03',
                title: 'Schoon opgeleverd',
                body: 'Bij oplevering laat ik de ruimte beter achter dan ik hem aantrof. Standaard, geen meerwerk.',
              },
            ].map((p) => (
              <div key={p.num} className="reveal">
                <div className="num-display font-display font-black text-[clamp(3.5rem,6vw,5rem)] leading-none text-mart-500">{p.num}</div>
                <h3 className="mt-8 font-display text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-4 text-[15px] text-steel-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP CTA */}
      <section className="bg-mart-500 border-y-4 border-steel-900 py-20">
        <div className="container-tight text-center reveal">
          <MapPin className="mx-auto h-7 w-7 text-white" strokeWidth={2.5} />
          <h3 className="mt-6 font-display font-black text-3xl lg:text-5xl tracking-[-0.03em] text-white">
            Werkplaats in Langeweg,<br/>
            <span className="italic">klussen in de regio.</span>
          </h3>
          <p className="mt-6 text-white/95 max-w-lg mx-auto">
            Stuur een berichtje — ook als je net buiten het kerngebied woont, voor grotere klussen rijd ik wat verder.
          </p>
          <div className="mt-10">
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-steel-900 transition-all hover:bg-steel-900 hover:text-white ring-2 ring-steel-900"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Mart
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
