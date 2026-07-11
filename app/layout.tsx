import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import Script from 'next/script'
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
      'Every piece handmade, one bead at a time. No factory shortcuts. No two exactly alike. Born in Sri Lanka. Made for the woman with refined, unique taste.',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TP6659LQ');`}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TP6659LQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
      </body>
    </html>
  )
}
