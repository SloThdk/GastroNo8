import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import JsonLd from '@/components/JsonLd'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

const BASE_URL = 'https://gastrono8-demo.pages.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Gastro No 8 — Cafe & Bar i Blåvand',
    template: '%s | Gastro No 8',
  },
  description: 'Gourmetburgere, klassisk dansk mad og god øl midt i Blåvand. Takeaway og bordbestilling på 61 31 72 40.',
  keywords: ['restaurant Blåvand', 'Gastro No 8', 'burger Blåvand', 'cafe bar Blåvand', 'takeaway Blåvand'],
  openGraph: {
    type:        'website',
    locale:      'da_DK',
    url:         BASE_URL,
    siteName:    'Gastro No 8',
    title:       'Gastro No 8 — Cafe & Bar i Blåvand',
    description: 'Gourmetburgere, klassisk dansk mad og god øl midt i Blåvand.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Gastro No 8 — Cafe & Bar i Blåvand' }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-gastro-black text-gastro-text font-dm antialiased">
        <JsonLd />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
