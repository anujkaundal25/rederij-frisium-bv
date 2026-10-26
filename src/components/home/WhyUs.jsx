import React from 'react'
import {
  FiCheckCircle,
  FiGlobe,
  FiMapPin,
  FiShield,
  FiTruck,
} from 'react-icons/fi'

const advantages = [
  {
    title: 'Secure Cargo Handling',
    description: 'Careful loading and dependable handling for every shipment.',
    icon: FiShield,
  },
  {
    title: 'Reliable Delivery',
    description: 'Planned routes and clear communication to keep freight on schedule.',
    icon: FiCheckCircle,
  },
  {
    title: 'Real-Time Coordination',
    description: 'Stay informed with shipment updates from pickup to destination.',
    icon: FiMapPin,
  },
  {
    title: 'Flexible Freight Solutions',
    description: 'Transportation options tailored to your cargo and business needs.',
    icon: FiGlobe,
  },
]

function WhyUs() {
  return (
    <section id="why-us" className="relative isolate overflow-hidden bg-white px-4 py-12 text-[#071f38] sm:px-8 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative grid gap-10 lg:min-h-[610px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          
          {/* Left Column: Headline and Description grouped directly together */}
          <div className="relative z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60 mb-3 w-fit">
              <FiTruck aria-hidden="true" />
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="max-w-xl text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your Cargo,
              <br />
              Handled With
              <br />
              <span className="text-orange-500">Care.</span>
            </h2>

            {/* Description placed directly underneath the heading */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              From everyday freight to oversized loads, we bring dependable
              transportation, careful handling, and clear communication to every
              delivery.
            </p>
          </div>

          {/* Right Column: Interactive Card Grid with Centered Background Image */}
          <div className="relative grid gap-4 sm:grid-cols-2">
            
            {/* Background Image Centered Behind Cards */}
            {/* <img
              src="/why.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(95%,650px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-90"
            /> */}

            {/* Feature Cards */}
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              const isHighlighted = index === 2

              return (
                <article
                  key={advantage.title}
                  className={`relative z-10 flex min-h-[190px] flex-col justify-between rounded-xl border p-6 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
                    isHighlighted
                      ? 'border-orange-500/30 bg-[#071f38]/90 text-white'
                      : 'border-white/30 bg-[#071f38]/90 text-white'
                  }`}
                >
                  <div>
                    <Icon
                      className="mb-5 text-3xl text-orange-400"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold sm:text-xl">{advantage.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/85 sm:text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </article>
              )
            })}

            {/* Decorative Overlay Circle */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md sm:block md:h-20 md:w-20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs