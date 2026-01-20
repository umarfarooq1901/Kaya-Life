'use client'

import { useInView } from 'react-intersection-observer'

const reasons = [
  {
    title: 'First-Mover Advantage',
    description: 'Southeast Asia\'s only legal cannabis hub with full regulatory support from Thailand\'s government.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Pharmaceutical Standards',
    description: 'EU-GMP certification pathway ensures our products meet the highest international quality standards.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Sustainable Operations',
    description: 'Solar-powered facility with 90% water savings through advanced aeroponics technology.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Expert Team',
    description: 'Led by experienced professionals in pharmaceuticals, agriculture, and medical cannabis.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: 'Research & Innovation',
    description: 'Continuous R&D partnerships with leading universities advancing cannabis science.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
  {
    title: 'Community Focus',
    description: 'Committed to local employment, education, and affordable access to medical cannabis.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-bottle-100 text-bottle-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="section-title">Committed to Excellence, Dedicated to You</h2>
          <p className="section-subtitle">
            Combining innovation, compliance, and compassion to deliver the finest medical cannabis products
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-bottle-50 to-white p-6 border border-bottle-200 hover:border-bottle-400 transition-all duration-300 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-bottle-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {reason.icon}
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-bottle-900 mb-2 group-hover:text-bottle-700 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-bottle-500 to-bottle-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
