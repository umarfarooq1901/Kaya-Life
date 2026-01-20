'use client'

import { useInView } from 'react-intersection-observer'

const scienceFeatures = [
    {
        title: 'Cognitive Renewal',
        description: 'Emerging studies suggest CBD may support hippocampal neurogenesis, promoting the growth of new neurons critical for memory and learning.',
        icon: (
            <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Neuroprotection',
        description: 'Acting as powerful antioxidants, cannabinoids show potential in protecting brain cells from oxidative stress and reducing neuroinflammation.',
        icon: (
            <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Stress Regulation',
        description: 'By modulating the endocannabinoid system, specific compounds may help regulate stress responses, fostering mental clarity and emotional balance.',
        icon: (
            <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
]

export default function Science() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section className="section-padding bg-bottle-50/50" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className={`inline-block px-4 py-2 bg-bottle-100 text-bottle-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
                        Research & Innovation
                    </div>
                    <h2 className={`section-title mb-6 text-bottle-900 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                        The Science of <span className="gradient-text">Wellness</span>
                    </h2>
                    <p className={`text-lg md:text-xl text-bottle-700 leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                        Bridging the gap between ancient botanical wisdom and modern neuroscience.
                        We are committed to understanding how cannabinoids interact with the body&apos;s natural systems to support cognitive health and vitality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scienceFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-2xl bg-white border border-bottle-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                            <div className="w-16 h-16 bg-bottle-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-bottle-900 transition-colors duration-500">
                                <div className="group-hover:text-gold-400 transition-colors duration-500">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-bottle-900 mb-4 font-serif">
                                {feature.title}
                            </h3>
                            <p className="text-bottle-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <p className="text-sm text-bottle-400 italic">
                        *Information presented is based on emerging pre-clinical and clinical research.
                        Kaya Life Science does not make medical claims regarding the cure or treatment of specific diseases.
                    </p>
                </div>
            </div>
        </section>
    )
}
