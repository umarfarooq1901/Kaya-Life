'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-bottle-100 text-bottle-700 rounded-full text-sm font-semibold">
              About Us
            </div>

            <h2 className="section-title">
              Market Opportunity &{' '}
              <span className="gradient-text">Political Landscape</span>
            </h2>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Thailand&apos;s Unique Position:</strong> While neighbors (Malaysia, Indonesia, Vietnam, Singapore) maintain strict prohibition, Thailand has moved decisively to legalize medical cannabis, creating a regional monopoly.
              </p>
              <p>
                <strong>Pro-Cannabis Government:</strong> The current leadership supports cannabis as a growth industry for healthcare innovation and tourism, tightening regulations to ensure stability.
              </p>
              <p>
                Forecasts predict the domestic market to exceed <strong>$1.2 billion by 2027</strong>, with over 1 million registered patients already.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-bottle-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700"><strong className="text-bottle-900">Only Legal Hub in SE Asia:</strong> First-mover advantage in a region of 650M+ people.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-bottle-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700"><strong className="text-bottle-900">High-Margin Exports:</strong> Wholesale prices in Europe (£8-10/g) enable premium returns.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-bottle-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700"><strong className="text-bottle-900">Low Cost, High Tech:</strong> Lower operational costs paired with Aeroponics and CryoCure technology.</p>
              </div>
            </div>

            <Link href="/investors" className="btn-primary inline-block mt-6">
              View Investment Opportunity
            </Link>
          </div>

          {/* Image/Visual */}
          <div className={`relative ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-bottle-600 to-bottle-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-3xl font-bold mb-2">10,000 sq ft</h3>
                  <p className="text-bottle-100">State-of-the-art Facility</p>
                </div>
              </div> */}
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 3.54.52 PM (1).jpeg"
                alt="Kaya Life Science Facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bottle-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">10,000 sq ft</h3>
                <p className="text-bottle-100">State-of-the-art Indoor Aeroponics Facility</p>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bottle-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-bottle-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-bottle-900">EU-GMP</p>
                  <p className="text-sm text-gray-600">Certified Pathway</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
