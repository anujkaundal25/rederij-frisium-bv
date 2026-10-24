import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const contacts = [
  {
    label: 'WhatsApp us',
    href: 'https://wa.me/919362839070',
    icon: FaWhatsapp,
    className: 'bg-[#25d366] hover:bg-[#1fb95a]',
    external: true,
  },
  {
    label: 'Email us',
    href: 'mailto:Daniel@rederijfrisiumbvcom.com',
    icon: FiMail,
    className: 'bg-[#071f38]',
    external: false,
  },
]

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      {contacts.map((contact) => {
        const Icon = contact.icon

        return (
          <a
            key={contact.label}
            href={contact.href}
            aria-label={contact.label}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noreferrer' : undefined}
            className={`group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 ease-out hover:w-44 focus-visible:w-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071f38] sm:h-14 sm:w-14 ${contact.className}`}
          >
            <span className="w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:w-auto group-hover:opacity-100 group-focus-visible:mr-3 group-focus-visible:w-auto group-focus-visible:opacity-100">
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
