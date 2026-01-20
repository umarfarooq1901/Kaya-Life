'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  { value: 120, suffix: 'M+', label: 'Projected Valuation', duration: 2000 },
  { value: 6, suffix: ' Harvests', label: 'Annual Output', duration: 1500 },
  { value: 90, suffix: '%', label: 'Water Savings', duration: 1800 },
  { value: 100, suffix: 'g', label: 'Yield per Plant', duration: 1600 },
]

function Counter({ end, duration, suffix, inView }: { end: number; duration: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return (
    <span className="text-5xl md:text-6xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="section-padding bg-gradient-to-br from-bottle-900 via-bottle-800 to-bottle-900 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bottle-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bottle-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Excellence in Numbers
          </h2>
          <p className="text-xl text-bottle-200">
            Our commitment to quality and innovation drives measurable results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <Counter
                  end={stat.value}
                  duration={stat.duration}
                  suffix={stat.suffix}
                  inView={inView}
                />
                <p className="text-bottle-200 text-lg mt-4 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlight */}
        <div className={`mt-16 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
            <p className="text-bottle-200 text-lg mb-2">On track to achieve</p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <span className="gradient-text bg-gradient-to-r from-accent-gold to-bottle-300 bg-clip-text text-transparent">
                EU-GMP Certification
              </span>
            </p>
            <p className="text-bottle-300 mt-2">Within 18 months</p>
          </div>
        </div>
      </div>
    </section>
  )
}
