const products = [
  {
    name: 'The Celeste Clutch',
    description: 'Hand-beaded evening clutch',
    status: 'Made to order',
    bg: '#CBC0B2',
  },
  {
    name: 'The Garnet Orb',
    description: 'Sculptural beaded shoulder bag',
    status: 'In stock',
    bg: '#E8E0D8',
  },
  {
    name: 'The Velvet Luxe',
    description: 'Statement clutch — burgundy beads',
    status: 'In stock',
    bg: '#D5CCC5',
  },
  {
    name: 'The Ivory Edit',
    description: 'Structured beaded top-handle',
    status: 'Made to order',
    bg: '#EDE8E3',
  },
]

function BagIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="42" width="72" height="48" rx="3" stroke="#7E6961" strokeWidth="1.5"/>
      <path d="M 34 42 Q 34 21 50 21 Q 66 21 66 42" stroke="#7E6961" strokeWidth="1.5" fill="none"/>
      <circle cx="50" cy="42" r="4.5" stroke="#7E6961" strokeWidth="1.2" fill="none"/>
      <line x1="14" y1="60" x2="86" y2="60" stroke="#7E6961" strokeWidth="0.8" strokeDasharray="4 3"/>
    </svg>
  )
}

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group cursor-pointer"
            >
              {/* Image area */}
              <div
                className="aspect-square flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: product.bg }}
              >
                <BagIcon />
              </div>

              {/* Info */}
              <p
                className="text-[11px] tracking-[0.08em] uppercase text-stone mb-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {product.description}
              </p>
              <h3
                className="text-xl text-onyx mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {product.name}
              </h3>
              <span
                className="text-[10px] tracking-wider uppercase text-stone"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {product.status}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block border border-onyx/30 text-onyx text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-burgundy hover:text-white hover:border-burgundy transition-all"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Enquire About a Piece
          </a>
        </div>
      </div>
    </section>
  )
}
