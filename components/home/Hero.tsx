'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 luxury-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-bottle-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-gold/50 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`flex justify-center mb-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="research-badge bg-white/10 text-white border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Research-Based Medical Cannabis</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`text-center space-y-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight font-serif">
              Your Journey to
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent-gold to-accent-ivory bg-clip-text text-transparent">
                  Wellness
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-gold/30 blur-sm"></span>
              </span>
              <br />
              Begins Here
            </h1>
            
            <p className="text-xl md:text-2xl text-bottle-100 max-w-3xl mx-auto font-light leading-relaxed">
              Southeast Asia&apos;s pioneering medical cannabis facility combining ancient wisdom 
              with cutting-edge pharmaceutical-grade technology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/products" className="group relative px-10 py-5 bg-white text-bottle-900 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent-gold/50">
                <span className="relative z-10">Explore Our Science</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link href="/about" className="px-10 py-5 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-bottle-900 transition-all duration-300 hover:scale-105">
                Our Story
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'EU-GMP Certified',
                description: 'Pharmaceutical-grade quality standards'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                ),
                title: 'Advanced Technology',
                description: 'AI-driven aeroponics & CryoCure innovation'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Sustainable Practices',
                description: 'Solar-powered with 90% water savings'
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all duration-300"></div>
                <div className="relative p-6 text-center">
                  <div className="w-14 h-14 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/30 transition-colors">
                    <svg className="w-7 h-7 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-bottle-200 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-light">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
