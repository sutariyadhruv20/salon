import { useRef, useCallback } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

const MAX_ROTATE = 5

export default function TiltCard({ children, className = '', disabled = false }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const rafRef = useRef(null)

  const handleMove = useCallback(
    (event) => {
      if (reduced || disabled || window.innerWidth < 1024) return
      const el = ref.current
      if (!el) return

      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5

        const rotX = -y * MAX_ROTATE
        const rotY = x * MAX_ROTATE
        const shadowX = x * 8
        const shadowY = y * 8

        el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px) scale(1.015)`
        el.style.boxShadow = `${shadowX}px ${shadowY}px 32px rgba(28, 27, 27, 0.08), ${shadowX * 0.5}px ${shadowY * 0.5}px 12px rgba(28, 27, 27, 0.04)`
      })
    },
    [reduced, disabled],
  )

  const handleLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.boxShadow = ''
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
