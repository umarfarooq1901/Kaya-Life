'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function SustainabilityPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding text-white overflow-hidden">
        <Image
          src="/images/WhatsApp Image 2026-01-20 at 3.54.52 PM (4).jpeg"
          alt="Sustainability"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bottle-900/80"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sustainability & ESG</h1>
          <p className="text-xl text-bottle-100 max-w-3xl mx-auto">
            Building a responsible future through environmental stewardship, social responsibility, and transparent governance
          </p>
        </div>
      </section>

      {/* Environmental */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container mx-auto">
          <div className={`text-center mb-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-bottle-900 mb-4">Environmental Sustainability</h2>
            <p className="text-xl text-gray-600">Minimizing our ecological footprint through innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '90% Water Savings', description: 'Aeroponics uses minimal water vs. traditional cultivation', icon: '💧' },
              { title: '30% Renewable Energy', description: 'Solar PV + battery storage reduces grid dependence', icon: '☀️' },
              { title: 'Zero Pesticides', description: 'Controlled environment eliminates need for harmful chemicals', icon: '🌿' },
              { title: 'Waste Reduction', description: 'CryoCure technology minimizes post-harvest waste', icon: '♻️' },
            ].map((item, index) => (
              <div
                key={index}
                className={`card text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-bottle-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="section-padding bg-bottle-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bottle-900 mb-4">Social Responsibility</h2>
            <p className="text-xl text-gray-600">Empowering communities and creating positive impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Employment',
                description: 'Creating high-quality jobs in Thailand with specialized training in pharmaceutical agriculture and cannabis science.',
              },
              {
                title: 'Healthcare Access',
                description: 'Partnering with Thai hospitals to ensure affordable access to medical-grade cannabis for patients in need.',
              },
              {
                title: 'Education & Research',
                description: 'Collaborating with universities for workforce development and advancing cannabis research.',
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-2xl font-bold text-bottle-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-bottle-900 mb-4">UN Sustainable Development Goals</h2>
            <p className="text-xl text-gray-600">Aligned with global sustainability targets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '3', title: 'Good Health & Well-being', description: 'Providing quality medical cannabis for patient health' },
              { number: '8', title: 'Decent Work & Economic Growth', description: 'Creating employment and economic opportunities' },
              { number: '12', title: 'Responsible Consumption', description: 'Sustainable production and waste reduction' },
              { number: '13', title: 'Climate Action', description: 'Renewable energy and reduced carbon emissions' },
            ].map((sdg, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-bottle-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {sdg.number}
                </div>
                <h3 className="text-lg font-bold text-bottle-900 mb-2">{sdg.title}</h3>
                <p className="text-sm text-gray-600">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
