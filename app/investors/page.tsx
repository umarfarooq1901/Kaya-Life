'use client'

import { useInView } from 'react-intersection-observer'

const capexItems = [
  { category: 'Facility Acquisition & Fit-out', amount: '1,000,000' },
  { category: 'HVAC System (EU-GMP)', amount: '1,100,000' },
  { category: 'Aeroponics Cultivation System', amount: '750,000' },
  { category: 'CryoCure Post-Harvest', amount: '550,000' },
  { category: 'Solar PV + BESS', amount: '400,000' },
  { category: 'AI & Compliance Software', amount: '100,000' },
  { category: 'Working Capital (12 months)', amount: '1,200,000' },
]

export default function InvestorsPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding text-white overflow-hidden">
        <div className="absolute inset-0 bg-bottle-950">
           <div className="absolute inset-0 opacity-20 bg-[url('/images/WhatsApp%20Image%202026-01-20%20at%203.54.53%20PM.jpeg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Investment Opportunity</h1>
          <p className="text-xl text-bottle-100 max-w-3xl mx-auto">
            Join Southeast Asia&apos;s First Tech-Driven, EU-GMP Pathway Cannabis Operator
          </p>
          <div className="mt-8 inline-block px-6 py-3 bg-accent-gold/20 border border-accent-gold rounded-full text-accent-gold font-bold">
            £5M Equity Raise for 25% Ownership
          </div>
        </div>
      </section>

      <div ref={ref}>
        {/* Investment Highlights */}
        <section className={`section-padding bg-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Invest?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A unique opportunity to enter a regional monopoly with high-margin export potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="card text-center hover:scale-105 transition-transform">
                 <div className="text-4xl mb-4">🌏</div>
                 <h3 className="font-bold text-xl mb-2 text-bottle-900">First Mover</h3>
                 <p className="text-gray-600">Only legal hub in SE Asia with pro-cannabis government support.</p>
               </div>
               <div className="card text-center hover:scale-105 transition-transform">
                 <div className="text-4xl mb-4">💶</div>
                 <h3 className="font-bold text-xl mb-2 text-bottle-900">High Margins</h3>
                 <p className="text-gray-600">EU-GMP pathway unlocks £8-10/g export prices (vs £5/g domestic).</p>
               </div>
               <div className="card text-center hover:scale-105 transition-transform">
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="font-bold text-xl mb-2 text-bottle-900">Tech Advantage</h3>
                 <p className="text-gray-600">CryoCure & Aeroponics drive higher yields and efficiency.</p>
               </div>
                <div className="card text-center hover:scale-105 transition-transform">
                 <div className="text-4xl mb-4">📈</div>
                 <h3 className="font-bold text-xl mb-2 text-bottle-900">Exit Strategy</h3>
                 <p className="text-gray-600">6-7x uplift potential via IPO or Trade Sale (3-5 years).</p>
               </div>
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="section-padding bg-bottle-50">
          <div className="container mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
                 <h2 className="section-title mb-8">Use of Funds (£5.0M)</h2>
                 <p className="text-gray-700 mb-6">
                   Capital allocation is designed to de-risk operations by frontloading critical infrastructure and ensuring 12 months of working capital.
                 </p>
                 <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                   {capexItems.map((item, index) => (
                     <div key={index} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0 hover:bg-bottle-50 transition-colors">
                       <span className="font-medium text-bottle-900">{item.category}</span>
                       <span className="font-bold text-bottle-600">£{item.amount}</span>
                     </div>
                   ))}
                   <div className="flex justify-between items-center p-4 bg-bottle-900 text-white">
                      <span className="font-bold">TOTAL</span>
                      <span className="font-bold">£5,100,000</span>
                   </div>
                 </div>
               </div>
               
               {/* Financial Projections Preview */}
               <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h2 className="section-title mb-8">Financial Projections</h2>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-2">Year 5 Target Revenue</h3>
                      <p className="text-4xl font-bold text-bottle-900">£88.5 Million</p>
                      <p className="text-green-600 font-medium">Combination of Domestic, Export, Wellness, & Terpenes</p>
                    </div>
                     <div className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-2">Year 5 EBITDA</h3>
                      <p className="text-4xl font-bold text-bottle-900">£40 Million</p>
                      <p className="text-green-600 font-medium">~45% Margin</p>
                    </div>
                     <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent-gold">
                      <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-2">Investor ROI (Year 5)</h3>
                      <p className="text-4xl font-bold text-bottle-900">24x Return</p>
                      <p className="text-bottle-600 font-medium">Stake Value: ~£120M</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* Exit Strategy */}
        <section className="section-padding bg-white">
           <div className="container mx-auto max-w-4xl text-center">
             <h2 className="section-title mb-8">Exit Strategy & Future Plans</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               <div className="p-6 border border-gray-200 rounded-xl">
                 <h3 className="text-xl font-bold text-bottle-900 mb-3">1. IPO (3-5 Years)</h3>
                 <p className="text-gray-600">Potential listings on SET, London AIM, or Frankfurt. Cannabis IPOs historically command 12-18x EBITDA multiples.</p>
               </div>
               <div className="p-6 border border-gray-200 rounded-xl">
                 <h3 className="text-xl font-bold text-bottle-900 mb-3">2. Trade Sale</h3>
                 <p className="text-gray-600">Strategic acquisition by global cannabis operators or pharma companies seeking Asian market entry.</p>
               </div>
               <div className="p-6 border border-gray-200 rounded-xl">
                 <h3 className="text-xl font-bold text-bottle-900 mb-3">3. Secondary Sale</h3>
                 <p className="text-gray-600">Early investors exit via secondary transactions to VC/PE funds in later rounds.</p>
               </div>
             </div>
           </div>
        </section>
      </div>

       {/* Contact / CTA */}
       <section className="py-20 bg-bottle-900 text-white text-center">
         <div className="container mx-auto">
           <h2 className="text-3xl font-bold mb-6">Ready to Invest in the Future of Asian Cannabis?</h2>
           <p className="text-xl text-bottle-200 mb-8 max-w-2xl mx-auto">Download the full Information Memorandum or contact our IR team today.</p>
           <button className="btn-primary bg-accent-gold text-bottle-950 hover:bg-white border-none">
             Contact Investor Relations
           </button>
         </div>
       </section>
    </div>
  )
}