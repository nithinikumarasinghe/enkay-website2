'use client'
import { useState, useEffect } from 'react'

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSeM2jKhLZLdqjudqICDW88oYcx1wuvQLfiKPpZlTMVcGGZLaw/formResponse'

const ENTRY = {
  name:    'entry.698392894',
  email:   'entry.1096267375',
  phone:   'entry.1559886451',
  country: 'entry.1191480108',
  product: 'entry.337133734',
  message: 'entry.1545237605',
}

type Errors = {
  name?: string
  email?: string
  mobile?: string
  message?: string
}

export default function Contact() {
  const [submitted, setSubmitted]       = useState(false)
  const [enquiryItems, setEnquiryItems] = useState<string[]>([])
  const [message, setMessage]           = useState('')
  const [errors, setErrors]             = useState<Errors>({})
  const [countryCode, setCountryCode]   = useState('+94')
  const [country, setCountry]           = useState('')

  useEffect(() => {
    // Pre-fill from localStorage on mount (e.g. when navigating from a product page)
    try {
      const stored: string[] = JSON.parse(localStorage.getItem('enkay-enquiry') ?? '[]')
      if (stored.length > 0) {
        setEnquiryItems(stored)
        setMessage(`Hi, I'd like to enquire about: ${stored.join(', ')}.`)
      }
    } catch { /* ignore */ }

    const handler = (e: Event) => {
      const items: string[] = (e as CustomEvent).detail?.items ?? []
      setEnquiryItems(items)
      if (items.length > 0) {
        setMessage(`Hi, I'd like to enquire about: ${items.join(', ')}.`)
      }
    }
    window.addEventListener('enquiry-review', handler)
    return () => window.removeEventListener('enquiry-review', handler)
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

    const mobile = formData.get('mobile')?.toString().trim() ?? ''
    const fullPhone = `${countryCode} ${mobile}`

    const productValue = enquiryItems.length > 0
      ? enquiryItems.join(', ')
      : formData.get('product')?.toString().trim() || 'Not specified'

    const body = new URLSearchParams({
      [ENTRY.name]:    formData.get('name')?.toString().trim() ?? '',
      [ENTRY.email]:   formData.get('email')?.toString().trim() ?? '',
      [ENTRY.phone]:   fullPhone,
      [ENTRY.country]: country,
      [ENTRY.product]: productValue,
      [ENTRY.message]: formData.get('message')?.toString().trim() ?? '',
    })

    await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body })

    window.dispatchEvent(new Event('clear-enquiry'))
    setSubmitted(true)
    setEnquiryItems([])
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
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">

            {/* Basket indicator */}
            {enquiryItems.length > 0 && (
              <div className="bg-burgundy/10 border border-burgundy/20 px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <p
                    className="text-[11px] tracking-[0.15em] uppercase text-burgundy"
                    style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                  >
                    Your enquiry
                  </p>
                  <button
                    type="button"
                    onClick={() => { setEnquiryItems([]); setMessage('') }}
                    className="text-burgundy/60 hover:text-burgundy text-sm ml-4"
                  >
                    Clear
                  </button>
                </div>
                <ul className="space-y-1">
                  {enquiryItems.map(item => (
                    <li
                      key={item}
                      className="text-[12px] text-burgundy/80"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Name + Email */}
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

            {/* WhatsApp Number */}
            <div>
              <label
                className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                WhatsApp Number
              </label>
              <div className="flex gap-3">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
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
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+82">🇰🇷 +82</option>
                  <option value="+66">🇹🇭 +66</option>
                </select>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your number"
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

            {/* Country */}
            <div>
              <label
                className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Where are you based?"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx placeholder:text-stone/70 outline-none focus:border-burgundy transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              />
            </div>

            {/* Product dropdown — hidden when basket items are pre-filled */}
            {enquiryItems.length === 0 && (
              <div>
                <label
                  className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Product You&apos;re Interested In
                </label>
                <select
                  name="product"
                  className="w-full border-b border-taupe bg-transparent py-3 text-[13px] text-onyx outline-none focus:border-burgundy transition-colors"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  <option value="">Select a piece (optional)</option>
                  <option value="Aurelia Pearl Midi">Aurelia Pearl Midi</option>
                  <option value="Celeste Clutch">Celeste Clutch</option>
                  <option value="Garnet Orb">Garnet Orb</option>
                  <option value="Sparkle Mini — Ember">Sparkle Mini — Ember</option>
                  <option value="Vellure Box Bag">Vellure Box Bag</option>
                  <option value="Custom / Made to order">Custom / Made to order</option>
                  <option value="Just browsing">Just browsing</option>
                </select>
              </div>
            )}

            {/* Message */}
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
