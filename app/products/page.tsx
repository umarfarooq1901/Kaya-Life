'use client'

import { useInView } from 'react-intersection-observer'

const productCategories = [
  {
    name: 'Medical Cannabis Flower',
    description: 'Premium pharmaceutical-grade cannabis flowers cultivated using advanced aeroponics technology.',
    products: [
      { name: 'High CBD Strain', thc: '< 1%', cbd: '15-18%', uses: 'Anxiety, Pain Relief' },
      { name: 'Balanced Hybrid', thc: '8-10%', cbd: '8-10%', uses: 'Chronic Pain, Sleep' },
      { name: 'High THC Strain', thc: '18-22%', cbd: '< 1%', uses: 'Severe Pain, PTSD' },
    ]
  },
  {
    name: 'CBD Oils & Tinctures',
    description: 'Precisely formulated CBD extracts for sublingual administration and maximum bioavailability.',
    products: [
      { name: 'Pure CBD Oil 500mg', concentration: '500mg/30ml', type: 'Isolate' },
      { name: 'Full Spectrum 1000mg', concentration: '1000mg/30ml', type: 'Full Spectrum' },
      { name: 'Broad Spectrum 1500mg', concentration: '1500mg/30ml', type: 'Broad Spectrum' },
    ]
  },
  {
    name: 'Wellness & Nutraceuticals',
    description: 'Premium wellness products infused with cannabinoids for holistic health.',
    products: [
      { name: 'CBD Skincare Serum', size: '30ml', benefits: 'Anti-aging, Hydration' },
      { name: 'Hemp Protein Powder', size: '500g', benefits: 'Muscle Recovery, Nutrition' },
      { name: 'CBD Sleep Gummies', dosage: '10mg/gummy', benefits: 'Better Sleep, Relaxation' },
    ]
  },
  {
    name: 'Terpene Extracts',
    description: 'High-purity terpenes for pharmaceutical, cosmetic, and aromatherapy applications.',
    products: [
      { name: 'Limonene Extract', purity: '> 95%', uses: 'Mood Enhancement' },
      { name: 'Myrcene Extract', purity: '> 95%', uses: 'Relaxation, Sleep' },
      { name: 'Pinene Extract', purity: '> 95%', uses: 'Focus, Anti-inflammatory' },
    ]
  }
]

export default function ProductsPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-bottle-600 to-bottle-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-bottle-100 max-w-3xl mx-auto">
            Premium medical cannabis products crafted with precision, backed by science, and certified to the highest standards
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container mx-auto space-y-20">
          {productCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className={`text-center mb-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-bottle-900 mb-4">{category.name}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.products.map((product, prodIndex) => (
                  <div 
                    key={prodIndex}
                    className={`card ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${prodIndex * 0.1}s` }}
                  >
                    <div className="h-48 bg-gradient-to-br from-bottle-500 to-bottle-700 rounded-lg mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-bottle-900 mb-3">{product.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      {Object.entries(product).filter(([key]) => key !== 'name').map(([key, value]) => (
                        <p key={key}>
                          <span className="font-semibold capitalize">{key}:</span> {value}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-bottle-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-bottle-900 mb-6">Quality Assurance</h2>
            <p className="text-lg text-gray-700 mb-8">
              Every product undergoes rigorous testing and quality control to ensure safety, potency, and consistency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-bold text-bottle-900 mb-2">Lab Tested</h3>
                <p className="text-gray-600">Third-party laboratory analysis for cannabinoid profiles and purity</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-bold text-bottle-900 mb-2">GMP Certified</h3>
                <p className="text-gray-600">Manufactured to Good Manufacturing Practice standards</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-bold text-bottle-900 mb-2">Batch Tracking</h3>
                <p className="text-gray-600">Complete seed-to-sale traceability for every product</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
