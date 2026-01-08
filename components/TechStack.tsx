'use client'

import { motion } from 'framer-motion'

export default function TechStack() {
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'TypeScript', icon: 'TS', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Backend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
    { name: 'GraphQL', icon: 'GQL', category: 'Backend' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'DevOps' },
    { name: 'Git', icon: '📦', category: 'DevOps' },
    { name: 'Jest', icon: '🃏', category: 'Testing' }
  ]

  const categories = ['Frontend', 'Backend', 'DevOps', 'Testing']

  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
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
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tehnologije koje koristimo za izgradnju vaših projekata
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                
                {/* Icon */}
                <div className="text-4xl mb-3 text-center">
                  {tech.icon}
                </div>
                
                {/* Name */}
                <h3 className="text-center text-sm font-semibold text-gray-900 mb-1">
                  {tech.name}
                </h3>
                
                {/* Category badge */}
                <div className="text-center">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <div
              key={category}
              className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100"
            >
              <span className="text-sm font-semibold text-gray-800">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
