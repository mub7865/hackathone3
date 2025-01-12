import About2 from '@/components/About2';
import Features from '@/components/Features';
import Footer2 from '@/components/Footer2';
import Listing2 from '@/components/Listing2';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const About = () => {
    return (
        <>
            <main className='w-[390px] lg:w-full'>
                <section className='w-[390px] lg:w-full lg:space-y-10 px-6 lg:px-[128px] py-8 lg:py-[88px] lg:flex justify-between'>
                    <h1 className=' lg:w-[704px] font-normal lg:text-[36px] lg:leading-[50.4px] text-[#2A254B] '>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
                    <Link href='/cart'>
                    <button className=' h-[54px]  py-[16px] px-[100px] lg:px-8 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal  bg-[#F9F9F9] text-[#2A254B] '>
                        View collection
                    </button>
                    </Link>
                </section>

                <Listing2 />
                <section className='lg:grid grid-cols-2'>
                    <Image src="/about-2.png" alt="failed" width={720} height={603} />

                    <div className='bg-[#F9F9F9] px-6 lg:pl-[84px] lg:pr-[100px] py-12 lg:pt-[72px] lg:pb-14 space-y-12 lg:space-y-[25px] flex flex-col justify-between'>
                        <div className='flex flex-col gap-[25px]'>
                            <h3 className='text-[#2A254B] text-[24px] lg:leading-[33.6px] '>Our service isn’t just personal, it’s actually hyper personally exquisite</h3>
                            <p className='text-[#505977] text-[18px] lg:leading-[21.6px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                            <p className='text-[#505977] text-[18px] lg:leading-[21.6px]'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <div>
                            <button className='h-[54px]  py-[16px] px-[100px] lg:px-8 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal  bg-white text-[#2A254B] '>Get in touch</button>
                        </div>
                    </div>
                </section>
                <Features />
                <About2 />



            </main>

            <Footer2 />
        </>

    )
}

export default About