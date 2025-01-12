import React from 'react'
import Image from 'next/image'
import Features from '@/components/Features'
import About2 from '@/components/About2'
import ProductsModule from '@/components/Products'; // Renamed to ProductsModule


import Link from 'next/link'

const Products = () => {

  return (

    <div>
    
     
      <main className='w-[390px] lg:w-full'>
        {/* About Hero */}
        <div className='w-[390px] lg:w-full flex flex-col lg:flex-row mb-10'>
          <Image src={'/productListing.png'} alt='Image Not Found' width={721} height={759}></Image>
          <div className='lg:py-[51px] pt-[28px] pb-[56px] pl-[24px] lg:pl-[62px] '>
            <div className=''>
              <div className='lg:w-[281px] w-[188px] flex flex-col gap-3'>
                <h1 className='lg:text-[36px] text-[24px] leading-[33.6px] lg:leading-[44.6px] text-[#2A254B]'>The Dandy Chair</h1>
                <p className='text-[20px] leading-[24px] lg:text-[24px] lg:leading-[34.2px] text-[#12131A]'>£250</p>
              </div>
              <div className='mt-7 lg:mt-[54px] lg:w-[522px] w-[342px] flex flex-col gap-3 lg:gap-4'>
                <h2 className='text-[16px] leading-[22px] text-[#2A254B]'>Product description</h2>
                <p className='text-[16px] leading-[21px] text-[#2A254B]'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className='list-disc ml-5  text-[#2A254B]'>
                  <li className='text-[16px]  leading-[21px]' >Premium material</li>
                  <li className='text-[16px]  leading-[21px]'>Handmade upholstery</li>
                  <li className='text-[16px]  leading-[21px]'>Quality timeless classic</li>
                </ul>
              </div>
              <div className='lg:w-[241px] w-[342px] flex flex-col lg:gap-7 text-[#2A254B]   gap-4'>
                <h2 className='text-[16px] leading-[22.4px]  lg:leading-[19.68px]'>Dimensions</h2>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-[15px] lg:gap-4'>
                    <h3 className='text-sm lg:leading-[17.22px] leading-[19.6px]'> Height</h3>
                    <p className='text-[#505977] text-[14px] lg:text-[16px]  leading-[21.6px]'>110cm</p>
                  </div>
                  <div className='flex flex-col gap-[15px] lg:gap-4'>
                    <h3 className='text-sm lg:leading-[17.22px] leading-[19.6px]'> Height</h3>
                    <p className='text-[#505977] text-[14px] lg:text-[16px]  leading-[21.6px]'>110cm</p>
                  </div>
                  <div className='flex flex-col gap-[15px] lg:gap-4'>
                    <h3 className='text-sm lg:leading-[17.22px] leading-[19.6px]'> Height</h3>
                    <p className='text-[#505977] text-[14px] lg:text-[16px]  leading-[21.6px]'>110cm</p>
                  </div>
                </div>
              </div>
              <div className='mt-8 lg:mt-[50px] lg:h-full flex flex-col gap-4 lg:gap-[px] lg:flex-row '>
                  <div className='flex w-full flex-col lg:items-center lg:flex-row lg:gap-[22px] gap-3'>
                    <h2 className='max-sm:hidden lg:text-[16px] lg:leading-[19.68px]'>Amount:</h2>
                    <h2 className='lg:hidden text-[16px] leading-[19.68px]'>Quantitity:</h2>

                    <div className='bg-[#F9F9F9] w-full lg:w-[122px] flex gap-8 lg:gap-0 lg:justify-between justify-center px-4 py-3 '>
                      <p>-</p> <p>1</p> <p>+</p>
                    </div>
                  </div>
                  <Link href='/cart'>
                  <button className=' bg-[#2A254B] w-[342px] lg:w-[143px] lg:px-0 flex gap-[10px] py-4 px-8 text-white justify-center'>Add to cart</button>
                  </Link>
                </div>

            </div>
          </div>

        </div>
        <ProductsModule />
        <Features />
        <About2 />
        
      </main>



    </div>
  )
}

export default Products
