import { useEffect, useRef, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  threshold = 0.1,
  direction = 'up',
  once = true,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return undefined
    }

    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced, threshold, once])

  const dataAttrs = direction !== 'up' ? { 'data-direction': direction } : undefined

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...dataAttrs}
    >
      {children}
    </Tag>
  )
}
