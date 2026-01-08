'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import MatrixRain from './MatrixRain'

function Counter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const duration = 2000
    const startValue = 0

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setDisplayValue(Math.floor(progress * (value - startValue) + startValue))
      
      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(animateCount)
    }, 1500)

    return () => clearTimeout(timer)
  }, [value])

  return <>{displayValue}</>
}

export default function Hero() {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix Code Rain Animation - LIGHT VERSION */}
      <MatrixRain />
      
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Elegant gradient orbs - LIGHT VERSION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl top-0 left-1/4"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.20, 0.12]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-l from-orange-300/15 to-amber-300/15 rounded-full blur-3xl bottom-0 right-1/4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-8 md:pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Elegant Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight">
                <span className="block text-gray-900 mb-2">BLACK BOX</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
                  TESTING
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide uppercase px-4"
          >
            Professional Web Development & Testing
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-800 font-medium mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Kreiramo <span className="text-blue-600 font-semibold">premium digitalna rešenja</span> koja
            transformišu vaš biznis. Preciznost, kvalitet i inovacija u svakom projektu.
          </motion.p>

          {/* Professional Stats with Animated Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-6xl mx-auto mb-8 px-4"
          >
            {[
              { num: 50, suffix: '+', label: 'Projekata', desc: 'Uspešno realizovano' },
              { num: 100, suffix: '%', label: 'Klijenti', desc: 'Zadovoljni partneri' },
              { num: 24, suffix: '/7', label: 'Podrška', desc: 'Uvek dostupni' },
              { num: 5, suffix: '+', label: 'Godina', desc: 'Iskustva' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:opacity-100 opacity-60 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 md:p-10 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80 backdrop-blur-md rounded-2xl border-2 border-blue-200 group-hover:border-blue-500 transition-all duration-300 shadow-2xl group-hover:shadow-blue-600/30">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-transparent bg-clip-text mb-2 sm:mb-3">
                    <Counter value={stat.num} />
                    {stat.suffix}
                  </div>
                  <div className="text-gray-900 font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{stat.label}</div>
                  <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA Buttons - Centered Below Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-blue-600 text-white rounded-2xl font-bold text-base sm:text-lg md:text-xl overflow-hidden shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-600/50 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Započnite Projekat
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-base sm:text-lg md:text-xl"
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio"
              className="w-full sm:w-auto px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl font-bold text-base sm:text-lg md:text-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-white transition-all shadow-lg"
            >
              Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
