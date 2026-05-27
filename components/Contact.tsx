'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Reach out
          </p>
          <h2
            className="text-4xl md:text-5xl text-onyx"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Find your perfect bag
          </h2>
          <p
            className="text-[13px] text-stone mt-5 leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Every eNKay customer can reach the founder directly. We&apos;re small. We&apos;re personal. That&apos;s not a weakness — it&apos;s the point.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <p
              className="text-2xl text-onyx mb-3"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Thank you. ✦
            </p>
            <p
              className="text-[13px] text-stone"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/50 outline-none focus:border-burgundy transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
              </div>
              <div>
                <label
                  className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/50 outline-none focus:border-burgundy transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me what you're looking for — a specific piece, a custom order, or just a question."
                className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/50 outline-none focus:border-burgundy transition-colors resize-none"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-burgundy text-white text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-burgundy/90 transition-colors w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
