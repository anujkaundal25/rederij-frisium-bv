import React from 'react'
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiMapPin,
  FiPackage,
  FiTruck,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'Our Process | Rederij Frisium B.V.',
  description: 'Learn how we coordinate freight quotes, pickups, tracking, and delivery.',
}

const steps = [
  {
    no: '01',
    title: 'Tell us about the load',
    body: 'Share freight type, dimensions or weight, special handling, and your preferred schedule.',
    icon: FiClipboard,
  },
  {
    no: '02',
    title: 'Plan the move',
    body: 'We review the shipment details and coordinate the transportation plan and pickup.',
    icon: FiMapPin,
  },
  {
    no: '03',
    title: 'Pickup and transit',
    body: 'Your freight is collected and moved along the planned route with shipment updates.',
    icon: FiTruck,
  },
  {
    no: '04',
    title: 'Delivery confirmation',
    body: 'The journey ends with delivery at the agreed destination and a clear handoff.',
    icon: FiCheck,
  },
]

export default function ProcessPage() {
  return (
    <InnerPageLayout
      eyebrow="Our Process"
      title="From First Details to Final Delivery"
      description="A well-coordinated shipment starts with good information. Here is what to expect when arranging freight transportation with our team."
      image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85"
    >
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-9 flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-bold text-[#071f38] sm:text-3xl">
              Four steps. One clear journey.
            </h2>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Pickup to delivery
            </span>
          </div>
          <ol className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.no} className="relative border-t border-slate-300 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-orange-500">{step.no}</span>
                    <Icon className="text-2xl text-[#071f38]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#071f38]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.body}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="bg-[#071f38] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Before Pickup
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Prepare the details for a smoother dispatch.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Accurate shipment information helps us plan a suitable move and
              avoid preventable delays.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {[
              'Pickup and delivery addresses',
              'Cargo type and handling needs',
              'Approximate weight and dimensions',
              'Ready time and delivery window',
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-4 bg-[#071f38] p-5 sm:p-7">
                <span className="text-sm font-bold text-orange-400">0{index + 1}</span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-white lg:grid-cols-2">
        <div className="relative min-h-[300px] lg:min-h-[430px]">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=85"
            alt="Logistics team coordinating freight movement"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-16">
          <FiPackage className="text-3xl text-orange-500" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-bold text-[#071f38] sm:text-4xl">
            Communication at every milestone.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            We keep the shipment conversation focused on useful updates: when
            freight is collected, how transit is progressing, and when delivery
            is complete.
          </p>
          <a href="/contact" className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-[#071f38] hover:text-orange-600">
            Plan a shipment <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 rounded-2xl bg-orange-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Ready to begin?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#071f38]">
              Let&apos;s plan your next freight move.
            </h2>
          </div>
          <a href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#071f38] px-6 py-3 font-bold text-white hover:bg-[#0b2d52]">
            Contact Us <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </InnerPageLayout>
  )
}
