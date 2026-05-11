'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  colorIndex: number
}

interface ParticleFieldProps {
  className?: string
}

const COLORS = [
  'rgba(0,180,216,0.3)',
  'rgba(57,255,20,0.18)',
  'rgba(200,210,230,0.2)',
]

export default function ParticleField({ className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    let animationId: number
    let particles: Particle[] = []

    const buildParticles = (w: number, h: number) => {
      particles = Array.from({ length: 120 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1 + Math.random() * 0.8,
        colorIndex: Math.floor(Math.random() * 3),
      }))
    }

    const resize = () => {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      buildParticles(canvas.width, canvas.height)
    }

    resize()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        else if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        else if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = COLORS[p.colorIndex]
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const observer = new ResizeObserver(resize)
    observer.observe(parent)

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      />
    </div>
  )
}
