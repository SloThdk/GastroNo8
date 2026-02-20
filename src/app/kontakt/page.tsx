import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { restaurant } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Kontakt & Find os',
  description: 'Find Gastro No 8 på Blåvandvej 8a, 6857 Blåvand. Ring på 61 31 72 40 — bordbestilling og takeaway.',
}

export default function Kontakt() {
  return (
    <>
      <div className="bg-gastro-black min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-5 max-w-5xl">

          <Reveal direction="up" distance={16} duration={700}>
            <div className="text-center mb-16">
              <p className="text-gastro-teal text-[11px] uppercase tracking-[0.3em] font-syne mb-3">Gastro No 8</p>
              <h1 className="font-syne font-black text-5xl sm:text-6xl text-gastro-off mb-4">Find os</h1>
              <div className="w-10 h-px bg-gastro-teal mx-auto shadow-[0_0_8px_rgba(46,196,182,0.6)]" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Contact card */}
            <Reveal direction="left" distance={20} duration={700}>
              <div className="bg-gastro-surface border border-gastro-border rounded-2xl p-7 h-full">
                <h2 className="font-syne font-bold text-gastro-off text-lg mb-6">Kontaktoplysninger</h2>
                <div className="space-y-5">
                  <a
                    href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gastro-teal/10 border border-gastro-teal/20 flex items-center justify-center shrink-0 group-hover:bg-gastro-teal/20 transition-colors">
                      <Phone size={16} className="text-gastro-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gastro-muted mb-0.5">Telefon</p>
                      <p className="text-gastro-text font-syne font-semibold group-hover:text-gastro-teal transition-colors">
                        {restaurant.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${restaurant.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gastro-teal/10 border border-gastro-teal/20 flex items-center justify-center shrink-0 group-hover:bg-gastro-teal/20 transition-colors">
                      <Mail size={16} className="text-gastro-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gastro-muted mb-0.5">Email</p>
                      <p className="text-gastro-text font-syne font-semibold group-hover:text-gastro-teal transition-colors break-all">
                        {restaurant.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gastro-teal/10 border border-gastro-teal/20 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-gastro-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gastro-muted mb-0.5">Adresse</p>
                      <p className="text-gastro-text font-syne font-semibold">{restaurant.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gastro-teal/10 border border-gastro-teal/20 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-gastro-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gastro-muted mb-0.5">Åbningstider</p>
                      <p className="text-gastro-text font-syne font-semibold">Frokost 11:00–16:00</p>
                      <p className="text-gastro-muted text-sm">Ring for aftenmenu og sæsonåbningstider</p>
                    </div>
                  </div>

                  <a
                    href={restaurant.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gastro-teal/10 border border-gastro-teal/20 flex items-center justify-center shrink-0 group-hover:bg-gastro-teal/20 transition-colors">
                      <Facebook size={16} className="text-gastro-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gastro-muted mb-0.5">Facebook</p>
                      <p className="text-gastro-text font-syne font-semibold group-hover:text-gastro-teal transition-colors">
                        Gastro No 8
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal direction="right" distance={20} duration={700} delay={100}>
              <div className="rounded-2xl overflow-hidden border border-gastro-border h-full min-h-[360px]">
                <iframe
                  src="https://maps.google.com/maps?q=Blåvandvej+8a,+6857+Blåvand&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ minHeight: 360, border: 0, filter: 'grayscale(60%) invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Gastro No 8 på kort"
                />
              </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal direction="up" distance={12}>
            <div className="rounded-2xl bg-gastro-surface border border-gastro-teal/20 p-8 text-center neon-border">
              <p className="font-syne font-black text-xl text-gastro-off mb-1">Book dit bord</p>
              <p className="text-gastro-muted text-sm mb-6">Bordbestilling og takeaway — ring direkte til os.</p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-gastro-teal hover:bg-[#3dd6c7] text-gastro-black font-syne font-bold px-8 py-4 rounded-xl transition text-base"
              >
                <Phone size={17} />
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
