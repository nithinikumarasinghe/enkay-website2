import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import products, { getProduct, getRelated } from '@/lib/products'
import ProductActions from '@/components/ProductActions'

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: `${product.name} | eNKay`,
    description: product.tagline,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const related = getRelated(slug)

  return (
    <div className="min-h-screen bg-cream">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-0">
        <p
          className="text-[10px] tracking-[0.2em] uppercase text-stone"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          <Link href="/" className="hover:text-onyx transition-colors">Home</Link>
          <span className="mx-2 text-taupe">/</span>
          <Link href="/#shop" className="hover:text-onyx transition-colors">Shop</Link>
          <span className="mx-2 text-taupe">/</span>
          <span className="text-onyx">{product.name}</span>
        </p>
      </div>

      {/* Main product layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Image */}
          <div className="aspect-[3/4] relative w-full bg-taupe/20 overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-8">

            {/* Category + status */}
            <div className="flex items-center gap-3 mb-3">
              <p
                className="text-[10px] tracking-[0.25em] uppercase text-stone"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                {product.category}
              </p>
              <span className="text-taupe">·</span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 border"
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 700,
                  color: product.status === 'Made to order' ? 'var(--color-burgundy)' : 'var(--color-mauve)',
                  borderColor: product.status === 'Made to order' ? 'var(--color-burgundy)' : 'var(--color-taupe)',
                }}
              >
                {product.status}
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-5xl text-onyx leading-[1.05] mb-3"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p
              className="text-2xl text-onyx mb-5"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
            >
              Rs. {product.price.toLocaleString()}
            </p>

            {/* Tagline */}
            <p
              className="text-[13px] text-stone leading-relaxed mb-5"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
            >
              {product.tagline}
            </p>

            {/* Description */}
            <p
              className="text-[13px] text-onyx/70 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
            >
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t border-taupe mb-8" />

            {/* Details grid */}
            <div className="space-y-3 mb-8">
              {[
                ['Material', product.details.material],
                ['Dimensions', product.details.dimensions],
                ['Strap', product.details.strap],
                ['Lining', product.details.lining],
                ['Closure', product.details.closure],
                ['Lead time', product.details.leadTime],
                ['Care', product.details.care],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[120px_1fr] gap-4">
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase text-stone pt-0.5"
                    style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[13px] text-onyx/70 leading-relaxed"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Personalisation */}
            <div className="bg-taupe/20 px-5 py-4 mb-2">
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-burgundy mb-2"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Personalisation
              </p>
              <p
                className="text-[12px] text-onyx/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {product.personalization}
              </p>
            </div>

            {/* Actions (client component) */}
            <ProductActions product={product} />
          </div>
        </div>
      </div>

      {/* You might also like */}
      <div className="border-t border-taupe/50 mt-12 py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-stone mb-3"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              You might also like
            </p>
            <h2
              className="text-3xl md:text-4xl text-onyx"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              More from the collection
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/products/${rel.slug}`} className="group block">
                <div className="aspect-[3/4] relative overflow-hidden mb-3 bg-taupe/20">
                  <Image
                    src={rel.image}
                    alt={rel.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase text-stone mb-1"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  {rel.category}
                </p>
                <h3
                  className="text-lg text-onyx mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {rel.name}
                </h3>
                <p
                  className="text-[12px] text-stone"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Rs. {rel.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
