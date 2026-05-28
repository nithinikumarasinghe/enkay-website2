'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })

    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-stone mb-4"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
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
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
          >
            Every bag is handmade, which means every order can be personal. Tell us what you&apos;re looking for. We&apos;ll tell you what&apos;s possible. It usually starts with one message.
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
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/70 outline-none focus:border-burgundy transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
              </div>
              <div>
                <label
                  className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/70 outline-none focus:border-burgundy transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me what you're looking for: a specific piece, a custom order, or just a question."
                className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/70 outline-none focus:border-burgundy transition-colors resize-none"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-burgundy text-white text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-burgundy/90 transition-colors w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
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
