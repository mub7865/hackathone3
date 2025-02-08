import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div>
            {/* for desktop */}
            <div className='max-sm:hidden bg-heroImage bg-cover bg-center w-full xl:py-[130px] md:py-[100px] md:pl-[350px] pr-[80px] xl:pl-[730px] '>

                <div className='max-md:hidden bg-white pl-[53px] md:px-[40px] py-[47px]'>
                    <div className='mb-[157px] md:mb-[100px]'>
                        <h2 className='font-normal text-[32px] leading-[44.8px] text-[#22202E] mb-5'>Luxury homeware for people who love timeless design quality</h2>
                        <p className='font-normal text-[18px] leading-[27px] text-[#5B5676]'>Shop the new Spring 2022 collection today</p>
                    </div>
                    <Link href="/products">
                        <button
                            className="py-4 px-[100px] mt-10 lg:px-8 mx-auto lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal rounded-md bg-[#F9F9F9]  text-[#2A254B] hover:bg-[black]/35 transition-all duration-300 group"
                        >
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

            </div>
            {/* for mobile */}
            <div className='lg:hidden md:hidden w-full '>
                <div className='w-full mt-[47px] mb-8 flex flex-col gap-8 pl-3 sm:px-[50px]'>
                    <h2 className='font-normal text-[24px] leading-[29.52px] text-[#22202E] '>Luxury homeware for people who love timeless design quality</h2>
                    <p className='font-normal text-[16px] leading-[21.6px] text-[#5B5676]'>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
                    <Link href='/products' className='flex items-center justify-center'>
                        <button className='px-4 py-3  bg-[#F9F9F9] text-[#2A254B] '>
                            View collection
                        </button>
                    </Link>
                </div>
                <Image src="/hero2.png" alt="Hero Image" width={100} height={304} className='w-full ' />
            </div>

        </div>
    )
}

export default Hero
