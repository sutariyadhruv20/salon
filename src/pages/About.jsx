import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'

const ABOUT_HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDcryoolqHvoHgHiFHNlG-qIjyHR0QToKFtGc6G97g_JxhcusovV7IweEarAntCFLviwZt6Y3fPu3knJLLod3mRKsQh-hfQWQWQ4nJRr_GYdZUjpvCefMR0ZHhdCSf76eYApxML5SplzF016itEKhmtnVRQzgWee8DhUZdciQI3Z9iX2Ke24RnEvlF_xLte7QNwjaUhb1n_vYT_7MKFRQphoT6zvh08w20N1qA0WC6Il4vt24hdKr89YA'

const SANCTUARY_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrfWAAmU7H97IBluQKzPmYx7JZ4xWu1AlZULNye_EwTe7IfIS_l4C-JCyHJNKqLHW29JIu2NF7566o3p4WWA0yNoajaoH-PriwzVeAkWBzWbmaJZOmQWR39BMlMdZtbojkfqy-IZtfOySEXQhGH3Ag72smySzeMReJbmxxVr4hG92ctXfnJjjiNfjlEI3n9s1InWj211A5uOTe0lQNL6Xrs-K3bn8vEJegzhGohmHdBJU7Ox8xhvoJZg'

const SIDE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAXc4e3Fmv_ka5ySBj8Htv_yd96NvG3wlKmdxVHg4kLUd99tKSKgvTKpeGXOgnZyUGQRc-lqvP7oO4reUOQa04dU_dnOXEPUAAIfaSSguJ8XLOD0UOafwLvuCbeo5EabIrSJLJzCzQchp20mr1G-qdKi6RqWX6IuuVnm4PRhe90M_Q_KRq42ZzuGlng00Q64IOD969E4s7dU-BLRNSfYmHsOu7W193CVaFv7Vz23hYtbyGh93o-aS8JeQ'

export default function About() {
  return (
    <main className="pt-32 md:pt-40 pb-section-padding overflow-x-clip">
      <section className="section-shell grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <ScrollReveal className="md:col-span-5 md:col-start-2">
          <span className="inline-block px-4 py-1 rounded-full bg-surface-container-highest/50 backdrop-blur-md text-label-sm text-on-surface-variant mb-6 border border-outline-variant/30 uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="font-display-lg heading-display text-on-surface mb-6 leading-tight">
            Radiance
            <br />
            <span className="text-primary-container italic font-light">from Within</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-8 max-w-md">
            Glow and Grace Studio was founded on a singular belief: true beauty is luminous,
            organic, and deeply personal. Inspired by centuries of Indian wellness traditions.
          </p>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-6 relative" delay={120} direction="right">
          <TiltCard className="glass-panel p-4 rounded-lg relative z-10">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded overflow-hidden"
              style={{ backgroundImage: `url('${ABOUT_HERO_IMAGE}')` }}
            />
          </TiltCard>
        </ScrollReveal>
      </section>

      <ScrollReveal as="section" className="py-section-padding section-shell" delay={80}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <ScrollReveal className="md:col-span-8" direction="left">
            <div className="glass-panel rounded-lg overflow-hidden group min-h-[320px] sm:min-h-[400px] relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${SANCTUARY_IMAGE}')` }}
              />
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 bg-gradient-to-t from-surface/90 to-transparent">
                <h3 className="font-headline-md heading-md text-on-surface mb-2">A Sanctuary Created</h3>
                <p className="font-body-md text-on-surface-variant">
                  Founded in 2018 in the heart of New Delhi, designed to be an escape from the noise.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <ScrollReveal delay={160} direction="right">
              <TiltCard className="glass-panel p-8 rounded-lg flex-1 flex flex-col justify-center text-center min-h-[200px]">
                <span className="text-primary-container font-display-lg text-5xl sm:text-6xl mb-2">05</span>
                <h4 className="font-headline-md heading-md text-on-surface">Years of Excellence</h4>
              </TiltCard>
            </ScrollReveal>
            <ScrollReveal delay={240} direction="right">
              <div className="glass-panel rounded-lg overflow-hidden flex-1">
                <div
                  className="w-full h-full bg-cover bg-center min-h-[200px] transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${SIDE_IMAGE}')` }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </main>
  )
}
