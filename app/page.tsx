import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, ArrowUpRight, Phone, MessageCircle, MapPin,
  Hammer, Plus, Facebook,
} from 'lucide-react'
import { services } from '@/content/services'
import { business } from '@/content/business'
import { projects } from '@/content/projects'

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────  HERO  ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bone">
        <div aria-hidden className="absolute inset-0 -z-10 work-grid opacity-40" />
        <div aria-hidden className="absolute -top-40 -right-40 -z-10 h-[600px] w-[600px] rounded-full bg-mart-100/60 blur-[120px]" />

        <div className="container-x">
          {/* Top meta */}
          <div className="flex items-center justify-between border-b border-stone-200 py-5 text-[11px] uppercase tracking-[0.25em] text-stone-600">
            <div className="flex items-center gap-2">
              <span className="text-mart-500">◆</span>
              <span>All-Round Klusbedrijf · sinds {business.founded}</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-mart-500 animate-pulse" />
              <span>Regio Moerdijk</span>
            </div>
            <div className="hidden lg:block">Langeweg · NL</div>
          </div>

          {/* Hero copy + portrait */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 pt-20 lg:pt-28 pb-24 lg:pb-36">
            <div className="col-span-12 lg:col-span-7 reveal">
              <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.92] tracking-[-0.045em] text-stone-900">
                Eén vakman.<br/>
                <span className="text-mart-500">Alle klussen.</span><br/>
                Geregeld.
              </h1>

              <div className="mt-16 grid grid-cols-12 gap-8 max-w-4xl">
                <div className="col-span-12 md:col-span-7">
                  <p className="text-lg leading-[1.65] text-stone-700">
                    Ik ben <strong className="text-stone-900 font-semibold">Mart</strong>. Keukens plaatsen, verbouwingen, timmerwerk, sanitair en alles daartussenin — vanuit Langeweg voor regio Moerdijk en omstreken.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5 flex items-end">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent"
                    >
                      Vraag offerte aan
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href={`tel:${business.phoneE164}`} className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
                      <Phone className="h-4 w-4" />
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Mart portret + signature */}
            <aside className="hidden lg:flex col-span-5 flex-col gap-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 img-zoom">
                <Image
                  src="/images/work/mart-08.jpg"
                  alt="Mart van Marts Montage Service"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 z-10">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/90">Vakman</div>
                  <div className="mt-1 font-display text-2xl font-semibold text-white">Mart</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────  FOTO BAND  ───────────────────────────────────────── */}
      <section className="bg-bone pb-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            <div className="col-span-6 lg:col-span-3 relative aspect-square overflow-hidden rounded-2xl bg-stone-200 img-zoom">
              <Image src="/images/work/mart-01.jpg" alt="Kaptafel met houten lattenwand" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="col-span-6 lg:col-span-3 relative aspect-square overflow-hidden rounded-2xl bg-stone-200 img-zoom">
              <Image src="/images/work/mart-02.jpg" alt="Keuken plaatsen" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="col-span-6 lg:col-span-3 relative aspect-square overflow-hidden rounded-2xl bg-stone-200 img-zoom">
              <Image src="/images/work/mart-03.jpg" alt="Maatwerk timmerwerk" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="col-span-6 lg:col-span-3 relative aspect-square overflow-hidden rounded-2xl bg-stone-200 img-zoom">
              <Image src="/images/work/mart-04.jpg" alt="Keuken detail" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────  MANIFEST  ───────────────────────────────────────── */}
      <section className="relative bg-stone-900 text-bone py-32 lg:py-44 overflow-hidden">
        {/* Background photo, blended */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/work/mart-05.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-stone-900/80" />
        </div>

        <div className="container-x relative">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mart-400">
                <span className="mr-2">◆</span>Manifest
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 reveal">
              <blockquote className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-light leading-[1.18] tracking-[-0.02em] text-white">
                &ldquo;Een persoonlijke aanpak en gedegen overleg met de klant <span className="italic text-mart-400">is waar ik voor sta</span>.&rdquo;
              </blockquote>
              <div className="mt-12 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-mart-500">
                  <span className="font-display font-bold text-2xl text-white leading-none -mt-0.5">M</span>
                </div>
                <div>
                  <div className="text-base font-medium text-white">Mart</div>
                  <div className="text-sm text-stone-300">Vakman op de klus, sinds {business.founded}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────  DIENSTEN — index  ───────────────────────────────────────── */}
      <section className="bg-bone border-y border-stone-200 py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-20 reveal">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow">Index</div>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-stone-900">
                Zes specialismen,<br/>
                <span className="text-mart-500">één Mart.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end lg:justify-end">
              <Link href="/diensten" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
                Bekijk alles <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ol className="border-t border-stone-300">
            {services.map((s, i) => (
              <li key={s.slug} className="group">
                <Link
                  href={`/diensten/${s.slug}`}
                  className="grid grid-cols-12 items-center gap-4 border-b border-stone-300 py-10 lg:py-12 transition-colors hover:bg-stone-100/60"
                >
                  <div className="col-span-2 lg:col-span-1 num-display text-sm font-semibold tabular-nums text-stone-500 group-hover:text-mart-500 transition-colors">
                    {String(i+1).padStart(2, '0')}
                  </div>
                  <div className="col-span-7 lg:col-span-5">
                    <div className="font-display text-2xl lg:text-3xl font-semibold tracking-[-0.025em] text-stone-900 group-hover:text-mart-500 transition-colors">
                      {s.title}
                    </div>
                  </div>
                  <div className="hidden lg:block col-span-5 text-[15px] text-stone-600 max-w-md leading-[1.65]">
                    {s.short}
                  </div>
                  <div className="col-span-3 lg:col-span-1 flex justify-end">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-stone-300 text-stone-600 transition-all duration-500 group-hover:border-mart-500 group-hover:text-white group-hover:bg-mart-500 group-hover:rotate-45">
                      <Plus className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────────────────────────────────────  RECENT WERK — bento  ───────────────────────────────────────── */}
      <section className="bg-bone py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-20 reveal">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow">Recent werk</div>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-stone-900">
                Een paar van mijn<br/>
                <span className="text-mart-500">laatste klussen.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end lg:justify-end">
              {business.social.facebook && (
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
                  <Facebook className="h-4 w-4" /> Meer op Facebook <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Editorial bento van 4 projecten */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projecten/${p.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-stone-200 img-zoom reveal ${
                  i === 0
                    ? 'col-span-12 lg:col-span-8 aspect-[16/10]'
                    : 'col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]'
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <Image
                  src={p.hero}
                  alt={p.title}
                  fill
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 100vw, 33vw'}
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-900/85 via-stone-900/30 to-transparent" />
                <div className="absolute left-5 top-5 z-10">
                  <div className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white">
                    {p.category}
                  </div>
                </div>
                <div className="absolute inset-x-5 bottom-5 z-10">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-mart-300">
                    {p.location} · {p.date}
                  </div>
                  <h3 className="mt-2 font-display text-xl lg:text-2xl font-semibold tracking-[-0.025em] text-white max-w-md">
                    {p.title}
                  </h3>
                  {i === 0 && (
                    <p className="mt-3 text-sm text-white/85 max-w-lg line-clamp-2">{p.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────  WERKGEBIED  ───────────────────────────────────────── */}
      <section className="bg-cream border-y border-stone-200 py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow">
                <MapPin className="h-3 w-3" />
                Werkgebied
              </div>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-stone-900">
                Vooral in de<br/>
                <span className="text-mart-500">regio Moerdijk.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-[1.65] text-stone-700">
                Ik werk bewust lokaal. Daardoor kan ik snel langs, blijven de lijnen kort en hou ik de prijs scherp. Net buiten dit gebied? Vraag het me — voor grotere klussen rijd ik wat verder.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500 mb-6">Kerngebied</div>
              <div className="flex flex-wrap gap-2 mb-10">
                {business.serviceAreaCore.map((p) => (
                  <span key={p} className="inline-flex items-center gap-2 rounded-full bg-mart-500 px-4 py-2 text-sm font-medium text-white">
                    {p}
                  </span>
                ))}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500 mb-6">Op aanvraag</div>
              <div className="flex flex-wrap gap-2">
                {business.serviceArea.slice(7).map((p) => (
                  <span key={p} className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────  PROCES  ───────────────────────────────────────── */}
      <section className="bg-bone py-32 lg:py-44">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-8 mb-20 reveal">
            <div className="col-span-12 lg:col-span-5">
              <div className="eyebrow">Werkwijze</div>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.035em] text-stone-900">
                Van eerste appje<br/>
                <span className="text-mart-500">tot oplevering.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:flex lg:items-end">
              <p className="text-base lg:text-lg text-stone-700 max-w-lg leading-[1.65]">
                Vier overzichtelijke stappen. Je weet exact waar je aan toe bent — geen verrassingen, geen verborgen meerwerk.
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-stone-300">
            {[
              { t: 'WhatsApp', d: 'Stuur foto’s of beschrijf je klus. Binnen 1 werkdag een eerste reactie en grove indicatie.' },
              { t: 'Op locatie', d: 'Bij grotere klussen kom ik vrijblijvend langs om te kijken, te meten en de offerte uit te werken.' },
              { t: 'Inplannen', d: 'Offerte akkoord? Dan plan ik je in. Je krijgt een datum en weet wat er gebeurt op welke dag.' },
              { t: 'Uitvoeren', d: 'Strakke uitvoering, schoon werk. Bij oplevering loop ik alles met je door.' },
            ].map((step, i) => (
              <li key={step.t} className="border-b lg:border-b-0 lg:border-r border-stone-300 last:border-r-0 p-8 lg:p-10">
                <div className="num-display text-[11px] font-semibold uppercase tracking-[0.28em] text-mart-500">
                  Stap {String(i+1).padStart(2, '0')}
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.02em] text-stone-900">{step.t}</h3>
                <p className="mt-3 text-[14px] text-stone-600 leading-[1.6]">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────────────────────────────────────  STATS  ───────────────────────────────────────── */}
      <section className="bg-stone-900 text-white py-24">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:divide-x lg:divide-stone-700">
            {[
              { v: business.founded, l: 'Sinds dit jaar voor je klus' },
              { v: business.serviceArea.length + '+', l: 'Plaatsen in mijn werkgebied' },
              { v: '1 dag', l: 'Reactietijd via WhatsApp' },
              { v: 'Vast', l: 'Eén vakman op de klus' },
            ].map((s, i) => (
              <div key={s.l} className={`px-2 lg:px-8 ${i === 0 ? 'lg:pl-0' : ''}`}>
                <div className="num-display font-display font-medium text-[clamp(2.75rem,5vw,4.5rem)] leading-none text-mart-500">{s.v}</div>
                <div className="mt-3 text-sm text-stone-300">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────  CTA  ───────────────────────────────────────── */}
      <section className="relative bg-bone py-32 lg:py-44 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 work-grid opacity-40" />
        <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 h-[500px] w-[700px] rounded-full bg-mart-200/50 blur-[140px]" />

        <div className="container-tight relative text-center reveal">
          <Hammer className="mx-auto h-7 w-7 text-mart-500" strokeWidth={1.75} />
          <h2 className="mt-10 font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-stone-900">
            Klus die<br/>
            <span className="italic text-mart-500">niet wacht?</span>
          </h2>
          <p className="mt-10 mx-auto max-w-xl text-lg leading-[1.7] text-stone-700">
            Stuur me een WhatsApp met wat je nodig hebt. Binnen één werkdag weet je of ik kan en wanneer. Vrijblijvend en altijd gratis.
          </p>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Mart
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`tel:${business.phoneE164}`} className="btn-secondary">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
          </div>

          {business.social.facebook && (
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors">
              <Facebook className="h-4 w-4" /> Bekijk meer werk op Facebook
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </section>
    </>
  )
}
