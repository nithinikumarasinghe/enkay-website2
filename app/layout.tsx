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
  title: 'eNKay | Handmade Luxury Beaded Handbags from Sri Lanka',
  description:
    'Shop one-of-a-kind handmade beaded handbags from Sri Lanka. Each luxury beaded clutch & bag is crafted entirely by hand. Made to order & in stock.',
  keywords: [
    'handmade beaded bags',
    'luxury beaded handbags Sri Lanka',
    'one of a kind beaded clutch',
    'handmade luxury handbags',
    'beaded bags Sri Lanka',
    'artisan handbags',
    'made to order bags',
    'beaded clutch bag',
  ],
  verification: {
    google: 'LbzCCAlbooY3nIkNuwoVnZ79WhXLaRHBNClkIcX3T6A',
  },
  openGraph: {
    title: 'eNKay | Handmade Luxury Beaded Handbags from Sri Lanka',
    description:
      'Shop one-of-a-kind handmade beaded handbags from Sri Lanka. Each luxury beaded clutch & bag is crafted entirely by hand. Made to order & in stock.',
    url: 'https://enkaybags.com',
    siteName: 'eNKay',
    images: [
      {
        url: 'https://enkaybags.com/products/enkay_herobgblack.png',
        width: 1200,
        height: 630,
        alt: 'eNKay — Handmade Luxury Beaded Handbags from Sri Lanka',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eNKay | Handmade Luxury Beaded Handbags from Sri Lanka',
    description:
      'Shop one-of-a-kind handmade beaded handbags from Sri Lanka. Each luxury beaded clutch & bag is crafted entirely by hand.',
    images: ['https://enkaybags.com/products/enkay_herobgblack.png'],
  },
  alternates: {
    canonical: 'https://enkaybags.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
