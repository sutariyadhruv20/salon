import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useParallax from '../hooks/useParallax'
import Hero3DObject from '../components/Hero3DObject'
import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'
import SectionDivider3D from '../components/SectionDivider3D'

/* ── Images ── */
const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC5EIkyKOpxE8ch564GVg6sUumpkT-REx00_CvA3kudOBG1n7zPJqSphU0B8QlI3MYYQ_P5JaYZjdRD7bbp94SAMvpSxm9OL0S4CdBj7n2Xa9zUc0ckZDveQ7MXdNWWwJgMihazfZp1XSE8ZZnDnAzrHYyatuyd7_8pQiJVKUxiuCs68YOmqDn8yRBxqrvRgxqXNz2k3vJvRIcAcwwjiXu7NE6VBJ_q2RLdKkG6XyHGHFBx4UJXg1nFZA'

const ABOUT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDcryoolqHvoHgHiFHNlG-qIjyHR0QToKFtGc6G97g_JxhcusovV7IweEarAntCFLviwZt6Y3fPu3knJLLod3mRKsQh-hfQWQWQ4nJRr_GYdZUjpvCefMR0ZHhdCSf76eYApxML5SplzF016itEKhmtnVRQzgWee8DhUZdciQI3Z9iX2Ke24RnEvlF_xLte7QNwjaUhb1n_vYT_7MKFRQphoT6zvh08w20N1qA0WC6Il4vt24hdKr89YA'

const SANCTUARY_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrfWAAmU7H97IBluQKzPmYx7JZ4xWu1AlZULNye_EwTe7IfIS_l4C-JCyHJNKqLHW29JIu2NF7566o3p4WWA0yNoajaoH-PriwzVeAkWBzWbmaJZOmQWR39BMlMdZtbojkfqy-IZtfOySEXQhGH3Ag72smySzeMReJbmxxVr4hG92ctXfnJjjiNfjlEI3n9s1InWj211A5uOTe0lQNL6Xrs-K3bn8vEJegzhGohmHdBJU7Ox8xhvoJZg'

const SKIN_RITUALS_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD8oyV2qkXFVgCKuz9v4WrUns2zqZDmoGwEMCBNRwP_eySCWrfwDixwRqsAT2FhUbx4uEc4z5y8wHjsa1P-l9FJkWszEWT0UY6mUo05OYE-aGQe8WhK4KIjjDx0Vittje6mSje-Jh0cqyscI-iTlHggfnE9PWg3Xf2GywsL6ky2Ldy5sjZhbQNavVxvZYg1X4t8-5RoDe3-a9X7zrlbuo-q_OkqxIBGeqQ0rV20moDSxAOfvuqkL6Ffeg'

const BRIDAL_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3lL1W-CpdFIWMoFe7s7JmTeeScz9BGGLUMI9lOtM1IesJqAHmJBl6gjG3oldfRTSn2p7-P7jJdufbsRrLUjSIrlJct27eSNc-EMbc_UEbM-9QwyU2E7R01l7wdMfB_JNtqs_24DYiQmAQjYwAnDOjYRwOESvYn8rXBLrZ6thZY4SRqExNg9_f7lfUg1BwT8HGx8U6gXbPrPnDXSHjQWGr8wbYkgmM0s2DEbUYsqxLQLcbvOqHiH1uCw'

const GALLERY_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCWm9EdwwBIu9mYVwvH5In3ui9vYJIU2WW_72yiPDbZ1vUqh--pvT_WLjBtNE9_HRSZbmHdAQyqdwfgR-dHNG0E7cvC0o2Bnaqw5-5Fo1I1sNdtFIGHPviEa6N98bY8n4gPKjzQwmPTtKf2lyo8gDV_iMUI6vhbk3Sn5_TzoUAR_anOiFE3RIlLPX0I-EWwvgvQMhSBBsf4CXQ0SICc1lnFVe-jBmGvwrTdHBmWwe6G20MDq2VIxP3vPQ'

