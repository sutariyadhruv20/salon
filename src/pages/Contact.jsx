import ScrollReveal from '../components/ScrollReveal'

const CONTACT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD67Bh2vThWFSUArpnQIA7H1gt66LPorNU8R-cEW4ESMYBoDC9Co_rNgcyB-rE335XvEAL4kllM5Ai9edB5AQO_aFjyfE4MxSRLjr8s0-GFrf10Fu-BTvcf604cVU-IOQZWjS3iYzFNkE5OoiOL68n8ClWIaZgjR1lzcR04ovwz2SHhug0F0jqjLfDTsDbxBF2EF6r-hLz_lTC46e8_FDGo_ZIpwOxDTwOhiPnazve401JI6zA24lDn5A'

export default function Contact() {
  return (
    <main className="pt-32 md:pt-40 pb-section-padding section-shell">
      <ScrollReveal className="text-center md:text-left mb-12 md:mb-16">
        <h1 className="font-display-lg heading-display text-on-surface mb-6">Contact & Booking</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Reserve your serene experience. We invite you to schedule a consultation.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <ScrollReveal className="lg:col-span-5 min-h-[420px] sm:min-h-[520px] lg:min-h-[680px] relative rounded-lg overflow-hidden" delay={80} direction="left">
          <img className="w-full h-full object-cover absolute inset-0" src={CONTACT_IMAGE} alt="Contact" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
            <p className="font-headline-md italic mb-2">Radiance Awaits.</p>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-7 flex flex-col gap-8">
          <ScrollReveal delay={120}>
            <div className="glass-panel rounded-xl p-6 sm:p-8 md:p-12">
              <h2 className="font-headline-md heading-md text-on-surface mb-8">
                Request an Appointment
              </h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="font-body-md text-label-sm uppercase tracking-widest text-on-surface-variant mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="input-minimal py-2"
                      placeholder="Jane"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="font-body-md text-label-sm uppercase tracking-widest text-on-surface-variant mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="input-minimal py-2"
                      placeholder="Doe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="service"
                    className="font-body-md text-label-sm uppercase tracking-widest text-on-surface-variant mb-2"
                  >
                    Service
                  </label>
                  <select id="service" className="input-minimal py-2 bg-transparent cursor-pointer">
                    <option>Kumkumadi Glow Facial</option>
                    <option>Restorative Abhyanga Massage</option>
                    <option>Bridal Consultation</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary-3d w-full mt-4">
                  Submit Request
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel rounded-xl p-6 sm:p-8 space-y-4">
              <h3 className="font-headline-md heading-md">Visit Us</h3>
              <p className="text-on-surface-variant">42, Hauz Khas Village, New Delhi - 110016</p>
              <p className="text-on-surface-variant">+91 98765 43210</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
