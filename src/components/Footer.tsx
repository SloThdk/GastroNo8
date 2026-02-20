import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { restaurant } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-g-border" style={{ background: '#0a0806' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <p
            className="text-xl font-medium tracking-[0.12em] uppercase text-g-off mb-1"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Gastro No 8
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-g-muted mb-4">Cafe &amp; Bar · Blåvand</p>
          <p className="text-g-muted text-sm leading-relaxed max-w-[200px]">
            Klassisk mad og drikkevarer midt i Blåvand.
          </p>
          <a
            href={restaurant.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-g-muted hover:text-g-teal transition-colors text-sm"
          >
            <Facebook size={14} strokeWidth={1.5} />
            Følg os på Facebook
          </a>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-g-muted mb-4">Menu</p>
          <div className="flex flex-col gap-2.5">
            {[['/', 'Forside'], ['/menu', 'Menukort'], ['/kontakt', 'Kontakt & Find os']].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-g-muted hover:text-g-text transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-g-muted mb-4">Kontakt</p>
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center gap-2 text-sm text-g-muted hover:text-g-teal transition-colors"
            >
              <Phone size={13} strokeWidth={1.5} />
              {restaurant.phone}
            </a>
            <a
              href={`mailto:${restaurant.email}`}
              className="flex items-center gap-2 text-sm text-g-muted hover:text-g-teal transition-colors"
            >
              <Mail size={13} strokeWidth={1.5} />
              {restaurant.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-g-muted">
              <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" />
              {restaurant.address}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-g-border py-4 text-center">
        <p className="text-xs text-g-muted/50">
          © {new Date().getFullYear()} Gastro No 8 · Blåvand
        </p>
      </div>
    </footer>
  )
}
