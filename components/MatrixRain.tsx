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
    // Responsive font size - BIGGER for better visibility
    const fontSize = window.innerWidth < 640 ? 16 : 20
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    function draw() {
      if (!ctx || !canvas) return

      // Create fade effect - balanced
      ctx.fillStyle = 'rgba(250, 248, 245, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `bold ${fontSize}px monospace`
      ctx.shadowBlur = 4
      ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = code.charAt(Math.floor(Math.random() * code.length))
        
        // Reduced colors - 15% weaker
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize, 0, (drops[i] + 1) * fontSize)
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.35)')
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.55)')
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0.65)')
        
        ctx.fillStyle = gradient
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop to top after it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 42) // Slower: 35ms -> 42ms (~20% slower)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Update columns on resize
      const newFontSize = window.innerWidth < 640 ? 16 : 20
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
      className="absolute inset-0"
      style={{ 
        transform: 'perspective(800px) rotateX(5deg)',
        pointerEvents: 'none',
        filter: 'brightness(1.0) contrast(1.2) saturate(1.0)',
        opacity: 0.5
      }}
    />
  )
}

