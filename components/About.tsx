'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const processSteps = [
  { 
    icon: '📋', 
    title: 'Plan & Dizajn', 
    desc: 'Definišemo viziju i kreiramo wireframe',
    gradient: 'from-blue-500 to-cyan-500',
    number: '01',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 400">
          {/* Far LEFT wireframes */}
          <rect x="10" y="10" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <rect x="10" y="110" width="100" height="70" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          <circle cx="70" cy="240" r="40" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500"/>
          <rect x="10" y="300" width="110" height="90" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <line x1="20" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          <line x1="20" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="2" className="text-cyan-400"/>
          
          {/* LEFT-CENTER */}
          <rect x="180" y="30" width="140" height="100" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <rect x="190" y="45" width="60" height="35" fill="currentColor" fillOpacity="0.08" className="text-blue-600"/>
          <rect x="180" y="180" width="130" height="110" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500"/>
          <circle cx="245" cy="330" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          
          {/* CENTER-TOP */}
          <rect x="400" y="10" width="200" height="70" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <line x1="410" y1="25" x2="590" y2="25" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          <line x1="410" y1="45" x2="560" y2="45" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          
          {/* CENTER */}
          <rect x="650" y="30" width="100" height="80" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <rect x="660" y="45" width="40" height="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          
          {/* CENTER-BOTTOM */}
          <rect x="400" y="300" width="180" height="90" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500"/>
          <rect x="620" y="300" width="160" height="90" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <line x1="410" y1="330" x2="570" y2="330" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          
          {/* RIGHT-CENTER */}
          <rect x="850" y="40" width="150" height="100" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <rect x="860" y="55" width="65" height="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          <rect x="940" y="55" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          <circle cx="925" cy="210" r="50" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <rect x="850" y="280" width="140" height="100" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500"/>
          
          {/* Far RIGHT */}
          <rect x="1050" y="20" width="110" height="75" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <circle cx="1300" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <rect x="1200" y="140" width="100" height="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500"/>
          <rect x="1050" y="250" width="130" height="90" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600"/>
          <rect x="1210" y="270" width="120" height="110" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600"/>
          <circle cx="1330" cy="330" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          
          {/* Connection lines across */}
          <line x1="150" y1="100" x2="400" y2="200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" className="text-blue-400" opacity="0.5"/>
          <line x1="600" y1="80" x2="850" y2="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" className="text-cyan-400" opacity="0.5"/>
          <line x1="780" y1="350" x2="1050" y2="300" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" className="text-blue-400" opacity="0.5"/>
        </svg>
      </div>
    )
  },
  { 
    icon: '💻', 
    title: 'Pisanje Koda', 
    desc: 'Razvijamo sa najnovijim tehnologijama',
    gradient: 'from-purple-500 to-pink-500',
    number: '02',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.14] pointer-events-none font-mono text-[10px] leading-relaxed text-purple-600">
        <div className="grid grid-cols-3 gap-4 w-full h-full p-2">
          {/* LEFT column */}
          <div className="whitespace-pre">
{`function createApp() {
  const app = new App()
  app.use(middleware)
  app.use(router)
  
  return app.listen()
}

const API = '/api/v1'
const config = {
  timeout: 5000,
  retry: 3,
  headers: {
    'Content-Type': 
    'application/json'
  }
}

class Component {
  constructor(props) {
    this.state = {
      loading: false,
      data: null
    }
  }
}`}
          </div>
          
          {/* MIDDLE column */}
          <div className="whitespace-pre text-pink-600">
{`import React from 'react'
import { motion } from 'fm'

function Hero() {
  const [count, set] = 
    useState(0)
  
  useEffect(() => {
    const t = setInterval(
      () => {
        set(c => c + 1)
      }, 1000
    )
    return () => 
      clearInterval(t)
  }, [])
  
  return (
    <motion.div
      initial={{ 
        opacity: 0 
      }}
    >
      <h1>Hi</h1>
    </motion.div>
  )
}`}
          </div>
          
          {/* RIGHT column */}
          <div className="whitespace-pre text-purple-700">
{`async function fetch() {
  const res = await
    axios.get(API_URL)
  
  return res.data
}

const styles = {
  container: {
    display: 'flex',
    padding: '20px'
  }
}

export default {
  fetchData,
  processData,
  updateState
}

const routes = [
  { path: '/' },
  { path: '/about' },
  { path: '/contact' }
]
`}
          </div>
        </div>
      </div>
    )
  },
  { 
    icon: '🎨', 
    title: 'Dodavanje Sadržaja', 
    desc: 'Integrišemo slike, video i animacije',
    gradient: 'from-orange-500 to-red-500',
    number: '03',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.13] pointer-events-none">
        {/* Far LEFT column */}
        <div className="absolute top-2 left-2 text-5xl text-orange-500">🖼️</div>
        <div className="absolute top-[20%] left-4 text-6xl text-red-500">📷</div>
        <div className="absolute top-[40%] left-3 text-5xl text-orange-600">🎥</div>
        <div className="absolute top-[60%] left-5 text-6xl text-red-400">📸</div>
        <div className="absolute bottom-4 left-4 text-5xl text-orange-500">🎭</div>
        
        {/* LEFT-CENTER column */}
        <div className="absolute top-8 left-[20%] text-6xl text-red-600">🎬</div>
        <div className="absolute top-[35%] left-[18%] text-7xl text-orange-400">🖌️</div>
        <div className="absolute bottom-12 left-[22%] text-6xl text-red-500">🎨</div>
        
        {/* CENTER-LEFT */}
        <div className="absolute top-4 left-[38%] text-5xl text-orange-600">📹</div>
        <div className="absolute top-[50%] left-[35%] text-8xl text-orange-300 opacity-40">🎬</div>
        <div className="absolute bottom-8 left-[40%] text-6xl text-red-400">🎞️</div>
        
        {/* CENTER-RIGHT */}
        <div className="absolute top-10 right-[38%] text-6xl text-red-500">✨</div>
        <div className="absolute bottom-6 right-[35%] text-5xl text-orange-500">🖼️</div>
        
        {/* RIGHT-CENTER column */}
        <div className="absolute top-6 right-[20%] text-6xl text-orange-600">🎨</div>
        <div className="absolute top-[38%] right-[18%] text-7xl text-red-600">📷</div>
        <div className="absolute bottom-10 right-[22%] text-6xl text-orange-400">🎥</div>
        
        {/* Far RIGHT column */}
        <div className="absolute top-4 right-4 text-5xl text-red-500">🎬</div>
        <div className="absolute top-[22%] right-2 text-6xl text-orange-500">📹</div>
        <div className="absolute top-[45%] right-5 text-5xl text-red-600">🖌️</div>
        <div className="absolute top-[68%] right-3 text-6xl text-orange-600">🎞️</div>
        <div className="absolute bottom-2 right-4 text-5xl text-red-400">✨</div>
      </div>
    )
  },
  { 
    icon: '🚀', 
    title: 'SEO Optimizacija', 
    desc: 'Optimizujemo za pretraživače',
    gradient: 'from-green-500 to-emerald-500',
    number: '04',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.16] pointer-events-none">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 400">
          {/* Far LEFT graph */}
          <polyline points="10,380 40,340 70,350 100,280 130,290 160,220 190,230 220,180" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-green-600"/>
          <circle cx="70" cy="350" r="6" fill="currentColor" className="text-green-500"/>
          <circle cx="130" cy="290" r="6" fill="currentColor" className="text-green-600"/>
          <circle cx="190" cy="230" r="6" fill="currentColor" className="text-emerald-600"/>
          {/* Left arrows */}
          <path d="M 80,140 L 80,90 L 68,102 M 80,90 L 92,102" stroke="currentColor" strokeWidth="3" className="text-emerald-600"/>
          <path d="M 180,120 L 180,70 L 168,82 M 180,70 L 192,82" stroke="currentColor" strokeWidth="3" className="text-green-700"/>
          {/* Left bars */}
          <rect x="20" y="330" width="20" height="50" fill="currentColor" className="text-green-400" opacity="0.4"/>
          <rect x="50" y="310" width="20" height="70" fill="currentColor" className="text-green-500" opacity="0.4"/>
          
          {/* LEFT-CENTER graph */}
          <polyline points="280,390 320,350 360,360 400,290 440,300 480,230" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-emerald-500"/>
          <circle cx="360" cy="360" r="6" fill="currentColor" className="text-emerald-500"/>
          <circle cx="440" cy="300" r="6" fill="currentColor" className="text-emerald-600"/>
          <path d="M 350,180 L 350,130 L 338,142 M 350,130 L 362,142" stroke="currentColor" strokeWidth="3" className="text-green-600"/>
          <text x="260" y="80" fontSize="50" fill="currentColor" className="text-emerald-500" opacity="0.3">%</text>
          
          {/* CENTER graph */}
          <polyline points="550,380 590,330 630,340 670,270 710,280 750,210 790,220 830,160" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-green-600"/>
          <circle cx="670" cy="270" r="6" fill="currentColor" className="text-green-600"/>
          <circle cx="790" cy="220" r="6" fill="currentColor" className="text-green-700"/>
          <path d="M 700,150 L 700,100 L 688,112 M 700,100 L 712,112" stroke="currentColor" strokeWidth="3" className="text-emerald-700"/>
          
          {/* RIGHT-CENTER graph */}
          <polyline points="900,390 940,340 980,350 1020,280 1060,290 1100,220" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-emerald-600"/>
          <circle cx="980" cy="350" r="6" fill="currentColor" className="text-emerald-500"/>
          <circle cx="1060" cy="290" r="6" fill="currentColor" className="text-green-600"/>
          <path d="M 1000,180 L 1000,130 L 988,142 M 1000,130 L 1012,142" stroke="currentColor" strokeWidth="3" className="text-green-700"/>
          <text x="920" y="90" fontSize="50" fill="currentColor" className="text-green-500" opacity="0.3">%</text>
          
          {/* Far RIGHT graph */}
          <polyline points="1180,380 1210,340 1240,350 1270,290 1300,300 1330,240 1360,250 1390,200" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-green-500"/>
          <circle cx="1270" cy="290" r="6" fill="currentColor" className="text-green-600"/>
          <circle cx="1360" cy="250" r="6" fill="currentColor" className="text-green-700"/>
          {/* Right arrows */}
          <path d="M 1200,140 L 1200,90 L 1188,102 M 1200,90 L 1212,102" stroke="currentColor" strokeWidth="3" className="text-emerald-600"/>
          <path d="M 1320,110 L 1320,60 L 1308,72 M 1320,60 L 1332,72" stroke="currentColor" strokeWidth="3" className="text-green-700"/>
          {/* Right bars */}
          <rect x="1320" y="320" width="20" height="60" fill="currentColor" className="text-green-500" opacity="0.4"/>
          <rect x="1350" y="300" width="20" height="80" fill="currentColor" className="text-emerald-500" opacity="0.4"/>
          
          {/* Top indicators */}
          <text x="550" y="50" fontSize="50" fill="currentColor" className="text-green-600" opacity="0.3">%</text>
          <text x="1150" y="380" fontSize="50" fill="currentColor" className="text-emerald-500" opacity="0.3">%</text>
        </svg>
      </div>
    )
  },
  { 
    icon: '✅', 
    title: 'Testiranje', 
    desc: 'Automacko testiranje funkcionalnosti',
    gradient: 'from-yellow-500 to-orange-500',
    number: '05',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 400">
          {/* Far LEFT column */}
          <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 35,60 L 52,77 L 85,44" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          <path d="M 40,180 L 60,200 L 95,165" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-500"/>
          <circle cx="65" cy="320" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-600"/>
          <path d="M 40,320 L 57,337 L 90,304" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-700"/>
          
          {/* LEFT-CENTER column */}
          <circle cx="250" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-500"/>
          <path d="M 225,80 L 242,97 L 275,64" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          <path d="M 230,200 L 250,220 L 285,185" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-500"/>
          <circle cx="255" cy="340" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-600"/>
          <path d="M 230,340 L 247,357 L 280,324" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-700"/>
          
          {/* CENTER-LEFT column */}
          <circle cx="450" cy="70" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-600"/>
          <path d="M 425,70 L 442,87 L 475,54" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-700"/>
          <path d="M 430,210 L 450,230 L 485,195" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-500"/>
          <circle cx="455" cy="330" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 430,330 L 447,347 L 480,314" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          
          {/* CENTER column */}
          <circle cx="700" cy="65" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-600"/>
          <path d="M 675,65 L 692,82 L 725,49" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-700"/>
          <path d="M 680,195 L 700,215 L 735,180" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          <circle cx="705" cy="325" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-500"/>
          <path d="M 680,325 L 697,342 L 730,309" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          
          {/* CENTER-RIGHT column */}
          <circle cx="950" cy="75" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 925,75 L 942,92 L 975,59" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
          <path d="M 930,205 L 950,225 L 985,190" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          <circle cx="955" cy="335" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-600"/>
          <path d="M 930,335 L 947,352 L 980,319" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-700"/>
          
          {/* RIGHT-CENTER column */}
          <circle cx="1150" cy="70" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-500"/>
          <path d="M 1125,70 L 1142,87 L 1175,54" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-600"/>
          <path d="M 1130,200 L 1150,220 L 1185,185" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-500"/>
          <circle cx="1155" cy="330" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-600"/>
          <path d="M 1130,330 L 1147,347 L 1180,314" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-700"/>
          
          {/* Far RIGHT column */}
          <circle cx="1330" cy="65" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-600"/>
          <path d="M 1305,65 L 1322,82 L 1355,49" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-700"/>
          <path d="M 1310,190 L 1330,210 L 1365,175" fill="none" stroke="currentColor" strokeWidth="5" className="text-orange-500"/>
          <circle cx="1335" cy="325" r="40" fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-500"/>
          <path d="M 1310,325 L 1327,342 L 1360,309" fill="none" stroke="currentColor" strokeWidth="5" className="text-yellow-600"/>
        </svg>
        
        {/* Bugs scattered LEFT to RIGHT */}
        <div className="absolute top-8 left-[8%] text-3xl text-red-500">🐛</div>
        <div className="absolute top-[25%] left-[15%] text-3xl text-red-700 line-through">🐛</div>
        <div className="absolute top-[55%] left-[12%] text-3xl text-red-600">🐛</div>
        <div className="absolute bottom-8 left-[10%] text-3xl text-red-700 line-through">🐛</div>
        
        <div className="absolute top-12 left-[35%] text-4xl text-red-500">🐛</div>
        <div className="absolute bottom-12 left-[32%] text-3xl text-red-600">🐛</div>
        
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 text-3xl text-red-700 line-through">🐛</div>
        
        <div className="absolute top-10 right-[35%] text-3xl text-red-600">🐛</div>
        <div className="absolute bottom-10 right-[32%] text-4xl text-red-500">🐛</div>
        
        <div className="absolute top-6 right-[10%] text-3xl text-red-700 line-through">🐛</div>
        <div className="absolute top-[28%] right-[12%] text-3xl text-red-600">🐛</div>
        <div className="absolute top-[58%] right-[15%] text-3xl text-red-500">🐛</div>
        <div className="absolute bottom-6 right-[8%] text-3xl text-red-700 line-through">🐛</div>
      </div>
    )
  },
  { 
    icon: '📦', 
    title: 'Launch', 
    desc: 'Deploy i live puštanje projekta',
    gradient: 'from-indigo-500 to-blue-500',
    number: '06',
    bgPattern: (
      <div className="absolute inset-0 overflow-hidden opacity-[0.14] pointer-events-none">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 400">
          {/* LEFT rocket trail */}
          <path d="M 20,390 Q 60,350 100,320 T 180,250 T 260,180 T 340,110" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-indigo-500"/>
          
          {/* LEFT-CENTER rocket trail */}
          <path d="M 200,395 Q 250,360 300,330 T 400,260 T 500,190 T 600,120" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-blue-500"/>
          
          {/* CENTER rocket trail */}
          <path d="M 500,390 Q 550,350 600,320 T 680,250 T 760,180 T 840,110" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-indigo-600"/>
          
          {/* RIGHT-CENTER rocket trail */}
          <path d="M 800,395 Q 850,360 900,330 T 1000,260 T 1100,190 T 1200,120" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-blue-600"/>
          
          {/* RIGHT rocket trail */}
          <path d="M 1050,390 Q 1100,350 1150,320 T 1230,250 T 1310,180 T 1390,110" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" className="text-indigo-700"/>
          
          {/* Stars - LEFT side */}
          <circle cx="50" cy="60" r="4" fill="currentColor" className="text-blue-400"/>
          <circle cx="110" cy="100" r="3" fill="currentColor" className="text-indigo-400"/>
          <circle cx="80" cy="180" r="4" fill="currentColor" className="text-blue-500"/>
          <circle cx="140" cy="230" r="3" fill="currentColor" className="text-indigo-500"/>
          <circle cx="100" cy="310" r="4" fill="currentColor" className="text-blue-400"/>
          
          {/* Stars - LEFT-CENTER */}
          <circle cx="280" cy="70" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="350" cy="140" r="3" fill="currentColor" className="text-indigo-500"/>
          <circle cx="320" cy="220" r="4" fill="currentColor" className="text-blue-600"/>
          <circle cx="380" cy="290" r="3" fill="currentColor" className="text-indigo-400"/>
          <circle cx="280" cy="350" r="4" fill="currentColor" className="text-blue-400"/>
          
          {/* Stars - CENTER */}
          <circle cx="580" cy="80" r="4" fill="currentColor" className="text-blue-600"/>
          <circle cx="680" cy="50" r="5" fill="currentColor" className="text-indigo-600"/>
          <circle cx="630" cy="160" r="3" fill="currentColor" className="text-blue-500"/>
          <circle cx="720" cy="210" r="4" fill="currentColor" className="text-indigo-500"/>
          <circle cx="660" cy="290" r="3" fill="currentColor" className="text-blue-400"/>
          <circle cx="580" cy="360" r="4" fill="currentColor" className="text-indigo-400"/>
          
          {/* Stars - RIGHT-CENTER */}
          <circle cx="950" cy="70" r="4" fill="currentColor" className="text-blue-600"/>
          <circle cx="1020" cy="120" r="3" fill="currentColor" className="text-indigo-600"/>
          <circle cx="980" cy="200" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="1050" cy="270" r="3" fill="currentColor" className="text-indigo-500"/>
          <circle cx="920" cy="340" r="4" fill="currentColor" className="text-blue-400"/>
          
          {/* Stars - RIGHT side */}
          <circle cx="1180" cy="60" r="4" fill="currentColor" className="text-blue-500"/>
          <circle cx="1250" cy="110" r="3" fill="currentColor" className="text-indigo-500"/>
          <circle cx="1300" cy="180" r="5" fill="currentColor" className="text-blue-600"/>
          <circle cx="1350" cy="240" r="3" fill="currentColor" className="text-indigo-600"/>
          <circle cx="1280" cy="310" r="4" fill="currentColor" className="text-blue-400"/>
          
          {/* Upward arrows - distributed across */}
          <path d="M 100,370 L 100,280 L 82,298 M 100,280 L 118,298" stroke="currentColor" strokeWidth="4" className="text-indigo-600"/>
          <path d="M 350,370 L 350,270 L 332,288 M 350,270 L 368,288" stroke="currentColor" strokeWidth="4" className="text-blue-600"/>
          <path d="M 600,370 L 600,280 L 582,298 M 600,280 L 618,298" stroke="currentColor" strokeWidth="4" className="text-indigo-700"/>
          <path d="M 850,370 L 850,270 L 832,288 M 850,270 L 868,288" stroke="currentColor" strokeWidth="4" className="text-blue-700"/>
          <path d="M 1100,370 L 1100,280 L 1082,298 M 1100,280 L 1118,298" stroke="currentColor" strokeWidth="4" className="text-indigo-600"/>
          <path d="M 1330,370 L 1330,270 L 1312,288 M 1330,270 L 1348,288" stroke="currentColor" strokeWidth="4" className="text-blue-700"/>
          
          {/* Sparkle effects - scattered */}
          <path d="M 200,120 L 210,130 M 200,130 L 210,120" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
          <path d="M 450,90 L 460,100 M 450,100 L 460,90" stroke="currentColor" strokeWidth="2" className="text-indigo-400"/>
          <path d="M 750,70 L 760,80 M 750,80 L 760,70" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
          <path d="M 1000,100 L 1010,110 M 1000,110 L 1010,100" stroke="currentColor" strokeWidth="2" className="text-indigo-500"/>
          <path d="M 1250,80 L 1260,90 M 1250,90 L 1260,80" stroke="currentColor" strokeWidth="2" className="text-blue-400"/>
        </svg>
      </div>
    )
  },
]

