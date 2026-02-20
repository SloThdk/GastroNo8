import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { menu, restaurant } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Menukort',
  description: 'Se Gastro No 8\'s fulde menukort — gourmetburgere, signaturetter, snacks, børnemenu og dessert. Frokost 11–16 i Blåvand.',
}

export default function Menu() {
  return (
    <>
      <div className="bg-gastro-black min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-5 max-w-5xl">

          {/* Header */}
          <Reveal direction="up" distance={16} duration={700}>
            <div className="text-center mb-20">
              <p className="text-gastro-teal text-[11px] uppercase tracking-[0.3em] font-syne mb-3">Gastro No 8</p>
              <h1 className="font-syne font-black text-5xl sm:text-6xl neon mb-4">Menukort</h1>
              <div className="w-10 h-px bg-gastro-teal mx-auto mb-5 shadow-[0_0_8px_rgba(46,196,182,0.6)]" />
              <p className="text-gastro-muted max-w-sm mx-auto text-sm leading-relaxed">
                Frokost serveres 11:00–16:00 · Alle burgere med pommes frites<br />
                Ring for aftenmenu og reservationer
              </p>
            </div>
          </Reveal>

          {/* Categories */}
          <div className="space-y-16">
            {menu.map(({ category, note, items }, catIdx) => (
              <div key={category}>

                {/* Category header */}
                <Reveal direction="up" distance={10} duration={600}>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gastro-border to-gastro-border" />
                    <h2 className="font-syne font-black text-2xl sm:text-3xl text-gastro-teal whitespace-nowrap px-1">
                      {category}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gastro-border to-gastro-border" />
                  </div>
                  {note && (
                    <p className="text-center text-gastro-muted text-xs italic -mt-4 mb-6">{note}</p>
                  )}
                </Reveal>

                {/* 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map(({ name, description, price }, itemIdx) => {
                    const isLeft = itemIdx % 2 === 0
                    return (
                      <Reveal
                        key={name}
                        direction={isLeft ? 'left' : 'right'}
                        distance={20}
                        delay={itemIdx * 40}
                        duration={480}
                      >
                        <div className="group relative flex items-start justify-between gap-4 rounded-2xl px-5 py-4 border border-gastro-border bg-gastro-card/60 hover:border-gastro-teal-dim/50 hover:bg-gastro-card hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-black/40">
                          {/* Teal accent bar on hover */}
                          <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-gastro-teal/0 group-hover:bg-gastro-teal/60 transition-all duration-300" />
                          <div className="min-w-0 flex-1 pl-1">
                            <p className="font-syne font-semibold text-gastro-text leading-snug group-hover:text-gastro-off transition-colors">
                              {name}
                            </p>
                            {description && (
                              <p className="text-gastro-muted text-sm mt-1 leading-relaxed">{description}</p>
                            )}
                          </div>
                          {price && (
                            <span className="text-gastro-amber font-syne font-bold text-base shrink-0 tabular-nums pt-0.5">
                              {price} kr
                            </span>
                          )}
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal direction="up" distance={12} duration={600}>
            <div className="mt-20 rounded-2xl border border-gastro-teal/20 bg-gastro-surface p-8 text-center neon-border">
              <p className="font-syne font-black text-xl text-gastro-off mb-1">Spørgsmål til menuen?</p>
              <p className="text-gastro-muted text-sm mb-6">
                Vi tager imod bordbestillinger og takeaway — ring til os direkte.
              </p>
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
