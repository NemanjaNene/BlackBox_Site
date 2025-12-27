'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pb-4 md:pb-6">
      {/* Matrix Code Rain Animation */}
      <MatrixRain />
      
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      {/* Elegant gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl top-0 left-1/4"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-l from-slate-600/10 to-blue-700/10 rounded-full blur-3xl bottom-0 right-1/4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
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
                <span className="block text-white mb-2">BLACK BOX</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-transparent bg-clip-text">
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
            className="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-slate-300 mb-4 sm:mb-6 tracking-wide uppercase px-4"
          >
            Professional Web Development & Testing
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 mb-16 sm:mb-20 md:mb-24 lg:mb-32 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Kreiramo <span className="text-blue-400 font-medium">premium digitalna rešenja</span> koja
            transformišu vaš biznis. Preciznost, kvalitet i inovacija u svakom projektu.
          </motion.p>

          {/* Professional Stats with Animated Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-6xl mx-auto mb-8 sm:mb-10 px-4"
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
                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl blur-xl group-hover:bg-blue-600/10 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 md:p-10 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br from-white to-slate-300 text-transparent bg-clip-text mb-2 sm:mb-3">
                    <Counter value={stat.num} />
                    {stat.suffix}
                  </div>
                  <div className="text-slate-300 font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{stat.label}</div>
                  <div className="text-slate-500 text-xs sm:text-sm md:text-base">{stat.desc}</div>
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
              className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-blue-600 text-white rounded-xl font-semibold text-base sm:text-lg md:text-xl overflow-hidden shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all"
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
              className="w-full sm:w-auto px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold text-base sm:text-lg md:text-xl border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800/70 transition-all"
            >
              Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

