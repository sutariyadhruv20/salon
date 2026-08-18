import ScrollReveal from '../components/ScrollReveal'

const galleryItems = [
  {
    title: 'Ethereal Silk',
    cat: 'Bridal Couture',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWm9EdwwBIu9mYVwvH5In3ui9vYJIU2WW_72yiPDbZ1vUqh--pvT_WLjBtNE9_HRSZbmHdAQyqdwfgR-dHNG0E7cvC0o2Bnaqw5-5Fo1I1sNdtFIGHPviEa6N98bY8n4gPKjzQwmPTtKf2lyo8gDV_iMUI6vhbk3Sn5_TzoUAR_anOiFE3RIlLPX0I-EWwvgvQMhSBBsf4CXQ0SICc1lnFVe-jBmGvwrTdHBmWwe6G20MDq2VIxP3vPQ',
  },
  {
    title: 'Midnight Glow',
    cat: 'Editorial Focus',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1u6JX4VQQG7En9wdog9KaIA7Bqna0eT2B8KyguRfVajHKSVPbDTyp4pGRNz_RxLrq7X4vVKo0bKIe94Rb6IlszSoVeXVJPF66eAMJ0LEF1LT99s48hk3te7nJa62uK7dLWBgktKTSm9_Se5p0vWwbgBqkUTpq2vFHNfLoP2nYCpn4vln9QE43sYjy-mLuKd8y0AMmIRZ-j4tOQqnP2gZ6QDYrBgQCkxUfQBu3rGXG18b3LS1Jf6L3Hw',
  },
  {
    title: 'Sculpted Elegance',
    cat: 'Avant-Garde',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNgTuBuDHwb-sdDH35kfbRPjWOT4m5krpYd0FRG_68pIeMW_l_YoQUT00PAgFjofI5nvatnSN1YeLLftMJqyX79NXKdmi7kY2Yf4VsRIxw8TY9GfyWPRnl6fOHC8brKlCnTa29bfIZdb6K1T830kh2OJEhyEQOX3g3y8T4uIGtH9qJN1KioA9mDn5v48kNfrOdwjsOb4Qdu9qDL0ht7w06TM7ssrpxIZL7RJc2QGrhjgM_Bes7tAWVvw',
  },
  {
    title: 'Morning Dew',
    cat: 'Bridal Couture',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt7huHRr-5uF9Mf0L1PtHpzGDSh0kZMmIeel2DChcEWEyFFSWt1NlLZUvSxi9UGc7L7bUG2vLX2SUJYVpmGSQBG_GLlc7en7gKzmuQ2f0QcMBQNstbYbcljeHQilgNltM6EshfycvIJtsC-Za_c-zBLiPguvhbY15m46OVwwI-E6XtQBhigcuxw6o1J2nW9BKEuaDI0raBVAkUdpoKaKQjAUTJR4ufS6Fu_fx_sGI-KycoqB9MMX4t0Q',
  },
  {
    title: 'Graphic Lines',
    cat: 'Editorial Focus',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3JCX8_N1Is7pJrcQV9ZCti_6LFL7R_TPy3wQs5a6LQSvLYDbljKdu6K90aqCmyOpf4x0-8JP3qGJvKLDI6CuaGC25cjb6XQLgnC_b3VALVbBYB01g38q4ipNMLwHyIP7hPFUtArAwRIKbo53DZo9GdLj0kre9zppv8sAwfCad3GYFQhh0pcJpBwHY5pVozkm1Ph8GW8Xrz0byjLOOtvoLyNrlVDRVuqY79qdNNDMjPauEk9M35ZqBRA',
  },
]

export default function Gallery() {
  return (
    <main className="pt-28 md:pt-32 pb-section-padding section-shell">
      <ScrollReveal as="header" className="mb-16 md:mb-20 text-center md:text-left">
        <h1 className="font-display-lg heading-display text-on-surface mb-6">Gallery</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          A curated collection of our finest editorial work.
        </p>
      </ScrollReveal>

      <div className="masonry-grid">
        {galleryItems.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 90} className="masonry-item" direction="scale">
            <div className="gallery-item group">
              <img className="w-full h-auto object-cover" src={item.img} alt={item.title} loading="lazy" />
              <div className="absolute inset-0 glass-overlay-reveal flex flex-col justify-end p-5 sm:p-6">
                <span className="font-body-md text-label-sm tracking-widest uppercase text-primary-fixed-dim mb-2">
                  {item.cat}
                </span>
                <h3 className="font-display-lg heading-md text-white">{item.title}</h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </main>
  )
}
