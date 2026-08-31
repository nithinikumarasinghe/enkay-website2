'use client'
import { useState } from 'react'
import type { Product } from '@/lib/products'

export default function ProductActions({ product }: { product: Product }) {
  const [qty, setQty]         = useState(1)
  const [added, setAdded]     = useState(false)

  function addToEnquiry() {
    const label = qty > 1 ? `${product.name} (×${qty})` : product.name
    window.dispatchEvent(new CustomEvent('add-to-enquiry', { detail: { name: label } }))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const waText = encodeURIComponent(
    `Hi, I'd like to enquire about the ${product.name} (Rs. ${product.price.toLocaleString()}).`
  )
  const waHref = `https://wa.me/94777580784?text=${waText}`

  const fireWA = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag?.('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'whatsapp_button',
    })
  }

  return (
    <div className="space-y-5 mt-8">
      {/* Quantity */}
      <div>
        <p
          className="text-[10px] tracking-[0.2em] uppercase text-stone mb-3"
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
        >
          Quantity
        </p>
        <div className="flex items-center gap-0 border border-taupe w-fit">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-10 text-onyx hover:bg-taupe/30 transition-colors text-sm"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span
            className="w-10 text-center text-[13px] text-onyx"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-10 text-onyx hover:bg-taupe/30 transition-colors text-sm"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to enquiry */}
      <button
        onClick={addToEnquiry}
        className="w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-all"
        style={{
          fontFamily: 'var(--font-montserrat)',
          fontWeight: 700,
          background: added ? 'var(--color-taupe)' : 'var(--color-burgundy)',
          color: '#fff',
        }}
      >
        {added ? '✓ Added to Enquiry' : 'Add to Enquiry'}
      </button>

      {/* Ask on WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={fireWA}
        className="w-full py-4 text-[11px] tracking-[0.2em] uppercase border border-onyx/30 text-onyx hover:bg-onyx hover:text-white transition-all flex items-center justify-center gap-2"
        style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
      >
        Ask on WhatsApp
      </a>

      {/* No payment note */}
      <p
        className="text-[11px] text-stone leading-relaxed"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        No online payment. We confirm price, delivery and timing with you before anything is made or paid.
      </p>
    </div>
  )
}
