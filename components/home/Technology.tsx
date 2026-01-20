'use client'

import { useInView } from 'react-intersection-observer'

const technologies = [
  {
    title: 'Aeroponics Cultivation',
    description: 'High-pressure aeroponics delivers nutrients directly to plant roots, achieving 100g per plant with 90% less water usage than traditional methods.',
    stats: '100g/Plant Yield',
  },
  {
    title: 'CryoCure Technology',
    description: 'Revolutionary cryogenic drying reduces curing time from 3 weeks to 12-36 hours, enabling +1 extra harvest annually and superior terpene retention.',
    stats: '12-36 Hour Curing',
  },
  {
    title: 'AI-Driven Operations',
    description: 'Artificial intelligence optimizes climate control, monitors plant health, and predicts maintenance needs, reducing energy use by 15-20%.',
    stats: '15-20% Energy Savings',
  },
  {
    title: 'Pharma-Grade HVAC',
    description: '£1.1m EU-GMP compliant HVAC system with N+1 redundancy ensuring consistent temperature, humidity, and cleanroom standards.',
    stats: 'EU-GMP Compliant',
  },
  {
    title: 'Solar + Battery Storage',
    description: 'Rooftop solar panels with integrated battery system offset 25-30% of power consumption, reducing carbon footprint and OPEX.',
    stats: '25-30% Power Offset',
  },
  {
    title: 'Seed-to-Sale Tracking',
    description: 'Complete compliance and traceability with blockchain-enabled tracking from cultivation through distribution.',
    stats: '100% Traceable',
  },
]

export default function Technology() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-bottle-950 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-bottle-800 text-bottle-200 rounded-full text-sm font-semibold mb-4">
            Technology Edge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Innovation at Every Step
          </h2>
          <p className="text-xl text-bottle-200">
            Cutting-edge technology ensuring pharmaceutical-grade quality and sustainable operations
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative bg-bottle-900 rounded-xl p-6 border border-bottle-800 hover:border-bottle-600 transition-all duration-300 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bottle-600/0 to-bottle-600/0 group-hover:from-bottle-600/10 group-hover:to-transparent rounded-xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-bottle-300 transition-colors">
                    {tech.title}
                  </h3>
                  <div className="w-10 h-10 bg-bottle-800 rounded-lg flex items-center justify-center group-hover:bg-bottle-600 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 text-bottle-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-bottle-300 mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="inline-block px-3 py-1 bg-bottle-800 rounded-full">
                  <span className="text-sm font-semibold text-bottle-200">{tech.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <a href="/technology" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-bottle-900 rounded-lg font-semibold hover:bg-bottle-100 transition-all hover:scale-105">
            Explore Our Technology
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
