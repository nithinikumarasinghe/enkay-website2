'use client'
import Image from 'next/image'
import Link from 'next/link'
import products from '@/lib/products'

export default function FeaturedProducts() {
  return (
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
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block"
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
                {product.category}
              </p>
              <h3
                className="text-lg text-onyx mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {product.name}
              </h3>
              <p
                className="text-[13px] text-onyx mb-1"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
              >
                Rs. {product.price.toLocaleString()}
              </p>
              <span
                className="text-[10px] tracking-wider uppercase text-stone"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
              >
                {product.status}
              </span>
            </Link>
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
  )
}
