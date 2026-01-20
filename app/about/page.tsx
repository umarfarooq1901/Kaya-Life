'use client'

import { useInView } from 'react-intersection-observer'

export default function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-bottle-900 to-bottle-800 text-white" ref={heroRef}>
        <div className="container mx-auto">
          <div className={`max-w-4xl mx-auto text-center ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Kaya Life Science</h1>
            <p className="text-xl text-bottle-100 leading-relaxed">
              Southeast Asia&apos;s pioneering medical cannabis company, combining ancient wisdom with cutting-edge technology 
              to deliver pharmaceutical-grade products that transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white" ref={missionRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`${missionInView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-bottle-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Kaya Life Science, we believe in the transformative power of natural remedies and compassionate care. 
                Our mission is to provide top-quality medical cannabis products that enhance the lives of our patients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a foundation built on integrity, innovation, and community, we are dedicated to supporting your 
                wellness journey through Southeast Asia&apos;s most advanced medical cannabis facility.
              </p>
            </div>

            <div className={`${missionInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold text-bottle-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To become the leading medical cannabis provider in Southeast Asia, setting the gold standard for 
                quality, compliance, and patient care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a future where medical cannabis is recognized globally as a vital component of healthcare, 
                and Kaya Life Science stands at the forefront of this transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-bottle-50" ref={valuesRef}>
        <div className="container mx-auto">
          <div className={`text-center mb-12 ${valuesInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-bottle-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Uncompromising commitment to pharmaceutical-grade standards in every product we create.',
                icon: '🏆'
              },
              {
                title: 'Innovation',
                description: 'Leveraging cutting-edge technology and research to advance medical cannabis science.',
                icon: '💡'
              },
              {
                title: 'Sustainability',
                description: 'Environmental responsibility through renewable energy and water-efficient cultivation.',
                icon: '🌱'
              },
              {
                title: 'Transparency',
                description: 'Open communication and full traceability from seed to sale for patient confidence.',
                icon: '🔍'
              },
              {
                title: 'Compassion',
                description: 'Patient-centered approach prioritizing accessibility and personalized care.',
                icon: '❤️'
              },
              {
                title: 'Integrity',
                description: 'Ethical practices and regulatory compliance in all aspects of our operations.',
                icon: '⚖️'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`card text-center ${valuesInView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-bottle-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-bottle-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-bottle-900 mb-2">Message from Our Founder</h2>
              <p className="text-bottle-600">Ajjana Sachamuneewongse</p>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;KayaLifeScience was born from a simple but powerful belief: that the future of healthcare lies in 
                the marriage of ancient knowledge and modern science. Southeast Asia has a rich tradition of natural 
                medicine, and today, for the first time, the region is ready to transform that tradition into a 
                regulated, export-ready, world-class industry.&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;We are building more than a cultivation facility. From day one, we are establishing a compliance 
                and technology-driven operation with pharma-grade HVAC, AI-driven systems, CryoCure technology, and 
                renewable energy. These aren&apos;t optional extras—they are essential pillars of our business model.&rdquo;
              </p>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;I invite you to join us in this journey. Together, we will transform not only an industry but 
                also the way the world perceives and uses cannabis for health, wellness, and innovation.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
