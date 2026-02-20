import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, ChevronRight, Utensils, Beer, Clock, Bike } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { restaurant, menu } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export default function Home() {
  const burgers    = menu[0].items.slice(0, 3)
  const signatures = menu[1].items.slice(0, 3)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <Image
          src="/images/hero.jpg"
          alt="Gastro No 8"
          fill
          priority
          className="object-cover object-center hero-img"
        />

        {/* Dark overlay — heavier so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-g-black" />

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto hero-text">

          {/* Eyebrow */}
          <p
            className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-g-teal mb-6 sm:mb-8"
            style={{ fontFamily: DM }}
          >
            Cafe &amp; Bar · Blåvand
          </p>

          {/* Main heading — elegant, NOT bold */}
          <h1
            className="text-[clamp(3rem,12vw,7rem)] font-light leading-none tracking-[0.06em] uppercase text-g-off mb-3"
            style={{ fontFamily: CF }}
          >
            Gastro No 8
          </h1>

          {/* Thin teal rule */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 sm:w-16 bg-g-teal/60" />
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.3em] text-g-muted"
              style={{ fontFamily: DM }}
            >
              Blåvandvej 8a
            </p>
            <div className="h-px w-12 sm:w-16 bg-g-teal/60" />
          </div>

          <p
            className="text-g-muted text-sm sm:text-base mb-10 leading-relaxed max-w-xs sm:max-w-sm mx-auto"
            style={{ fontFamily: DM }}
          >
            Gourmetburgere og klassiske danske retter — i hjertet af Blåvand
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-g-teal hover:bg-[#38d4c6] text-g-black text-sm font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
              style={{ fontFamily: DM }}
            >
              Se menukort
              <ChevronRight size={16} strokeWidth={1.5} />
            </Link>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-g-text text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
              style={{ fontFamily: DM }}
            >
              <Phone size={14} strokeWidth={1.5} />
              {restaurant.phone}
            </a>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-10 bg-g-teal" />
        </div>
      </section>

      {/* ─── FEATURES STRIP ───────────────────────────────────── */}
      <section className="bg-g-surface border-y border-g-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: Utensils, label: 'Gourmet Burgere',  sub: 'Fra 165 kr'       },
              { icon: Beer,     label: 'Bar & Øl',         sub: 'Ny øl hver måned' },
              { icon: Clock,    label: 'Frokost',          sub: '11:00 – 16:00'    },
              { icon: Bike,     label: 'Takeaway',         sub: 'Ring og bestil'   },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div
                key={label}
                className={[
                  'flex flex-col items-center text-center gap-2 py-7 px-4',
                  i < 3 ? 'border-r border-g-border' : '',
                ].join(' ')}
              >
                <Icon size={18} strokeWidth={1.5} className="text-g-teal mb-1" />
                <p className="text-g-text text-sm font-medium" style={{ fontFamily: DM }}>{label}</p>
                <p className="text-g-muted text-xs" style={{ fontFamily: DM }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BURGER SECTION ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-g-black">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <Reveal direction="left" distance={20} duration={700}>
              <div>
                <p className="text-g-teal text-[10px] uppercase tracking-[0.3em] mb-4" style={{ fontFamily: DM }}>Vores signatur</p>
                <h2
                  className="text-4xl sm:text-5xl font-light text-g-off leading-tight mb-5 tracking-wide uppercase"
                  style={{ fontFamily: CF }}
                >
                  Burgere lavet<br />med karakter
                </h2>
                <p className="text-g-muted leading-relaxed mb-8 text-sm" style={{ fontFamily: DM }}>
                  Fra den klassiske Gastro Original til den heftige Hot &amp; Spicy — alle lavet med håndformede bøffer og friske råvarer.
                </p>
                <div className="space-y-4 mb-8">
                  {burgers.map(item => (
                    <div key={item.name} className="flex justify-between gap-4 border-b border-g-border pb-4">
                      <div className="min-w-0">
                        <p className="text-g-text text-sm font-medium" style={{ fontFamily: DM }}>{item.name}</p>
                        <p className="text-g-muted text-xs mt-0.5 line-clamp-1" style={{ fontFamily: DM }}>{item.description}</p>
                      </div>
                      <span className="text-g-amber text-sm font-medium shrink-0 tabular-nums" style={{ fontFamily: DM }}>{item.price} kr</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-g-teal text-sm hover:gap-3 transition-all"
                  style={{ fontFamily: DM }}
                >
                  Se hele menukortet <ChevronRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" distance={20} duration={700} delay={80}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/60">
                <Image
                  src="/images/burger.jpg"
                  alt="Gastro No 8 gourmet burger"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-g-black/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SIGNATUR GRID ────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-g-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal direction="up" distance={12}>
            <div className="text-center mb-12">
              <p className="text-g-teal text-[10px] uppercase tracking-[0.3em] mb-3" style={{ fontFamily: DM }}>Gastro Signatur</p>
              <h2
                className="text-3xl sm:text-4xl font-light text-g-off uppercase tracking-widest"
                style={{ fontFamily: CF }}
              >
                Klassikerne
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {signatures.map((item, i) => (
              <Reveal key={item.name} direction="up" distance={14} delay={i * 80} duration={550}>
                <div className="bg-g-card border border-g-border rounded-xl p-5 hover:border-g-teal/30 transition-all duration-300 hover:-translate-y-0.5 group">
                  <p
                    className="text-g-text text-sm font-medium mb-1.5 group-hover:text-g-off transition-colors"
                    style={{ fontFamily: DM }}
                  >
                    {item.name}
                  </p>
                  <p className="text-g-muted text-xs leading-relaxed line-clamp-2 mb-4" style={{ fontFamily: DM }}>{item.description}</p>
                  <p className="text-g-amber text-sm font-medium" style={{ fontFamily: DM }}>{item.price} kr</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" distance={10} delay={280}>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 border border-g-border hover:border-g-teal/50 text-g-muted hover:text-g-teal text-sm px-6 py-3 rounded-lg transition-all"
                style={{ fontFamily: DM }}
              >
                Se fuldt menukort <ChevronRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── MORMORSKØKKEN ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-g-black">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <Reveal direction="left" distance={20} duration={700}>
              <div className="relative rounded-xl overflow-hidden aspect-square shadow-2xl shadow-black/60 order-2 md:order-1">
                <Image
                  src="/images/dish.jpg"
                  alt="Gastro No 8 — klassisk mad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-g-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="text-xl font-light text-g-off uppercase tracking-widest"
                    style={{ fontFamily: CF }}
                  >
                    Mormorskøkken
                  </p>
                  <p className="text-g-muted text-xs mt-1" style={{ fontFamily: DM }}>Fredag aften</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" distance={20} duration={700} delay={80} className="order-1 md:order-2">
              <div>
                <p className="text-g-teal text-[10px] uppercase tracking-[0.3em] mb-4" style={{ fontFamily: DM }}>Fredagsspecial</p>
                <h2
                  className="text-4xl sm:text-5xl font-light text-g-off leading-tight mb-5 uppercase tracking-wide"
                  style={{ fontFamily: CF }}
                >
                  Klassisk dansk<br />mad hver fredag
                </h2>
                <p className="text-g-muted leading-relaxed mb-5 text-sm" style={{ fontFamily: DM }}>
                  Stegte flæsk med persillesovs, hakkebøf med løg — mad som mormor lavede den. Begrænset antal pladser.
                </p>
                <p className="text-g-muted text-xs italic mb-8" style={{ fontFamily: DM }}>
                  Ring og book i god tid.
                </p>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                  className="inline-flex items-center gap-2 bg-g-teal hover:bg-[#38d4c6] text-g-black text-sm font-medium px-7 py-3.5 rounded-lg transition-all"
                  style={{ fontFamily: DM }}
                >
                  <Phone size={14} strokeWidth={1.5} />
                  Book bord — {restaurant.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── INTERIOR BANNER ──────────────────────────────────── */}
      <section className="bg-g-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-8">
          <Reveal direction="up" distance={12}>
            <div className="relative rounded-xl overflow-hidden h-56 sm:h-80 shadow-xl shadow-black/50">
              <Image
                src="/images/interior.jpg"
                alt="Gastro No 8 — interiør"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <p
                    className="text-3xl sm:text-5xl font-light text-g-off uppercase tracking-[0.12em] mb-2"
                    style={{ fontFamily: CF }}
                  >
                    Gastro No 8
                  </p>
                  <p className="text-g-muted text-xs uppercase tracking-[0.3em]" style={{ fontFamily: DM }}>
                    Blåvandvej 8a · 6857 Blåvand
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-g-black border-t border-g-border">
        <div className="max-w-xl mx-auto px-5 text-center">
          <Reveal direction="up" distance={12}>
            <p className="text-g-teal text-[10px] uppercase tracking-[0.3em] mb-4" style={{ fontFamily: DM }}>Klar til et godt måltid?</p>
            <h2
              className="text-4xl sm:text-5xl font-light text-g-off mb-5 uppercase tracking-wide"
              style={{ fontFamily: CF }}
            >
              Vi er klar til dig
            </h2>
            <p className="text-g-muted text-sm mb-10 leading-relaxed" style={{ fontFamily: DM }}>
              Ring og book dit bord — eller kig forbi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center justify-center gap-2 bg-g-teal hover:bg-[#38d4c6] text-g-black text-sm font-medium px-8 py-4 rounded-lg transition-all"
                style={{ fontFamily: DM }}
              >
                <Phone size={15} strokeWidth={1.5} />
                Ring — {restaurant.phone}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border border-g-border hover:border-g-teal/40 text-g-muted hover:text-g-text text-sm px-8 py-4 rounded-lg transition-all"
                style={{ fontFamily: DM }}
              >
                <MapPin size={14} strokeWidth={1.5} />
                Find os
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
