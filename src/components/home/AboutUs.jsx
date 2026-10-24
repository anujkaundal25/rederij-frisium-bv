import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { HiOutlineArrowUpRight, HiChevronDoubleRight } from 'react-icons/hi2'

const features = [
  'Reliable pickup and delivery coordination',
  'Clear shipment updates from start to finish',
  'Flexible solutions for a range of freight',
]

function AboutUs() {
  return (
    <section id="about" className="bg-white px-4 py-16 text-slate-900 sm:px-8 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#071f38]">
            <FaTruck className="text-base" aria-hidden="true" />
            <span>About Us</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Delivering Reliable Freight Solutions Around The World
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-12 xl:items-stretch xl:gap-8">
          <div className="relative min-w-0 pt-3 pl-3 md:row-span-2 xl:col-span-4 xl:row-span-1">
            <div className="absolute left-0 top-0 h-[88%] w-[88%] rounded-2xl border-2 border-[#071f38]" />
            <div className="relative z-10 h-full min-h-[320px] overflow-hidden rounded-2xl shadow-md sm:min-h-[420px] xl:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85"
                alt="Freight containers and logistics operations"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center xl:col-span-4">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              We provide dependable trucking and freight transportation designed
              to help businesses move cargo safely, efficiently, and on schedule.
              From pickup through delivery, our team keeps your shipment moving.
            </p>

            <div className="my-6 rounded-r-xl border-l-4 border-[#071f38] bg-slate-50 p-5 sm:my-7">
              <p className="text-sm font-semibold leading-relaxed text-[#071f38] sm:text-base">
                Freight service built around careful handling, reliable
                communication, and your delivery requirements.
              </p>
            </div>

            <ul className="mb-7 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm font-medium text-slate-800 sm:text-base"
                >
                  <HiChevronDoubleRight
                    className="mt-0.5 shrink-0 text-base text-[#071f38]"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#071f38] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#0b2d52]"
            >
              <span>Explore Our Services</span>
              <HiOutlineArrowUpRight className="text-base" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-w-0 pt-3 pr-3 md:col-span-2 xl:col-span-4 xl:col-start-9 xl:row-start-1">
            <div className="absolute bottom-0 right-0 h-[82%] w-[88%] rounded-2xl border-2 border-[#071f38]" />
            <div className="absolute right-0 top-0 z-20 rounded-2xl border-4 border-white bg-[#071f38] px-5 py-4 text-white shadow-xl sm:right-3">
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">25+</p>
              <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                Years Experience
              </p>
            </div>
            <div className="relative z-10 h-[320px] overflow-hidden rounded-2xl shadow-md sm:h-[420px] xl:mt-12 xl:h-[440px]">
              <img
                src="/about.webp"
                alt="Freight truck inside a distribution warehouse"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
