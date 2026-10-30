import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiBox,
  FiMap,
  FiPackage,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiLayers,
  FiCalendar,
  FiMapPin,
  FiTrendingUp,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'Freight Services | Brian Bartlett',
  description:
    'Explore trucking and freight transportation options from Brian Bartlett.',
}

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85',
  highwayTruck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85',
}

const services = [
  {
    no: '01',
    id: 'full-truckload',
    title: 'Full Truckload (FTL)',
    subtitle: 'Maximum Capacity & Direct Routes',
    description:
      'Dedicated trailer capacity for high-volume shipments or high-priority loads requiring direct non-stop transport from pickup to delivery point.',
    detail: 'Dedicated capacity',
    icon: FiTruck,
    highlights: ['Exclusive Trailer Use', 'Direct Point-to-Point', 'Expedited Transit'],
    popular: true,
  },
  {
    no: '02',
    id: 'less-than-truckload',
    title: 'Less-than-Truckload (LTL)',
    subtitle: 'Cost-Effective Shared Freight',
    description:
      'A practical and flexible option when your shipment does not require a full trailer. Optimize logistics costs while maintaining precise tracking.',
    detail: 'Flexible shipment size',
    icon: FiPackage,
    highlights: ['Consolidated Freight', 'Optimized Pricing', 'Scheduled Pickups'],
    popular: false,
  },
  {
    no: '03',
    id: 'regional-delivery',
    title: 'Regional Delivery',
    subtitle: 'Recurring Corridor Logistics',
    description:
      'Dependable transportation for regional routes, scheduled stock replenishment, and custom recurring business distribution schedules.',
    detail: 'Regional route planning',
    icon: FiMap,
    highlights: ['Dedicated Drivers', 'Fixed Weekly Schedules', 'Corridor Optimization'],
    popular: false,
  },
  {
    no: '04',
    id: 'dry-van-transport',
    title: 'Dry Van Transport',
    subtitle: 'Protected General Freight',
    description:
      'Enclosed trailer transportation for palletized goods, packaged products, and general cargo that benefits from protection from the elements.',
    detail: 'Enclosed trailer',
    icon: FiTruck,
    highlights: ['Weather Protection', 'General Freight', 'Long-Haul Routes'],
    popular: false,
  },
  {
    no: '05',
    id: 'refrigerated-transport',
    title: 'Refrigerated Transport',
    subtitle: 'Temperature-Sensitive Loads',
    description:
      'Temperature-controlled transport for perishable or sensitive goods, coordinated around the handling and delivery requirements of your shipment.',
    detail: 'Temperature controlled',
    icon: FiLayers,
    highlights: ['Temperature-Sensitive Cargo', 'Planned Delivery Windows', 'Careful Coordination'],
    popular: false,
  },
]

const planningDetails = [
  {
    step: '01',
    title: 'Cargo Type & Specs',
    description: 'Weight, dimensions, special handling (temperature/fragile), and pallet counts.',
    icon: FiBox,
    accent: 'bg-[#071f38] text-white',
  },
  {
    step: '02',
    title: 'Load Capacity',
    description: 'Determines whether FTL or LTL consolidation provides the highest cost-efficiency.',
    icon: FiLayers,
    accent: 'bg-slate-50 border border-[#071f38] text-[#071f38]',
  },
  {
    step: '03',
    title: 'Pickup Window',
    description: 'Target dates and time-critical loading dock appointments for seamless dispatch.',
    icon: FiCalendar,
    accent: 'bg-slate-50 border border-[#071f38] text-[#071f38]',
  },
  {
    step: '04',
    title: 'Destination Corridor',
    description: 'Route optimization, regional tolls, distance metrics, and receiver dock protocols.',
    icon: FiMapPin,
    accent: 'bg-[#071f38] text-white',
  },
]

const serviceBadges = [
  { label: 'Real-Time GPS Tracking', icon: FiTrendingUp },
  { label: '24/7 Dispatch Control', icon: FiZap },
  { label: 'Fully Insured Cargo', icon: FiShield },
  { label: 'Guaranteed Arrival Windows', icon: FiClock },
]

