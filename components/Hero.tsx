export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex">
      {/* Left — image area */}
      <div className="hidden md:flex w-[58%] bg-taupe items-center justify-center relative overflow-hidden">
        {/* Placeholder until product photos are ready */}
        <div className="flex flex-col items-center gap-6 opacity-30">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="42" width="70" height="48" rx="3" stroke="#1F1F1F" strokeWidth="1.5"/>
            <path d="M 35 42 Q 35 22 50 22 Q 65 22 65 42" stroke="#1F1F1F" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="42" r="4" stroke="#1F1F1F" strokeWidth="1.2" fill="none"/>
            <line x1="15" y1="58" x2="85" y2="58" stroke="#1F1F1F" strokeWidth="0.8" strokeDasharray="4 3"/>
          </svg>
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-onyx"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Product photography coming soon
          </p>
        </div>
        {/* Subtle NK watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[28vw] font-bold text-onyx/[0.04] leading-none"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            NK
          </span>
        </div>
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
            Your bags aren&apos;t just accessories — they&apos;re integral parts of your statement, every journey.
            Hand-placed, one bead at a time.
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
    </section>
  )
}
