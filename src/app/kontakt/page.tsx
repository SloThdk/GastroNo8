import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { restaurant } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export const metadata: Metadata = {
  title: 'Kontakt & Find os',
  description: 'Find Gastro No 8 på Blåvandvej 8a, 6857 Blåvand. Ring på 61 31 72 40 — bordbestilling og takeaway.',
}

export default function Kontakt() {
  return (
    <>
      <div className="bg-g-black min-h-screen pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          <Reveal direction="up" distance={14} duration={700}>
            <div className="text-center mb-16">
              <p className="text-g-teal text-[10px] uppercase tracking-[0.35em] mb-4" style={{ fontFamily: DM }}>Gastro No 8</p>
              <h1
                className="text-5xl sm:text-6xl font-light uppercase tracking-[0.08em] text-g-off mb-5"
                style={{ fontFamily: CF }}
              >
                Find os
              </h1>
              <div className="w-10 h-px bg-g-teal/50 mx-auto" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {/* Contact card */}
            <Reveal direction="left" distance={18} duration={700}>
              <div className="bg-g-surface border border-g-border rounded-xl p-7 h-full">
                <h2
                  className="text-xl font-light uppercase tracking-widest text-g-off mb-7"
                  style={{ fontFamily: CF }}
                >
                  Kontakt
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone, label: 'Telefon', value: restaurant.phone,
                      href: `tel:${restaurant.phone.replace(/\s/g,'')}`,
                    },
                    {
                      icon: Mail, label: 'Email', value: restaurant.email,
                      href: `mailto:${restaurant.email}`,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-4 group">
                      <div className="w-9 h-9 rounded-lg border border-g-border flex items-center justify-center shrink-0 group-hover:border-g-teal/50 transition-colors">
                        <Icon size={14} strokeWidth={1.5} className="text-g-teal" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-g-muted mb-0.5" style={{ fontFamily: DM }}>{label}</p>
                        <p className="text-g-text text-sm group-hover:text-g-teal transition-colors break-all" style={{ fontFamily: DM }}>{value}</p>
                      </div>
                    </a>
                  ))}

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg border border-g-border flex items-center justify-center shrink-0">
                      <MapPin size={14} strokeWidth={1.5} className="text-g-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-g-muted mb-0.5" style={{ fontFamily: DM }}>Adresse</p>
                      <p className="text-g-text text-sm" style={{ fontFamily: DM }}>{restaurant.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg border border-g-border flex items-center justify-center shrink-0">
                      <Clock size={14} strokeWidth={1.5} className="text-g-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-g-muted mb-0.5" style={{ fontFamily: DM }}>Åbningstider</p>
                      <p className="text-g-text text-sm" style={{ fontFamily: DM }}>Frokost 11:00–16:00</p>
                      <p className="text-g-muted text-xs mt-0.5" style={{ fontFamily: DM }}>Ring for aftenmenu og sæsonåbningstider</p>
                    </div>
                  </div>

                  <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-lg border border-g-border flex items-center justify-center shrink-0 group-hover:border-g-teal/50 transition-colors">
                      <Facebook size={14} strokeWidth={1.5} className="text-g-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-g-muted mb-0.5" style={{ fontFamily: DM }}>Facebook</p>
                      <p className="text-g-text text-sm group-hover:text-g-teal transition-colors" style={{ fontFamily: DM }}>Gastro No 8</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal direction="right" distance={18} duration={700} delay={80}>
              <div className="rounded-xl overflow-hidden border border-g-border min-h-[360px] h-full">
                <iframe
                  src="https://maps.google.com/maps?q=Blåvandvej+8a,+6857+Blåvand&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ minHeight: 360, border: 0, filter: 'grayscale(70%) invert(92%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Gastro No 8 på kort"
                />
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal direction="up" distance={12}>
            <div className="rounded-xl border border-g-border bg-g-surface p-8 sm:p-10 text-center">
              <p
                className="text-2xl sm:text-3xl font-light text-g-off uppercase tracking-wide mb-2"
                style={{ fontFamily: CF }}
              >
                Book dit bord
              </p>
              <p className="text-g-muted text-sm mb-6" style={{ fontFamily: DM }}>Bordbestilling og takeaway — ring direkte.</p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center gap-2 bg-g-teal hover:bg-[#38d4c6] text-g-black text-sm font-medium px-8 py-4 rounded-lg transition-all"
                style={{ fontFamily: DM }}
              >
                <Phone size={15} strokeWidth={1.5} />
                Ring — {restaurant.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </>
  )
}
