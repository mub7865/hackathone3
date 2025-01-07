'use client';

import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

const Products = () => {
  const [cards, setCards] = useState([]); // State to hold fetched cards
  const [quantity, setQuantity] = useState(1); // State to handle quantity

  // Fetch data from Sanity
  useEffect(() => {
    async function fetchData() {
      const res = await client.fetch(
        `*[_type == 'landingPage'][0].LandingPage[0]{
          'cards': cards[] {
            'cardSecImg': cardSecImg.asset->url,
            'cardSecPrice': cardSecPrice,
            'cardSecHeading': cardSecHeading,
            'cardSecDes': cardSecDes,
          }
        }`
      );
    
      setCards(res?.cards || []); // Update state with fetched cards
    }
    fetchData();
  }, []);

  const addToCart=()=>{

  }

  return (
    <div className="w-390 lg:w-full pt-6 pb-7 px-6 lg:px-[80px]">
      <div className="grid grid-cols-2 grid-rows-2 gap-[15px] lg:flex lg:gap-5">
        {cards.length > 0 ? (
          cards.map((product: any, index: number) => (
          
                <div key={index} className="flex flex-col gap-2 lg:gap-6 text-[#2A254B]">
                  <Link href='/products/slug'>
                  <Image
                    src={product.cardSecImg}
                    alt={`Card Image ${index + 1}`}
                    width={305}
                    height={375}
                    className="w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] cursor-pointer"
                    priority
                  />
                  <h4 className="text-[20px] leading-7 font-normal cursor-pointer">{product.cardSecHeading}</h4>
                  <p className="text-[18px] leading-7 font-normal cursor-pointer">£{product.cardSecPrice}</p>
                  </Link>
                </div>                                
        
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <Link href="/products">
        <button className="py-4 px-[100px] mt-10 lg:px-8 mx-auto lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal bg-[#F9F9F9] text-[#2A254B]">
          View collection
        </button>
      </Link>
    </div>
  );
};

export default Products;
