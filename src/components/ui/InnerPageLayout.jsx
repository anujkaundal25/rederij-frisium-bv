import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

function InnerPageLayout({ eyebrow, title, description, image, children }) {
  return (
    <>
      <Header />
      <main>
        <section
          id="top"
          className="relative flex min-h-[540px] items-center justify-center overflow-hidden bg-[#071f38] px-4 pb-12 pt-28 text-center text-white sm:min-h-[620px] sm:px-6 sm:pt-32 lg:min-h-[700px] lg:px-8"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#071f38]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071f38]/45 via-[#071f38]/45 to-[#071f38]/85" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-400 sm:text-sm">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
              {description}
            </p>
            <div className="mt-7 flex items-center justify-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
              <a href="/" className="transition-colors hover:text-orange-400">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-white">{eyebrow}</span>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default InnerPageLayout
