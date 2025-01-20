import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import Cart from './cart'; // Cart component ko use kiya gaya hai


interface cardItems {
  id:string,
  name: string;
  price: number;
 slug: string;
 imageUrl:string
}

const Products = async () => {
  const data: cardItems[] = await client.fetch(`*[_type == "product"]{
    slug,
  name,
  price,
  "categoryName": category->name,
  "categorySlug": category->slug.current,
  "imageUrl": image.asset->url,
  tags,
  description,
  features,
  dimensions,
   
}
`);

  return (
    <div className="w-full pt-6 pb-7 px-6 sm:px-[80px]">
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[15px] ">

        {data.reverse().slice(0, 4).map((product: cardItems, index: number) => (
          <Cart key={index} product={product} />
        ))}
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
