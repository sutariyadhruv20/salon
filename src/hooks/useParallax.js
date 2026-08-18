import { useEffect, useState } from 'react'
import useReducedMotion from './useReducedMotion'

export default function useParallax(speed = 0.15, disabledBelow = 1024) {
  const reduced = useReducedMotion()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (reduced) return undefined

    const update = () => {
      if (window.innerWidth < disabledBelow) {
        setOffset(0)
        return
      }
      setOffset(window.scrollY * speed)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [speed, disabledBelow, reduced])

  return reduced ? 0 : offset
}
