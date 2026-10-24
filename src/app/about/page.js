import React from 'react'
import {
  FiArrowRight,
  FiCompass,
  FiPackage,
  FiShield,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'About Us | Rederij Frisium B.V.',
  description: 'Learn about Rederij Frisium and our approach to dependable freight transportation.',
}

const values = [
  {
    title: 'Care in Every Handoff',
    text: 'We treat every pickup, transfer, and delivery as an important part of the shipment journey.',
    icon: FiPackage,
  },
  {
    title: 'Straightforward Service',
    text: 'Clear expectations and practical communication help customers plan with confidence.',
    icon: FiCompass,
  },
  {
    title: 'Safety Comes First',
    text: 'We prioritize responsible handling and thoughtful coordination for cargo and road users.',
    icon: FiShield,
  },
]

export default function AboutPage() {
  return (
    <InnerPageLayout
      eyebrow="About Rederij Frisium"
      title="Built Around the Journey of Your Freight"
      description="We coordinate trucking transportation with one goal: make it easier for businesses to move goods with confidence, from the first conversation to the final handoff."
      image="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=85"
    >
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            Who We Are
          </p>
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#071f38] sm:text-4xl">
              Freight is more than a route on a map.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              It is inventory a business depends on, a delivery someone is waiting
              for, and a promise that needs to be kept. Rederij Frisium focuses on
              dependable trucking and practical coordination so each shipment has
              a clear path forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            What Guides Us
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-[#071f38] sm:text-4xl">
            The standards behind every shipment
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <article
                  key={value.title}
                  className="border-t-2 border-[#071f38] bg-white p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-2xl text-orange-500" aria-hidden="true" />
                    <span className="text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-[#071f38]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {value.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="grid bg-white lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85"
            alt="Freight truck traveling along a highway"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#071f38] sm:text-4xl">
            A dependable partner, not just a truck on the road.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            We listen to the requirements of each load, coordinate the right
            transportation, and keep communication focused on what matters:
            timing, handling, and delivery.
          </p>
          <a
            href="/services"
            className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-[#071f38] hover:text-orange-600"
          >
            Explore transportation services <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="bg-orange-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Start a Conversation
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#071f38] sm:text-3xl">
              Tell us what you need to move.
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#071f38] px-6 py-4 text-sm font-bold text-white hover:bg-[#0b2d52]"
          >
            Contact Our Team <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </InnerPageLayout>
  )
}
