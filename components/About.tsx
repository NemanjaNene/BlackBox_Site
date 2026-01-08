'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const stats = [
    { number: '50+', label: 'Projekata', icon: '🚀' },
    { number: '100%', label: 'Satisfakcija', icon: '⭐' },
    { number: '24/7', label: 'Podrška', icon: '💪' },
  ]

  const features = [
    { 
      icon: '⚡', 
      title: 'Brzina & Performanse', 
      desc: 'Optimizujemo svaki aspekt za maksimalnu brzinu',
      gradient: 'from-yellow-500 to-orange-500',
      delay: 0
    },
    { 
      icon: '🎨', 
      title: 'Moderan Dizajn', 
      desc: 'Kreativna rešenja koja se ističu',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.2
    },
    { 
      icon: '🔒', 
      title: 'Maksimalna Sigurnost', 
      desc: 'Najviši standardi zaštite podataka',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.4
    },
    { 
      icon: '🚀', 
      title: 'Scalable Rešenja', 
      desc: 'Spremno za rast vašeg biznisa',
      gradient: 'from-purple-500 to-indigo-500',
      delay: 0.6
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="pt-16 pb-32 relative overflow-hidden">
      {/* Animated background orbs - LIGHT */}
      <motion.div 
        style={{ y: y1, opacity: 0.3 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2, opacity: 0.2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card with Parallax */}
        <motion.div
          style={{ opacity, scale }}
          className="relative mb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-gradient-to-br from-blue-50/90 via-white/90 to-cyan-50/90 backdrop-blur-lg border-2 border-blue-100 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl"
          >
            {/* Animated gradient lines */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                  'linear-gradient(90deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                  'linear-gradient(135deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                  'linear-gradient(180deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-5xl md:text-7xl font-black text-gray-950 mb-8 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Kreiramo{' '}
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent inline-block"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  digitalna iskustva
                </motion.span>
                <br />
                koja ostavljaju utisak
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 max-w-3xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Black Box Testing je tim stručnjaka posvećen stvaranju web rešenja koja kombinuju vrhunski dizajn, 
                robusnu funkcionalnost i najnovije tehnologije.
              </motion.p>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.2, type: 'spring' }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center relative group"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="relative">
                      <motion.div 
                        className="text-5xl mb-4"
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <motion.div 
                        className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-900 font-bold text-lg">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8 }}
              whileHover={{ 
                y: -30, 
                rotateY: 10,
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="relative h-full bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 rounded-3xl p-10 border-2 border-gray-200 overflow-hidden shadow-xl">
                
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10`}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                {/* Gradient line animation */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: feature.delay, duration: 1 }}
                />
                
                {/* Icon with subtle animation */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  className="text-9xl mb-8 filter drop-shadow-2xl"
                >
                  {feature.icon}
                </motion.div>
                
                {/* Content */}
                <motion.h3 
                  className="text-4xl font-black text-gray-950 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                
                <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                  {feature.desc}
                </p>

                {/* Bottom animated border */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
