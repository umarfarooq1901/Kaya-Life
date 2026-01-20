import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaya Life Science | Medical Cannabis Innovation',
  description: 'Southeast Asia\'s first technology-driven, EU-GMP pathway cannabis operator delivering premium medical cannabis with unmatched efficiency, compliance, and scalability.',
  keywords: 'medical cannabis, Thailand cannabis, EU-GMP certified, aeroponics, cannabis wellness, medical marijuana, CBD products',
  authors: [{ name: 'Kaya Life Science' }],
  openGraph: {
    title: 'Kaya Life Science | Medical Cannabis Innovation',
    description: 'Southeast Asia\'s first technology-driven, EU-GMP pathway cannabis operator',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
