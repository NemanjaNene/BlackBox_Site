'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Code characters to display
    const code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()=/\\|@#$%^&*';
    // Responsive font size - smaller on mobile
    const fontSize = window.innerWidth < 640 ? 12 : 16
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    function draw() {
      if (!ctx || !canvas) return

      // Create fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = code.charAt(Math.floor(Math.random() * code.length))
        
        // Color gradient - blue shades (brighter)
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize, 0, (drops[i] + 1) * fontSize)
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)')
        gradient.addColorStop(0.5, 'rgba(96, 165, 250, 1)')
        gradient.addColorStop(1, 'rgba(147, 197, 253, 1)')
        
        ctx.fillStyle = gradient
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop to top after it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Update columns on resize
      const newFontSize = window.innerWidth < 640 ? 12 : 16
      const newColumns = canvas.width / newFontSize
      drops.length = newColumns
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.random() * -100
        }
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-80"
      style={{ 
        transform: 'perspective(800px) rotateX(5deg)',
        pointerEvents: 'none',
        filter: 'brightness(1.2)'
      }}
    />
  )
}

