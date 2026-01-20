'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bottle-50 via-white to-bottle-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bottle-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-bottle-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className={`space-y-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-bottle-900 leading-tight">
              Southeast Asia&apos;s Only <br />
              <span className="gradient-text">Legal Cannabis Hub</span>
            </h1>

            <p className="text-xl md:text-2xl text-bottle-700 max-w-3xl mx-auto">
              Pioneering medical cannabis with EU-GMP compliance, aeroponics technology, and premium export quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/products" className="btn-primary text-lg px-8 py-4">
                Explore Products
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="card text-center">
              <div className="w-16 h-16 bg-bottle-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bottle-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bottle-900 mb-2">First Mover Advantage</h3>
              <p className="text-bottle-600">Thailand's only regulated cannabis market in Southeast Asia</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-bottle-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bottle-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bottle-900 mb-2">Technology Differentiation</h3>
              <p className="text-bottle-600">CryoCure, Aeroponics, and AI-driven efficiency</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-bottle-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bottle-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bottle-900 mb-2">High-Margin Exports</h3>
              <p className="text-bottle-600">EU-GMP certification enabling premium export access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-bottle-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