function StatCard({ stat, index }: { stat: any, index: number }) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return
    
    const target = parseInt(stat.number)
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, stat.number])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-white via-blue-50/40 to-white rounded-3xl p-12 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 text-center overflow-hidden">
        
        {/* Animated gradient background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        {/* Number with animation */}
        <div className="relative z-10">
          <motion.div 
            className={`text-7xl md:text-8xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
          >
            {count}{stat.suffix}
          </motion.div>
          
          <motion.div 
            className="text-lg md:text-xl font-bold text-gray-700 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {stat.label}
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t ${stat.color} blur-2xl -z-10`} />
      </div>
    </motion.div>
  )
}

export default function About() {
  const [currentStep, setCurrentStep] = useState(0)

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: '50', suffix: '+', label: 'Projekata', color: 'from-blue-600 to-cyan-500' },
    { number: '100', suffix: '%', label: 'Satisfakcija', color: 'from-cyan-600 to-blue-500' },
    { number: '24', suffix: '/7', label: 'Podrška', color: 'from-purple-600 to-pink-500' },
  ]

  return (
    <section id="about" className="pt-20 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Process Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className={`relative bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 border-2 border-gray-200/50`}>
                    
                    {/* Background Pattern - Unique for each step */}
                    {processSteps[currentStep].bgPattern}
                    
                    {/* Gradient top border */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${processSteps[currentStep].gradient}`} />
                    
                    {/* Animated gradient border glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${processSteps[currentStep].gradient} opacity-10 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`} />
                    
                    {/* Content - ALL CENTERED */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`flex-shrink-0 w-28 h-28 bg-gradient-to-br ${processSteps[currentStep].gradient} rounded-3xl flex items-center justify-center text-6xl shadow-2xl border-4 border-white/30 backdrop-blur-sm`}
                      >
                        {processSteps[currentStep].icon}
                      </motion.div>
                      
                      <div className="flex-1 max-w-2xl">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight"
                        >
                          {processSteps[currentStep].title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed"
                        >
                          {processSteps[currentStep].desc}
                        </motion.p>
                      </div>
                    </div>

                    {/* Subtle animated gradient background */}
                    <motion.div 
                      animate={{ 
                        background: [
                          `linear-gradient(135deg, transparent 0%, transparent 100%)`,
                          `linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)`,
                          `linear-gradient(135deg, transparent 0%, transparent 100%)`
                        ]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className={`absolute inset-0 rounded-3xl pointer-events-none`} 
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {processSteps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentStep 
                      ? `w-12 h-3 bg-gradient-to-r ${step.gradient} shadow-lg` 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