const GALLERY_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD1u6JX4VQQG7En9wdog9KaIA7Bqna0eT2B8KyguRfVajHKSVPbDTyp4pGRNz_RxLrq7X4vVKo0bKIe94Rb6IlszSoVeXVJPF66eAMJ0LEF1LT99s48hk3te7nJa62uK7dLWBgktKTSm9_Se5p0vWwbgBqkUTpq2vFHNfLoP2nYCpn4vln9QE43sYjy-mLuKd8y0AMmIRZ-j4tOQqnP2gZ6QDYrBgQCkxUfQBu3rGXG18b3LS1Jf6L3Hw'

const GALLERY_3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCNgTuBuDHwb-sdDH35kfbRPjWOT4m5krpYd0FRG_68pIeMW_l_YoQUT00PAgFjofI5nvatnSN1YeLLftMJqyX79NXKdmi7kY2Yf4VsRIxw8TY9GfyWPRnl6fOHC8brKlCnTa29bfIZdb6K1T830kh2OJEhyEQOX3g3y8T4uIGtH9qJN1KioA9mDn5v48kNfrOdwjsOb4Qdu9qDL0ht7w06TM7ssrpxIZL7RJc2QGrhjgM_Bes7tAWVvw'

const TEAM_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBOHb_lm1nFX-cavfVgd4VCbkezzOfeCt7ggTfYcuWhVvWZvuU0QvuMRuCsuSCU_qY9ca6s8VJiy2Y0ZsLVik7MdVvSD3VH42njLPNDJbMVVudVLRFJC7k2jPGaAjoOz6j2SsxDlQIoHI2erSWDVeyOqBlDFmZiodRy8V6YXesaAqVgLHEGuy3y6UkcCY7IFQmu0ILOkpH8S26aOxU3HHBKfuf2pkMMQOjvxn49Zmd-kysEyYeJKusviw'

const TEAM_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAsB17hSh-MBI2EGYyyQ29OIOj1k6Q9iYXactXHKeUox6eKm-Pqd_qvmX30dOqXQdwO-dlWl8XKJRVlzfsvK75n0Rxk8OZcA80OuvxWqXFvmsn9RrLQLypWipcHWgvQxXkLXRcFJT83bl7KYfRk-NLK2obDhbiBtOV6LhVWCgNZNudMniUm8tvQUsi1fHwCxYeiGc0nyGXLrOEmVnAycCnbt7YyylaVJnFnZ2IdrsxYvSCFgO-Us1471g'

const CONTACT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD67Bh2vThWFSUArpnQIA7H1gt66LPorNU8R-cEW4ESMYBoDC9Co_rNgcyB-rE335XvEAL4kllM5Ai9edB5AQO_aFjyfE4MxSRLjr8s0-GFrf10Fu-BTvcf604cVU-IOQZWjS3iYzFNkE5OoiOL68n8ClWIaZgjR1lzcR04ovwz2SHhug0F0jqjLfDTsDbxBF2EF6r-hLz_lTC46e8_FDGo_ZIpwOxDTwOhiPnazve401JI6zA24lDn5A'

/* ── Data ── */
const stats = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 20, suffix: '+', label: 'Beauty Services' },
  { value: 2, suffix: '', label: 'Expert Stylists' },
]

const whyChooseUs = [
  {
    icon: 'auto_awesome',
    title: 'Experienced Stylists',
    desc: 'Our team brings years of professional training and an eye for modern trends to every appointment.',
  },
  {
    icon: 'spa',
    title: 'Premium Products',
    desc: 'We use only high-quality, skin-safe products from trusted brands to ensure the best results.',
  },
  {
    icon: 'person',
    title: 'Personalized Service',
    desc: 'Every treatment is tailored to your unique needs, preferences, and personal style.',
  },
  {
    icon: 'clean_hands',
    title: 'Hygienic & Comfortable',
    desc: 'A spotless, relaxing environment designed to make you feel safe and pampered throughout.',
  },
  {
    icon: 'psychology',
    title: 'Modern Techniques',
    desc: 'We stay current with the latest beauty innovations to deliver outstanding, lasting results.',
  },
  {
    icon: 'self_improvement',
    title: 'Relaxing Atmosphere',
    desc: 'Step into a calming space where every detail is designed for your comfort and peace of mind.',
  },
]

