'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Initialize scroll state on mount to prevent hydration mismatch
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Technology', href: '/technology' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Investors', href: '/investors' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
        ? 'bg-bottle-950/90 backdrop-blur-md border-white/10 shadow-xl'
        : 'bg-transparent border-transparent'
        } ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-50">
            <div className={`relative transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <Image
                src="/logo/Screenshot 2026-01-20 201854.png"
                alt="Kaya Life Science Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold tracking-wide transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'} ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                Kaya Life
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-accent-gold' : 'text-bottle-200'}`}>
                Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 relative group py-2 
                      ${pathname === link.href
                        ? 'text-accent-gold'
                        : isScrolled ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'
                      }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-accent-gold transition-all duration-300 
                      ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border 
                ${isScrolled
                  ? 'bg-accent-gold text-bottle-950 border-accent-gold hover:bg-transparent hover:text-accent-gold'
                  : 'bg-white text-bottle-950 border-white hover:bg-transparent hover:text-white'
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-[6px] group">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4 group-hover:w-6'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-3 group-hover:w-6'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-bottle-950/95 backdrop-blur-xl transition-all duration-500 md:hidden flex items-center justify-center z-40 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className="w-full h-full relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-bottle-500/10 rounded-full blur-3xl"></div>

            <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-serif text-white hover:text-accent-gold transition-all duration-300 transform 
                      ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div
                className={`transition-all duration-500 delay-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-accent-gold text-bottle-950 rounded-full text-lg font-semibold hover:scale-105 transition-transform inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
