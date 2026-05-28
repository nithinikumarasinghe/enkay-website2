import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex">
      {/* Left — hero image */}
      <div className="hidden md:block w-[58%] relative overflow-hidden">
        <Image
          src="/products/garnet-orb.jpg"
          alt="eNKay Garnet Orb — hand-beaded luxury bag"
          fill
          className="object-cover object-center"
          priority
          sizes="58vw"
        />
        {/* Subtle overlay so text on right reads cleanly */}
        <div className="absolute inset-0 bg-onyx/5" />
      </div>

      {/* Right — text content */}
      <div className="flex-1 bg-cream flex items-center">
        <div className="px-10 md:px-16 lg:px-20 py-20 max-w-lg">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-stone mb-8"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Handmade luxury — Sri Lanka
          </p>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-onyx mb-8"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Carry fashion
            <br />
            <em>in every</em>
            <br />
            Step
          </h1>

          <p
            className="text-[13px] leading-relaxed text-stone mb-10 max-w-xs"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Your bags aren&apos;t just accessories — they&apos;re integral parts of your statement,
            every journey. Hand-placed, one bead at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#shop"
              className="inline-block bg-burgundy text-white text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-burgundy/90 transition-colors"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Explore the Collection
            </a>
            <a
              href="#about"
              className="inline-block border border-onyx/30 text-onyx text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:border-onyx transition-colors"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Mobile — show image below fold as background strip */}
      <div className="md:hidden absolute inset-0 -z-10">
        <Image
          src="/products/garnet-orb.jpg"
          alt="eNKay Garnet Orb"
          fill
          className="object-cover object-center opacity-10"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  )
}
