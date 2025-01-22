'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
}

const Navlinks = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.fetch<Category[]>(`*[_type == "category"] {
          _id,
          name,
          slug
        } | order(name asc)`);
        
        if (Array.isArray(data)) {
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <  >
      <Link href="/" className="hover:text-[#444242] transition-colors duration-200  md:text-[14px]  lg:text-[20px]">Home</Link>
          <Link href="/products" className="hover:text-[#444242] transition-colors duration-200  md:text-[14px]  lg:text-[20px]">All Products</Link>
          <Link href="/about" className="hover:text-[#444242] transition-colors duration-200  md:text-[14px]  lg:text-[20px]">About</Link>
  
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/categories?category=${encodeURIComponent(category.name)}`}
          className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1"
        >
          {category.name}
        </Link>
      ))}
    </>
  )
}
 
export default Navlinks
