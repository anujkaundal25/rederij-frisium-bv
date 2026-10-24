"use client";
import React, { useState } from 'react'
import { FiTruck, FiSend, FiPhoneCall, FiShield } from 'react-icons/fi'

function Cta() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    freightType: 'Dry Van',
    weight: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Freight Quote Request Submitted:', formData)
    alert('Thank you! Your quote request has been sent successfully.')
  }

  return (
    <section id="quote"
      className="relative w-full min-h-[650px] bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundImage: "url('/cta.webp')" }}
    >
      {/* Background Gradient Overlay using #071f38 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071f38]/95 via-[#071f38]/80 to-black/60 z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Form Box Container */}
        <div className="lg:col-span-6 bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">
              <FiTruck className="text-base" />
              <span>Instant Freight Quote</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071f38]">
              Get A Fast & Reliable Shipping Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Fill out the details below to receive competitive rates for your cargo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#071f38] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#071f38] focus:ring-1 focus:ring-[#071f38] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#071f38] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#071f38] focus:ring-1 focus:ring-[#071f38] transition-all"
                />
              </div>
            </div>

            {/* Phone & Freight Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#071f38] uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#071f38] focus:ring-1 focus:ring-[#071f38] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#071f38] uppercase mb-1">
                  Freight Type
                </label>
                <select
                  name="freightType"
                  value={formData.freightType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#071f38] focus:ring-1 focus:ring-[#071f38] transition-all bg-white"
                >
                  <option value="Dry Van">Dry Van</option>
                  <option value="Refrigerated Transport">Refrigerated Transport</option>
                  <option value="Flatbed Transport">Flatbed Transport</option>
                  <option value="Oversized Freight">Oversized Freight</option>
                </select>
              </div>
            </div>

            {/* Pickup & Drop-off Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#071f38] uppercase mb-1">
                  Pickup City / ZIP *
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  required
                  placeholder="e.g. Chicago, IL"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#071f38] focus:ring-1 focus:ring-[#071f38] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#071f38] uppercase mb-1">
                  Delivery City / ZIP *
                </label>
                <input
                  type="text"
                  name="dropoffLocation"
                  required
                  placeholder="e.g. Dallas, TX"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#071f38] focus:ring-1 focus:ring-[#071f38] transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#071f38] hover:bg-[#0b2d52] text-white font-bold text-sm uppercase tracking-wider py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-2"
            >
              <span>Submit Quote Request</span>
              <FiSend className="text-base" />
            </button>
          </form>
        </div>

        {/* Right Column: Information & Callouts */}
        <div className="lg:col-span-6 text-white space-y-8">
          <div>
            <span className="inline-block text-orange-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2">
              Ready to Move Your Freight?
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight">
              Nationwide Logistics <br />
              <span className="text-orange-500">Fast, Safe & On Time</span>
            </h2>
            <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
              Whether you need single load transport or regular fleet dispatching, our team ensures your freight moves safely and efficiently across every highway.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl border border-white/20 shrink-0">
                <FiPhoneCall className="text-2xl text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">24/7 Dispatch Support</h4>
                <p className="text-xs text-slate-300 mt-1">Direct contact with our logistics team at any hour.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl border border-white/20 shrink-0">
                <FiShield className="text-2xl text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Fully Insured Fleet</h4>
                <p className="text-xs text-slate-300 mt-1">Complete cargo protection and peace of mind guarantee.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Cta