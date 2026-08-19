import { useEffect, useRef, useState } from 'react'
import useReducedMotion from './useReducedMotion'

export default function useMousePosition() {
  const reduced = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (reduced || window.innerWidth < 1024) return undefined

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.08)
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.08)
      setPosition({ x: currentRef.current.x, y: currentRef.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }

    const handleMove = (e) => {
      targetRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      targetRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  return reduced ? { x: 0, y: 0 } : position
}
