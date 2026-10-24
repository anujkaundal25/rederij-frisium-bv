import React from 'react'
import { FiArrowUpRight, FiTruck } from 'react-icons/fi'

const transportTypes = [
  {
    number: '01',
    title: 'Dry Van',
    tagline: 'EVERYDAY FREIGHT, DELIVERED WITH CARE',
    description:
      'A dependable choice for palletized goods, packaged products, and general freight. Our dry van transport helps protect your cargo from the elements on regional and long-haul routes.',
    image: '/hero.webp',
    imageAlt: 'Dry van truck carrying freight on a highway',
  },
  {
    number: '02',
    title: 'Refrigerated Transport',
    tagline: 'TEMPERATURE-SENSITIVE CARGO',
    description:
      'Keep perishable and temperature-sensitive shipments moving with refrigerated transport planned around your delivery requirements.',
    image: '/about.webp',
    imageAlt: 'Freight truck ready to transport cargo',
  },
  {
    number: '03',
    title: 'Flatbed Transport',
    tagline: 'FOR OVERSIZED AND OPEN-LOAD FREIGHT',
    description:
      'Move building materials, machinery, and other oversized cargo with flexible open-deck transportation for challenging loads.',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Flatbed truck transporting freight',
  },
]

function Type() {
  return (
    <section
      id="transport-types"
      className="overflow-hidden bg-white px-4 py-16 text-[#071f38] sm:px-8 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#071f38]">
            <FiTruck aria-hidden="true" />
            <span>Transport Types</span>
          </div>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            The Right Truck
            <br />
            For Every Freight Need
          </h2>
        </div>

        {/* Transport Cards Grid / Stack */}
        <div className="space-y-6">
          {transportTypes.map((type) => (
            <article
              key={type.number}
              className="rounded-2xl border border-white/10 bg-[#071f38] p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-sm"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
                
                {/* 1. Image First on the Left */}
                <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-72 lg:h-[260px] shrink-0">
                  <img
                    src={type.image}
                    alt={type.imageAlt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f38]/40 to-transparent" />
                </div>

                {/* 2. Content on the Right */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-bold leading-none text-orange-500 sm:text-4xl">
                      {type.number}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight sm:text-3xl text-white">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-300 mb-4">
                    {type.tagline}
                  </p>

                  <p className="text-sm md:text-base leading-relaxed text-slate-200 max-w-3xl mb-6">
                    {type.description}
                  </p>

                  <div>
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-xs font-bold tracking-wider text-white transition-all hover:bg-white hover:text-[#071f38]"
                    >
                      <span>Explore Services</span>
                      <FiArrowUpRight className="text-sm" aria-hidden="true" />
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Type