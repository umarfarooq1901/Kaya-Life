'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
              <Image 
                src="/logo/Screenshot 2026-01-20 201854.png" 
                alt="Kaya Life Science Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-bottle-900' : 'text-white'}`}>
                Kaya Life
              </span>
              <span className={`text-sm transition-colors ${isScrolled ? 'text-bottle-600' : 'text-bottle-200'}`}>
                Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link 
                href="/" 
                className={`font-medium transition-colors relative group ${isScrolled ? 'text-bottle-900 hover:text-bottle-600' : 'text-white hover:text-bottle-200'}`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bottle-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`font-medium transition-colors relative group ${isScrolled ? 'text-bottle-900 hover:text-bottle-600' : 'text-white hover:text-bottle-200'}`}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bottle-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className={`font-medium transition-colors relative group ${isScrolled ? 'text-bottle-900 hover:text-bottle-600' : 'text-white hover:text-bottle-200'}`}
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bottle-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/technology" 
                className={`font-medium transition-colors relative group ${isScrolled ? 'text-bottle-900 hover:text-bottle-600' : 'text-white hover:text-bottle-200'}`}
              >
                Technology
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bottle-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/sustainability" 
                className={`font-medium transition-colors relative group ${isScrolled ? 'text-bottle-900 hover:text-bottle-600' : 'text-white hover:text-bottle-200'}`}
              >
                Sustainability
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bottle-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="btn-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-bottle-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg animate-slide-down">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link href="/" className="block py-2 text-bottle-900 hover:text-bottle-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-bottle-900 hover:text-bottle-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="block py-2 text-bottle-900 hover:text-bottle-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/technology" className="block py-2 text-bottle-900 hover:text-bottle-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="block py-2 text-bottle-900 hover:text-bottle-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="btn-primary block text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
