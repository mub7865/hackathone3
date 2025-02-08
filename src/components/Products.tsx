'use client';

import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import Cart from '@/components/cart';
import Link from 'next/link';

interface Product {
  _id: string;
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
}

const CategoryContent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "product"] {
          _id,
          name,
          "imageUrl": image.asset->url,
          price,
          "slug": slug.current,
          "categoryName": category->name
        }`;

        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full pt-6 pb-7 px-6 sm:px-[80px]">
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[15px] ">
        {products.reverse().slice(0, 4).map((product) => (
          <Cart key={product._id} product={{ ...product, id: product._id }} />
        ))}
      </div>
    <div>
      
    </div>
    

      <Link href="/products">
      <button 
      className="py-4 px-[100px] mt-10 lg:px-8 mx-auto lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal rounded-md  bg-[black]/10  text-[#2A254B] hover:bg-[black]/35 transition-all duration-300 group"
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
  );
};

export default CategoryContent;




