// // Hackathone-3\src\app\products\page.tsx
// import Features from '@/components/Features';
// import ProductsListing from '@/components/ProductsListing';
// import SignUp from '@/components/SignUp';
// import React from 'react';

// const Products = () => {
//     return (
//         <div>
//             <main className='w-full'>
//                 <ProductsListing />
//                 <Features />
//                 <SignUp />
//             </main>
//         </div>
//     );
// };

// export default Products


import { Suspense } from 'react';
import CategoryContent from "@/components/CategoryContent";


export default function CategoriesPage() {


  return (
    <Suspense fallback={<div>Loading categories...</div>}>
    <CategoryContent/>
    </Suspense>
  );
}
