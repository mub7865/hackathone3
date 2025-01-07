import React from 'react'

const About2 = () => {
  return (
    <div>
      
      <section className='sm:py-[52px] sm:px-[72px] sm:bg-[#F9F9F9]'>
                    <div className='py-12 sm:py-16 max-sm:px-9 bg-white space-y-[72px]'>
                        <div className='space-y-4 sm:w-[571px] sm:mx-auto sm:text-center'>
                            <h1>Join the club and get the benefits</h1>
                            <p className='text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                        </div>

                        <div className='flex lg:ml-[473px] mx-[24px] mt-[28px] lg:mt-10'>
            <div className='lg:w-[354px] h-[56px] w-[224px] bg-[#F9F9F9] '>
                <input type="text" placeholder='your@email.com' className='bg-transparent h-full w-full pl-[32px] text-[#00000066] border-none' />
            </div>
            <button className='font-normal h-[60px] text-[16px] leading-6 py-4 lg:px-8 px-5 flex gap-[10px] bg-[#2A254B] text-white'>Sign up</button>

            </div>
                    </div>
                </section>
    </div>
  )
}

export default About2
