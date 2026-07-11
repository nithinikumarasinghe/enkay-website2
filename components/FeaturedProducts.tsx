'use client'
import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    name: 'Aurelia Pearl Midi',
    description: 'Pearl midi bag',
    status: 'Made to order',
    image: '/products/aurelia-pearl-midi.png',
    imageAlt: 'Aurelia Pearl Midi — ivory hand-beaded bag',
  },
  {
    name: 'Celeste Clutch',
    description: 'Hand-beaded clutch',
    status: 'In stock',
    image: '/products/celeste-clutch.png',
    imageAlt: 'Celeste Clutch — blue crystal beaded clutch',
  },
  {
    name: 'Garnet Orb',
    description: 'Sculptural round bag',
    status: 'In stock',
    image: '/products/garnet-orb.png',
    imageAlt: 'Garnet Orb — deep burgundy circular beaded bag',
  },
  {
    name: 'Sparkle Mini — Ember',
    description: 'Mini top-handle bag',
    status: 'In stock',
    image: '/products/sparkle-mini-ember.png',
    imageAlt: 'Sparkle Mini Ember — orange iridescent beaded bag',
  },
  {
    name: 'Vellure Box Bag',
    description: 'Statement box bag',
    status: 'Made to order',
    image: '/products/vellure-box-bag.png',
    imageAlt: 'Vellure Box Bag — red and black geometric beaded bag',
  },
]

type Product = typeof products[0]

export default function FeaturedProducts() {
  const [selected, setSelected] = useState<Product | null>(null)

  function handleEnquire(productName: string) {
    setSelected(null)
    window.dispatchEvent(new CustomEvent('enquire-bag', { detail: { name: productName } }))
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <>
      <section id="shop" className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              The Collection
            </p>
            <h2
              className="text-4xl md:text-5xl text-onyx"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Hottest picks
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group cursor-pointer"
                onClick={() => setSelected(product)}
              >
                {/* Image */}
                <div className="aspect-[3/4] relative overflow-hidden mb-4 bg-taupe/30">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>

                {/* Info */}
                <p
                  className="text-[10px] tracking-[0.15em] uppercase text-stone mb-1"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  {product.description}
                </p>
                <h3
                  className="text-lg text-onyx mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {product.name}
                </h3>
                <span
                  className="text-[10px] tracking-wider uppercase text-stone"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
                >
                  {product.status}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="https://wa.me/94777580784?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20piece%20from%20eNKay."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag?.('event', 'whatsapp_click', { event_category: 'contact', event_label: 'whatsapp_button' })} // eslint-disable-line @typescript-eslint/no-explicit-any
              className="inline-block border border-onyx/30 text-onyx text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-burgundy hover:text-white hover:border-burgundy transition-all"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Enquire About a Piece
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-cream w-full max-w-lg relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 text-onyx/50 hover:text-onyx text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Image */}
            <div className="aspect-square relative w-full">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 512px"
              />
            </div>

            {/* Details */}
            <div className="px-8 py-6">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-stone mb-1"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                {selected.description}
              </p>
              <h3
                className="text-3xl text-onyx mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {selected.name}
              </h3>
              <span
                className="text-[10px] tracking-wider uppercase text-stone block mb-6"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
              >
                {selected.status}
              </span>

              <button
                onClick={() => handleEnquire(selected.name)}
                className="w-full bg-burgundy text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-burgundy/90 transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Enquire About This Bag
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
