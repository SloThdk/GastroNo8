import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { menu, restaurant } from '@/lib/data'

const CF = 'var(--font-cormorant)'
const DM = 'var(--font-dm)'

export const metadata: Metadata = {
  title: 'Menukort',
  description: 'Se Gastro No 8\'s fulde menukort — gourmetburgere, signaturetter, snacks, børnemenu og dessert i Blåvand.',
}

export default function Menu() {
  return (
    <>
      <div className="bg-g-black min-h-screen pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <Reveal direction="up" distance={14} duration={700}>
            <div className="text-center mb-20">
              <p className="text-g-teal text-[10px] uppercase tracking-[0.35em] mb-4" style={{ fontFamily: DM }}>Gastro No 8</p>
              <h1
                className="text-5xl sm:text-7xl font-light uppercase tracking-[0.08em] text-g-off mb-5"
                style={{ fontFamily: CF }}
              >
                Menukort
              </h1>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-g-teal/50" />
                <p className="text-g-muted text-xs uppercase tracking-[0.25em]" style={{ fontFamily: DM }}>Frokost 11:00–16:00</p>
                <div className="h-px w-10 bg-g-teal/50" />
              </div>
              <p className="text-g-muted text-sm max-w-xs mx-auto leading-relaxed" style={{ fontFamily: DM }}>
                Alle burgere serveres med pommes frites.<br />
                Ring for aftenmenu og reservationer.
              </p>
            </div>
          </Reveal>

          {/* Categories */}
          <div className="space-y-16">
            {menu.map(({ category, note, items }) => (
              <div key={category}>

                {/* Category header */}
                <Reveal direction="up" distance={10} duration={600}>
                  <div className="flex items-center gap-5 mb-7">
                    <div className="h-px flex-1 bg-g-border" />
                    <h2
                      className="text-2xl sm:text-3xl font-light uppercase tracking-[0.15em] text-g-teal whitespace-nowrap"
                      style={{ fontFamily: CF }}
                    >
                      {category}
                    </h2>
                    <div className="h-px flex-1 bg-g-border" />
                  </div>
                  {note && (
                    <p className="text-center text-g-muted text-xs italic -mt-3 mb-6" style={{ fontFamily: DM }}>{note}</p>
                  )}
                </Reveal>

                {/* 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map(({ name, description, price }, itemIdx) => (
                    <Reveal
                      key={name}
                      direction={itemIdx % 2 === 0 ? 'left' : 'right'}
                      distance={16}
                      delay={itemIdx * 40}
                      duration={480}
                    >
                      <div className="group flex items-start justify-between gap-4 rounded-xl px-5 py-4 bg-g-card border border-g-border hover:border-g-teal/25 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="min-w-0 flex-1">
                          <p
                            className="text-g-text text-sm font-medium leading-snug group-hover:text-g-off transition-colors"
                            style={{ fontFamily: DM }}
                          >
                            {name}
                          </p>
                          {description && (
                            <p className="text-g-muted text-xs mt-1 leading-relaxed" style={{ fontFamily: DM }}>{description}</p>
                          )}
                        </div>
                        {price && (
                          <span
                            className="text-g-amber text-sm font-medium shrink-0 tabular-nums pt-0.5"
                            style={{ fontFamily: DM }}
                          >
                            {price} kr
                          </span>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Reveal direction="up" distance={12}>
            <div className="mt-20 rounded-xl border border-g-border bg-g-surface p-8 sm:p-10 text-center">
              <p
                className="text-2xl sm:text-3xl font-light text-g-off uppercase tracking-wide mb-2"
                style={{ fontFamily: CF }}
              >
                Spørgsmål til menuen?
              </p>
              <p className="text-g-muted text-sm mb-6" style={{ fontFamily: DM }}>
                Vi tager imod bordbestillinger og takeaway — ring direkte.
              </p>
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
