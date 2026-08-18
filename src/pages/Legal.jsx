import ScrollReveal from '../components/ScrollReveal'

export default function Legal() {
  return (
    <main className="pt-32 md:pt-40 pb-section-padding section-shell">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="font-display-lg heading-display text-on-surface mb-6">Legal Information</h1>
        <p className="text-body-lg text-on-surface-variant">
          Transparency and trust are fundamental to our studio.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-8 md:p-16 space-y-12 md:space-y-16">
          <section>
            <h2 className="heading-md border-b border-outline-variant/30 pb-4 mb-6 md:mb-8">
              Privacy Policy
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <h3 className="font-bold text-on-surface">1. Information We Collect</h3>
              <p>
                We collect minimal personal information necessary to provide you with an exceptional,
                tailored experience.
              </p>
            </div>
          </section>
          <section>
            <h2 className="heading-md border-b border-outline-variant/30 pb-4 mb-6 md:mb-8">
              Terms of Service
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <h3 className="font-bold text-on-surface">1. Appointment Cancellations</h3>
              <p>Minimum of 24 hours notice for any cancellations or rescheduling.</p>
            </div>
          </section>
        </div>
      </ScrollReveal>
    </main>
  )
}
