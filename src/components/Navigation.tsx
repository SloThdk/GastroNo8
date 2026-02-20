'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { restaurant } from '@/lib/data'

const links = [
  { href: '/',       label: 'Hjem'   },
  { href: '/menu',   label: 'Menu'   },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gastro-black/95 backdrop-blur-md border-b border-gastro-border shadow-lg shadow-black/50'
          : 'bg-transparent',
      ].join(' ')}>
        <div className="container mx-auto px-5 max-w-6xl flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-syne font-black text-xl tracking-tight neon group-hover:opacity-90 transition-opacity">
              GASTRO N<span className="inline-block -translate-y-0.5">o</span>8
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gastro-muted font-dm">Cafe &amp; Bar</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-dm text-gastro-muted hover:text-gastro-text transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-gastro-teal hover:text-gastro-off transition-colors text-sm font-dm"
            >
              <Phone size={14} />
              {restaurant.phone}
            </a>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="bg-gastro-teal hover:bg-[#3dd6c7] text-gastro-black font-syne font-bold text-sm px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Bestil nu
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-gastro-text p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-gastro-black/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-syne text-3xl font-bold text-gastro-text hover:neon transition-all"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
            className="mt-4 flex items-center gap-2 bg-gastro-teal text-gastro-black font-syne font-bold text-lg px-8 py-4 rounded-xl"
          >
            <Phone size={18} />
            Ring nu
          </a>
        </div>
      )}
    </>
  )
}
