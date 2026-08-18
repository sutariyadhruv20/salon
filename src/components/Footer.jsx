import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-section-padding bg-background border-t border-outline-variant/20 overflow-x-clip">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-5 md:px-20 gap-8">
        <div className="font-display-lg heading-md text-on-surface italic text-center md:text-left">
          Glow & Grace Studio
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-body-md text-label-sm uppercase tracking-widest">
          <Link
            to="/legal"
            className="nav-link text-on-secondary-container hover:text-primary transition-colors cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            to="/legal"
            className="nav-link text-on-secondary-container hover:text-primary transition-colors cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            to="/careers"
            className="nav-link text-on-secondary-container hover:text-primary transition-colors cursor-pointer"
          >
            Careers
          </Link>
          <a
            href="#"
            className="nav-link text-on-secondary-container hover:text-primary transition-colors cursor-pointer"
          >
            Instagram
          </a>
        </div>
        <div className="text-sm text-on-surface-variant opacity-60 text-center md:text-right">
          &copy; {new Date().getFullYear()} Glow & Grace Studio. All rights reserved.
        </div>
      </ScrollReveal>
    </footer>
  )
}
