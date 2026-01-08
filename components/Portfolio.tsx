'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const projects = [
    {
      title: 'JoyFruits Premium',
      category: 'website',
      description: 'Luxury Caribbean Rakia - Premium website',
      image: '🥭',
      imageUrl: '/joyfruits-bottles.jpg',
      isImage: true,
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      link: 'https://joyfruitspremium.com/en/'
    },
    {
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      description: 'Moderna online prodavnica sa kompletnim sistemom',
      image: '🛍️',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      gradient: 'from-purple-500 via-pink-500 to-purple-500'
    },
    {
      title: 'Corporate Website',
      category: 'website',
      description: 'Profesionalni sajt sa CMS sistemom',
      image: '🏢',
      tags: ['React', 'CMS', 'SEO'],
      gradient: 'from-blue-500 via-cyan-500 to-blue-500'
    },
    {
      title: 'SaaS Dashboard',
      category: 'webapp',
      description: 'Dashboard sa real-time analitikom',
      image: '📊',
      tags: ['React', 'D3.js', 'WebSocket'],
      gradient: 'from-green-500 via-emerald-500 to-green-500'
    },
    {
      title: 'Booking System',
      category: 'webapp',
      description: 'Sistem za online rezervacije',
      image: '📅',
      tags: ['Next.js', 'Calendar', 'Email'],
      gradient: 'from-orange-500 via-red-500 to-orange-500'
    },
    {
      title: 'Portfolio Website',
      category: 'website',
      description: 'Kreativni portfolio za dizajnere',
      image: '🎨',
      tags: ['Next.js', 'Framer', 'Tailwind'],
      gradient: 'from-pink-500 via-rose-500 to-pink-500'
    },
    {
      title: 'Mobile App Landing',
      category: 'website',
      description: 'Landing page sa animacijama',
      image: '📱',
      tags: ['React', 'GSAP', 'Responsive'],
      gradient: 'from-indigo-500 via-purple-500 to-indigo-500'
    }
  ]

  const filters = [
    { id: 'all', label: 'Sve', icon: '🌟' },
    { id: 'website', label: 'Web Sajtovi', icon: '🌐' },
    { id: 'webapp', label: 'Aplikacije', icon: '⚡' },
    { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background orbs - LIGHT */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-gray-950 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Naš{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
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
            Projekti koje smo ostvarili za naše klijente
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-600/50'
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-500'
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                layout
                className="group"
              >
                <motion.a
                  href={project.link || '#'}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -20, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-50/80 border-2 border-gray-200 group-hover:border-transparent shadow-xl group-hover:shadow-2xl block ${project.link ? 'cursor-pointer' : ''}`}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  {/* Static subtle gradient hint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.04] rounded-3xl`}></div>
                  
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl p-0.5`}>
                    <div className="h-full w-full bg-white/95 rounded-3xl"></div>
                  </div>

                  {/* Project Icon/Image */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    {project.isImage && project.imageUrl ? (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="text-9xl filter drop-shadow-2xl relative z-10"
                      >
                        {project.image}
                      </motion.div>
                    )}
                    
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${project.isImage ? 'opacity-20' : 'opacity-50'}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="relative p-6 bg-white z-10">
                    <motion.h3 
                      className="text-2xl font-black text-gray-950 mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-gray-800 mb-4 leading-relaxed font-semibold">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <motion.span 
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + idx * 0.1 + 0.5 }}
                          whileHover={{ scale: 1.15, y: -2 }}
                          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-bold border border-gray-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Link indicator for projects with links */}
                  {project.link && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 border border-gray-200">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
            Započnite svoj projekat
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
