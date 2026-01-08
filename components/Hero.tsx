'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import MatrixRain from './MatrixRain'

const processSteps = [
  { 
    icon: '📋', 
    title: 'Plan & Dizajn', 
    desc: 'Definišemo viziju i kreiramo wireframe',
    gradient: 'from-blue-500 to-cyan-500',
    number: '01'
  },
  { 
    icon: '💻', 
    title: 'Pisanje Koda', 
    desc: 'Razvijamo sa najnovijim tehnologijama',
    gradient: 'from-purple-500 to-pink-500',
    number: '02'
  },
  { 
    icon: '🎨', 
    title: 'Dodavanje Sadržaja', 
    desc: 'Integrišemo slike, video i animacije',
    gradient: 'from-orange-500 to-red-500',
    number: '03'
  },
  { 
    icon: '🚀', 
    title: 'SEO Optimizacija', 
    desc: 'Optimizujemo za pretraživače',
    gradient: 'from-green-500 to-emerald-500',
    number: '04'
  },
  { 
    icon: '✅', 
    title: 'Testiranje', 
    desc: 'Rigorozno testiranje funkcionalnosti',
    gradient: 'from-yellow-500 to-orange-500',
    number: '05'
  },
  { 
    icon: '📦', 
    title: 'Launch', 
    desc: 'Deploy i live puštanje projekta',
    gradient: 'from-indigo-500 to-blue-500',
    number: '06'
  },
]

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

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

          {/* Process Steps Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-4xl mx-auto mb-12 px-4"
          >
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className={`relative bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-2xl overflow-hidden`}>
                      
                      {/* Gradient top border */}
                      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${processSteps[currentStep].gradient} rounded-t-3xl`} />
                      
                      {/* Number badge */}
                      <div className={`absolute top-6 right-6 w-14 h-14 bg-gradient-to-br ${processSteps[currentStep].gradient} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                        {processSteps[currentStep].number}
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${processSteps[currentStep].gradient} rounded-3xl flex items-center justify-center text-5xl shadow-xl`}>
                          {processSteps[currentStep].icon}
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {processSteps[currentStep].title}
                          </h3>
                          <p className="text-gray-600 text-lg md:text-xl">
                            {processSteps[currentStep].desc}
                          </p>
                        </div>
                      </div>

                      {/* Subtle gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${processSteps[currentStep].gradient} opacity-[0.03] rounded-3xl pointer-events-none`} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevStep}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all flex items-center justify-center text-gray-700 hover:text-blue-600 font-bold text-xl"
              >
                ←
              </button>
              <button
                onClick={nextStep}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all flex items-center justify-center text-gray-700 hover:text-blue-600 font-bold text-xl"
              >
                →
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'w-8 bg-gradient-to-r from-blue-600 to-cyan-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
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
