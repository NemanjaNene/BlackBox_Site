'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Početna', href: '#home' },
    { name: 'O nama', href: '#about' },
    { name: 'Usluge', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontakt', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-50/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-gradient-to-b from-gray-100/60 via-blue-50/40 to-transparent backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Responsive */}
          <div className="flex-shrink-0 -ml-3 md:-ml-4">
            <a href="#home" className="group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated glow background */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative">
                  <Image 
                    src="/black-box-logo.png" 
                    alt="Black Box Testing" 
                    width={500}
                    height={500}
                    className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto relative z-10"
                    style={{ 
                      filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))',
                    }}
                    priority
                  />
                </div>
              </motion.div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -1 }}
                  className="relative text-gray-900 hover:text-white px-6 py-3 text-base font-bold transition-all duration-300 group rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-500 shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Shine effect - disabled for calmer animation */}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gradient-to-b from-gray-50/98 to-white/98 backdrop-blur-xl border-t-2 border-gray-200 shadow-2xl"
        >
          <div className="px-6 pt-6 pb-8 space-y-3">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="block px-6 py-4 text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 rounded-2xl font-bold transition-all text-lg border-2 border-gray-200 hover:border-blue-500 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