const services = [
  { icon: 'content_cut', name: 'Haircut & Styling', desc: 'Precision cuts and expert styling tailored to your face shape and lifestyle.' },
  { icon: 'palette', name: 'Hair Color', desc: 'From subtle highlights to bold transformations with premium color products.' },
  { icon: 'spa', name: 'Hair Spa', desc: 'Deep conditioning treatments that restore shine, strength, and vitality.' },
  { icon: 'face', name: 'Facial', desc: 'Customized facials using Ayurvedic and modern techniques for radiant skin.' },
  { icon: 'auto_awesome', name: 'Makeup', desc: 'Flawless looks for everyday elegance or special occasions.' },
  { icon: 'back_hand', name: 'Manicure', desc: 'Nail care and artistry that completes your polished look.' },
  { icon: 'front_hand', name: 'Pedicure', desc: 'Relaxing foot care treatments for smooth, healthy feet.' },
  { icon: 'diamond', name: 'Bridal Services', desc: 'Comprehensive bridal beauty packages for your most special day.' },
]

const testimonials = [
  {
    name: 'Replace with real name',
    rating: 5,
    text: 'Replace this with an actual customer review. Share a genuine experience about the salon service, atmosphere, or results.',
  },
  {
    name: 'Replace with real name',
    rating: 5,
    text: 'Replace this with a real testimonial from a satisfied client. Talk about what made their visit special and memorable.',
  },
  {
    name: 'Replace with real name',
    rating: 5,
    text: 'Replace with an authentic review. Mention specific services, the staff, or the overall experience at the salon.',
  },
]

const faqItems = [
  {
    q: 'Do I need to book an appointment?',
    a: 'We recommend booking an appointment to ensure availability. Walk-ins are welcome but subject to stylist availability.',
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can book by calling us, visiting our contact page, or sending us a message on social media. We will confirm your slot promptly.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer a range of services including haircuts, hair color, hair spa, facials, makeup, manicure, pedicure, and bridal packages.',
  },
  {
    q: 'Do you provide bridal makeup?',
    a: 'Yes, we offer comprehensive bridal beauty packages including makeup, hair styling, and skin prep for the bride and entourage.',
  },
  {
    q: 'What products do you use?',
    a: 'We use premium, trusted products from leading brands, selected for their quality and suitability for Indian skin and hair.',
  },
  {
    q: 'Do you offer services for men and women?',
    a: 'Yes, our salon provides professional beauty services for both men and women.',
  },
]

/* ── Animated Counter Hook ── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

/* ── FAQ Item ── */
function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-outline-variant/30">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="font-body-lg text-on-surface group-hover:text-primary transition-colors duration-300 pr-4">
          {item.q}
        </span>
        <span
          className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? 1 : 0,
          transitionTimingFunction: 'var(--ease-premium)',
        }}
      >
        <p className="font-body-md text-on-surface-variant pb-5 leading-relaxed">{item.a}</p>
      </div>
    </div>
  )
}

