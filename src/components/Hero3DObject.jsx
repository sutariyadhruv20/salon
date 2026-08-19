import { useRef, useEffect, useState } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import useReducedMotion from '../hooks/useReducedMotion'
import useParallax from '../hooks/useParallax'

export default function Hero3DObject() {
  const ref = useRef(null)
  const mouse = useMousePosition()
  const reduced = useReducedMotion()
  const parallaxY = useParallax(0.04)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (reduced) return undefined

    const handleScroll = () => {
      const vh = window.innerHeight
      const progress = Math.min(window.scrollY / (vh * 0.6), 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [reduced])

  const rotX = reduced ? 0 : mouse.y * -4
  const rotY = reduced ? 0 : mouse.x * 6
  const fadeOut = reduced ? 1 : 1 - scrollProgress * 0.8
  const scrollTranslateY = reduced ? 0 : -scrollProgress * 60

  return (
    <div
      ref={ref}
      className="hero-3d-object absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 z-10 pointer-events-none lg:block hidden"
      style={{
        opacity: fadeOut,
        transform: `translateY(calc(-50% + ${scrollTranslateY}px + ${parallaxY * 0.3}px))`,
        transition: reduced ? 'none' : 'opacity 0.3s ease-out',
      }}
    >
      <div
        style={{
          transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(20px)`,
          transition: reduced ? 'none' : 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer glow */}
        <div className="absolute -inset-8 bg-primary-container/8 rounded-full blur-[60px]" />

        {/* Glass perfume bottle - CSS 3D */}
        <div className="hero-perfume relative w-48 h-72 xl:w-56 xl:h-80">
          {/* Ambient light reflection */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl" />

          {/* Bottle cap - metallic gold */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-8 rounded-t-lg"
            style={{
              background: 'linear-gradient(180deg, #f6d365 0%, #d4a017 40%, #b8860b 100%)',
              boxShadow: '0 2px 8px rgba(212, 160, 23, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          />

          {/* Cap ring */}
          <div
            className="absolute top-7 left-1/2 -translate-x-1/2 w-14 h-3 rounded-sm"
            style={{
              background: 'linear-gradient(180deg, #d4a017 0%, #b8860b 100%)',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.15)',
            }}
          />

          {/* Bottle body - glass */}
          <div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-56 xl:w-36 xl:h-64 rounded-b-3xl rounded-t-sm overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,248,235,0.4) 30%, rgba(246,211,101,0.15) 70%, rgba(212,160,23,0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 20px 60px rgba(121, 89, 0, 0.12), 0 8px 24px rgba(212, 160, 23, 0.08), inset 0 0 40px rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Liquid fill */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[65%] rounded-b-3xl"
              style={{
                background: 'linear-gradient(180deg, rgba(246,190,57,0.25) 0%, rgba(212,160,23,0.35) 50%, rgba(184,134,11,0.4) 100%)',
              }}
            />

            {/* Glass highlight - left */}
            <div
              className="absolute top-4 left-3 w-[2px] h-[60%] rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
              }}
            />

            {/* Glass highlight - right edge */}
            <div
              className="absolute top-6 right-4 w-[1px] h-[40%] rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
              }}
            />

            {/* Label area */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-center w-[70%]">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
              <span className="font-display-lg text-[10px] uppercase tracking-[0.2em] text-primary/40 block">
                Glow & Grace
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-3" />
            </div>
          </div>

          {/* Bottom shadow */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full blur-lg"
            style={{
              background: 'radial-gradient(ellipse, rgba(121, 89, 0, 0.12) 0%, transparent 70%)',
            }}
          />

          {/* Floating ring decoration */}
          <div
            className="absolute -right-6 top-1/3 w-12 h-12 rounded-full border border-primary-container/20"
            style={{
              animation: 'floatRing 6s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(212, 160, 23, 0.06)',
            }}
          />

          {/* Small floating dot */}
          <div
            className="absolute -left-4 top-1/2 w-2 h-2 rounded-full bg-primary-container/15"
            style={{
              animation: 'floatDot 5s ease-in-out infinite 1s',
            }}
          />
        </div>
      </div>
    </div>
  )
}
