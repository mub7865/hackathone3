import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface Product {
  id: number;
  productName: string;
  imageUrl?: string;
  Productprice?: number;
}

const Cart = ({ product }: { product: Product }) => {
  return (
    <>
      <div key={product.id} className="flex flex-col gap-6 text-[#2A254B]">
        <Link href={`/products/${product.id}`} key={product.id}>
          <Image
            src={product.imageUrl || 'default-image.jpg'} // Add fallback for missing image
            alt={product.productName}
            width={305}
            height={375}
            className='className="w-[163px] h-[201px] lg:w-[305px] lg:h-[375px] cursor-pointer mb-6'
          />
          <h4 className='text-[14px] lg:text-[20px] leading-5 lg:leading-7 font-normal cursor-pointer mb-6'>{product.productName}</h4>
          <p className=' text-[12px] lg:text-[18px] leading-5 lg:leading-7 font-normal cursor-pointer'>
            {product.Productprice ? `£${product.Productprice}` : 'Price not available'}
          </p>
        </Link>
      </div>
    </>
  )
}

export default Cart;
