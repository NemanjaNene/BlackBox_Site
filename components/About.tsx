'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const processSteps = [
  { 
    icon: '📋', 
    title: 'Plan & Dizajn', 
    desc: 'Definišemo viziju i kreiramo wireframe',
    gradient: 'from-blue-500 to-cyan-500',
    number: '01',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 800 400">
          <rect x="50" y="50" width="200" height="150" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600"/>
          <rect x="270" y="50" width="150" height="150" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-600"/>
          <circle cx="600" cy="125" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          <line x1="100" y1="250" x2="700" y2="250" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          <rect x="50" y="280" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          <rect x="150" y="280" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"/>
          <rect x="250" y="280" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
        </svg>
      </div>
    )
  },
  { 
    icon: '💻', 
    title: 'Pisanje Koda', 
    desc: 'Razvijamo sa najnovijim tehnologijama',
    gradient: 'from-purple-500 to-pink-500',
    number: '02',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none font-mono text-xs leading-relaxed p-8 text-purple-600">
        <div className="whitespace-pre">
{`function createApp() {
  const app = new Application()
  app.use(middleware)
  
  return app
}

class Component {
  constructor(props) {
    this.state = {}
  }
  
  render() {
    return <div></div>
  }
}`}
        </div>
      </div>
    )
  },
  { 
    icon: '🎨', 
    title: 'Dodavanje Sadržaja', 
    desc: 'Integrišemo slike, video i animacije',
    gradient: 'from-orange-500 to-red-500',
    number: '03',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-orange-500">🖼️</div>
        <div className="absolute top-10 right-20 text-5xl text-red-500">📷</div>
        <div className="absolute bottom-20 left-20 text-7xl text-orange-400">🎬</div>
        <div className="absolute bottom-10 right-10 text-6xl text-red-400">🎨</div>
        <div className="absolute top-1/2 left-1/3 text-5xl text-orange-300">📹</div>
        <div className="absolute top-1/3 right-1/4 text-6xl text-red-300">🖌️</div>
      </div>
    )
  },
  { 
    icon: '🚀', 
    title: 'SEO Optimizacija', 
    desc: 'Optimizujemo za pretraživače',
    gradient: 'from-green-500 to-emerald-500',
    number: '04',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 800 400">
          {/* Graph lines */}
          <polyline points="50,350 150,280 250,320 350,200 450,240 550,120 650,160 750,80" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-500"/>
          {/* Upward arrows */}
          <path d="M 200,150 L 200,100 L 180,120 M 200,100 L 220,120" stroke="currentColor" strokeWidth="2" className="text-emerald-500"/>
          <path d="M 400,250 L 400,200 L 380,220 M 400,200 L 420,220" stroke="currentColor" strokeWidth="2" className="text-green-600"/>
          <path d="M 600,200 L 600,150 L 580,170 M 600,150 L 620,170" stroke="currentColor" strokeWidth="2" className="text-emerald-600"/>
          {/* Data points */}
          <circle cx="150" cy="280" r="5" fill="currentColor" className="text-green-500"/>
          <circle cx="350" cy="200" r="5" fill="currentColor" className="text-emerald-500"/>
          <circle cx="550" cy="120" r="5" fill="currentColor" className="text-green-600"/>
        </svg>
      </div>
    )
  },
  { 
    icon: '✅', 
    title: 'Testiranje', 
    desc: 'Automacko testiranje funkcionalnosti',
    gradient: 'from-yellow-500 to-orange-500',
    number: '05',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 800 400">
          {/* Checkmarks scattered */}
          <path d="M 100,100 L 120,120 L 160,80" fill="none" stroke="currentColor" strokeWidth="4" className="text-yellow-500"/>
          <path d="M 300,150 L 320,170 L 360,130" fill="none" stroke="currentColor" strokeWidth="4" className="text-orange-500"/>
          <path d="M 500,100 L 520,120 L 560,80" fill="none" stroke="currentColor" strokeWidth="4" className="text-yellow-600"/>
          <path d="M 650,200 L 670,220 L 710,180" fill="none" stroke="currentColor" strokeWidth="4" className="text-orange-600"/>
          <path d="M 150,280 L 170,300 L 210,260" fill="none" stroke="currentColor" strokeWidth="4" className="text-yellow-400"/>
          <path d="M 400,280 L 420,300 L 460,260" fill="none" stroke="currentColor" strokeWidth="4" className="text-orange-400"/>
          {/* Circles around checkmarks */}
          <circle cx="130" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-500"/>
          <circle cx="330" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"/>
          <circle cx="530" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-600"/>
        </svg>
      </div>
    )
  },
  { 
    icon: '📦', 
    title: 'Launch', 
    desc: 'Deploy i live puštanje projekta',
    gradient: 'from-indigo-500 to-blue-500',
    number: '06',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 800 400">
          {/* Rocket trail */}
          <path d="M 100,350 Q 200,300 250,250 T 350,150 T 450,100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" className="text-indigo-400"/>
          {/* Stars */}
          <circle cx="150" cy="100" r="3" fill="currentColor" className="text-blue-400"/>
          <circle cx="300" cy="80" r="4" fill="currentColor" className="text-indigo-400"/>
          <circle cx="500" cy="120" r="3" fill="currentColor" className="text-blue-500"/>
          <circle cx="650" cy="90" r="4" fill="currentColor" className="text-indigo-500"/>
          <circle cx="200" cy="200" r="3" fill="currentColor" className="text-blue-300"/>
          <circle cx="600" cy="250" r="3" fill="currentColor" className="text-indigo-300"/>
          {/* Upward arrows */}
          <path d="M 550,300 L 550,200 L 530,220 M 550,200 L 570,220" stroke="currentColor" strokeWidth="3" className="text-indigo-500"/>
          <path d="M 700,350 L 700,250 L 680,270 M 700,250 L 720,270" stroke="currentColor" strokeWidth="3" className="text-blue-500"/>
        </svg>
      </div>
    )
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
                  <div className={`relative bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 border-2 border-gray-200/50`}>
                    
                    {/* Background Pattern - Unique for each step */}
                    {processSteps[currentStep].bgPattern}
                    
                    {/* Gradient top border */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${processSteps[currentStep].gradient}`} />
                    
                    {/* Animated gradient border glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${processSteps[currentStep].gradient} opacity-10 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`} />
                    
                    {/* Content - ALL CENTERED */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`flex-shrink-0 w-28 h-28 bg-gradient-to-br ${processSteps[currentStep].gradient} rounded-3xl flex items-center justify-center text-6xl shadow-2xl border-4 border-white/30 backdrop-blur-sm`}
                      >
                        {processSteps[currentStep].icon}
                      </motion.div>
                      
                      <div className="flex-1 max-w-2xl">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight"
                        >
                          {processSteps[currentStep].title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed"
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
                          `linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)`,
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
