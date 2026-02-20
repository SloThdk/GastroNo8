import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, ChevronRight, Utensils, Beer, Clock, Bike } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { restaurant, features, menu } from '@/lib/data'

export default function Home() {
  const signatures = menu[1].items.slice(0, 3)
  const burgers    = menu[0].items.slice(0, 3)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background photo */}
        <Image
          src="/images/hero.jpg"
          alt="Gastro No 8 — gourmet burger"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-gastro-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-gastro-black/40 via-transparent to-gastro-black/40" />

        {/* Subtle teal glow from "sign" above */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gastro-teal/5 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gastro-teal font-syne mb-6 opacity-90">
            Cafe &amp; Bar · Blåvandvej 8a · Blåvand
          </p>

          {/* The neon sign recreation */}
          <h1 className="font-syne font-black leading-none mb-2 select-none">
            <span className="block text-6xl sm:text-7xl md:text-8xl neon">
              GASTRO
            </span>
            <span className="block text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] neon -mt-2">
              N<span className="inline-block -translate-y-1">o</span>8
            </span>
          </h1>

          <p className="text-gastro-muted text-base sm:text-lg mt-6 mb-10 font-dm max-w-md mx-auto leading-relaxed">
            Klassiske retter og drikkevarer —<br />
            gourmetburgere, smørrebrød og god øl.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-gastro-teal hover:bg-[#3dd6c7] text-gastro-black font-syne font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Se menukort
              <ChevronRight size={18} />
            </Link>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/15 text-gastro-text font-syne font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <Phone size={16} />
              {restaurant.phone}
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gastro-teal/60 animate-pulse" />
        </div>
      </section>

      {/* ─── FEATURES STRIP ───────────────────────────────────── */}
      <section className="bg-gastro-surface border-y border-gastro-border">
        <div className="container mx-auto px-5 max-w-6xl py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gastro-border">
            {[
              { icon: Utensils, label: 'Gourmet Burgere',  sub: 'Fra 165 kr'          },
              { icon: Beer,     label: 'Bar & Øl',         sub: 'Ny øl hver måned'    },
              { icon: Clock,    label: 'Frokost 11–16',    sub: 'Klassisk dansk'       },
              { icon: Bike,     label: 'Takeaway',         sub: 'Ring og bestil'       },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-gastro-surface flex flex-col items-center justify-center gap-1.5 py-6 px-4 text-center">
                <Icon size={20} className="text-gastro-teal mb-1" strokeWidth={1.5} />
                <p className="font-syne font-bold text-gastro-text text-sm tracking-wide">{label}</p>
                <p className="text-gastro-muted text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE BURGER ─────────────────────────────────── */}
      <section className="py-24 bg-gastro-black">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <Reveal direction="left" distance={24} duration={700}>
              <div>
                <p className="text-gastro-teal text-[11px] uppercase tracking-[0.25em] font-syne mb-4">Vores signatur</p>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-gastro-off leading-tight mb-5">
                  Burgere lavet<br />med karakter
                </h2>
                <p className="text-gastro-muted leading-relaxed mb-6 text-[15px]">
                  Fra den klassiske Gastro Original til den heftige Hot &amp; Spicy — alle burgere er lavet med
                  håndformede bøffer og friske råvarer. Det er comfort food taget seriøst.
                </p>
                <div className="space-y-3 mb-8">
                  {burgers.map(item => (
                    <div key={item.name} className="flex items-center justify-between gap-4 border-b border-gastro-border pb-3">
                      <div>
                        <p className="text-gastro-text font-syne font-semibold text-sm">{item.name}</p>
                        <p className="text-gastro-muted text-xs mt-0.5 leading-snug line-clamp-1">{item.description}</p>
                      </div>
                      <span className="text-gastro-amber font-syne font-bold text-sm shrink-0 tabular-nums">{item.price} kr</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 text-gastro-teal font-syne font-semibold hover:gap-3 transition-all text-sm"
                >
                  Se hele menukortet <ChevronRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" distance={24} duration={700} delay={100}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/60">
                <Image
                  src="/images/burger.jpg"
                  alt="Gastro No 8 — Gourmet burger"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gastro-black/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SIGNATUR RETTER GRID ─────────────────────────────── */}
      <section className="py-20 bg-gastro-surface">
        <div className="container mx-auto px-5 max-w-6xl">
          <Reveal direction="up" distance={12}>
            <div className="text-center mb-12">
              <p className="text-gastro-teal text-[11px] uppercase tracking-[0.25em] font-syne mb-3">Gastro Signatur</p>
              <h2 className="font-syne font-black text-3xl sm:text-4xl text-gastro-off">Klassikerne på kortet</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {signatures.map((item, i) => (
              <Reveal key={item.name} direction="up" distance={16} delay={i * 80} duration={550}>
                <div className="bg-gastro-card border border-gastro-border rounded-2xl p-5 hover:border-gastro-teal-dim/50 hover:-translate-y-0.5 transition-all duration-300 group">
                  <p className="font-syne font-bold text-gastro-text group-hover:neon-sm transition-all">{item.name}</p>
                  <p className="text-gastro-muted text-sm mt-1.5 leading-relaxed line-clamp-2">{item.description}</p>
                  <p className="text-gastro-amber font-syne font-bold mt-4 text-base">{item.price} kr</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" distance={10} delay={300}>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 border border-gastro-teal/40 text-gastro-teal font-syne font-semibold px-6 py-3 rounded-xl hover:bg-gastro-teal/10 transition-all text-sm"
              >
                Se fuldt menukort <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── MORMORSKØKKEN SPECIAL ─────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-gastro-black">
        <div className="absolute inset-0 bg-gradient-to-r from-gastro-teal/5 via-transparent to-gastro-teal/5 pointer-events-none" />
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <Reveal direction="left" distance={24} duration={700}>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl shadow-black/60">
                <Image
                  src="/images/dish.jpg"
                  alt="Gastro No 8 — Mormorskøkken"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gastro-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-syne font-black text-xl neon-sm">Mormorskøkken</p>
                  <p className="text-gastro-off/70 text-sm">Nyt koncept · Fredag aften</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" distance={24} duration={700} delay={100}>
              <div>
                <p className="text-gastro-teal text-[11px] uppercase tracking-[0.25em] font-syne mb-4">Fredagsspecial</p>
                <h2 className="font-syne font-black text-4xl sm:text-5xl text-gastro-off leading-tight mb-5">
                  Mormorskøkken<br />
                  <span className="neon-sm">hver fredag aften</span>
                </h2>
                <p className="text-gastro-muted leading-relaxed mb-5 text-[15px]">
                  Hvert fredag serverer vi klassisk dansk hverdagsmad, som mormor lavede den — med kærlighed og uden
                  kompromiser. Stegte flæsk med persillesovs, hakkebøf med løg og andet godt.
                </p>
                <p className="text-gastro-muted text-sm mb-8 font-dm italic">
                  Begrænset antal pladser — ring og book i god tid.
                </p>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 bg-gastro-teal hover:bg-[#3dd6c7] text-gastro-black font-syne font-bold px-7 py-3.5 rounded-xl transition-all duration-200"
                >
                  <Phone size={16} />
                  Book bord — {restaurant.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── INTERIOR SHOT ────────────────────────────────────── */}
      <section className="py-20 bg-gastro-surface">
        <div className="container mx-auto px-5 max-w-6xl">
          <Reveal direction="up" distance={16} duration={700}>
            <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 shadow-2xl shadow-black/70">
              <Image
                src="/images/interior.jpg"
                alt="Gastro No 8 — interiør med neon skilt"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gastro-black/70 via-black/30 to-gastro-black/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-syne font-black text-4xl sm:text-5xl neon mb-2">GASTRO N<span className="inline-block -translate-y-0.5">o</span>8</p>
                  <p className="text-gastro-muted text-sm tracking-widest uppercase font-dm">Blåvandvej 8a · Blåvand</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gastro-black border-t border-gastro-border">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <Reveal direction="up" distance={12}>
            <p className="text-gastro-teal text-[11px] uppercase tracking-[0.25em] font-syne mb-4">Klar til et godt måltid?</p>
            <h2 className="font-syne font-black text-4xl sm:text-5xl text-gastro-off mb-5 leading-tight">
              Vi er klar til dig
            </h2>
            <p className="text-gastro-muted mb-10 leading-relaxed">
              Ring til os og book dit bord — eller kig forbi og se hvad der er på menuen i dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-gastro-teal hover:bg-[#3dd6c7] text-gastro-black font-syne font-bold px-8 py-4 rounded-xl transition-all text-base"
              >
                <Phone size={18} />
                Ring — {restaurant.phone}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border border-gastro-border hover:border-gastro-teal/50 text-gastro-text font-syne font-semibold px-8 py-4 rounded-xl transition-all text-base hover:bg-gastro-surface"
              >
                <MapPin size={16} />
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
