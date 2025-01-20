'use client';

import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { useEffect, useState, Suspense } from 'react';
import Cart from '@/components/cart';

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
  const searchParams = useSearchParams();
  const categoryName = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query;
        let params = {};

        if (searchQuery) {
          // Search query takes precedence over category filter
          query = `*[_type == "product" && name match $searchPattern] {
            _id,
            name,
            "imageUrl": image.asset->url,
            price,
            "slug": slug.current,
            "categoryName": category->name
          }`;
          params = { searchPattern: `*${searchQuery}*` };
        } else if (categoryName) {
          // Filter by category if no search query
          query = `*[_type == "product" && category->name == $categoryName] {
            _id,
            name,
            "imageUrl": image.asset->url,
            price,
            "slug": slug.current,
            "categoryName": category->name
          }`;
          params = { categoryName };
        } else {
          // Show all products if no search or category filter
          query = `*[_type == "product"] {
            _id,
            name,
            "imageUrl": image.asset->url,
            price,
            "slug": slug.current,
            "categoryName": category->name
          }`;
        }

        const data = await client.fetch(query, params);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName, searchQuery]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : categoryName || 'All Products'}
          </h1>
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Cart key={product._id} product={{ ...product, id: product._id }} />
              ))}
            </div>
          ) : (
            <p>No products found {searchQuery ? `for "${searchQuery}"` : 'in this category'}.</p>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default CategoryContent;
