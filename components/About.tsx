'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '50+', label: 'Projekata', icon: '🚀' },
    { number: '100%', label: 'Satisfakcija', icon: '⭐' },
    { number: '24/7', label: 'Podrška', icon: '💪' },
  ]

  const features = [
    { 
      icon: '⚡', 
      title: 'Brzina & Performanse', 
      desc: 'Optimizujemo svaki aspekt za maksimalnu brzinu'
    },
    { 
      icon: '🎨', 
      title: 'Moderan Dizajn', 
      desc: 'Kreativna rešenja koja se ističu'
    },
    { 
      icon: '🔒', 
      title: 'Maksimalna Sigurnost', 
      desc: 'Najviši standardi zaštite podataka'
    },
    { 
      icon: '🚀', 
      title: 'Scalable Rešenja', 
      desc: 'Spremno za rast vašeg biznisa'
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
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="relative bg-gradient-to-br from-white via-cyan-50/30 to-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-t-2xl" />
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
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
            Zašto Black Box?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pružamo kompletna rešenja sa fokusom na kvalitet i performanse
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white via-purple-50/20 to-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-center overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-2xl" />
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
