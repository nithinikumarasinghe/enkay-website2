'use client'
import { useState, useEffect } from 'react'

type Errors = {
  name?: string
  email?: string
  mobile?: string
  message?: string
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [enquiryBag, setEnquiryBag] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  useEffect(() => {
    const handler = (e: Event) => {
      const bagName = (e as CustomEvent).detail?.name
      if (bagName) {
        setEnquiryBag(bagName)
        setMessage(`Hi, I'd like to enquire about the ${bagName}.`)
      }
    }
    window.addEventListener('enquire-bag', handler)
    return () => window.removeEventListener('enquire-bag', handler)
  }, [])

  function validate(data: FormData): Errors {
    const errs: Errors = {}
    if (!data.get('name')?.toString().trim()) errs.name = 'Please enter your name.'
    const email = data.get('email')?.toString().trim() ?? ''
    if (!email) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.'
    const mobile = data.get('mobile')?.toString().trim() ?? ''
    if (!mobile) errs.mobile = 'Please enter your mobile number.'
    else if (!/^\+?[\d\s\-()]{7,}$/.test(mobile)) errs.mobile = 'Please enter a valid mobile number.'
    if (!data.get('message')?.toString().trim()) errs.message = 'Please enter a message.'
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })

    setSubmitted(true)
    setEnquiryBag('')
    setMessage('')
  }

  const inputClass = (field: keyof Errors) =>
    `w-full border-b bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/70 outline-none transition-colors ${
      errors[field] ? 'border-red-400' : 'border-taupe focus:border-burgundy'
    }`

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

            {/* Bag indicator */}
            {enquiryBag && (
              <div className="flex items-center justify-between bg-burgundy/10 border border-burgundy/20 px-4 py-3">
                <p
                  className="text-[11px] tracking-[0.15em] uppercase text-burgundy"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Enquiring about: {enquiryBag}
                </p>
                <button
                  type="button"
                  onClick={() => { setEnquiryBag(''); setMessage('') }}
                  className="text-burgundy/60 hover:text-burgundy text-sm ml-4"
                >
                  ✕
                </button>
              </div>
            )}

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
                  placeholder="Your name"
                  onChange={() => setErrors((p) => ({ ...p, name: undefined }))}
                  className={inputClass('name')}
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {errors.name}
                  </p>
                )}
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
                  placeholder="Your email"
                  onChange={() => setErrors((p) => ({ ...p, email: undefined }))}
                  className={inputClass('email')}
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Mobile Number
              </label>
              <div className="flex gap-3">
                <select
                  name="country_code"
                  defaultValue="+94"
                  className="border-b border-taupe bg-transparent py-3 text-[13px] text-onyx outline-none focus:border-burgundy transition-colors w-28"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  <option value="+94">🇱🇰 +94</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+60">🇲🇾 +60</option>
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+49">🇩🇪 +49</option>
                </select>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your mobile number"
                  onChange={() => setErrors((p) => ({ ...p, mobile: undefined }))}
                  className={`flex-1 ${inputClass('mobile')}`}
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                />
              </div>
              {errors.mobile && (
                <p className="text-[11px] text-red-400 mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {errors.mobile}
                </p>
              )}
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
                rows={4}
                value={message}
                onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })) }}
                placeholder="Tell me what you're looking for: a specific piece, a custom order, or just a question."
                className={`${inputClass('message')} resize-none`}
                style={{ fontFamily: 'var(--font-montserrat)' }}
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {errors.message}
                </p>
              )}
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
