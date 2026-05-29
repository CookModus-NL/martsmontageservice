'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { business } from '@/content/business'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/projecten', label: 'Werk' },
  { href: '/over-ons', label: 'Over Mart' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-bone/95 backdrop-blur-xl border-b-2 border-steel-900 shadow-[0_4px_0_0_rgba(15,17,18,0.04)]'
          : 'bg-bone border-b-2 border-transparent'
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label={business.name}>
          {/* Marts M-mark: oranje cirkel + grote grijze M (matching FB profile pic) */}
          <div className="relative grid h-12 w-12 place-items-center rounded-full bg-mart-500 ring-2 ring-steel-900 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            <span className="font-display font-black text-2xl text-steel-700 leading-none -mt-0.5">M</span>
          </div>
          <span className="font-display text-[15px] font-bold tracking-tight text-steel-900 uppercase">
            Marts <span className="text-steel-500 font-medium normal-case tracking-normal">Montage Service</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-[13px] font-semibold text-steel-700 transition-colors hover:text-steel-900 group"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 origin-left bg-mart-500 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.general)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-mart-500 px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-mart-600 ring-2 ring-steel-900"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="tabular-nums">{business.phone}</span>
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden -mr-2 grid h-11 w-11 place-items-center rounded-xl text-steel-900 hover:bg-steel-100"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden border-t-2 border-steel-900 bg-bone transition-all duration-300 overflow-hidden',
          open ? 'max-h-[480px]' : 'max-h-0'
        )}
      >
        <nav className="container-x py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-4 rounded-xl hover:bg-steel-100 font-semibold text-base text-steel-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-3 mb-2">
            <a href={`tel:${business.phoneE164}`} className="btn-primary text-sm" onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" /> Bel
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
