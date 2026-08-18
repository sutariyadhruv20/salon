import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import TiltCard from '../components/TiltCard'

const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOHb_lm1nFX-cavfVgd4VCbkezzOfeCt7ggTfYcuWhVvWZvuU0QvuMRuCsuSCU_qY9ca6s8VJiy2Y0ZsLVik7MdVvSD3VH42njLPNDJbMVVudVLRFJC7k2jPGaAjoOz6j2SsxDlQIoHI2erSWDVeyOqBlDFmZiodRy8V6YXesaAqVgLHEGuy3y6UkcCY7IFQmu0ILOkpH8S26aOxU3HHBKfuf2pkMMQOjvxn49Zmd-kysEyYeJKusviw',
    desc: 'Over a decade of experience in high-fashion editorial styling.',
    rev: false,
  },
  {
    name: 'Anjali Desai',
    role: 'Master Colorist',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsB17hSh-MBI2EGYyyQ29OIOj1k6Q9iYXactXHKeUox6eKm-Pqd_qvmX30dOqXQdwO-dlWl8XKJRVlzfsvK75n0Rxk8OZcA80OuvxWqXFvmsn9RrLQLypWipcHWgvQxXkLXRcFJT83bl7KYfRk-NLK2obDhbiBtOV6LhVWCgNZNudMniUm8tvQUsi1fHwCxYeiGc0nyGXLrOEmVnAycCnbt7YyylaVJnFnZ2IdrsxYvSCFgO-Us1471g',
    desc: 'Renowned for intuitive understanding of color theory and hair texture.',
    rev: true,
  },
]

export default function Team() {
  return (
    <main className="pt-28 md:pt-32 pb-section-padding overflow-x-clip">
      <ScrollReveal className="section-shell mb-16 md:mb-24 text-center">
        <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-4 block">
          The Artisans
        </span>
        <h1 className="font-display-lg heading-display text-primary mb-6">
          Mastering the Art of Beauty
        </h1>
      </ScrollReveal>

      <div className="section-shell space-y-20 md:space-y-32">
        {teamMembers.map((member, index) => (
          <ScrollReveal
            key={member.name}
            delay={index * 100}
            className={`grid grid-cols-1 md:grid-cols-12 gap-gutter items-center ${member.rev ? 'md:flex-row-reverse' : ''}`}
          >
            <div
              className={`md:col-span-7 image-reveal h-[420px] sm:h-[520px] md:h-[600px] rounded-lg overflow-hidden ${member.rev ? 'order-1 md:order-2' : ''}`}
            >
              <img
                className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0 hover:scale-105"
                src={member.img}
                alt={member.name}
                loading="lazy"
              />
            </div>
            <div
              className={`md:col-span-5 z-10 relative ${member.rev ? 'order-2 md:order-1 lg:-mr-12' : 'lg:-ml-12'}`}
            >
              <TiltCard className="glass-panel p-6 sm:p-8 md:p-12">
                <span className="font-body-md text-label-sm uppercase tracking-widest text-primary-container mb-2 block">
                  {member.role}
                </span>
                <h2 className="font-display-lg heading-xl text-primary mb-4">{member.name}</h2>
                <p className="font-body-md text-on-surface-variant mb-6">{member.desc}</p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center space-x-2 text-primary hover:opacity-70 transition-opacity uppercase tracking-widest text-label-sm cursor-pointer group"
                >
                  <span>View Portfolio</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
              </TiltCard>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </main>
  )
}
