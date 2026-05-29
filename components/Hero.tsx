import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Full-width background photo — person on left side */}
      <Image
        src="/products/enkay_herobgblack.png"
        alt="eNKay — handmade luxury bags from Sri Lanka"
        fill
        className="object-cover object-[10%_30%] md:object-left"
        priority
        sizes="100vw"
      />

      {/* Gradient: subtle on left (keep person visible), darker on right for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/25 to-black/60" />

      {/* Text content — right half */}
      <div className="relative z-10 ml-auto w-full md:w-[50%] px-10 md:px-16 lg:px-20 py-24">

        {/* "Carry Fashion" — Cormorant Garamond (matches The Seasons style) */}
        <h1
          className="text-7xl lg:text-8xl xl:text-[6.5rem] leading-[0.95] text-white mb-5"
          style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
        >
          Carry
          <br />
          Fashion
        </h1>

        {/* "IN EVERY STEP" — Montserrat Bold */}
        <p
          className="text-sm lg:text-base tracking-[0.2em] uppercase text-white mb-6"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
        >
          In Every Step
        </p>

        {/* Body — Montserrat Regular */}
        <p
          className="text-[13px] lg:text-sm leading-relaxed text-white/85 mb-10 max-w-xs"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
        >
          Your bags aren&apos;t just accessories, they&apos;re integral parts of your
          statement, every journey.
        </p>

        {/* White button with dark text */}
        <a
          href="#shop"
          className="inline-block bg-white text-onyx text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-cream transition-colors"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
        >
          Shop Now
        </a>

      </div>
    </section>
  )
}
