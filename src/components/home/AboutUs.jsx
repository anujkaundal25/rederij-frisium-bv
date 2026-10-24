import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { HiOutlineArrowUpRight, HiChevronDoubleRight } from 'react-icons/hi2'

function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto text-slate-800">
      
      {/* 1. Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-[#071f38] font-semibold text-sm mb-3">
          <FaTruck className="text-[#071f38] text-base"/>
          <span>About Us</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl">
          Delivering Reliable Freight Solutions Around The World
        </h2>
      </div>

      {/* 2. Grid Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Image with Orange Accent Frame */}
        <div className="lg:col-span-4 relative pt-4 pl-4">
          {/* Orange Accent Frame Background */}
          <div className="absolute top-0 left-0 w-[90%] h-[90%] border-2 border-[#071f38] rounded-2xl -z-0" />
          
          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
              alt="Logistics Team on Site" 
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>

        {/* Middle Column: Text, Feature List & CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            We deliver tailored transportation and supply chain management services designed to optimize performance, minimize delays, and ensure safe, timely deliveries for every shipment.
          </p>

          {/* Highlight Callout Box */}
          <div className="bg-orange-50/70 border-l-4 border-[#071f38] p-5 rounded-r-xl mb-6">
            <p className="font-semibold text-slate-900 text-sm md:text-base leading-snug">
              Empower your business with custom freight, express delivery, and transparency.
            </p>
          </div>

          {/* Bulleted Feature List */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-slate-800 font-medium text-sm">
              <HiChevronDoubleRight className="text-[#071f38] text-base shrink-0"/>
              <span>Advanced Automated Fleet Tracking Systems</span>
            </li>
            <li className="flex items-center gap-3 text-slate-800 font-medium text-sm">
              <HiChevronDoubleRight className="text-[#071f38] text-base shrink-0"/>
              <span>Seamless E-Commerce Platform Integration</span>
            </li>
            <li className="flex items-center gap-3 text-slate-800 font-medium text-sm">
              <HiChevronDoubleRight className="text-[#071f38] text-base shrink-0"/>
              <span>From Pickup To Delivery, We've Got You Covered</span>
            </li>
          </ul>

          {/* Action Button */}
          <div>
            <button 
              type="button"
              className="inline-flex items-center gap-3 bg-[#071f38] hover:bg-[#071f38] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>More About Us</span>
              <span className="bg-white p-2 rounded-full text-[#071f38] group-hover:rotate-45 transition-transform duration-300">
                <HiOutlineArrowUpRight className="text-xs"/>
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Exact Layout Matching Reference */}
        <div className="lg:col-span-4 relative">
          <div className="relative pl- pr-4 pb-6">

          <div className="bg-[#071f38] absolute -top-10 -right-10 text-white p-5 rounded-2xl shadow-xl z-20 mb-4 inline-block w-full max-w-[170px] border-5 border-white">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">25+</h3>
            <p className="text-xs md:text-sm text-slate-300 font-medium mt-1">Years Experience</p>
          </div>

            {/* Orange Border Frame (Bottom-Right Offset) */}
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] border-2 border-[#071f38] rounded-2xl z-0" />

            {/* Image Container */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-md">
              <img 
                src="/about.webp" 
                alt="Cargo Ship at Port" 
                className="w-full h-[440px] object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs