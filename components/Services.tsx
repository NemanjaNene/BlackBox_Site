'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Kreiramo moderne, responzivne web sajtove i aplikacije.',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'SEO optimizacija']
    },
    {
      icon: '🧪',
      title: 'QA & Testing',
      description: 'Kompletno testiranje funkcionalnosti i performansi.',
      features: ['Funkcionalno', 'Performance', 'Security', 'Acceptance']
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Online prodavnice sa platnim sistemima i analitikom.',
      features: ['Platni sistemi', 'Inventory', 'Analytics', 'Multi-currency']
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description: 'Dizajn optimizovan za mobilne uređaje.',
      features: ['Responsive', 'Touch-optimized', 'PWA', 'Native-like']
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Kontinuirana podrška i unapređenje.',
      features: ['24/7 monitoring', 'Updates', 'Backup', 'Optimization']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Kreativni dizajn fokusiran na korisnika.',
      features: ['User research', 'Wireframing', 'Prototyping', 'Testing']
    }
  ]

  return (
    <section id="services" className="py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naše Usluge
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kompletna rešenja za vaše digitalne potrebe
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
                
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-2xl" />
                
                {/* Icon in colored circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Započnite Projekat
          </a>
        </motion.div>
      </div>
    </section>
  )
}
