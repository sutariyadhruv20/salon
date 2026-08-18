import { useEffect, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
      className="back-to-top fixed bottom-6 right-5 md:right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary-container text-white shadow-lg shadow-primary-container/25 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-container/30 active:translate-y-0 active:scale-95 cursor-pointer"
    >
      <span className="material-symbols-outlined text-xl">arrow_upward</span>
    </button>
  )
}
