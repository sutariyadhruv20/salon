import { useNavigate } from 'react-router-dom'
import useParallax from '../hooks/useParallax'
import Hero3DObject from '../components/Hero3DObject'
import SectionDivider3D from '../components/SectionDivider3D'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC5EIkyKOpxE8ch564GVg6sUumpkT-REx00_CvA3kudOBG1n7zPJqSphU0B8QlI3MYYQ_P5JaYZjdRD7bbp94SAMvpSxm9OL0S4CdBj7n2Xa9zUc0ckZDveQ7MXdNWWwJgMihazfZp1XSE8ZZnDnAzrHYyatuyd7_8pQiJVKUxiuCs68YOmqDn8yRBxqrvRgxqXNz2k3vJvRIcAcwwjiXu7NE6VBJ_q2RLdKkG6XyHGHFBx4UJXg1nFZA'

export default function Home() {
  const navigate = useNavigate()
  const parallaxY = useParallax(0.06)

  return (
    <main className="relative min-h-[100dvh] hero-gradient overflow-hidden flex items-center pt-[var(--nav-height)]">
      {/* Background depth layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hero-enter-bg">
        <div
          className="absolute top-1/4 -right-1/4 w-[min(800px,90vw)] h-[min(800px,90vw)] bg-primary-fixed-dim/10 rounded-full blur-[120px] floating-orb"
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-outline-variant/15 rounded-full blur-[100px] floating-orb-alt"
          style={{ transform: `translateY(${-parallaxY * 0.35}px)` }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[min(400px,60vw)] h-[min(400px,60vw)] bg-primary/5 rounded-full blur-[80px] floating-orb"
          style={{ transform: `translateY(${parallaxY * 0.2}px)` }}
        />
      </div>

      {/* 3D Hero Object - Middle depth layer */}
      <Hero3DObject />

      <div className="section-shell grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-gutter relative z-10 pb-12 lg:pb-0">
        <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[720px] flex items-end lg:items-center justify-center lg:justify-start overflow-hidden">
          <img
            className="hero-enter-image object-cover object-top w-full h-full max-h-[720px] lg:absolute lg:inset-y-0 lg:left-0 lg:w-[115%] lg:max-w-none mix-blend-multiply"
            style={{ transform: `translateY(${parallaxY * 0.2}px)` }}
            src={HERO_IMAGE}
            alt="Glow and Grace Studio Hero"
          />
          <div className="hero-enter-deco absolute bottom-6 left-0 hidden lg:flex flex-row gap-6 font-display-lg text-label-sm uppercase tracking-widest text-on-surface-variant z-20">
            <span className="cursor-pointer hover:text-primary transition-colors duration-300">Tw</span>
            <span className="cursor-pointer hover:text-primary transition-colors duration-300">Ig</span>
            <span className="cursor-pointer hover:text-primary transition-colors duration-300">Fb</span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center py-8 lg:py-0 lg:pl-8 xl:pl-16 z-20">
          <h1 className="font-display-lg heading-display text-on-surface mb-6 lg:mb-8 hero-enter-title text-center lg:text-left">
            Glow & Grace Studio
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-8 lg:mb-12 max-w-xl text-center lg:text-left mx-auto lg:mx-0 hero-enter-desc leading-relaxed">
            Personalised beauty rituals rooted in Indian tradition and modern wellness.
            Your comfort and privacy are at the heart of everything we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start hero-enter-cta">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="btn-primary-3d group"
            >
              Book online
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="btn-outline group"
            >
              View Services
              <span className="material-symbols-outlined text-sm">spa</span>
            </button>
          </div>
        </div>
      </div>

      <SectionDivider3D variant="ring" />
    </main>
  )
}
