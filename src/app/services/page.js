import React from 'react'
import {
  FiArrowRight,
  FiBox,
  FiMap,
  FiPackage,
  FiTruck,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'Freight Services | Rederij Frisium B.V.',
  description: 'Explore trucking and freight transportation options from Rederij Frisium.',
}

const services = [
  {
    no: '01',
    title: 'Full Truckload',
    description:
      'Dedicated trailer capacity for larger shipments or loads that need a direct route from pickup to delivery.',
    detail: 'Dedicated capacity',
    icon: FiTruck,
  },
  {
    no: '02',
    title: 'Less-than-Truckload',
    description:
      'A practical option when your freight does not require a full trailer. Plan smaller shipments with care and clear handling details.',
    detail: 'Flexible shipment size',
    icon: FiPackage,
  },
  {
    no: '03',
    title: 'Regional Delivery',
    description:
      'Dependable transportation for regional routes, scheduled replenishment, and recurring business deliveries.',
    detail: 'Regional route planning',
    icon: FiMap,
  },
]

export default function ServicesPage() {
  return (
    <InnerPageLayout
      eyebrow="Freight Services"
      title="The Right Service for the Load Ahead"
      description="From a dedicated trailer to regional freight, choose a service that fits your cargo, route, and delivery expectations."
      image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
    >
      <section id="service-list" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Core Capabilities
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#071f38] sm:text-4xl">
                Freight services
              </h2>
            </div>
            <FiTruck className="hidden text-4xl text-[#071f38] sm:block" aria-hidden="true" />
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.no}
                  className="grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:py-9"
                >
                  <span className="text-2xl font-bold text-orange-500">{service.no}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="text-xl text-[#071f38]" aria-hidden="true" />
                      <h3 className="text-xl font-bold text-[#071f38] sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {service.detail}
                  </span>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Shipment Planning
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071f38] sm:text-4xl">
              Start with the details that matter.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Cargo dimensions, weight, pickup and delivery locations, timing, and
              handling requirements help determine the right service for your load.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Cargo type', 'Load size', 'Pickup window', 'Delivery location'].map(
              (item, index) => (
                <div
                  key={item}
                  className={`min-h-32 p-5 sm:min-h-40 sm:p-7 ${
                    index === 0 || index === 3
                      ? 'bg-[#071f38] text-white'
                      : 'bg-white border border-[#071f38] text-[#071f38]'
                  }`}
                >
                  <span className="text-xs font-bold text-orange-500">0{index + 1}</span>
                  <p className="mt-8 font-semibold sm:text-lg">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative min-h-[340px] overflow-hidden bg-[#071f38] px-4 py-16 text-white sm:px-6 lg:px-8">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85"
          alt="Truck moving freight on a highway"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f38] via-[#071f38]/85 to-[#071f38]/40" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Ready to plan a shipment?
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Let&apos;s find the right way to move your freight.
          </h2>
          <a href="/contact" className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600">
            Request a quote <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </InnerPageLayout>
  )
}
