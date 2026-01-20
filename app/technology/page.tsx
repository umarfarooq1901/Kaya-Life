'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function TechnologyPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-bottle-900 to-bottle-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Technology</h1>
          <p className="text-xl text-bottle-100 max-w-3xl mx-auto">
            Cutting-edge innovation meets pharmaceutical precision in Southeast Asia&apos;s most advanced cannabis facility
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container mx-auto space-y-20">
          {/* Aeroponics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-bottle-900 mb-6">Aeroponics Cultivation</h2>
              <p className="text-lg text-gray-700 mb-4">
                High-pressure aeroponics delivers nutrients directly to plant roots in a mist form, allowing maximum
                oxygenation and absorption for superior growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>100g per plant yield</strong> - 6 harvests annually (with CryoCure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>90% less water</strong> consumption vs. soil cultivation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Higher cannabinoid profiles</strong> through optimized nutrient delivery</span>
                </li>
              </ul>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl group relative">
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 3.54.52 PM (2).jpeg"
                alt="Aeroponics Cultivation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* CryoCure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl group lg:order-1 relative">
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 3.54.52 PM (3).jpeg"
                alt="CryoCure Technology"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className={`lg:order-2 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-bottle-900 mb-6">CryoCure Technology</h2>
              <p className="text-lg text-gray-700 mb-4">
                Revolutionary cryogenic drying and curing system that combines vacuum freezing and controlled heating
                to transform the post-harvest process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>12-36 hours</strong> vs. 14-21 days traditional curing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>+1 extra harvest</strong> annually (+20% throughput)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Superior terpene retention</strong> - 7ml/lb average recovery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI & HVAC */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-bottle-900 mb-6">AI-Driven Climate Control</h2>
              <p className="text-lg text-gray-700 mb-4">
                Pharma-grade HVAC system integrated with artificial intelligence for precise environmental control
                and energy optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>EU-GMP compliance</strong> with HEPA filtration and cleanroom zoning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>15-20% energy reduction</strong> through AI optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Predictive maintenance</strong> alerts prevent equipment failure</span>
                </li>
              </ul>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl group relative">
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 3.54.52 PM (1).jpeg"
                alt="AI Driven Climate Control"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Solar + BESS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl group lg:order-1 relative">
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 3.54.52 PM (4).jpeg"
                alt="Solar + Battery Storage"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className={`lg:order-2 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-bottle-900 mb-6">Solar + Battery Storage</h2>
              <p className="text-lg text-gray-700 mb-4">
                Integrated renewable energy system with rooftop solar panels and battery energy storage for
                sustainable, cost-effective operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>25-30% power offset</strong> from renewable sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Grid resilience</strong> protection against power outages</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-bottle-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Reduced carbon footprint</strong> for ESG compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
