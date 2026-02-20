'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { restaurant } from '@/lib/data'

const links = [
  { href: '/',        label: 'Hjem'    },
  { href: '/menu',    label: 'Menu'    },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navigation() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-g-black/96 backdrop-blur-md border-b border-g-border'
          : 'bg-transparent',
      ].join(' ')}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className="text-base sm:text-lg font-semibold tracking-[0.15em] uppercase text-g-off group-hover:text-g-teal transition-colors duration-300"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Gastro No 8
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-g-muted mt-0.5"
              style={{ fontFamily: 'var(--font-dm)' }}>
              Cafe &amp; Bar · Blåvand
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-g-muted hover:text-g-text transition-colors duration-200"
                style={{ fontFamily: 'var(--font-dm)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center gap-1.5 text-g-muted hover:text-g-teal transition-colors text-sm"
              style={{ fontFamily: 'var(--font-dm)' }}
            >
              <Phone size={13} strokeWidth={1.5} />
              {restaurant.phone}
            </a>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="border border-g-teal/70 text-g-teal hover:bg-g-teal hover:text-g-black text-sm px-5 py-2 rounded-lg transition-all duration-200 tracking-wide"
              style={{ fontFamily: 'var(--font-dm)' }}
            >
              Bestil
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-g-text p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
          style={{ background: 'rgba(12,10,8,0.98)', backdropFilter: 'blur(12px)' }}
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-light text-g-off hover:text-g-teal transition-colors tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
            className="mt-4 flex items-center gap-2 border border-g-teal/60 text-g-teal px-8 py-3.5 rounded-xl text-base"
            style={{ fontFamily: 'var(--font-dm)' }}
          >
            <Phone size={16} strokeWidth={1.5} />
            {restaurant.phone}
          </a>
        </div>
      )}
    </>
  )
}
