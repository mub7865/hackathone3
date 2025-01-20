import React from 'react'
import Image from 'next/image'

const Features = () => {

    return (


        <>
            <div className='px-[24px] py-[49px] max-md:py-[60px] max-md:px-[60px] xl:py-[80px] xl:px-[82px]'>
                <h4 className='sm:text-center font-normal sm:text-[24px] text-[20px]  sm:leading-[33.6px] leading-7 text-[#2A254B]'>What makes our brand different</h4>

                <div className='mt-[36px] max-md:mt-[57px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  xl:gap-[22px] gap-[26px]'>
                    {/* 1 */}
                    <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/Delivery.png" alt='Delivery' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Next day as standard</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Order before 3pm and get your order the next day as standard</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=' lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/Checkmark--outline.png" alt='Checkmark--outline' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Made by true artisans</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Handmade crafted goods made with real passion and craftmanship</p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/Purchase.png" alt='Purchase' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Unbeatable prices</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>For our materials and quality you won&apos;t find better prices anywhere</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/Sprout.png" alt='Sprout' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Next day as standard</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>We use 100% recycled to ensure our footprint is more manageable</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Features
