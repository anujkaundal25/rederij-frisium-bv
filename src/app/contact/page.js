import React from 'react'
import {
  FiArrowRight,
  FiClipboard,
  FiMapPin,
  FiPackage,
  FiTruck,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'Contact | Rederij Frisium B.V.',
  description: 'Get ready to plan a freight shipment with Rederij Frisium.',
}

const quoteDetails = [
  {
    title: 'Pickup and delivery',
    text: 'Origin, destination, and preferred pickup or delivery dates.',
    icon: FiMapPin,
  },
  {
    title: 'Freight information',
    text: 'Cargo description, dimensions, weight, and number of pieces.',
    icon: FiPackage,
  },
  {
    title: 'Handling requirements',
    text: 'Equipment needs, loading details, or any special instructions.',
    icon: FiTruck,
  },
]

export default function ContactPage() {
  return (
    <InnerPageLayout
      eyebrow="Contact & Shipment Planning"
      title="Let's Get Your Freight Moving"
      description="Every good freight plan starts with a few clear details. Prepare your route and cargo information so the right transport can be discussed."
      image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
    >
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Start Here
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#071f38] sm:text-4xl">
                What are you looking to move?
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              Whether you have a single shipment or a recurring freight need,
              gathering the details below is a helpful first step.
            </p>
          </div>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {quoteDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <article key={detail.title} className="rounded-xl border border-slate-200 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#071f38] text-orange-400">
                      <Icon className="text-xl" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold text-orange-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#071f38]">{detail.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{detail.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85"
              alt="Truck transporting freight across a highway"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Request Preparation
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#071f38] sm:text-4xl">
              Help us understand the full journey.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Freight type and route details can affect equipment, handling, and
              timing. Include any important constraints or delivery instructions
              when you get in touch.
            </p>
            <div className="mt-6 space-y-3">
              {['Is the load ready for pickup?', 'Does the freight need special handling?', 'Is this a one-time or recurring move?'].map((item) => (
                <p key={item} className="flex items-start gap-3 text-sm font-medium text-[#071f38]">
                  <FiClipboard className="mt-0.5 shrink-0 text-orange-500" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 rounded-2xl bg-orange-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Need a quote?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#071f38] sm:text-3xl">
              Share your shipment details with our team.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The quote request form is available on our homepage.
            </p>
          </div>
          <a href="/#quote" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#071f38] px-6 py-4 text-sm font-bold text-white hover:bg-[#0b2d52]">
            Go to quote form <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </InnerPageLayout>
  )
}
