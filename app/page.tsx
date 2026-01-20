import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Science from '@/components/home/Science'
import Services from '@/components/home/Services'
import Technology from '@/components/home/Technology'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Stats from '@/components/home/Stats'
import Products from '@/components/home/Products'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Science />
      <Services />
      <Technology />
      <WhyChooseUs />
      <Stats />
      <Products />
      <CTA />
    </>
  )
}
