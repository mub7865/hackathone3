'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Listing2 = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Content Box */}
        <div className="w-full md:w-1/2 bg-[#2A254B] rounded-lg p-6 md:p-8 lg:p-10 flex flex-col justify-between">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
              It started with a small idea
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-prose">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
          </div>
          
          <Link href='/products' className="mt-6 md:mt-8 block"> 
            <button className="w-full md:w-auto px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2 group">
              View collection
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 relative">
          {/* Desktop/Tablet Image */}
          <div className="hidden md:block w-full h-full relative rounded-lg overflow-hidden">
            <Image 
              src="/listing2.png" 
              alt="Our Story" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden w-full aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image 
              src="/listing2.png" 
              alt="Our Story" 
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Listing2
