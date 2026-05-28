export default function About() {
  return (
    <section id="about" className="py-24 bg-taupe/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-stone mb-6"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl text-onyx leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Born from
              <br />
              <em>a single bead.</em>
            </h2>

            <div
              className="space-y-5 text-[13px] leading-relaxed text-onyx/70 max-w-md"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
            >
              <p>
                eNKay began the way most beautiful things do, by accident. A single TikTok video. Fifty hours of careful, often imperfect work. One bag.
              </p>
              <p>
                She shared it. The response surprised her. Strangers approached. Orders followed. That&apos;s when she looked at the market and realised something: bags like these were rare. The craft itself, even rarer.
              </p>
              <p>
                Today, every eNKay piece carries that same DNA: made slowly, made with intention, made by someone who chose this craft because she loved it first.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#shop"
                className="inline-block bg-burgundy text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-burgundy/90 transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Shop the Collection
              </a>
              <a
                href="#contact"
                className="inline-block border border-onyx/30 text-onyx text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:border-onyx transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="flex justify-center">
            <div
              className="w-80 h-80 rounded-full bg-taupe flex items-center justify-center relative overflow-hidden"
            >
              {/* Placeholder for lifestyle photo */}
              <div className="text-center opacity-30">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="18" stroke="#1F1F1F" strokeWidth="1.5"/>
                  <path d="M 15 85 Q 15 62 50 62 Q 85 62 85 85" stroke="#1F1F1F" strokeWidth="1.5" fill="none"/>
                </svg>
                <p
                  className="text-[9px] tracking-widest uppercase text-onyx mt-3"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Founder photo
                </p>
              </div>
              {/* Subtle watermark */}
              <span
                className="absolute text-[12rem] font-bold text-onyx/[0.04] leading-none select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-cormorant)' }}
                aria-hidden="true"
              >
                e
              </span>
            </div>
          </div>
        </div>

        {/* Values strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-taupe">
          {[
            { label: 'Real Craft', desc: 'Made by human hands. Not factories.' },
            { label: 'Intentional Slowness', desc: 'A single bag can take days, sometimes weeks.' },
            { label: 'One-of-a-Kind', desc: 'No two are exactly identical. That\'s the point.' },
          ].map((v) => (
            <div key={v.label}>
              <h4
                className="text-xl text-burgundy mb-2"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {v.label}
              </h4>
              <p
                className="text-[13px] text-onyx/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
