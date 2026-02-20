import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { restaurant } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] border-t border-gastro-border">
      <div className="container mx-auto px-5 max-w-6xl py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <p className="font-syne font-black text-2xl neon tracking-tight mb-1">
            GASTRO N<span className="inline-block -translate-y-0.5">o</span>8
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-gastro-muted mb-4">Cafe &amp; Bar · Blåvand</p>
          <p className="text-gastro-muted text-sm leading-relaxed max-w-[220px]">
            Klassiske retter og drikkevarer midt i Blåvand.
          </p>
          <a
            href={restaurant.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-gastro-muted hover:text-gastro-teal transition-colors text-sm"
          >
            <Facebook size={15} />
            Følg os på Facebook
          </a>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gastro-muted mb-4">Navigation</p>
          <div className="flex flex-col gap-2.5">
            {[['/', 'Hjem'], ['/menu', 'Menukort'], ['/kontakt', 'Kontakt & Find os']].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-gastro-muted hover:text-gastro-text transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gastro-muted mb-4">Kontakt</p>
          <div className="flex flex-col gap-3">
            <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
               className="flex items-center gap-2 text-sm text-gastro-muted hover:text-gastro-teal transition-colors">
              <Phone size={13} />
              {restaurant.phone}
            </a>
            <a href={`mailto:${restaurant.email}`}
               className="flex items-center gap-2 text-sm text-gastro-muted hover:text-gastro-teal transition-colors">
              <Mail size={13} />
              {restaurant.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-gastro-muted">
              <MapPin size={13} className="mt-0.5 shrink-0" />
              {restaurant.address}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gastro-border py-4 text-center">
        <p className="text-xs text-gastro-muted/50">
          © {new Date().getFullYear()} Gastro No 8 · Blåvand
        </p>
      </div>
    </footer>
  )
}
