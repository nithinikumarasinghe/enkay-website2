import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'eNKay — Where craft meets style',
  description:
    'Handmade luxury handbags, born in Sri Lanka. Every piece made entirely by hand, one bead at a time.',
  keywords: ['handmade handbags', 'luxury bags', 'beaded bags', 'Sri Lanka', 'artisan bags'],
  verification: {
    google: 'LbzCCAlbooY3nIkNuwoVnZ79WhXLaRHBNClkIcX3T6A',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
