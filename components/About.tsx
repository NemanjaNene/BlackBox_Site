'use client'

import { motion } from 'framer-motion'

export default function About() {
  const features = [
    { icon: '🎯', title: 'Preciznost', desc: 'Detaljno testiranje svakog aspekta vašeg projekta', color: 'from-blue-500/20 to-cyan-500/20' },
    { icon: '⚡', title: 'Brzina', desc: 'Optimizovane aplikacije za najbolje performanse', color: 'from-cyan-500/20 to-teal-500/20' },
    { icon: '🔒', title: 'Sigurnost', desc: 'Najviši standardi bezbednosti i zaštite podataka', color: 'from-purple-500/20 to-pink-500/20' },
    { icon: '💡', title: 'Inovacija', desc: 'Moderne tehnologije i najnovija rešenja', color: 'from-orange-500/20 to-red-500/20' }
  ]

  return (
    <section id="about" className="relative pt-4 pb-16 md:pt-6 md:pb-20 overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black mb-6 text-white"
          >
            O nama
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-blue-600 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Vaš <span className="text-blue-500">pouzdani partner</span> u digitalnom svetu
            </h3>
            <div className="space-y-4 md:space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 leading-relaxed text-base md:text-lg"
              >
                <strong className="text-blue-400">Black Box Testing</strong> je profesionalna agencija specijalizovana 
                za razvoj modernih web aplikacija i kompletno testiranje softvera. 
                Naš tim stručnjaka koristi najnovije tehnologije i najbolje prakse 
                kako bi vašem biznisu pružio digitalno prisustvo koje zaslužuje.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 leading-relaxed text-base md:text-lg"
              >
                Fokusiramo se na kreiranje web rešenja koja su ne samo vizuelno 
                atraktivna, već i <span className="text-blue-400 font-semibold">funkcionalna, bezbedna i optimizovana</span> za najbolje 
                performanse. Svaki projekat pristupamo sa posebnom pažnjom i 
                detaljnim planiranjem.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 leading-relaxed text-base md:text-lg"
              >
                Bilo da vam je potreban poslovni sajt, e-commerce platforma, ili 
                kompleksna web aplikacija, tu smo da vaše <span className="text-blue-400 font-semibold">ideje pretvorimo u realnost</span>.
              </motion.p>
            </div>
          </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-8 glass rounded-2xl border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

