import Image from 'next/image'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-onyx text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.svg"
            alt="eNKay"
            width={90}
            height={36}
            className="mb-5"
          />
          <p
            className="text-[12px] text-white/50 leading-relaxed max-w-xs"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Handmade luxury handbags, born in Sri Lanka. Every piece made entirely by hand, one bead at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-5"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Navigation
          </p>
          <ul className="space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12px] text-white/60 hover:text-white transition-colors tracking-wide"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline / brand statement */}
        <div className="flex flex-col justify-between">
          <p
            className="text-3xl text-white/80 italic leading-snug"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Where craft
            <br />
            meets style.
          </p>
          <p
            className="text-[10px] tracking-[0.15em] uppercase text-white/30 mt-8"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Sri Lanka
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-[10px] text-white/30 tracking-wider"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            © {new Date().getFullYear()} eNKay. All rights reserved.
          </p>
          <p
            className="text-[10px] text-white/20 tracking-widest"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Made by hand. Made with intention. ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
