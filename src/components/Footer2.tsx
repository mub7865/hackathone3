import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaPinterestSquare, FaSkype, FaTwitter } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { LuInstagram } from 'react-icons/lu';


const Footer2 = () => {
  return (
    <div>
          <footer className='bg-[#2A254B] w-[390px] lg:w-full pt-10 lg:pt-[53px] pr-[65px] lg:pr-[168px] pl-6 lg:pl-[80px]'>
                <section className='text-white grid grid-cols-2 gap-x-[29px] lg:flex justify-between'>
                    <div className='space-y-4'>
                        <h1>Avion</h1>
                        <ul className='space-y-3'>
                            <li>21 New York Street</li>
                            <li>New York City</li>
                            <li>United States of America</li>
                            <li>432 34</li>
                        </ul>
                    </div>

                    <div className='space-y-[22px]'>
                        <p>Social links</p>
                        <div className='lg:flex gap-x-6 grid grid-cols-3 gap-y-6 '>
                        <FaLinkedin size={24}/>
                        <ImFacebook2 size={24}/>
                        <LuInstagram size={24} />
                        <FaSkype size={24}/> 
                        <FaTwitter size={24}/>
                       <FaPinterestSquare size={24}/>
                        </div>
                    </div>
                    <div className='space-y-3 ' >
                        <p>Menu</p>
                        <ul className='text-lg space-y-3'>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Recently viewed</li>
                            <li>All products</li>
                        </ul>
                    </div>
                    <div className='space-y-3 lg:hidden '>
                        <p>Categories</p>
                        <ul className='text-lg space-y-3'>
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                        </ul>
                    </div>


                    <div className='space-y-3   '>
                        <p>Our company</p>
                        <ul className='text-lg space-y-3'>
                            <Link href='/about'><li>About us</li></Link> 
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className='mt-[67px] border-b border-[#4E4D93]' />
                </section>
                <p className='text-white mt-4 lg:text-center' >Copyright 2022 Avion LTD</p>

            </footer>
      
    </div>
  )
}

export default Footer2


