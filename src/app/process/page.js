import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiMapPin,
  FiPackage,
  FiTruck,
  FiCheckCircle,
  FiClock,
  FiMessageSquare,
  FiShield,
  FiSend,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'Our Process | Rederij Frisium B.V.',
  description:
    'Learn how we coordinate freight quotes, pickups, tracking, and delivery.',
}

// Unsplash image sources (whitelisted in next.config.mjs)
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85',
  logisticsTeam: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
}

const steps = [
  {
    no: '01',
    title: 'Tell us about the load',
    body: 'Share freight type, dimensions, payload weight, special handling specifications, and your target schedule.',
    icon: FiClipboard,
    tag: 'Step 1: Intake',
  },
  {
    no: '02',
    title: 'Plan the move',
    body: 'Our logistics team analyzes shipment specifications, assigns optimal trailer equipment, and coordinates precise pickup timing.',
    icon: FiMapPin,
    tag: 'Step 2: Routing',
  },
  {
    no: '03',
    title: 'Pickup and transit',
    body: 'Your freight is collected and safely transported along pre-verified highway corridors with proactive status updates.',
    icon: FiTruck,
    tag: 'Step 3: Execution',
  },
  {
    no: '04',
    title: 'Delivery confirmation',
    body: 'The move finishes with verified arrival at the target loading dock, cargo inspection, and digital proof of delivery (POD).',
    icon: FiCheck,
    tag: 'Step 4: Completion',
  },
]

const preparationChecklist = [
  {
    step: '01',
    title: 'Addresses & Dock Specs',
    description: 'Exact origin/destination addresses, loading dock access, and liftgate requirements.',
  },
  {
    step: '02',
    title: 'Cargo & Handling Class',
    description: 'Pallet dimensions, hazmat status, fragility, or temperature control needs.',
  },
  {
    step: '03',
    title: 'Weight & Payload Volume',
    description: 'Total weight estimates and gross cube size for trailer axle compliance.',
  },
  {
    step: '04',
    title: 'Time Window & Hours',
    description: 'Ready-for-pickup dates and destination dock receiving hours.',
  },
]

const milestoneFeatures = [
  {
    title: 'Automated Status Alerts',
    description: 'Instant notifications at dispatch, gate arrival, and final drop-off.',
    icon: FiClock,
  },
  {
    title: 'Direct Dispatch Support',
    description: 'Connect directly with route coordinators for live load adjustments.',
    icon: FiMessageSquare,
  },
  {
    title: 'Digital Proof of Delivery',
    description: 'Instant sign-off documentation uploaded immediately upon drop-off.',
    icon: FiShield,
  },
]

export default function ProcessPage() {
  return (
    <InnerPageLayout
      eyebrow="Our Process"
      title="From First Details to Final Delivery"
      description="A well-coordinated shipment starts with clear communication. Here is our step-by-step framework for seamless freight execution."
      image={IMAGES.hero}
    >
      {/* ================= STEP-BY-STEP TIMELINE SECTION ================= */}
      <section className="relative px-4 py-16 sm:px-8 lg:px-20 lg:py-24 bg-slate-50/50">
        <div className="mx-auto max-w-[1200px]">
          
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                Workflow Lifecycle
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
                Four steps. One clear journey.
              </h2>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              End-To-End Coordination
            </span>
          </div>

          {/* Stepper Timeline Grid */}
          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.no}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/40"
                >
                  {/* Top Connector Line for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-slate-200 group-hover:bg-orange-300 z-10" />
                  )}

                  <div>
                    {/* Badge & Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Icon className="text-xl" aria-hidden="true" />
                      </div>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-orange-500/30 transition-colors">
                        {step.no}
                      </span>
                    </div>

                    {/* Step Name Tag */}
                    <span className="mt-6 inline-block text-[11px] font-bold tracking-wider text-orange-600">
                      {step.tag}
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#071f38]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.body}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">Phase 0{index + 1}</span>
                    <FiCheckCircle className="text-slate-300 group-hover:text-orange-500 transition-colors" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= BEFORE PICKUP / PREPARATION SECTION ================= */}
      <section className="bg-[#071f38] px-4 py-20 text-white sm:px-8 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-400 border border-orange-500/20">
                Before Pickup
              </span>

              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:leading-tight">
                Prepare details for a smoother dispatch.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Accurate initial shipment parameters allow our dispatchers to deploy the right vehicle type, calculate fuel burn, and establish realistic transit windows.
              </p>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-md">
                <p className="text-xs font-bold tracking-wider text-orange-400">
                  Proactive Dispatch Tip
                </p>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Providing site-specific pickup instructions or dock clearance heights upfront helps prevent unnecessary loading delays.
                </p>
              </div>
            </div>

            {/* Right Checklist Cards */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {preparationChecklist.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl bg-slate-900/80 p-6 border border-white/10 transition-all hover:border-orange-500/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-400">{item.step}</span>
                      <FiCheckCircle className="text-orange-400" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MILESTONE COMMUNICATION SECTION ================= */}
      <section className="bg-white px-4 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            {/* Visual Image Banner */}
            <div className="relative lg:col-span-6">
              <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={IMAGES.logisticsTeam}
                  alt="Logistics team coordinating freight movement"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f38]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-white p-6 shadow-xl border border-slate-100 max-w-xs">
                <p className="text-xs font-bold tracking-wider text-orange-600">
                  Full Visibility
                </p>
                <p className="mt-1 text-sm font-semibold text-[#071f38]">
                  Clear communication from pickup confirmation to drop-off.
                </p>
              </div>
            </div>

            {/* Content & Features */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60">
                Milestone Tracking
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
                Communication at every milestone.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We eliminate guesswork. You receive concise, practical updates focused on what matters most: driver dispatch, active transit status, and delivery handoff.
              </p>

              <div className="mt-8 space-y-4">
                {milestoneFeatures.map((feat) => {
                  const FeatIcon = feat.icon
                  return (
                    <div
                      key={feat.title}
                      className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-100"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                        <FeatIcon className="text-lg" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#071f38]">{feat.title}</h4>
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-[#071f38] hover:text-orange-600 transition-colors"
                >
                  Plan a shipment with us <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="px-4 py-12 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-orange-50 px-6 py-12 sm:px-12 border border-orange-200/60 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-orange-600">
              Ready to begin?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#071f38]">
              Let&apos;s plan your next freight move.
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-lg">
              Get in touch with our freight management team to lock in schedules, clarify load requirements, and receive a prompt quote.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-[#071f38] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              Contact Us <FiSend aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}