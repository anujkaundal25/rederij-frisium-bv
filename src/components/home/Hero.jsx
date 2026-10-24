import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#071f38] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071f38]/95 via-[#071f38]/70 to-[#071f38]/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-4 pb-12 pt-28 sm:px-8 lg:px-20">
        <div className="max-w-[760px]">
          <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-[#f3c969] md:text-base">
            Keeping America&rsquo;s Freight Moving, One Mile at a Time.
          </p>

          <h1 className="text-4xl font-black leading-[0.9] tracking-[-0.04em] text-white md:text-6xl lg:text-[3rem]">
            Reliable Trucking &amp; Transportation Across the USA
          </h1>

          <p className="mt-6 max-w-[760px] text-base leading-relaxed text-gray-200 md:text-lg">
            From local deliveries to regional and nationwide freight transportation,
            we provide dependable trucking solutions that keep your business moving.
            With a focus on timely delivery, safe handling, and reliable service, we
            make every mile count.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/#quote"
              className="flex items-center gap-2 rounded-lg bg-[#071f38] px-8 py-4 text-sm font-bold tracking-[0.12em] text-white shadow-xl transition-all duration-300 hover:scale-105 border border-white cursor-pointer"
            >
              <span>Get a Quote</span>
              <FiChevronsRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero