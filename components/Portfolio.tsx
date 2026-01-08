'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: 'JoyFruits Premium',
      category: 'website',
      description: 'Luxury Caribbean Rakia - Premium website',
      imageUrl: '/joyfruits-bottles.jpg',
      isImage: true,
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      link: 'https://joyfruitspremium.com/en/'
    },
    {
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      description: 'Moderna online prodavnica sa kompletnim sistemom',
      icon: '🛍️',
      tags: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
      title: 'Corporate Website',
      category: 'website',
      description: 'Profesionalni sajt sa CMS sistemom',
      icon: '🏢',
      tags: ['React', 'CMS', 'SEO']
    },
    {
      title: 'SaaS Dashboard',
      category: 'webapp',
      description: 'Dashboard sa real-time analitikom',
      icon: '📊',
      tags: ['React', 'D3.js', 'WebSocket']
    },
    {
      title: 'Booking System',
      category: 'webapp',
      description: 'Sistem za online rezervacije',
      icon: '📅',
      tags: ['Next.js', 'Calendar', 'Email']
    },
    {
      title: 'Portfolio Website',
      category: 'website',
      description: 'Kreativni portfolio za dizajnere',
      icon: '🎨',
      tags: ['Next.js', 'Framer', 'Tailwind']
    }
  ]

  const filters = [
    { id: 'all', label: 'Sve' },
    { id: 'website', label: 'Web Sajtovi' },
    { id: 'webapp', label: 'Aplikacije' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naš Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Projekti koje smo ostvarili za naše klijente
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <a 
                  href={project.link || '#'} 
                  target={project.link ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="relative h-full bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
                    
                    {/* Gradient top border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-t-2xl" />
                    
                    {/* Image/Icon Section */}
                    <div className="aspect-video bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center overflow-hidden">
                      {project.isImage && project.imageUrl ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="text-7xl group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 bg-gradient-to-br from-white via-orange-50/20 to-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs font-medium text-orange-600 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
