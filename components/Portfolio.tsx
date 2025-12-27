'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      description: 'Moderna online prodavnica sa integrisanim plaćanjem i inventar sistemom',
      image: '🛍️',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Corporate Website',
      category: 'website',
      description: 'Profesionalni korporativni sajt sa CMS sistemom za lako ažuriranje',
      image: '🏢',
      tags: ['React', 'Headless CMS', 'SEO'],
      color: 'from-blue-500 to-blue-500'
    },
    {
      title: 'SaaS Dashboard',
      category: 'webapp',
      description: 'Kompleksna dashboard aplikacija sa real-time analitikom',
      image: '📊',
      tags: ['React', 'D3.js', 'WebSocket'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Booking System',
      category: 'webapp',
      description: 'Sistem za online rezervacije sa kalendarom i notifikacijama',
      image: '📅',
      tags: ['Next.js', 'Calendar API', 'Email'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Portfolio Website',
      category: 'website',
      description: 'Kreativni portfolio sajt za dizajnere i umetnike',
      image: '🎨',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Mobile App Landing',
      category: 'website',
      description: 'Landing page za mobilnu aplikaciju sa animacijama',
      image: '📱',
      tags: ['React', 'GSAP', 'Responsive'],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const filters = [
    { id: 'all', label: 'Sve' },
    { id: 'website', label: 'Web Sajtovi' },
    { id: 'webapp', label: 'Web Aplikacije' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pogledajte neke od naših najnovijih projekata
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${
                  activeFilter === filter.id
                    ? 'text-white'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  glareEnable={true}
                  glareMaxOpacity={0.4}
                  glareColor="#06b6d4"
                  glareBorderRadius="24px"
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative h-full overflow-hidden rounded-3xl glass border-2 border-white/10"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-xl`} />
                    </div>

                    {/* Project Icon/Image */}
                    <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-9xl filter drop-shadow-2xl"
                      >
                        {project.image}
                      </motion.div>
                      {/* Mesh gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Project Info */}
                    <div className="relative p-6 bg-black/40 backdrop-blur-xl">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-400 transition-all"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 glass text-blue-400 text-xs rounded-full border border-blue-400/30 font-medium"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Pogledaj Više →
                      </motion.button>
                    </div>

                    {/* Glowing border on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note about adding real projects */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            * Ovo su naši projekti. *
          </p>
        </div>
      </div>
    </section>
  )
}

