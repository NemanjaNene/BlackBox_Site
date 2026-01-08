'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS nije pravilno konfigurisan. Proverite environment varijable.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'Nemanjanikitovic1@gmail.com',
        },
        publicKey
      )

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error?.text || 'Došlo je do greške pri slanju poruke. Pokušajte ponovo.')
      console.error('EmailJS Error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      {/* Animated background orbs - LIGHT */}
      <motion.div 
        style={{ y, opacity: 0.25 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity: 0.2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black text-gray-950 mb-8"
            animate={{
              textShadow: [
                '0 0 20px rgba(59, 130, 246, 0.2)',
                '0 0 40px rgba(59, 130, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Kontaktirajte{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              nas
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
            Imate projekat na umu? Javite nam se i hajde da ga ostvarimo zajedno!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50/70 via-white/90 to-purple-50/70 backdrop-blur-lg rounded-3xl p-10 border-2 border-blue-100 shadow-2xl overflow-hidden">
              
              {/* Animated pattern background */}
              <motion.div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 20px),
                    repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(147, 51, 234, 0.1) 10px, rgba(147, 51, 234, 0.1) 20px)
                  `
                }}
              />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Ime i prezime *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none transition-all text-gray-900 font-semibold"
                    placeholder="Vaše ime"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email adresa *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none transition-all text-gray-900 font-semibold"
                    placeholder="vas@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Naslov *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 outline-none transition-all text-gray-900 font-semibold"
                    placeholder="O čemu se radi?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Poruka *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none text-gray-900 font-medium"
                    placeholder="Opišite svoj projekat..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 2, 2],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'loading' ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          ⏳
                        </motion.span>
                        Šaljem...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <span>✅</span>
                        Poslato uspešno!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <span>❌</span>
                        Greška - Pokušaj ponovo
                      </>
                    ) : (
                      <>
                        Pošalji poruku
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>

                {status === 'error' && errorMessage && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-sm font-medium text-center bg-red-50 p-3 rounded-xl border border-red-200"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: '📧',
                title: 'Email',
                content: 'Nemanjanikitovic1@gmail.com',
                gradient: 'from-blue-500 to-cyan-500',
                delay: 0.2
              },
              {
                icon: '📱',
                title: 'Telefon',
                content: '+381 XX XXX XXXX',
                gradient: 'from-purple-500 to-pink-500',
                delay: 0.4
              },
              {
                icon: '📍',
                title: 'Lokacija',
                content: 'Srbija',
                gradient: 'from-orange-500 to-red-500',
                delay: 0.6
              },
              {
                icon: '⏰',
                title: 'Radno vreme',
                content: 'Pon - Pet: 09:00 - 17:00',
                gradient: 'from-green-500 to-emerald-500',
                delay: 0.8
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, rotateY: -30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: info.delay, duration: 0.8 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div className="relative bg-gradient-to-br from-white via-gray-50/60 to-white backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 group-hover:border-transparent shadow-xl group-hover:shadow-2xl transition-all overflow-hidden">
                  
                  {/* Static subtle gradient hint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-[0.04] rounded-3xl`}></div>
                  
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl p-0.5`}>
                    <div className="h-full w-full bg-white/95 rounded-3xl"></div>
                  </div>
                  
                  {/* Animated gradient background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-8`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <motion.div
                      animate={{ 
                        y: [0, -6, 0],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-6xl"
                    >
                      {info.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-gray-950 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-semibold">
                        {info.content}
                      </p>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
