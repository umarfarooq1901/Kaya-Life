'use client'

import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const services = [
  {
    title: 'Medical Cannabis',
    description: 'Premium pharmaceutical-grade cannabis flowers cultivated using advanced aeroponics technology for maximum potency and purity.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    title: 'CBD Oils & Tinctures',
    description: 'Expertly crafted CBD oils and tinctures for targeted relief. GMP-certified extraction process ensures consistency and safety.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
  {
    title: 'Wellness Products',
    description: 'Comprehensive range of wellness products including nutraceuticals, skincare, and functional beverages infused with premium cannabinoids.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    title: 'Terpene Extracts',
    description: 'High-value terpene extracts for pharmaceutical, cosmetic, and aromatherapy applications. Captured using CryoCure technology.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    ),
  },
  {
    title: 'Expert Consultations',
    description: 'Access to experienced cannabis professionals who provide guidance and insights to ensure you make informed health decisions.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: 'Custom Formulations',
    description: 'Tailored treatment plans designed by our expert staff to match your specific health requirements for optimal outcomes.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gradient-to-b from-white to-bottle-50" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-bottle-100 text-bottle-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="section-title">Quality Care, Natural Solutions</h2>
          <p className="section-subtitle">
            Comprehensive medical cannabis services backed by cutting-edge technology and pharmaceutical-grade standards
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card group ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-bottle-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-bottle-600 transition-colors">
                <svg className="w-7 h-7 text-bottle-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bottle-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <Link href="/products" className="inline-flex items-center gap-2 text-bottle-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <Link href="/products" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
