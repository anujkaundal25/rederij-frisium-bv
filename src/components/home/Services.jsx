import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight, FiMapPin, FiPackage, FiTruck } from 'react-icons/fi'

const services = [
  {
    title: 'Full Truckload',
    description:
      'Dedicated capacity for large shipments, with dependable pickup times and direct delivery to your destination.',
    image: '/hero.webp',
    imageAlt: 'Freight truck traveling on an open highway',
    icon: FiTruck,
  },
  {
    title: 'Less-than-Truckload',
    description:
      'Cost-effective freight solutions for smaller loads, handled with care from collection through final delivery.',
    image: '/about.webp',
    imageAlt: 'Freight truck inside a logistics warehouse',
    icon: FiPackage,
  },
  {
    title: 'Regional Delivery',
    description:
      'Flexible regional routes and scheduled deliveries that keep your supply chain moving on time.',
    image:
      '/service1.webp',
    imageAlt: 'Truck transporting freight along a road',
    icon: FiMapPin,
  },
]

function Services() {
  return (
    <section id="services" className="bg-white px-4 py-16 text-slate-900 sm:px-8 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60 mb-3">
              <FiTruck className="text-base" aria-hidden="true" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trucking Solutions Built Around Your Business
            </h2>
          </div>

          <div className="flex max-w-md flex-col items-start gap-4 lg:items-end lg:text-right">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              From a single pallet to a full trailer, our reliable freight
              transportation keeps your cargo moving safely and on schedule.
            </p>
            {/* <a
              href="#service-cards"
              className="group inline-flex items-center gap-3 rounded-full bg-[#071f38] py-2 pl-5 pr-2 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:scale-105"
            >
              Explore Our Services
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#071f38] transition-colors group-hover:bg-orange-600">
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </a> */}
          </div>
        </div>

        <div id="service-cards" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-xl bg-white border border-[#071f38] shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f38]/25 to-transparent" />
                </div>

                <div className="flex min-h-[92px] items-stretch bg-[#06313b] text-white">
                  <div className="flex w-[100px] shrink-0 items-center justify-center rounded-tr-2xl bg-white">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#071f38]">
                      <Icon className="text-xl" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="flex flex-1 items-center px-4 py-4 text-lg font-bold leading-snug sm:text-xl">
                    {service.title}
                  </h3>
                </div>

                <p className="min-h-[112px] px-5 py-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
        <div className='flex justify-center items-center p-10'>
          <Link href='/services' className='bg-[#071f38] text-white py-3 w-full lg:w-[20%] rounded-lg text-center transition-all hover:bg-orange-600 hover:scale-105'>View All</Link>
        </div>
      </div>
    </section>
  )
}

export default Services
