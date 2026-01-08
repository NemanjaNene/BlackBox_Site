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
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
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
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
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
