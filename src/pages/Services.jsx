import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'

const SKIN_RITUALS_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD8oyV2qkXFVgCKuz9v4WrUns2zqZDmoGwEMCBNRwP_eySCWrfwDixwRqsAT2FhUbx4uEc4z5y8wHjsa1P-l9FJkWszEWT0UY6mUo05OYE-aGQe8WhK4KIjjDx0Vittje6mSje-Jh0cqyscI-iTlHggfnE9PWg3Xf2GywsL6ky2Ldy5sjZhbQNavVxvZYg1X4t8-5RoDe3-a9X7zrlbuo-q_OkqxIBGeqQ0rV20moDSxAOfvuqkL6Ffeg'

const skinRituals = [
  {
    name: 'Kumkumadi Glow Facial',
    price: '\u20B92,500',
    desc: 'Ayurvedic saffron-infused facial for deep radiance and hydration.',
  },
  {
    name: 'Ubtan Sculpting Ritual',
    price: '\u20B92,000',
    desc: 'Traditional turmeric and sandalwood body sculpting treatment.',
  },
  {
    name: 'The Haldi Peel',
    price: '\u20B92,800',
    desc: 'Transformative blend of Ayurvedic botanicals and modern actives.',
  },
]

const bridalPackages = [
  {
    title: 'The Ethereal Dulhan',
    price: 'From \u20B935,000',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3lL1W-CpdFIWMoFe7s7JmTeeScz9BGGLUMI9lOtM1IesJqAHmJBl6gjG3oldfRTSn2p7-P7jJdufbsRrLUjSIrlJct27eSNc-EMbc_UEbM-9QwyU2E7R01l7wdMfB_JNtqs_24DYiQmAQjYwAnDOjYRwOESvYn8rXBLrZ6thZY4SRqExNg9_f7lfUg1BwT8HGx8U6gXbPrPnDXSHjQWGr8wbYkgmM0s2DEbUYsqxLQLcbvOqHiH1uCw',
  },
  {
    title: 'The Heritage Rajwada',
    price: 'From \u20B945,000',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjHeooN95lihZqIa17R3B8_VMQN7NuLVzYhtfxkF0Lpr94EjB4iQlnvAfAlEhinSv1kdq_MOgfF4qoOzbvtxDR9XoYv0xFlfnuExF9BUgzwHz7BjgTrAfHXnJcd5nDo43NDsDAUaIINdrwVr3z9ifBhBnZL9nFAK5VDHPMnHaquZZjNhCJ5ta6aPNGHoAOtIA8X2z3z294ICtE-TAFaOkUvQuskwnZzt36ygqb4147lCtT6d-yn5cDtg',
  },
  {
    title: 'Bridal Entourage',
    price: 'From \u20B912,000',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvPmOUvfLu3qG86lDCM1Zj1RaYev56wbk_fSyzs3zS8BEEVSpN3TM01GBO2WmT2wvBhQn0eKv0LoijQhp5wBk_sdVbZvxWUZKwXyLJDpWtP-mSmxxnYV41Q2OwZl9V2PtJEJqMwzwWcwNELaAHrBW2fcuzOufMjV8RW9bv_wxD7xssy7Xjh6io9KGGU4i0CHOM8NTjnFQ5_uhMRadr7WQpNw2Dq9iDiW7zqTZ6_e3w_SPPN8zkCoOWJQ',
  },
]

export default function Services() {
  return (
    <main className="flex-grow pt-28 md:pt-32 pb-section-padding section-shell">
      <ScrollReveal className="text-center mb-16 md:mb-24">
        <h1 className="font-display-lg heading-display text-on-surface mb-6">Curated Offerings</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          A sanctuary for elevated beauty rituals.
        </p>
      </ScrollReveal>

      <ScrollReveal as="section" className="mb-section-padding" delay={80}>
        <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
          <h2 className="font-display-lg heading-xl text-primary italic shrink-0">Skin Rituals</h2>
          <div className="flex-grow h-px bg-outline-variant/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <ScrollReveal direction="left" className="md:col-span-5 image-reveal h-[320px] sm:h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={SKIN_RITUALS_IMAGE}
              alt="Skin Rituals"
            />
          </ScrollReveal>
          <TiltCard className="md:col-span-6 md:col-start-7 glass-panel p-6 sm:p-8 md:p-12 rounded-xl">
            {skinRituals.map((service, index) => (
              <ScrollReveal
                key={service.name}
                delay={index * 100 + 80}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-outline-variant/30 pb-6 mb-6 last:border-0 last:mb-0 group cursor-default"
              >
                <div className="min-w-0">
                  <h3 className="font-display-lg heading-md text-on-surface group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-md">{service.desc}</p>
                </div>
                <span className="font-body-lg text-primary shrink-0">{service.price}</span>
              </ScrollReveal>
            ))}
          </TiltCard>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" delay={120}>
        <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
          <h2 className="font-display-lg heading-xl text-primary italic shrink-0">Bridal Couture</h2>
          <div className="flex-grow h-px bg-outline-variant/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
          {bridalPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.title} delay={index * 120}>
              <TiltCard className="service-card h-full card-glow">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    className="service-card-image w-full h-full object-cover"
                    src={pkg.img}
                    alt={pkg.title}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display-lg heading-md text-on-surface mb-3">{pkg.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-6">
                    A comprehensive styling journey focusing on a soft, lit-from-within glow.
                  </p>
                  <div className="flex flex-wrap justify-between items-center gap-3 pt-6 border-t border-outline-variant/30">
                    <span className="font-body-md text-label-sm uppercase tracking-widest text-on-surface-variant">
                      Consultation Req.
                    </span>
                    <span className="font-body-lg text-primary">{pkg.price}</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </main>
  )
}
