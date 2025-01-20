'use client'

import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaPinterestSquare, FaSkype, FaTwitter } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { LuInstagram } from 'react-icons/lu';

const Footer2 = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: ImFacebook2, href: '#', label: 'Facebook' },
    { icon: LuInstagram, href: '#', label: 'Instagram' },
    { icon: FaSkype, href: '#', label: 'Skype' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaPinterestSquare, href: '#', label: 'Pinterest' }
  ];

  const menuLinks = [
    'New arrivals',
    'Best sellers',
    'Recently viewed',
    'Popular this week',
    'All products'
  ];

  const categories = [
    'Crockery',
    'Furniture',
    'Homeware',
    'Plant pots',
    'Chairs',
    'Tables'
  ];

  const companyLinks = [
    { text: 'About us', href: '/about' },
    { text: 'Vacancies', href: '#' },
    { text: 'Contact us', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Returns policy', href: '#' }
  ];

  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-medium mb-4">Avion</h2>
            <address className="not-italic text-gray-300 space-y-2">
              <p>21 New York Street</p>
              <p>New York City</p>
              <p>United States of America</p>
              <p>432 34</p>
            </address>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Social links</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div className="hidden md:block">
            <h3 className="text-lg font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Our company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#4E4D93]">
          <p className="text-center text-gray-300">
            {new Date().getFullYear()} Avion LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer2
