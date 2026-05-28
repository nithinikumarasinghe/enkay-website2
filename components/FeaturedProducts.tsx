import Image from 'next/image'

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
            Hottest picks ✦
          </h2>
        </div>

        {/* Grid — 2 cols on tablet, 5 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
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
