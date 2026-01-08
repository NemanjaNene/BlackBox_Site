'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t-2 border-gray-200 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/black-box-logo.png" 
                alt="Black Box Testing" 
                width={400}
                height={400}
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
                style={{ 
                  filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))'
                }}
              />
            </motion.div>
            <motion.p 
              className="text-gray-800 mb-6 max-w-md text-lg font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Profesionalan razvoj web aplikacija i testiranje. Vaš pouzdan partner 
              za digitalne projekte.
            </motion.p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-xl hover:shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-xl hover:shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-xl hover:shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-400 transition-all shadow-md hover:shadow-xl hover:shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-gray-900 font-bold text-xl mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Brzi linkovi</h3>
            <ul className="space-y-3">
              <li>
                <motion.a 
                  href="#home" 
                  className="text-gray-800 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  Početna
                </motion.a>
              </li>
              <li>
                <motion.a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group font-medium" whileHover={{ x: 5 }}>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100" />
                  O nama
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group font-medium" whileHover={{ x: 5 }}>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100" />
                  Usluge
                </motion.a>
              </li>
              <li>
                <motion.a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group font-medium" whileHover={{ x: 5 }}>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100" />
                  Portfolio
                </motion.a>
              </li>
              <li>
                <motion.a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group font-medium" whileHover={{ x: 5 }}>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100" />
                  Kontakt
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-gray-900 font-bold text-xl mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Usluge</h3>
            <ul className="space-y-3">
              <motion.li className="text-gray-800 flex items-center gap-2 font-semibold" whileHover={{ x: 5, color: '#2563eb' }}>
                <span className="text-blue-500">→</span> Web Development
              </motion.li>
              <motion.li className="text-gray-800 flex items-center gap-2 font-semibold" whileHover={{ x: 5, color: '#2563eb' }}>
                <span className="text-blue-500">→</span> QA & Testing
              </motion.li>
              <motion.li className="text-gray-800 flex items-center gap-2 font-semibold" whileHover={{ x: 5, color: '#2563eb' }}>
                <span className="text-blue-500">→</span> E-Commerce
              </motion.li>
              <motion.li className="text-gray-800 flex items-center gap-2 font-semibold" whileHover={{ x: 5, color: '#2563eb' }}>
                <span className="text-blue-500">→</span> UI/UX Design
              </motion.li>
              <motion.li className="text-gray-800 flex items-center gap-2 font-semibold" whileHover={{ x: 5, color: '#2563eb' }}>
                <span className="text-blue-500">→</span> Maintenance
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-600 text-sm font-medium">
              © {currentYear} Black Box Testing. Sva prava zadržana.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-600 font-medium">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Politika privatnosti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Uslovi korišćenja
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
