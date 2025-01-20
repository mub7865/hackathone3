// D:\New folder\Hackathone\Hackathone-3\src\components\ProductsListing.tsx
import { client } from '@/sanity/lib/client';
import Cart from './cart'; // Cart component ko use kiya gaya hai
import CategoryComponent from './CategoryComponent';


interface cardItems {
  id:string,
  name: string;
  price: number;
 slug: string;
 imageUrl:string;
 categoryName:string
 categorySlug:string
}

const ProductsListing = async () => {
    const categories = await client.fetch(`*[_type == "category"]{
      name,
      slug
    }`);
  
    const products: cardItems[] = await client.fetch(`*[_type == "product"]{
      slug,
      name,
      price,
      "categoryName": category->name,
      "categorySlug": category->slug.current,
      "imageUrl": image.asset->url,
      tags,
      description,
      features,
      dimensions
    }`);
  
    return (
      <div className="w-full pt-6 pb-7 px-6 sm:px-[80px]">
        {categories.map((category: { name: string; slug: string }) => {
          const categoryProducts = products.filter(product => product.categoryName === category.name);
  
          return (
            <div key={category.slug}>
              <CategoryComponent categoryName={category.name} />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]">
                {categoryProducts.map((product: cardItems, index: number) => (
                  <Cart key={index} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  export default ProductsListing
