import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiCompass,
  FiPackage,
  FiShield,
  FiCheckCircle,
  FiTruck,
  FiTrendingUp,
  FiUsers,
  FiClock,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'About Us | Rederij Frisium B.V.',
  description:
    'Learn about Rederij Frisium and our approach to dependable freight transportation.',
}

// Reliable, active Unsplash images for freight logistics
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85', // Cargo container & logistics terminal
  highwayTruck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85', // Freight truck on highway
  warehouse: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85', // Logistics shipment hub
}

const stats = [
  { label: 'On-Time Delivery', value: '99.4%', icon: FiClock },
  { label: 'Active Fleet Units', value: '250+', icon: FiTruck },
  { label: 'Satisfied Partners', value: '1,200+', icon: FiUsers },
  { label: 'Routes Covered', value: '100%', icon: FiTrendingUp },
]

const values = [
  {
    title: 'Care in Every Handoff',
    text: 'We treat every pickup, transfer, and delivery as an important milestone in the shipment journey.',
    icon: FiPackage,
    badge: 'Precision',
  },
  {
    title: 'Straightforward Service',
    text: 'Clear expectations, transparent tracking, and practical communication keep your logistics predictable.',
    icon: FiCompass,
    badge: 'Clarity',
  },
  {
    title: 'Safety Comes First',
    text: 'We prioritize responsible cargo handling, strict compliance, and thoughtful road safety measures.',
    icon: FiShield,
    badge: 'Security',
  },
]

const executionSteps = [
  {
    number: '01',
    title: 'Tailored Route & Load Planning',
    description:
      'We assess payload dimensions, timelines, and specialized requirements to map out the optimal logistics corridor.',
  },
  {
    number: '02',
    title: 'Proactive Transit Monitoring',
    description:
      'Continuous dispatch coordination and live status updates ensure potential delays are mitigated before they occur.',
  },
  {
    number: '03',
    title: 'Verified Final Delivery',
    description:
      'Seamless handoff with immediate digital proof of delivery and thorough cargo inspection standard.',
  },
]

export default function AboutPage() {
  return (
    <InnerPageLayout
      eyebrow="About Rederij Frisium"
      title="Built Around the Journey of Your Freight"
      description="We coordinate trucking transportation with one goal: make it easier for businesses to move goods with confidence, from the first conversation to the final handoff."
      image={IMAGES.hero}
    >
      {/* ================= HERO / WHO WE ARE SECTION ================= */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-8 lg:px-20 lg:py-24">
        {/* Subtle Background Glow Accent */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-orange-600 border border-orange-200/60">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                Who We Are
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#071f38] sm:text-4xl lg:text-5xl lg:leading-tight">
                Freight is more than a route on a map.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                It is inventory a business depends on, a delivery someone is
                waiting for, and a promise that needs to be kept. Rederij Frisium
                focuses on dependable trucking and practical coordination so each
                shipment has a clear path forward.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Dedicated Fleet Dispatch',
                  '24/7 Route Assistance',
                  'Strict Quality Assurance',
                  'End-to-End Visibility',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FiCheckCircle className="text-orange-500 flex-shrink-0 text-lg" />
                    <span className="text-sm font-semibold text-[#071f38]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual / Metric Cards */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900 p-8 shadow-2xl overflow-hidden text-white">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-48 w-48 rounded-full bg-orange-500/10 blur-2xl" />
                
                <p className="text-xs font-bold tracking-[0.2em] text-orange-400">
                  Performance Metrics
                </p>
                <h3 className="mt-2 text-2xl font-bold">Reliability by the Numbers</h3>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                        <Icon className="text-orange-400 text-2xl" />
                        <p className="mt-3 text-2xl font-extrabold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="relative bg-slate-50 px-4 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-orange-600">
                What Guides Us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
                The standards behind every shipment
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-600 max-w-md text-sm leading-relaxed">
              Our principles ensure operational excellence, protecting both your goods and your customer relationships.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <article
                  key={value.title}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-slate-100"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                        <Icon className="text-2xl" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-widest bg-slate-100 px-2.5 py-1 rounded-full">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-bold text-[#071f38]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {value.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">{value.badge}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= OUR APPROACH & WORKFLOW SECTION ================= */}
      <section className="bg-white px-4 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            {/* Visual Image Banner with Floating Card */}
            <div className="relative lg:col-span-6">
              <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={IMAGES.highwayTruck}
                  alt="Freight truck traveling along a highway"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f38]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-white p-6 shadow-xl border border-slate-100 max-w-xs">
                <p className="text-xs font-bold tracking-wider text-orange-600">
                  Seamless Control
                </p>
                <p className="mt-1 text-sm font-semibold text-[#071f38]">
                  Integrated route scheduling and proactive dispatch communication.
                </p>
              </div>
            </div>

            {/* Approach Steps */}
            <div className="lg:col-span-6">
              <p className="text-xs font-bold tracking-[0.2em] text-orange-600">
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
                A dependable partner, not just a truck on the road.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We listen to the requirements of each load, coordinate the right
                transportation, and keep communication focused on what matters:
                timing, handling, and delivery.
              </p>

              {/* Process Step List */}
              <div className="mt-8 space-y-6">
                {executionSteps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-600">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#071f38]">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#071f38] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105"
                >
                  Explore transportation services <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="px-4 py-12 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[#071f38] px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-orange-400">
              Start a Conversation
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Tell us what you need to move.
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-lg">
              Our freight logistics experts are ready to build a reliable shipping plan tailored specifically to your operational demands.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-[#071f38] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Contact Our Team <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}