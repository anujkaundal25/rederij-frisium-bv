'use client'

import React, { useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'

const menu = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Our Process', url: '/process' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full px-4 sm:px-8 lg:px-20">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 pt-4 sm:pt-5">
        <a
          href="/"
          className="flex min-w-0 flex-col justify-center leading-none text-white"
          onClick={closeMenu}
        >
          <span className="truncate text-base font-black tracking-[0.06em] sm:text-xl md:text-2xl">
            Rederij Frisium B.V.
          </span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.2em] text-gray-200 sm:text-[10px] md:text-[11px]">
            Trucking Transportation
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 rounded-full border border-white/15 bg-black/35 px-5 py-3 shadow-2xl backdrop-blur-md xl:flex"
        >
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className="whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-[#f3c969]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            className="inline-flex whitespace-nowrap rounded-full bg-white px-5 py-3 text-[10px] font-bold tracking-[0.15em] text-[#071f38] transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
        >
          {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(88vw,400px)] flex-col bg-[#071f38] px-6 pb-8 pt-6 text-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/15 pb-5">
          <div className="min-w-0">
            <p className="truncate text-lg font-black tracking-wider">
              Rederij Frisium B.V.
            </p>
            <p className="mt-1 text-[10px] tracking-[0.2em] text-white/65">
              Trucking Transportation
            </p>
          </div>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="flex flex-col">
          {menu.map((item, index) => (
            <a
              key={item.label}
              href={item.url}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/10 py-4 text-lg font-medium transition-colors hover:text-[#f3c969]"
              style={{ transitionDelay: isMenuOpen ? `${index * 35}ms` : '0ms' }}
            >
              {item.label}
              <FiArrowUpRight className="text-sm text-orange-400" aria-hidden="true" />
            </a>
          ))}
        </div>

        <a
          href="/contact"
          onClick={closeMenu}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-sm font-bold tracking-wider transition-colors hover:bg-orange-600"
        >
          Contact Us
        </a>
      </nav>
    </header>
  )
}

export default Header
