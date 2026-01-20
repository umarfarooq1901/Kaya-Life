'use client'

import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const products = [
  {
    name: 'Medical Cannabis Flower',
    category: 'Premium Grade',
    description: 'Pharmaceutical-grade cannabis flowers cultivated with precision aeroponics for optimal cannabinoid profiles.',
    features: ['EU-GMP Pathway', 'Lab Tested', 'High Potency'],
  },
  {
    name: 'CBD Oils & Tinctures',
    category: 'Therapeutic',
    description: 'Pure CBD extracts formulated for precise dosing and maximum bioavailability.',
    features: ['Full Spectrum', 'THC-Free Options', 'GMP Certified'],
  },
  {
    name: 'Wellness Products',
    category: 'Lifestyle',
    description: 'Premium skincare, nutraceuticals, and functional beverages infused with cannabinoids.',
    features: ['Natural Ingredients', 'Dermatologist Tested', 'Vegan Friendly'],
  },
  {
    name: 'Terpene Extracts',
    category: 'Specialty',
    description: 'High-purity terpenes captured through CryoCure technology for therapeutic and cosmetic applications.',
    features: ['Pharmaceutical Grade', 'Custom Blends', 'Research Quality'],
  },
]

export default function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-bottle-50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-bottle-600 text-white rounded-full text-sm font-semibold mb-4">
            Our Products
          </div>
          <h2 className="section-title">Nature&apos;s Best Delivered to You</h2>
          <p className="section-subtitle">
            Explore our range of high-quality medical cannabis products, each crafted with precision and care
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-bottle-600 to-bottle-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-bottle-900 mb-3 group-hover:text-bottle-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bottle-100 text-bottle-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-bottle-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
