import React from 'react'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTruck,
} from 'react-icons/fi'

const serviceLinks = [
  { label: 'Full Truckload', href: '/services#full-truckload' },
  { label: 'Less-than-Truckload', href: '/services#less-than-truckload' },
  { label: 'Regional Delivery', href: '/services#regional-delivery' },
  { label: 'Dry Van Transport', href: '/services#dry-van-transport' },
  { label: 'Refrigerated Transport', href: '/services#refrigerated-transport' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Process', href: '/process' },
  { label: 'Why Choose Us', href: '/#why-us' },
]

function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071f38]/90 via-[#071f38]/95 to-black" />

      <div className="mx-auto max-w-[1400px] px-4 pb-6 pt-14 sm:px-8 lg:px-20 lg:pt-20">
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.75fr_1.1fr] lg:gap-12">
          <div>
            <a href="/" className="inline-flex items-center gap-3" aria-label="Rederij Frisium home">
              <span className="text-xl font-black leading-tight tracking-[0.08em] sm:text-2xl">
                Rederij Frisium B.V
                <span className="mt-1 block text-[10px] font-medium tracking-[0.24em] text-white/70">
                  Trucking Transportation
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
              Dependable freight transportation with careful handling, clear
              communication, and service built around your delivery needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Our Services</h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-orange-400"
                  >
                    <FiArrowRight className="text-orange-500" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-orange-400"
                  >
                    <FiArrowRight className="text-orange-500" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Let&apos;s Get Your Freight Moving
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Tell us what you need to transport and explore the right solution
              for your shipment.
            </p>
            <a
              href="/services"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-orange-500 py-2 pl-5 pr-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Explore Services
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#071f38]">
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* <div className="grid gap-6 border-t border-white/15 py-7 sm:grid-cols-2">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500">
              <FiMapPin className="text-xl" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-bold">Freight Coverage</h2>
              <p className="mt-1 text-sm text-white/70">
                Regional and long-haul transportation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500">
              <FiGlobe className="text-xl" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-bold">Transportation You Can Rely On</h2>
              <p className="mt-1 text-sm text-white/70">
                From pickup to delivery, we keep your cargo moving.
              </p>
            </div>
          </div>
        </div> */}

        <div className="grid gap-4 border-t border-white/15 py-7 sm:grid-cols-2">
          <a
            href="mailto:Daniel@rederijfrisiumbvcom.com"
            className="flex min-w-0 items-center gap-3 text-sm text-white/75 transition-colors hover:text-orange-400"
          >
            <FiMail className="shrink-0 text-orange-500" aria-hidden="true" />
            <span className="break-all">Daniel@rederijfrisiumbvcom.com</span>
          </a>
          <a
            href="tel:9362839070"
            className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-orange-400"
          >
            <FiPhone className="shrink-0 text-orange-500" aria-hidden="true" />
            <span>936 283 9070</span>
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rederij Frisium B.V. All rights reserved.</p>
          <a href="/#top" className="transition-colors hover:text-orange-400">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
