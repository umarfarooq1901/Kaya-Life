'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="section-padding bg-gradient-to-br from-bottle-600 via-bottle-700 to-bottle-800 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-bottle-100 mb-10 max-w-2xl mx-auto">
            Discover how Kaya Life Science can help you achieve better health through premium medical cannabis products backed by science and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-bottle-900 rounded-lg font-semibold hover:bg-bottle-100 transition-all hover:scale-105 shadow-lg text-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-bottle-900 transition-all hover:scale-105 text-lg"
            >
              Explore Products
            </Link>
          </div>

          {/* Contact Info */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-bottle-200 text-sm">Phone</p>
                <p className="text-white font-semibold">+66 (0) 123-456-789</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-bottle-200 text-sm">Email</p>
                <p className="text-white font-semibold">info@kayalifescience.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-bottle-200 text-sm">Location</p>
                <p className="text-white font-semibold">Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
