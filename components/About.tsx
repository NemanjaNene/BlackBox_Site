'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

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
    desc: 'Automacko testiranje funkcionalnosti',
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

function StatCard({ stat, index }: { stat: any, index: number }) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return
    
    const target = parseInt(stat.number)
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, stat.number])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-white via-blue-50/40 to-white rounded-3xl p-12 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 text-center overflow-hidden">
        
        {/* Animated gradient background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        {/* Number with animation */}
        <div className="relative z-10">
          <motion.div 
            className={`text-7xl md:text-8xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
          >
            {count}{stat.suffix}
          </motion.div>
          
          <motion.div 
            className="text-lg md:text-xl font-bold text-gray-700 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {stat.label}
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t ${stat.color} blur-2xl -z-10`} />
      </div>
    </motion.div>
  )
}

export default function About() {
  const [currentStep, setCurrentStep] = useState(0)

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: '50', suffix: '+', label: 'Projekata', color: 'from-blue-600 to-cyan-500' },
    { number: '100', suffix: '%', label: 'Satisfakcija', color: 'from-cyan-600 to-blue-500' },
    { number: '24', suffix: '/7', label: 'Podrška', color: 'from-purple-600 to-pink-500' },
  ]

  return (
    <section id="about" className="pt-20 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Process Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className={`relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl px-10 py-8 md:px-16 md:py-10 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500`}>
                    
                    {/* Animated gradient border glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${processSteps[currentStep].gradient} opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`flex-shrink-0 w-32 h-32 bg-gradient-to-br ${processSteps[currentStep].gradient} rounded-3xl flex items-center justify-center text-6xl shadow-2xl border-4 border-white/30 backdrop-blur-sm`}
                      >
                        {processSteps[currentStep].icon}
                      </motion.div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"
                        >
                          {processSteps[currentStep].title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed"
                        >
                          {processSteps[currentStep].desc}
                        </motion.p>
                      </div>
                    </div>

                    {/* Subtle animated gradient background */}
                    <motion.div 
                      animate={{ 
                        background: [
                          `linear-gradient(135deg, transparent 0%, transparent 100%)`,
                          `linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(147, 51, 234, 0.03) 100%)`,
                          `linear-gradient(135deg, transparent 0%, transparent 100%)`
                        ]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className={`absolute inset-0 rounded-3xl pointer-events-none`} 
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {processSteps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentStep 
                      ? `w-12 h-3 bg-gradient-to-r ${step.gradient} shadow-lg` 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
