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
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50/40 backdrop-blur-lg rounded-3xl p-10 border border-blue-200/50 shadow-2xl overflow-hidden">
              
              {/* Animated gradient orbs */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-3xl"
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
                    whileFocus={{ scale: 1.01 }}
                    whileHover={{ y: -2 }}
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gradient-to-r from-white via-blue-50/30 to-white border-2 border-blue-200/50 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 hover:border-blue-300 hover:shadow-md"
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
                    whileFocus={{ scale: 1.01 }}
                    whileHover={{ y: -2 }}
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gradient-to-r from-white via-blue-50/30 to-white border-2 border-blue-200/50 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 hover:border-blue-300 hover:shadow-md"
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
                    whileFocus={{ scale: 1.01 }}
                    whileHover={{ y: -2 }}
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gradient-to-r from-white via-blue-50/30 to-white border-2 border-blue-200/50 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 outline-none transition-all text-gray-900 font-semibold placeholder:text-gray-400 hover:border-blue-300 hover:shadow-md"
                    placeholder="Naslov poruke"
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
                    whileFocus={{ scale: 1.01 }}
                    whileHover={{ y: -2 }}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-gradient-to-br from-white via-blue-50/30 to-white border-2 border-blue-200/50 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 outline-none transition-all resize-none text-gray-900 font-medium placeholder:text-gray-400 hover:border-blue-300 hover:shadow-md"
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
          <div className="space-y-5">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all overflow-hidden">
                
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-5">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700 font-medium truncate">Nemanjanikitovic1@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-5">
                  <motion.div 
                    whileHover={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-700 font-medium">+381 616465642</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-orange-50 via-white to-red-50/40 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/20 transition-all overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-5">
                  <motion.div 
                    whileHover={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-shadow"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Lokacija</h3>
                    <p className="text-gray-700 font-medium">Srbija</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50/40 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/20 transition-all overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-5">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-shadow"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Radno vreme</h3>
                    <p className="text-gray-700 font-medium">Pon - Pet: 09:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
