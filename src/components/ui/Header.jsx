import React from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'

function Header() {
  const menu = [
    { label: 'Home', url: '/', hasDropdown: true },
    { label: 'About', url: '/services', hasDropdown: true },
    { label: 'Services', url: '/pages', hasDropdown: true },
    { label: 'Our Process', url: '/blog', hasDropdown: false },
    { label: 'Contacts', url: '/contacts', hasDropdown: false },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 pt-5">
        <div className="flex items-center gap-3 text-white">
          {/* <img
            src="/logo.png"
            alt="REDERIJ FRISIUM B.V Logo"
            className="h-11 w-11 object-contain md:h-12 md:w-12"
          /> */}
          <div className="flex flex-col justify-center leading-none pl-4">
            <h2 className="text-xl font-black uppercase tracking-[0.08em] md:text-2xl">
              REDERIJ FRISIUM B.V
            </h2>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gray-200 md:text-[11px]">
              Trucking Transportation
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 rounded-full border border-white/15 bg-black/35 px-6 py-3 shadow-2xl backdrop-blur-md lg:flex">
          <ul className="flex items-center gap-7">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="flex items-center gap-1 text-sm font-medium text-white transition-colors duration-200 hover:text-[#f3c969]"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <FiChevronDown className="text-xs" />}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Search"
            className="text-white transition-colors duration-200 hover:text-[#f3c969]"
          >
            <FiSearch size={16} />
          </button>

          <button
            type="button"
            className="rounded-full bg-[#071f38] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#0b2d52]"
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header