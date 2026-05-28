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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo-white.svg"
            alt="eNKay"
            width={200}
            height={80}
            className="mb-0"
          />
          <p
            className="text-2xl text-white/80 italic leading-snug -mt-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Where craft meets style.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center md:justify-end gap-8">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] text-white/75 hover:text-white transition-colors tracking-wide"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {l.label}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-[10px] text-white/50 tracking-wider"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            © {new Date().getFullYear()} eNKay. All rights reserved.
          </p>
          <p
            className="text-[10px] text-white/40 tracking-widest"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Made by hand. Made with intention. ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
