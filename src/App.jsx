import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Legal from './pages/Legal'
import useReducedMotion from './hooks/useReducedMotion'

function AnimatedRoutes() {
  const location = useLocation()
  const reduced = useReducedMotion()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('enter')

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return

    if (reduced) {
      setDisplayLocation(location)
      window.scrollTo(0, 0)
      return
    }

    setTransitionStage('exit')
  }, [location, displayLocation.pathname, reduced])

  useEffect(() => {
    if (transitionStage !== 'exit') return undefined

    const timer = window.setTimeout(() => {
      setDisplayLocation(location)
      setTransitionStage('enter')
      window.scrollTo(0, 0)
    }, 320)

    return () => window.clearTimeout(timer)
  }, [transitionStage, location])

  return (
    <div
      className={`page-shell page-transition ${transitionStage === 'exit' ? 'page-exit' : 'page-enter'}`}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-shell min-h-[100dvh] flex flex-col">
        <Nav />
        <AnimatedRoutes />
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
