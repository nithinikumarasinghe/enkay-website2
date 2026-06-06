import Image from 'next/image'
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FaInstagram, href: 'https://www.instagram.com/nk_enkay', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@nk_enkay', label: 'TikTok' },
  { icon: FaFacebook, href: 'https://www.facebook.com/share/18kdyU62v1/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: FaYoutube, href: 'https://youtube.com/@enkay_official?si=dSQKUiGDv81lFURg', label: 'YouTube' },
  { icon: FaWhatsapp, href: 'https://wa.me/94777580784', label: 'WhatsApp' },
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
            className="text-2xl text-white/80 italic leading-snug -mt-12"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Where craft meets style.
          </p>
        </div>

        {/* Navigation + Socials */}
        <div className="flex flex-col items-center md:items-end gap-5">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8">
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
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 text-center">
          <p
            className="text-[10px] text-white/50 tracking-wider"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            © {new Date().getFullYear()} eNKay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