export default function ServicesPage() {
  return (
    <InnerPageLayout
      eyebrow="Freight Services"
      title="The Right Service for the Load Ahead"
      description="From dedicated full trailers to flexible regional distribution, select a logistics solution tailored to your cargo dimensions, timeline, and delivery standards."
      image={IMAGES.hero}
    >
      {/* ================= CORE CAPABILITIES GRID SECTION ================= */}
      <section id="service-list" className="relative px-4 py-16 sm:px-8 lg:px-20 lg:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-[1200px]">
          
          {/* Header */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60">
                Core Capabilities
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
                Tailored Freight Solutions
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600 leading-relaxed">
              Designed for modern supply chains. Every service option is backed by proactive route dispatch, verified load handling, and complete end-to-end visibility.
            </p>
          </div>

          {/* Cards Grid: Items 01-03 take col-span-2 (3 per row), Items 04-05 take col-span-3 (2 per row / half width each) */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {services.map((service) => {
              const Icon = service.icon
              const isHalfWidth = service.no === '04' || service.no === '05'
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`relative flex scroll-mt-8 flex-col justify-between rounded-3xl bg-white p-6 shadow-sm border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7 ${
                    isHalfWidth ? 'lg:col-span-3' : 'lg:col-span-2'
                  } ${
                    service.popular
                      ? 'border-orange-500/50 ring-1 ring-orange-500/20'
                      : 'border-[#071f38] border'
                  }`}
                >
                  {service.popular && (
                    <span className="absolute -top-3.5 right-8 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold tracking-wider text-white shadow-md">
                      Most Selected
                    </span>
                  )}

                  <div>
                    {/* Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-orange-400">
                        <Icon className="text-2xl" aria-hidden="true" />
                      </div>
                      <span className="text-2xl font-black text-slate-300">
                        {service.no}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="mt-6">
                      <span className="text-xs font-bold tracking-widest text-orange-600">
                        {service.detail}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-[#071f38]">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-slate-400">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    {/* Highlight List */}
                    <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs font-semibold text-[#071f38]">
                          <FiCheckCircle className="text-orange-500 text-sm flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#071f38] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105"
                    >
                      Book Capacity <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Feature Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceBadges.map((badge) => {
              const BadgeIcon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-sm"
                >
                  <BadgeIcon className="text-orange-500 text-xl flex-shrink-0" />
                  <span className="text-xs font-bold text-[#071f38]">{badge.label}</span>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= SHIPMENT PLANNING SECTION ================= */}
      <section className="bg-white px-4 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60">
                Shipment Planning
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#071f38] sm:text-4xl lg:leading-tight">
                Start with the details that matter.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                To engineer an efficient routing plan, our logistics team analyzes key variables from cargo specs to dock requirements, eliminating transit bottlenecks before dispatch.
              </p>

              <div className="mt-8 rounded-2xl bg-orange-50 p-6 border border-orange-200/60">
                <p className="text-xs font-bold tracking-wider text-orange-600">
                  Custom & Oversized Freight?
                </p>
                <p className="mt-2 text-sm text-[#071f38] leading-relaxed">
                  Have specialized equipment demands or temperature-sensitive loads? We arrange customized transport setups upon request.
                </p>
              </div>
            </div>

            {/* Right Interactive Card Matrix */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {planningDetails.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <div
                      key={item.step}
                      className={`group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:shadow-lg ${item.accent}`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold tracking-widest text-orange-500">
                            {item.step}
                          </span>
                          <ItemIcon className="text-2xl opacity-80" />
                        </div>
                        <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed opacity-80">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-orange-500">
                        <span>Required Detail</span>
                        <FiCheckCircle className="text-sm" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HERO CTA BANNER WITH IMAGE OVERLAY ================= */}
      <section className="relative min-h-[400px] overflow-hidden bg-[#071f38] px-4 py-20 text-white sm:px-8 lg:px-20">
        <Image
          src={IMAGES.highwayTruck}
          alt="Truck moving freight on a highway"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f38] via-[#071f38]/90 to-transparent" />
        
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-400 backdrop-blur-md border border-white/10">
            Ready To Plan A Shipment?
          </span>

          <h2 className="mt-6 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s find the right way to move your freight.
          </h2>

          <p className="mt-4 max-w-xl text-base text-slate-300 leading-relaxed">
            Get an optimized route estimate and dedicated driver assignment. Our freight dispatchers are online to review your load parameters.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-[#071f38] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Request a Quote <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}