'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Kreiramo moderne, responzivne web sajtove i aplikacije koristeći najnovije tehnologije kao što su React, Next.js, TypeScript i Tailwind CSS.',
      features: [
        'Responzivan dizajn',
        'SEO optimizacija',
        'Brzo učitavanje',
        'Cross-browser kompatibilnost'
      ]
    },
    {
      icon: '🧪',
      title: 'QA & Testing',
      description: 'Sveobuhvatno testiranje vaših aplikacija uključujući funkcionalnost, performanse, sigurnost i korisničko iskustvo.',
      features: [
        'Funkcionalno testiranje',
        'Performance testiranje',
        'Security testiranje',
        'User acceptance testiranje'
      ]
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Razvoj kompletnih online prodavnica sa integracijom platnih sistema, upravljanjem inventarom i analitikom.',
      features: [
        'Platni sistemi',
        'Inventory management',
        'Analitika prodaje',
        'Multi-currency podrška'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Dizajniramo sa fokusom na mobilne uređaje, osiguravajući savršeno iskustvo na svim veličinama ekrana.',
      features: [
        'Responsive layout',
        'Touch-optimized',
        'Progressive Web Apps',
        'Native-like experience'
      ]
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Kontinuirana podrška, održavanje i unapređenje vaših web aplikacija kako bi uvek radile besprekorno.',
      features: [
        '24/7 monitoring',
        'Redovni update-ovi',
        'Backup & recovery',
        'Performance optimization'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Kreativni dizajn koji kombinuje estetiku sa funkcionalošću, fokusirajući se na korisničko iskustvo.',
      features: [
        'User research',
        'Wireframing',
        'Prototyping',
        'Usability testing'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 relative">
      {/* Modern diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-indigo-950/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Naše usluge
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pružamo kompletan spektar usluga za razvoj i testiranje web aplikacija
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#06b6d4"
                glareBorderRadius="20px"
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative h-full p-6 md:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon with background */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 flex items-center justify-center text-5xl backdrop-blur-sm"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="relative text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-400 transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="relative text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="relative space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <span className="w-6 h-6 mr-3 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

