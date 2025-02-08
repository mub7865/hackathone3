// C:\Users\Ubaid Ansari\Desktop\Hackathone Day 1 to 7\Hackathone-3\src\components\cart.tsx

'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import AddToCartBtn from './AddToCartBtn';
import Swal from 'sweetalert2';

interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  slug: string | { current: string };
  imageUrl: string;
}

const Cart = ({ product }: { product: Product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false); // State to track if the product is in the wishlist

  const getSlug = (slug: string | { current: string }) => {
    return typeof slug === 'string' ? slug : slug.current;
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const productInWishlist = wishlist.some((item: Product) => item.id === product.id);
    setIsInWishlist(productInWishlist);
  }, [product.id]);

  const handleAddToWishlist = () => {
    try {
      const existingWishlist = localStorage.getItem('wishlist');
      let wishlistItems = existingWishlist ? JSON.parse(existingWishlist) : [];

      if (!Array.isArray(wishlistItems)) wishlistItems = [];

      // Check if the product is already in the wishlist
      const isProductInWishlist = wishlistItems.some((item: Product) => item.id === product.id);

      if (isProductInWishlist) {
        // Confirm removal with SweetAlert
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to remove this product from your wishlist?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
          if (result.isConfirmed) {
            // Remove from wishlist
            const updatedWishlist = wishlistItems.filter((item: Product) => item.id !== product.id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            setIsInWishlist(false);
            Swal.fire('Removed!', 'The product has been removed from your wishlist.', 'success');
          }
        });
      } else {
        wishlistItems.push(product); // Add the new product
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems)); // Update local storage
        setIsInWishlist(true);
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
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

      <div className='w-full pr-2 flex items-center justify-between gap-3 bg-[#2A254B] text-white py-2.5 md:py-3 rounded-md hover:bg-[#231F3F] transition-all duration-200 text-sm md:text-base'>
        {/* Add To Cart */}
        <AddToCartBtn productId={product._id} />

        {/* Add To Wishlist */}
        <button
          onClick={handleAddToWishlist}
          className=''
        >
          {isInWishlist ? (
            <AiFillHeart size={20} className='text-red-500' />
          ) : (
            <AiOutlineHeart size={20} className='text-[orange] animate-pulse' />
          )}
        </button>

      </div>

    </div>
  );
};

export default Cart;