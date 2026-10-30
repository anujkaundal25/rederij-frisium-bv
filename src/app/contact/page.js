import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiClipboard,
  FiMapPin,
  FiPackage,
  FiTruck,
  FiMail,
  FiPhone,
  FiClock,
  FiCheckCircle,
  FiSend,
} from 'react-icons/fi'
import InnerPageLayout from '@/components/ui/InnerPageLayout'

export const metadata = {
  title: 'Contact | Brian Bartlett',
  description: 'Get ready to plan a freight shipment with Brian Bartlett.',
}

// Unsplash image sources (whitelisted in next.config.mjs)
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85',
  highwayTruck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85',
}

const quoteDetails = [
  {
    title: 'Pickup and delivery',
    text: 'Origin, destination, and preferred pickup or delivery target dates.',
    icon: FiMapPin,
    badge: 'Route Specs',
  },
  {
    title: 'Freight information',
    text: 'Cargo description, dimensions, payload weight, and piece counts.',
    icon: FiPackage,
    badge: 'Cargo Volume',
  },
  {
    title: 'Handling requirements',
    text: 'Equipment needs, loading dock requirements, or special transit details.',
    icon: FiTruck,
    badge: 'Trailer Setup',
  },
]

const contactChannels = [
  {
    title: 'Email Us',
    value: 'brian@BARTLETTHOLDINGS.org',
    subtext: 'Email us about your freight requirements',
    href: 'mailto:brian@BARTLETTHOLDINGS.org',
    icon: FiMail,
    accent: 'border-orange-500/30 bg-orange-50/50',
    iconBg: 'bg-orange-500 text-white',
  },
  {
    title: 'Call Direct',
    value: '+1 470-244-6768',
    subtext: 'Call our team about your shipment',
    href: 'tel:+14702446768',
    icon: FiPhone,
    accent: 'border-slate-200 bg-white',
    iconBg: 'bg-slate-900 text-orange-400',
  },
  {
    title: 'Headquarters',
    value: 'BRIAN BARTLETT HOLDINGS',
    subtext: '106 Hampton Square Dr Lawrenceville Ga 30046',
    href: 'https://www.google.com/maps/search/?api=1&query=106+Hampton+Square+Dr,+Lawrenceville,+GA+30046&utm_source=chatgpt.com',
    icon: FiMapPin,
    accent: 'border-slate-200 bg-white',
    iconBg: 'bg-slate-900 text-orange-400',
  },
]

const dispatchQuestions = [
  'Is the load ready for immediate pickup?',
  'Does the freight require specialized temperature control?',
  'Is this a single shipment or a recurring logistics route?',
  'Are there strict gate or loading dock time slots?',
]

export default function ContactPage() {
  return (
    <InnerPageLayout
      eyebrow="Contact & Shipment Planning"
      title="Let's Get Your Freight Moving"
      description="Every efficient freight move starts with accurate details. Share your route and cargo specifications so our dispatch team can align the optimal equipment."
      image={IMAGES.hero}
    >
      {/* ================= CONTACT INFO CARDS SECTION ================= */}
      <section className="relative px-4 py-16 sm:px-8 lg:px-20 lg:py-20 bg-slate-50/60">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Direct Channels
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
              Get in Touch with Our Team
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Reach out through your preferred channel for instant dispatch assistance or customized rate quotes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={channel.icon === FiMapPin ? '_blank' : '_self'}
                  rel="noreferrer"
                  className={`group relative flex flex-col justify-between rounded-3xl p-8 shadow-sm border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${channel.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${channel.iconBg}`}>
                        <Icon className="text-2xl" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-slate-400 group-hover:text-orange-600 transition-colors">
                        Connect →
                      </span>
                    </div>

                    <h3 className="mt-6 text-xs font-bold tracking-widest text-slate-400">
                      {channel.title}
                    </h3>
                    <p className="mt-1 text-xl font-extrabold text-[#071f38] group-hover:text-orange-600 transition-colors">
                      {channel.value}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {channel.subtext}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Direct Desk</span>
                    <FiCheckCircle className="text-orange-500" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= SHIPMENT DETAILS REQUIREMENTS SECTION ================= */}
      <section className="px-4 py-16 sm:px-8 lg:px-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px]">
          
          {/* Header */}
          <div className="grid gap-6 md:grid-cols-12 md:items-end mb-14 border-b border-slate-100 pb-8">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-600 border border-orange-200/60">
                Start Here
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#071f38] sm:text-4xl">
                What are you looking to move?
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm leading-relaxed text-slate-600">
                Whether you have an urgent single shipment or require scheduled recurring freight distribution, gathering the parameters below helps speed up dispatch approval.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {quoteDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <article
                  key={detail.title}
                  className="group relative flex flex-col justify-between rounded-3xl bg-slate-50 p-8 border border-slate-200/80 transition-all duration-300 hover:bg-white hover:border-orange-500/40 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071f38] text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Icon className="text-2xl" aria-hidden="true" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 group-hover:text-orange-500 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="mt-6 inline-block text-[11px] font-bold tracking-wider text-orange-600">
                      {detail.badge}
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#071f38]">
                      {detail.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {detail.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>Required Input</span>
                    <FiCheckCircle className="text-slate-300 group-hover:text-orange-500 transition-colors" />
                  </div>
                </article>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= REQUEST PREPARATION & QUESTIONS SECTION ================= */}
      <section className="bg-slate-900 text-white px-4 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Visual Highway Image */}
            <div className="relative lg:col-span-5">
              <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <Image
                  src={IMAGES.highwayTruck}
                  alt="Truck transporting freight across a highway"
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-slate-900/90 p-6 shadow-xl border border-white/10 backdrop-blur-md max-w-xs">
                <p className="text-xs font-bold tracking-wider text-orange-400">
                  Precision Routing
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Detailed information guarantees the correct vehicle clearance and driver schedule.
                </p>
              </div>
            </div>

            {/* Questions Checklist */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-orange-400 border border-orange-500/20">
                Request Preparation
              </span>

              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:leading-tight">
                Help us understand the full journey.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Freight type and route parameters directly impact trailer equipment, permit requirements, and transit timing. Consider these questions before contacting us:
              </p>

              <div className="mt-8 space-y-3">
                {dispatchQuestions.map((question) => (
                  <div
                    key={question}
                    className="flex items-start gap-3.5 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm"
                  >
                    <FiClipboard className="mt-0.5 shrink-0 text-orange-400 text-lg" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-200">{question}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION / QUOTE LINK BANNER ================= */}
      <section className="px-4 py-12 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-orange-50 px-6 py-12 sm:px-12 border border-orange-200/60 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-orange-600">
              Need an Immediate Quote?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#071f38]">
              Share your shipment details with our team.
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-lg">
              Use our full interactive quote calculator form on the homepage to submit your load parameters instantly.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex-shrink-0">
            <Link
              href="/#quote"
              className="inline-flex items-center gap-3 rounded-xl bg-[#071f38] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              Go to Quote Form <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}