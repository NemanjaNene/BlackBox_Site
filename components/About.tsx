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

      </div>
    </section>
  )
}
