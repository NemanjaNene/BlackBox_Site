'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Kreiramo moderne, responzivne web sajtove i aplikacije.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'SEO optimizacija']
    },
    {
      icon: '🧪',
      title: 'QA & Testing',
      description: 'Kompletno testiranje funkcionalnosti i performansi.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Funkcionalno', 'Performance', 'Security', 'Acceptance']
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Online prodavnice sa platnim sistemima i analitikom.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Platni sistemi', 'Inventory', 'Analytics', 'Multi-currency']
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description: 'Dizajn optimizovan za mobilne uređaje.',
      gradient: 'from-orange-500 to-red-500',
      features: ['Responsive', 'Touch-optimized', 'PWA', 'Native-like']
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Kontinuirana podrška i unapređenje.',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['24/7 monitoring', 'Updates', 'Backup', 'Optimization']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Kreativni dizajn fokusiran na korisnika.',
      gradient: 'from-pink-500 to-rose-500',
      features: ['User research', 'Wireframing', 'Prototyping', 'Testing']
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="py-32 relative overflow-hidden">
      {/* Animated Background Elements - LIGHT */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity: 0.2 }}
        className="absolute bottom-40 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-gray-950 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Naše{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Usluge
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-2 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Kompletna rešenja za vaše digitalne potrebe
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ 
                y: -20,
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.4 }
              }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="relative h-full bg-gradient-to-br from-white via-gray-50/80 to-white backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 group-hover:border-transparent overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                
                {/* Static subtle gradient hint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03] rounded-3xl`}></div>
                
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl p-0.5`}>
                  <div className="h-full w-full bg-white/95 rounded-3xl"></div>
                </div>
                
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                {/* Top gradient line */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} rounded-t-3xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      transition: { duration: 0.3 }
                    }}
                    className="text-7xl mb-6 filter drop-shadow-lg"
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-black text-gray-950 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-gray-800 mb-6 leading-relaxed font-semibold">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + idx * 0.1 + 0.8 }}
                        className="flex items-center text-sm text-gray-800 font-semibold"
                      >
                        <motion.span 
                          className={`mr-2 w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -skew-x-12"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-600/50 transition-all"
          >
            Kontaktirajte nas
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
