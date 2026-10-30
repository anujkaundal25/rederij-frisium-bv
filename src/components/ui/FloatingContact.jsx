'use client'

import React, { useState, useEffect } from 'react'
import { FiMail, FiPhone, FiArrowUp } from 'react-icons/fi'

const contacts = [
  {
    label: 'Call us',
    href: 'tel:+14702446768',
    icon: FiPhone,
    className: 'bg-[#071f38] hover:bg-orange-600',
    external: false,
  },
  {
    label: 'Email us',
    href: 'mailto:brian@BARTLETTHOLDINGS.org',
    icon: FiMail,
    className: 'bg-[#071f38] hover:bg-orange-600',
    external: false,
  },
]

function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', checkScrollPosition)
    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      {/* Scroll to top button - Fixed icon-only layout without hover expand */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#071f38] text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:bg-orange-600 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071f38] sm:h-14 sm:w-14 cursor-pointer"
        >
          <FiArrowUp className="text-2xl sm:text-[26px]" aria-hidden="true" />
        </button>
      )}

      {/* Contact buttons (expandable on hover) */}
      {contacts.map((contact) => {
        const Icon = contact.icon

        return (
          <a
            key={contact.label}
            href={contact.href}
            aria-label={contact.label}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noreferrer' : undefined}
            className={`group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 ease-out hover:w-44 hover:scale-105 focus-visible:w-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071f38] sm:h-14 sm:w-14 ${contact.className}`}
          >
            <span className="w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:w-auto group-hover:opacity-100 group-focus-visible:mr-3 group-focus-visible:w-auto group-focus-visible:opacity-100 cursor-pointer">
              {contact.label}
            </span>
            <span className="grid h-12 w-12 shrink-0 place-items-center sm:h-14 sm:w-14">
              <Icon className="text-2xl sm:text-[26px]" aria-hidden="true" />
            </span>
          </a>
        )
      })}
    </div>
  )
}

export default FloatingContact