/* ── Main Component ── */
export default function Home() {
  const navigate = useNavigate()
  const parallaxY = useParallax(0.06)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = useCallback((index) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }, [])

  return (
    <main className="relative overflow-hidden">
      {/* ════════════════════════════════════════════════════
          1. HERO
          ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] hero-gradient overflow-hidden flex items-end sm:items-center pt-[var(--nav-height)]">
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

        {/* 3D Hero Object */}
        <Hero3DObject />

        <div className="section-shell grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-gutter relative z-10 pb-8 sm:pb-12 lg:pb-0">
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-end sm:justify-center py-4 sm:py-8 lg:py-0 lg:pl-8 xl:pl-16 z-20">
            <h1 className="font-display-lg heading-display text-on-surface mb-4 sm:mb-6 lg:mb-8 hero-enter-title text-center lg:text-left">
              Glow & Grace Studio
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-6 sm:mb-8 lg:mb-12 max-w-xl text-center lg:text-left mx-auto lg:mx-0 hero-enter-desc leading-relaxed">
              Personalised beauty rituals rooted in Indian tradition and modern wellness.
              Your comfort and privacy are at the heart of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start hero-enter-cta">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="btn-primary-3d btn-mobile group"
              >
                Book online
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/services')}
                className="btn-outline btn-mobile group"
              >
                View Services
                <span className="material-symbols-outlined text-sm">spa</span>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 relative h-[50vh] sm:h-[55vh] lg:h-auto lg:min-h-[720px] flex items-end lg:items-center justify-center lg:justify-start overflow-hidden">
            <img
              className="hero-enter-image object-cover object-top w-full h-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-[115%] lg:max-w-none mix-blend-multiply"
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
        </div>

        <SectionDivider3D variant="ring" className="hidden sm:flex" />
      </section>

      {/* ════════════════════════════════════════════════════
          2. TRUST / STATISTICS
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="section-shell">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="dot" />

      {/* ════════════════════════════════════════════════════
          3. ABOUT THE SALON
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <ScrollReveal className="md:col-span-6" direction="left">
            <div className="image-reveal rounded-lg overflow-hidden h-[360px] sm:h-[440px] md:h-[560px]">
              <img
                className="w-full h-full object-cover"
                src={ABOUT_IMAGE}
                alt="Inside Glow and Grace Studio"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-5 md:col-start-8" delay={120} direction="right">
            <span className="inline-block px-4 py-1 rounded-full bg-surface-container-highest/50 backdrop-blur-md text-label-sm text-on-surface-variant mb-6 border border-outline-variant/30 uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-6">
              Where Beauty Meets
              <br />
              <span className="text-primary-container italic font-light">Confidence</span>
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-6 max-w-lg leading-relaxed">
              Glow and Grace Studio was founded on a singular belief: true beauty is luminous,
              organic, and deeply personal. Inspired by centuries of Indian wellness traditions,
              we blend time-honoured rituals with modern techniques to create an experience
              that is uniquely yours.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8 max-w-lg leading-relaxed">
              From the moment you step through our doors, every detail is designed for your
              comfort and confidence. Our skilled stylists take the time to understand your
              vision and deliver results that speak for themselves.
            </p>
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="btn-outline btn-mobile group"
            >
              Discover Our Story
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="ring" className="hidden sm:flex" />

      {/* ════════════════════════════════════════════════════
          4. WHY CHOOSE US
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              Why Us
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              The Glow & Grace Difference
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Every visit is an experience crafted with care, expertise, and attention to detail.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <TiltCard className="glass-panel p-6 sm:p-8 rounded-xl h-full card-glow">
                  <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md heading-md text-on-surface mb-3">{item.title}</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider3D variant="dot" />

      {/* ════════════════════════════════════════════════════
          5. SERVICES PREVIEW
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              Our Services
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              Curated Beauty Offerings
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From precision hairstyling to luxurious skin treatments, discover the services
              that will make you feel your absolute best.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {services.map((service, index) => (
              <ScrollReveal key={service.name} delay={index * 70}>
                <TiltCard className="glass-panel rounded-xl p-6 h-full card-glow group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center mb-5 group-hover:bg-primary-container/20 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12" delay={200}>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="btn-primary btn-mobile group"
            >
              View All Services
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="ring" className="hidden sm:flex" />

      {/* ════════════════════════════════════════════════════
          6. FEATURED PACKAGE
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${BRIDAL_1}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-surface/40" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 md:p-16 items-center min-h-[400px]">
                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-primary-container/10 text-label-sm text-primary-container mb-4 uppercase tracking-widest border border-primary-container/20">
                    Featured Package
                  </span>
                  <h2 className="font-display-lg heading-display text-on-surface mb-4">
                    Treat Yourself to
                    <br />
                    <span className="text-primary-container italic font-light">Something Special</span>
                  </h2>
                  <p className="font-body-lg text-on-surface-variant mb-8 max-w-md leading-relaxed">
                    Our curated packages combine multiple treatments for a complete beauty
                    experience. Perfect for self-care days, celebrations, or bridal preparations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <button
                      type="button"
                      onClick={() => navigate('/contact')}
                      className="btn-primary-3d btn-mobile group"
                    >
                      Book This Package
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/services')}
                      className="btn-outline btn-mobile group"
                    >
                      View Packages
                      <span className="material-symbols-outlined text-sm">spa</span>
                    </button>
                  </div>
                </div>

                <div className="hidden md:flex justify-end">
                  <TiltCard className="glass-panel rounded-xl p-6 max-w-sm w-full">
                    <h3 className="font-headline-md heading-md text-on-surface mb-4">
                      The Ethereal Dulhan
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                      A comprehensive bridal styling journey focusing on a soft,
                      lit-from-within glow. Includes consultation, makeup, hair styling,
                      and skin preparation.
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-outline-variant/30">
                      <span className="font-body-md text-label-sm uppercase tracking-widest text-on-surface-variant">
                        From
                      </span>
                      <span className="font-body-lg text-primary">{'\u20B9'}35,000</span>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="dot" />

      {/* ════════════════════════════════════════════════════
          7. SALON EXPERIENCE
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <ScrollReveal className="md:col-span-5 md:col-start-2" direction="left">
            <span className="inline-block px-4 py-1 rounded-full bg-surface-container-highest/50 backdrop-blur-md text-label-sm text-on-surface-variant mb-6 border border-outline-variant/30 uppercase tracking-widest">
              The Experience
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-6">
              More Than a
              <br />
              <span className="text-primary-container italic font-light">Salon Visit</span>
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-lg leading-relaxed">
              Every visit to Glow & Grace is designed to be a retreat from the everyday.
              From the warm welcome to the final result, we focus on creating moments
              of genuine relaxation and confidence.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'self_improvement', text: 'Relaxing, private environment' },
                { icon: 'person', text: 'Personal attention and consultation' },
                { icon: 'auto_awesome', text: 'Premium products and modern techniques' },
                { icon: 'diamond', text: 'Meticulous attention to every detail' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-body-md text-on-surface">{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6 relative" delay={120} direction="right">
            <TiltCard className="glass-panel p-4 rounded-lg relative z-10">
              <div
                className="aspect-[4/5] bg-cover bg-center rounded overflow-hidden"
                style={{ backgroundImage: `url('${SANCTUARY_IMAGE}')` }}
              />
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="ring" className="hidden sm:flex" />

      {/* ════════════════════════════════════════════════════
          8. OUR WORK / GALLERY
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              Our Work Speaks
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              A curated selection of our finest transformations and editorial work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { img: GALLERY_1, title: 'Ethereal Silk', cat: 'Bridal Couture' },
              { img: GALLERY_2, title: 'Midnight Glow', cat: 'Editorial' },
              { img: GALLERY_3, title: 'Sculpted Elegance', cat: 'Avant-Garde' },
              { img: SANCTUARY_IMAGE, title: 'The Sanctuary', cat: 'Studio' },
              { img: TEAM_1, title: 'Creative Vision', cat: 'Hair' },
              { img: TEAM_2, title: 'Color Story', cat: 'Hair Color' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 70} direction="scale">
                <div className="gallery-item group relative rounded-lg overflow-hidden aspect-[3/4]">
                  <img
                    className="w-full h-full object-cover"
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 glass-overlay-reveal flex flex-col justify-end p-5">
                    <span className="font-body-md text-label-sm tracking-widest uppercase text-primary-fixed-dim mb-1">
                      {item.cat}
                    </span>
                    <h3 className="font-display-lg text-white" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)', lineHeight: '1.3' }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12" delay={200}>
            <button
              type="button"
              onClick={() => navigate('/gallery')}
              className="btn-outline btn-mobile group"
            >
              View Our Gallery
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="dot" />

      {/* ════════════════════════════════════════════════════
          9. MEET OUR EXPERTS
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              The Artisans
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              Meet Our Experts
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Skilled professionals dedicated to bringing out your best.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {[
              {
                name: 'Priya Sharma',
                role: 'Creative Director',
                desc: 'Over a decade of experience in high-fashion editorial styling. Priya brings an artistic eye and precision to every transformation.',
                img: TEAM_1,
              },
              {
                name: 'Anjali Desai',
                role: 'Master Colorist',
                desc: 'Renowned for an intuitive understanding of color theory and hair texture. Anjali creates custom color journeys that complement each client.',
                img: TEAM_2,
              },
            ].map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="glass-panel rounded-xl overflow-hidden group">
                  <div className="h-72 sm:h-80 overflow-hidden">
                    <img
                      className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container block mb-2">
                      {member.role}
                    </span>
                    <h3 className="font-display-lg heading-md text-on-surface mb-3">{member.name}</h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">{member.desc}</p>
                    <button
                      type="button"
                      onClick={() => navigate('/team')}
                      className="inline-flex items-center space-x-2 text-primary hover:opacity-70 transition-opacity uppercase tracking-widest text-label-sm cursor-pointer group/btn"
                    >
                      <span>View Profile</span>
                      <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider3D variant="ring" className="hidden sm:flex" />

      {/* ════════════════════════════════════════════════════
          10. CUSTOMER TESTIMONIALS
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              What Our Clients Say
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Real experiences from people who trust us with their beauty.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {testimonials.map((review, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <TiltCard className="glass-panel p-6 sm:p-8 rounded-xl h-full card-glow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-primary-container text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-outline-variant/30">
                    <span className="font-body-md text-on-surface font-medium">{review.name}</span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider3D variant="dot" />

      {/* ════════════════════════════════════════════════════
          11. BEFORE & AFTER
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              Transformations
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              See the Difference
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Real results that showcase our commitment to excellence.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              { before: GALLERY_1, after: GALLERY_2, label: 'Hair Transformation' },
              { before: SANCTUARY_IMAGE, after: SKIN_RITUALS_IMAGE, label: 'Skin Revival' },
              { before: TEAM_1, after: TEAM_2, label: 'Color Refresh' },
            ].map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 100}>
                <div className="glass-panel rounded-xl overflow-hidden group">
                  <div className="grid grid-cols-2 h-64 sm:h-72">
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={item.before}
                        alt={`${item.label} - Before`}
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-surface/80 backdrop-blur-sm text-label-sm text-on-surface uppercase tracking-widest rounded">
                        Before
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={item.after}
                        alt={`${item.label} - After`}
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-primary-container/80 backdrop-blur-sm text-label-sm text-white uppercase tracking-widest rounded">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-headline-md text-on-surface text-center">{item.label}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider3D variant="ring" className="hidden sm:flex" />

      {/* ════════════════════════════════════════════════════
          12. INSTAGRAM / SOCIAL SHOWCASE
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              @glowandgrace
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              Follow Our Journey
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Stay inspired with our latest work, behind-the-scenes moments, and beauty tips.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {[GALLERY_1, GALLERY_2, GALLERY_3, SANCTUARY_IMAGE, SKIN_RITUALS_IMAGE, BRIDAL_1].map(
              (img, index) => (
                <ScrollReveal key={index} delay={index * 50} direction="scale">
                  <div className="gallery-item group relative aspect-square rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt="Instagram post"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary-container/0 group-hover:bg-primary-container/20 transition-colors duration-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[28px]">
                        add
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            )}
          </div>

          <ScrollReveal className="text-center mt-10" delay={200}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-mobile group"
            >
              Follow on Instagram
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="dot" />

      {/* ════════════════════════════════════════════════════
          13. FAQ
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <ScrollReveal className="md:col-span-5 md:col-start-1 mb-8 md:mb-0">
            <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              FAQ
            </span>
            <h2 className="font-display-lg heading-display text-on-surface mb-4">
              Frequently Asked
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-md">
              Quick answers to common questions about our services and bookings.
            </p>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6 md:col-start-7" delay={80}>
            <div className="glass-panel rounded-xl p-6 sm:p-8">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={index}
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider3D variant="ring" className="hidden sm:flex" />

      {/* ════════════════════════════════════════════════════
          14. FINAL BOOKING CTA
          ════════════════════════════════════════════════════ */}
      <section className="py-section-padding">
        <div className="section-shell">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[480px] flex items-center">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${CONTACT_IMAGE}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/85 to-surface/60" />

              {/* Subtle animated gradient overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.05) 0%, transparent 50%, rgba(212,160,23,0.08) 100%)',
                }}
              />

              <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center w-full">
                <h2 className="font-display-lg heading-display text-on-surface mb-4">
                  Ready for Your Next Look?
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
                  Book your appointment and let our professionals create a look you&rsquo;ll love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="btn-primary-3d btn-mobile group"
                  >
                    Book Appointment
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="btn-outline btn-mobile group"
                  >
                    Contact Us
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

/* ── Stat Counter Item ── */
function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.value)

  return (
    <div ref={ref} className="text-center">
      <div className="font-display-lg text-primary-container mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1' }}>
        {count}{stat.suffix}
      </div>
      <span className="font-body-md text-label-sm uppercase tracking-widest text-on-surface-variant">
        {stat.label}
      </span>
    </div>
  )
}
