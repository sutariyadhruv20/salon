import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/team', label: 'Team' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen || !menuRef.current) return undefined
    const focusable = menuRef.current.querySelectorAll('a, button')
    if (focusable.length) focusable[0].focus()
  }, [menuOpen])

  const linkClass = (path) =>
    `nav-link ${
      location.pathname === path
        ? 'is-active text-primary font-bold'
        : 'text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary'
    }`

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`nav-enter fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/92 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm shadow-black/5'
            : 'bg-surface/65 backdrop-blur-xl'
        }`}
        style={{ height: scrolled ? 'var(--nav-height-scrolled)' : 'var(--nav-height)' }}
      >
        <div className="flex justify-between items-center max-w-container-max mx-auto px-5 md:px-20 h-full gap-4">
          <Link to="/" className="flex items-center gap-2.5 group min-w-0 shrink logo-3d">
            <span className="material-symbols-outlined text-primary text-2xl md:text-3xl group-hover:rotate-[360deg] transition-transform duration-700 shrink-0 logo-3d-icon">
              spa
            </span>
            <span className="font-display-lg text-base sm:text-headline-md italic text-primary truncate logo-3d-text">
              Glow & Grace Studio
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map(({ path, label }) => (
              <Link key={path} to={path} className={linkClass(path)}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <Link to="/contact" className="btn-primary-3d text-sm px-6 py-3">
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-primary p-2 cursor-pointer shrink-0"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-backdrop fixed inset-0 z-[60] bg-black/40 lg:hidden ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <div
        ref={menuRef}
        className={`mobile-menu-panel fixed top-0 right-0 z-[70] h-dvh w-[min(100vw,320px)] bg-surface border-l border-outline-variant/30 shadow-2xl lg:hidden flex flex-col ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-outline-variant/20">
          <span className="font-display-lg text-headline-md italic text-primary">Menu</span>
          <button
            type="button"
            className="text-primary p-2 cursor-pointer"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-6 px-5 py-8 overflow-y-auto">
          {NAV_LINKS.map(({ path, label }, i) => (
            <Link
              key={path}
              to={path}
              className={`${linkClass(path)} text-base py-1`}
              onClick={() => setMenuOpen(false)}
              style={menuOpen ? { transitionDelay: `${i * 50 + 100}ms` } : undefined}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary-3d w-full mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  )
}
