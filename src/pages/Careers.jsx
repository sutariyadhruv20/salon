import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'

const CAREERS_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAEuklhqXP-XMa3-8F9_vNnL7nTSenOikLp3t0I9ZQb8zadlc6kxCnb1FJTU3iaU6FFVFP7lDqAG3xFjRGozbulvgXGoL2uSn589QJOZmPvqJROCHsxZoA18zDxJ2_JkpODzTuY-8i8sPQvm2MMXJlUi0YuZwyic2K3b1LggWn12Re8Wkw2QyHIkLISQgB7qlhfF9MaMfyUmlAIslq1EiwSZwpLpP-hZfTVCOw34HTiYMbIqHB3o2qpow'

const jobListings = [
  {
    title: 'Senior Hair Architect',
    cat: 'Hair Studio',
    desc: 'Master of structural cuts, Indian bridal hairstyling, and modern colour techniques.',
  },
  {
    title: 'Ayurvedic Skin Specialist',
    cat: 'Skincare Lab',
    desc: 'Expert in Ayurvedic facials, herbal treatments, and holistic skin vitality.',
  },
]

export default function Careers() {
  return (
    <main className="pt-28 md:pt-32 overflow-x-clip">
      <section className="relative min-h-[480px] md:min-h-[600px] flex items-center bg-surface-container-low">
        <div className="section-shell w-full grid grid-cols-1 md:grid-cols-12 items-center gap-gutter py-12">
          <ScrollReveal className="col-span-1 md:col-span-7">
            <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-container mb-4 block">
              Careers
            </span>
            <h1 className="font-display-lg heading-display text-on-surface mb-6 md:mb-8">
              Join the <i className="text-outline">Artisans</i>
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-8 md:mb-12 max-w-md">
              We are a collective of visionaries dedicated to the craft of luminous beauty.
            </p>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-5 image-reveal h-[320px] sm:h-[420px] md:h-[500px] rounded-lg overflow-hidden" delay={120} direction="right">
            <img className="w-full h-full object-cover" src={CAREERS_IMAGE} alt="Careers" loading="lazy" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 section-shell grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {jobListings.map((job, index) => (
          <ScrollReveal key={job.title} delay={index * 100}>
            <TiltCard className="border border-outline-variant p-6 sm:p-8 rounded-lg hover:border-primary-container transition-colors duration-500 group cursor-pointer h-full card-glow">
              <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-xs uppercase tracking-widest mb-4">
                {job.cat}
              </span>
              <h3 className="heading-md font-headline-md mb-2">{job.title}</h3>
              <p className="text-on-surface-variant mb-8">{job.desc}</p>
              <button
                type="button"
                className="text-label-sm uppercase tracking-widest text-primary-container group-hover:underline cursor-pointer"
              >
                Apply Now
              </button>
            </TiltCard>
          </ScrollReveal>
        ))}
      </section>
    </main>
  )
}
