'use client'
import { useState } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-burgundy text-white py-2.5 px-4 text-center relative">
      <p
        className="text-[11px] tracking-[0.2em] uppercase"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Made by hand. Made with intention. ✦ Ships from Sri Lanka
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-lg leading-none"
      >
        ×
      </button>
    </div>
  )
}
