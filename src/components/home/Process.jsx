import React from 'react'
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiFileText,
  FiMapPin,
  FiPhoneCall,
  FiTruck,
} from 'react-icons/fi'

const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description:
      'Share your freight details and delivery needs. We will help find the right transport solution for your load.',
    icon: FiFileText,
  },
  {
    number: '02',
    title: 'Pickup & Dispatch',
    description:
      'Our team coordinates a convenient pickup and dispatches your shipment with care and clear communication.',
    icon: FiTruck,
  },
  {
    number: '03',
    title: 'Track Your Freight',
    description:
      'Stay informed while your cargo is on the road with timely shipment updates from pickup to destination.',
    icon: FiMapPin,
  },
  {
    number: '04',
    title: 'Safe Delivery',
    description:
      'Your shipment arrives at its destination with reliable handling and delivery confirmation.',
    icon: FiCheckCircle,
  },
]

function Process() {
  return (
    <section id="process" className="bg-white px-4 py-16 text-slate-900 sm:px-8 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60 mb-3">
              <FiTruck className="text-base" aria-hidden="true" />
              <span>Our Process</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              How Our Trucking Process Works
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              From your first quote to final delivery, we make freight
              transportation straightforward, dependable, and easy to follow.
            </p>
          </div>

          <div
            className="relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-xl bg-cover bg-center px-6 py-8 text-center text-white sm:min-h-[270px]"
            style={{ backgroundImage: "url('/hero.webp')" }}
          >
            <div className="absolute inset-0 bg-[#071f38]/75" />
            <div className="relative z-10">
              <h3 className="mx-auto max-w-lg text-2xl font-bold leading-tight sm:text-3xl">
                Ready to Move Your Freight?
              </h3>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                Let&apos;s find the right trucking solution for your business.
              </p>
              <a
                href="/services"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#071f38] px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/60 transition-colors hover:bg-[#0b2d52]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#071f38]">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                Explore Our Services
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <li key={step.number} className="relative pt-4">
                <span className="absolute left-2 top-10 z-10 -translate-y-1/2 text-[#071f38]/80 pr-3 text-4xl font-bold leading-none">
                  {step.number}
                </span>
                <div className="relative flex min-h-[205px] flex-col items-center rounded-xl bg-white px-5 pb-8 pt-8 text-center shadow-sm border border-[#071f38]">
                  <h3 className="text-xl font-bold text-[#071f38]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                  <span className="absolute -bottom-5 grid h-12 w-12 place-items-center rounded-full bg-[#071f38] text-white ring-4 ring-white">
                    <Icon className="text-xl" aria-hidden="true" />
                  </span>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Process
