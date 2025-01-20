'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

interface Product {
  id: string;
  name: string;
  price: number;
  slug: string | { current: string };
  imageUrl: string;
}

const Cart = ({ product }: { product: Product }) => {
  const getSlug = (slug: string | { current: string }) => {
    return typeof slug === 'string' ? slug : slug.current;
  };

  const handleAddToWishlist = () => {
    try {
      const existingWishlist = localStorage.getItem('wishlist');
      let wishlistItems = [];
      
      if (existingWishlist) {
        wishlistItems = JSON.parse(existingWishlist);
        if (!Array.isArray(wishlistItems)) wishlistItems = [];
      }
      
      const isProductInWishlist = wishlistItems.some((item: Product) => item.id === product.id);
      
      if (!isProductInWishlist) {
        wishlistItems.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        window.dispatchEvent(new Event('wishlistUpdated'));
      }
      
      window.location.href = '/wishlist';
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4 text-[#2A254B] p-4 rounded-lg hover:shadow-lg transition-all duration-300">
      <Link 
        href={`/products/${getSlug(product.slug)}`}
        key={getSlug(product.slug)}
        className="flex flex-col items-center"
      >
        <div className="relative w-full aspect-[3/4] mb-4">
          <Image
            src={product.imageUrl || 'default-image.jpg'} 
            alt={product.name}
            fill
            className='object-cover rounded-md hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className="space-y-2 text-center w-full">
          <h4 className='text-lg md:text-xl font-medium line-clamp-2 hover:text-[#231F3F]'>{product.name}</h4>
          <p className='text-base md:text-lg font-semibold'>
            £{product.price ? product.price.toFixed(2) : 'Price not available'}
          </p>
        </div>
      </Link>
      <button
        onClick={handleAddToWishlist}
        className="w-full flex items-center justify-center gap-3 bg-[#2A254B] text-white py-2.5 md:py-3 rounded-md hover:bg-[#231F3F] transition-all duration-200 text-sm md:text-base"
      >
        <AiOutlineHeart size={20} className='text-[orange] animate-pulse'/>
        <span className="font-medium">Add to Wishlist</span>
      </button>
    </div>
  );
};

export default Cart;
