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
      <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1000 500">
          {/* Top left wireframes */}
          <rect x="20" y="20" width="180" height="120" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <rect x="220" y="20" width="140" height="120" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <line x1="30" y1="30" x2="190" y2="30" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          <line x1="30" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          
          {/* Top right circles */}
          <circle cx="780" cy="80" r="60" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-500"/>
          <circle cx="900" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          
          {/* Middle wireframes */}
          <rect x="50" y="180" width="200" height="150" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500"/>
          <rect x="70" y="200" width="80" height="50" fill="currentColor" fillOpacity="0.1" className="text-cyan-600"/>
          <rect x="70" y="270" width="160" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          
          {/* Right side layout */}
          <rect x="700" y="200" width="280" height="180" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <rect x="720" y="220" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          <rect x="840" y="220" width="120" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          
          {/* Bottom grid */}
          <line x1="50" y1="380" x2="950" y2="380" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          <rect x="50" y="400" width="100" height="70" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <rect x="170" y="400" width="100" height="70" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <rect x="290" y="400" width="100" height="70" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500"/>
          <rect x="410" y="400" width="100" height="70" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-500"/>
          
          {/* Connection lines */}
          <line x1="400" y1="100" x2="500" y2="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" className="text-blue-400"/>
          <line x1="600" y1="150" x2="700" y2="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" className="text-cyan-400"/>
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
      <div className="absolute inset-0 overflow-hidden opacity-[0.14] pointer-events-none font-mono text-xs leading-relaxed p-4 text-purple-600">
        <div className="grid grid-cols-2 gap-8 w-full h-full">
          <div className="whitespace-pre">
{`function createApp() {
  const app = new Application()
  app.use(middleware)
  app.use(router)
  
  return app.listen(3000)
}

const API_URL = '/api/v1'
const config = {
  timeout: 5000,
  retry: 3
}

class Component {
  constructor(props) {
    this.state = {
      loading: false
    }
  }
  
  async fetchData() {
    const res = await fetch(API)
    return res.json()
  }
  
  render() {
    return <div></div>
  }
}`}
          </div>
          <div className="whitespace-pre text-pink-600">
{`import React from 'react'
import { motion } from 'framer'

export default function Hero() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero"
    >
      <h1>Welcome</h1>
      <p>Count: {count}</p>
    </motion.div>
  )
}`}
          </div>
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
      <div className="absolute inset-0 overflow-hidden opacity-[0.13] pointer-events-none">
        {/* Top row */}
        <div className="absolute top-5 left-10 text-6xl text-orange-500">🖼️</div>
        <div className="absolute top-8 left-1/4 text-5xl text-red-500">📷</div>
        <div className="absolute top-5 right-1/4 text-6xl text-orange-400">🎬</div>
        <div className="absolute top-10 right-10 text-5xl text-red-400">📹</div>
        
        {/* Middle row */}
        <div className="absolute top-1/3 left-5 text-7xl text-orange-600">🎥</div>
        <div className="absolute top-1/3 left-1/3 text-6xl text-red-500">🖌️</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-orange-400">🎞️</div>
        <div className="absolute top-1/3 right-5 text-6xl text-red-600">🎨</div>
        
        {/* Bottom row */}
        <div className="absolute bottom-5 left-12 text-6xl text-orange-500">📸</div>
        <div className="absolute bottom-8 left-1/3 text-7xl text-red-400">🎭</div>
        <div className="absolute bottom-5 right-1/4 text-5xl text-orange-600">🖼️</div>
        <div className="absolute bottom-10 right-10 text-6xl text-red-500">✨</div>
        
        {/* Extra scattered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-orange-300 opacity-50">🎬</div>
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
      <div className="absolute inset-0 overflow-hidden opacity-[0.16] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1000 500">
          {/* Main growth graph - left side */}
          <polyline points="30,450 80,380 130,400 180,300 230,320 280,200 330,220 380,120" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-green-600"/>
          <circle cx="80" cy="380" r="6" fill="currentColor" className="text-green-500"/>
          <circle cx="180" cy="300" r="6" fill="currentColor" className="text-green-600"/>
          <circle cx="280" cy="200" r="6" fill="currentColor" className="text-emerald-600"/>
          <circle cx="380" cy="120" r="6" fill="currentColor" className="text-green-700"/>
          
          {/* Second graph - middle */}
          <polyline points="400,470 450,420 500,400 550,320 600,280 650,200" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-emerald-500"/>
          <circle cx="500" cy="400" r="6" fill="currentColor" className="text-emerald-500"/>
          <circle cx="600" cy="280" r="6" fill="currentColor" className="text-emerald-600"/>
          
          {/* Third graph - right side */}
          <polyline points="680,460 720,400 760,380 800,280 840,260 880,180 920,160 960,100" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-green-500"/>
          <circle cx="800" cy="280" r="6" fill="currentColor" className="text-green-600"/>
          <circle cx="920" cy="160" r="6" fill="currentColor" className="text-green-700"/>
          
          {/* Upward arrows - scattered */}
          <path d="M 150,180 L 150,120 L 135,135 M 150,120 L 165,135" stroke="currentColor" strokeWidth="3" className="text-emerald-600"/>
          <path d="M 350,250 L 350,190 L 335,205 M 350,190 L 365,205" stroke="currentColor" strokeWidth="3" className="text-green-600"/>
          <path d="M 550,200 L 550,140 L 535,155 M 550,140 L 565,155" stroke="currentColor" strokeWidth="3" className="text-emerald-700"/>
          <path d="M 750,180 L 750,120 L 735,135 M 750,120 L 765,135" stroke="currentColor" strokeWidth="3" className="text-green-700"/>
          <path d="M 900,80 L 900,20 L 885,35 M 900,20 L 915,35" stroke="currentColor" strokeWidth="3" className="text-emerald-600"/>
          
          {/* Bar charts - bottom */}
          <rect x="50" y="400" width="25" height="60" fill="currentColor" className="text-green-400" opacity="0.4"/>
          <rect x="90" y="380" width="25" height="80" fill="currentColor" className="text-green-500" opacity="0.4"/>
          <rect x="130" y="350" width="25" height="110" fill="currentColor" className="text-emerald-500" opacity="0.4"/>
          <rect x="170" y="320" width="25" height="140" fill="currentColor" className="text-green-600" opacity="0.4"/>
          
          {/* Percentage symbols */}
          <text x="250" y="80" fontSize="60" fill="currentColor" className="text-emerald-500" opacity="0.3">%</text>
          <text x="650" y="450" fontSize="60" fill="currentColor" className="text-green-500" opacity="0.3">%</text>
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
      <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1000 500">
          {/* Top row - Checkmarks with circles */}
          <circle cx="100" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 70,80 L 90,100 L 130,60" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          
          <circle cx="300" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-500"/>
          <path d="M 270,80 L 290,100 L 330,60" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          
          <circle cx="500" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-600"/>
          <path d="M 470,80 L 490,100 L 530,60" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-700"/>
          
          <circle cx="700" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-600"/>
          <path d="M 670,80 L 690,100 L 730,60" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-700"/>
          
          <circle cx="900" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 870,80 L 890,100 L 930,60" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          
          {/* Middle row - Checkmarks */}
          <path d="M 150,220 L 175,245 L 225,195" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-500"/>
          <path d="M 400,220 L 425,245 L 475,195" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-500"/>
          <path d="M 650,220 L 675,245 L 725,195" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          <path d="M 850,220 L 875,245 L 925,195" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          
          {/* Bottom row - Checkmarks with circles */}
          <circle cx="100" cy="400" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-500"/>
          <path d="M 70,400 L 90,420 L 130,380" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          
          <circle cx="350" cy="400" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-600"/>
          <path d="M 320,400 L 340,420 L 380,380" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-700"/>
          
          <circle cx="600" cy="400" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-600"/>
          <path d="M 570,400 L 590,420 L 630,380" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-700"/>
          
          <circle cx="850" cy="400" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 820,400 L 840,420 L 880,380" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
        </svg>
        
        {/* Bugs scattered throughout */}
        <div className="absolute top-12 left-1/4 text-4xl text-red-500">🐛</div>
        <div className="absolute top-1/3 right-1/4 text-3xl text-red-600">🐛</div>
        <div className="absolute bottom-1/4 left-1/3 text-4xl text-red-500">🐛</div>
        <div className="absolute bottom-12 right-1/3 text-3xl text-red-600">🐛</div>
        <div className="absolute top-1/2 left-12 text-3xl text-red-700 line-through">🐛</div>
        <div className="absolute top-1/4 right-12 text-3xl text-red-700 line-through">🐛</div>
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
      <div className="absolute inset-0 overflow-hidden opacity-[0.14] pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1000 500">
          {/* Multiple rocket trails */}
          <path d="M 50,480 Q 100,420 150,380 T 250,280 T 350,180 T 450,80" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-indigo-500"/>
          <path d="M 200,500 Q 250,450 300,400 T 400,300 T 500,200 T 600,100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-blue-500"/>
          <path d="M 500,480 Q 550,430 600,380 T 700,280 T 800,180 T 900,80" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-indigo-600"/>
          
          {/* Stars - many scattered */}
          <circle cx="100" cy="80" r="4" fill="currentColor" className="text-blue-400"/>
          <circle cx="180" cy="120" r="3" fill="currentColor" className="text-indigo-400"/>
          <circle cx="280" cy="60" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="350" cy="140" r="3" fill="currentColor" className="text-indigo-500"/>
          <circle cx="480" cy="90" r="4" fill="currentColor" className="text-blue-600"/>
          <circle cx="580" cy="150" r="3" fill="currentColor" className="text-indigo-600"/>
          <circle cx="680" cy="70" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="780" cy="130" r="4" fill="currentColor" className="text-indigo-500"/>
          <circle cx="880" cy="100" r="3" fill="currentColor" className="text-blue-400"/>
          <circle cx="150" cy="250" r="3" fill="currentColor" className="text-indigo-400"/>
          <circle cx="350" cy="280" r="4" fill="currentColor" className="text-blue-500"/>
          <circle cx="550" cy="300" r="3" fill="currentColor" className="text-indigo-500"/>
          <circle cx="750" cy="250" r="4" fill="currentColor" className="text-blue-600"/>
          <circle cx="200" cy="380" r="3" fill="currentColor" className="text-indigo-300"/>
          <circle cx="450" cy="400" r="3" fill="currentColor" className="text-blue-400"/>
          <circle cx="700" cy="420" r="4" fill="currentColor" className="text-indigo-400"/>
          
          {/* Large upward arrows */}
          <path d="M 150,450 L 150,320 L 125,345 M 150,320 L 175,345" stroke="currentColor" strokeWidth="4" className="text-indigo-600"/>
          <path d="M 400,450 L 400,300 L 375,325 M 400,300 L 425,325" stroke="currentColor" strokeWidth="4" className="text-blue-600"/>
          <path d="M 650,450 L 650,320 L 625,345 M 650,320 L 675,345" stroke="currentColor" strokeWidth="4" className="text-indigo-700"/>
          <path d="M 880,450 L 880,300 L 855,325 M 880,300 L 905,325" stroke="currentColor" strokeWidth="4" className="text-blue-700"/>
          
          {/* Sparkle effects */}
          <path d="M 250,150 L 260,160 M 250,160 L 260,150" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          <path d="M 550,80 L 560,90 M 550,90 L 560,80" stroke="currentColor" strokeWidth="2" className="text-indigo-400"/>
          <path d="M 800,200 L 810,210 M 800,210 L 810,200" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
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
