export type Product = {
  slug: string
  name: string
  category: string
  status: 'Made to order' | 'In stock'
  price: number
  image: string
  imageAlt: string
  tagline: string
  description: string
  details: {
    material: string
    dimensions: string
    strap: string
    lining: string
    closure: string
    leadTime: string
    care: string
  }
  personalization: string
  tags: string[]
}

const products: Product[] = [
  {
    slug: 'aurelia-pearl-midi',
    name: 'Aurelia Pearl Midi',
    category: 'Pearl Collection',
    status: 'Made to order',
    price: 18500,
    image: '/products/aurelia-pearl-midi.png',
    imageAlt: 'Aurelia Pearl Midi — ivory hand-beaded pearl bag',
    tagline: 'A lustrous midi bag woven entirely from hand-strung pearls.',
    description:
      'The Aurelia Pearl Midi is one of those pieces people stop you for. Every bead is individually hand-strung and woven by hand into a structured midi silhouette. Ivory and champagne tones shift naturally in the light — no two are ever exactly the same. This one is made entirely to order, which means it is made for you and no one else.',
    details: {
      material: 'Hand-strung freshwater pearl beads',
      dimensions: 'Approx. 22 × 14 × 6 cm',
      strap: 'Adjustable pearl-beaded chain strap',
      lining: 'Ivory satin with internal slip pocket',
      closure: 'Magnetic snap closure',
      leadTime: '3–4 weeks after preview approval',
      care: 'Wipe clean with a dry cloth. Store in the dust bag. Avoid moisture and prolonged direct sunlight.',
    },
    personalization:
      'You can request a custom colour palette — warm blush, deep cream, soft gold or a mix. Mention your preference in the message and we will confirm before we begin.',
    tags: ['Pearl', 'Midi', 'Made to order', 'Shoulder bag'],
  },
  {
    slug: 'celeste-clutch',
    name: 'Celeste Clutch',
    category: 'Crystal Collection',
    status: 'In stock',
    price: 12500,
    image: '/products/celeste-clutch.png',
    imageAlt: 'Celeste Clutch — blue crystal beaded clutch',
    tagline: 'A hand-beaded crystal clutch in cool blue tones. One of a kind, ready to carry.',
    description:
      'Cool-toned crystal beads in layered shades of blue — this clutch catches the light in a way that is hard to describe until you see it in person. Compact enough for an evening out, structured enough to hold its shape. This exact piece is in stock and ships in 2–3 business days. If you love the style but want a different colourway, it can be made to order in any palette.',
    details: {
      material: 'Crystal and glass seed beads',
      dimensions: 'Approx. 20 × 12 cm',
      strap: 'Detachable gold-tone chain',
      lining: 'Midnight blue satin',
      closure: 'Hidden magnetic clasp',
      leadTime: 'In stock — ships in 2–3 business days',
      care: 'Spot clean only with a lightly damp cloth. Avoid snagging on rough surfaces.',
    },
    personalization:
      'This specific piece ships as shown. A custom version in a different colour can be made to order — just mention it in your message.',
    tags: ['Crystal', 'Clutch', 'In stock', 'Evening'],
  },
  {
    slug: 'garnet-orb',
    name: 'Garnet Orb',
    category: 'Sculptural Collection',
    status: 'In stock',
    price: 15500,
    image: '/products/garnet-orb.png',
    imageAlt: 'Garnet Orb — deep burgundy circular beaded bag',
    tagline: 'A bold sculptural circle bag in deep burgundy. Structured, handmade, one of a kind.',
    description:
      'The Garnet Orb does not try to blend in. Deep wine-toned glass beads are layered over a rigid circular frame — the result is a bag that holds its perfect round shape while feeling unexpectedly light to carry. The gold-tone chain sits against the beadwork in a way that feels considered without being overdone. In stock and ready to go.',
    details: {
      material: 'Glass seed beads over structured base',
      dimensions: 'Approx. 20 cm diameter',
      strap: 'Gold-tone chain strap, shoulder length',
      lining: 'Burgundy satin',
      closure: 'Push-lock gold clasp',
      leadTime: 'In stock — ships in 2–3 business days',
      care: 'Handle with care. Store flat in the dust bag. Wipe with a dry cloth.',
    },
    personalization:
      'The Orb shape can be made to order in other colourways — forest green, midnight black, dusty rose. Mention your preference and we will work out the details together.',
    tags: ['Sculptural', 'Circle bag', 'In stock', 'Statement'],
  },
  {
    slug: 'sparkle-mini-ember',
    name: 'Sparkle Mini — Ember',
    category: 'Mini Collection',
    status: 'In stock',
    price: 9500,
    image: '/products/sparkle-mini-ember.png',
    imageAlt: 'Sparkle Mini Ember — orange iridescent beaded mini bag',
    tagline: 'A pocket-sized burst of colour. Iridescent orange on a mini bamboo-handle frame.',
    description:
      'Small enough to be effortless, interesting enough to be the first thing people notice. The Sparkle Mini in Ember is covered in iridescent glass beads that shift between orange, amber and gold depending on the light. The bamboo top handle makes it easy to carry by hand — or tuck it under your arm. In stock and ready to ship.',
    details: {
      material: 'Iridescent glass seed beads',
      dimensions: 'Approx. 16 × 11 × 5 cm',
      strap: 'Bamboo top handle',
      lining: 'Tangerine satin with zip pocket',
      closure: 'Push-lock closure',
      leadTime: 'In stock — ships in 2–3 business days',
      care: 'Spot clean only. Do not submerge in water. Store in the dust bag to preserve the iridescence.',
    },
    personalization:
      'The Sparkle Mini can be made in custom colourways — emerald, powder blue, champagne and more. Each made-to-order version ships in 3–4 weeks.',
    tags: ['Mini', 'Top handle', 'In stock', 'Iridescent'],
  },
  {
    slug: 'vellure-box-bag',
    name: 'Vellure Box Bag',
    category: 'Box Bag Collection',
    status: 'Made to order',
    price: 22500,
    image: '/products/vellure-box-bag.png',
    imageAlt: 'Vellure Box Bag — red and black geometric beaded bag',
    tagline: 'A geometric statement piece in red and black. Structured, bold, and entirely handmade.',
    description:
      'The Vellure Box Bag is the most structured piece in the collection — a rigid frame completely covered in hand-beaded geometric pattern. The red and black colourway is sharp, deliberate and striking. Every row of beading is placed by hand, which means this bag takes days to make. It is made entirely to your order, confirmed with a preview before work begins.',
    details: {
      material: 'Glass seed beads in geometric pattern over rigid frame',
      dimensions: 'Approx. 22 × 15 × 8 cm',
      strap: 'Detachable gold-tone chain + optional short handle',
      lining: 'Black satin with interior pocket and card slot',
      closure: 'Gold-tone frame clasp',
      leadTime: '3–4 weeks after preview approval',
      care: 'Handle with care. The geometric pattern is fragile near edges. Store in dust bag. Do not overpack.',
    },
    personalization:
      'The geometric pattern can be recreated in custom colour combinations — navy and cream, green and gold, all black and more. Monogramming on the lining is also available. Confirm your preferences before we begin.',
    tags: ['Box bag', 'Geometric', 'Made to order', 'Statement'],
  },
]

export default products

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelated(slug: string, count = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count)
}
