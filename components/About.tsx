'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
        
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.color} rounded-t-3xl`} />
        
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
  const stats = [
    { number: '50', suffix: '+', label: 'Projekata', color: 'from-blue-600 to-cyan-500' },
    { number: '100', suffix: '%', label: 'Satisfakcija', color: 'from-cyan-600 to-blue-500' },
    { number: '24', suffix: '/7', label: 'Podrška', color: 'from-purple-600 to-pink-500' },
  ]

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

  return (
    <section id="about" className="pt-20 pb-40 relative overflow-hidden">
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

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kako Radimo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Naš proces od ideje do live projekta
          </p>
        </motion.div>

        {/* Stacking Process Cards */}
        <div className="relative max-w-4xl mx-auto h-[600px] md:h-[500px]">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 100,
                scale: 0.8,
                rotateX: -20
              }}
              whileInView={{ 
                opacity: 1, 
                y: index * 60,
                scale: 1 - (index * 0.05),
                rotateX: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              style={{ 
                zIndex: processSteps.length - index,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              className="absolute inset-x-0 top-0"
            >
              <div className={`relative bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 shadow-2xl overflow-hidden`}>
                
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${step.gradient} rounded-t-3xl`} />
                
                {/* Number badge */}
                <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-xl`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-[0.02] rounded-3xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
