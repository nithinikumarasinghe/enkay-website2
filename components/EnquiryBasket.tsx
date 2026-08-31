'use client'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'enkay-enquiry'

function getBasket(): string[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') }
  catch { return [] }
}

function saveBasket(items: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export default function EnquiryBasket() {
  const [items, setItems]       = useState<string[]>([])
  const [expanded, setExpanded] = useState(false)
  const [flash, setFlash]       = useState('')

  useEffect(() => {
    setItems(getBasket())

    const onAdd = (e: Event) => {
      const name = (e as CustomEvent<{ name: string }>).detail?.name
      if (!name) return
      setItems(prev => {
        const next = prev.includes(name) ? prev : [...prev, name]
        saveBasket(next)
        return next
      })
      setFlash(name)
      setTimeout(() => setFlash(''), 2500)
    }

    const onClear = () => {
      setItems([])
      saveBasket([])
      setExpanded(false)
    }

    window.addEventListener('add-to-enquiry', onAdd)
    window.addEventListener('clear-enquiry', onClear)
    return () => {
      window.removeEventListener('add-to-enquiry', onAdd)
      window.removeEventListener('clear-enquiry', onClear)
    }
  }, [])

  function remove(name: string) {
    setItems(prev => {
      const next = prev.filter(i => i !== name)
      saveBasket(next)
      return next
    })
  }

  function review() {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      window.dispatchEvent(new CustomEvent('enquiry-review', { detail: { items } }))
      setTimeout(() => contactEl.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      window.location.href = '/#contact'
    }
  }

  if (items.length === 0 && !flash) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4 pointer-events-none">
      <div
        className="w-full max-w-xl shadow-2xl pointer-events-auto"
        style={{ background: 'var(--color-onyx)' }}
      >
        {/* Flash confirmation */}
        {flash && (
          <div className="px-5 py-2 border-b border-white/10">
            <p
              className="text-[11px] text-white/60"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              ✓ <span style={{ color: 'var(--color-taupe)' }}>{flash}</span> added to your enquiry
            </p>
          </div>
        )}

        {items.length > 0 && (
          <>
            {/* Expanded item list */}
            {expanded && (
              <div className="px-5 py-3 border-b border-white/10 space-y-2">
                {items.map(name => (
                  <div key={name} className="flex items-center justify-between">
                    <span
                      className="text-[12px] text-white/75"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {name}
                    </span>
                    <button
                      onClick={() => remove(name)}
                      className="text-white/30 hover:text-white/70 text-[11px] transition-colors ml-4"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Main bar */}
            <div className="flex items-center justify-between px-5 py-4">
              <button
                onClick={() => setExpanded(p => !p)}
                className="flex items-center gap-2 text-left"
              >
                <span
                  className="text-[11px] tracking-[0.2em] uppercase font-bold text-white"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {items.length} {items.length === 1 ? 'piece' : 'pieces'} in your enquiry
                </span>
                <span className="text-white/40 text-[10px]">{expanded ? '▼' : '▲'}</span>
              </button>

              <button
                onClick={review}
                className="text-white text-[11px] tracking-[0.2em] uppercase px-6 py-2 hover:opacity-90 transition-opacity font-bold"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 700,
                  background: 'var(--color-burgundy)',
                }}
              >
                Review Enquiry →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
