'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  quantity: number;
  description?: string;
}


export default function WishlistPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const wishlist = localStorage.getItem('wishlist');
        if (wishlist) {
          const items = JSON.parse(wishlist);
          const itemsWithQuantity = items.map((item: Product) => ({
            ...item,
            quantity: 1
          }));
          setProducts(Array.isArray(itemsWithQuantity) ? itemsWithQuantity : []);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error loading wishlist:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
    window.addEventListener('wishlistUpdated', loadWishlist);
    return () => window.removeEventListener('wishlistUpdated', loadWishlist);
  }, []);

  const handleDelete = (productId: string) => {
    try {
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem('wishlist', JSON.stringify(updatedProducts));
      window.dispatchEvent(new Event('wishlistUpdated'));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2A254B]"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-lg md:text-xl text-gray-600 mb-4">Your wishlist is empty</p>
        <a href="/categories" className="text-[#2A254B] hover:underline font-medium">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-10">
      <h1 className="text-xl md:text-2xl font-semibold text-[#2e2a49] mb-6">My Wishlist</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-[#EBE8F4]">
            <tr className="text-[#726E8D]">
              <th className="text-left py-4 px-4 text-base md:text-lg font-semibold">Product</th>
              <th className="text-left py-4 px-4 text-base md:text-lg font-semibold">Name</th>
              <th className="text-left py-4 px-4 text-base md:text-lg font-semibold">Price</th>
              <th className="text-left py-4 px-4 text-base md:text-lg font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#EBE8F4]">
            {products.map((product) => (
              <tr key={product.slug} className="hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="relative w-20 h-20 md:w-32 md:h-32">
                    <Image 
                      src={product.imageUrl} 
                      alt={product.name} 
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <h4 className="text-sm md:text-base font-medium text-[#2A254B]">{product.name}</h4>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm md:text-base font-medium text-[#2A254B]">
                    £{product.price.toFixed(2)}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Delete item"
                  >
                    <MdDelete size={24} className="text-red-500 hover:text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
