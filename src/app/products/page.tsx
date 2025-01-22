// Hackathone-3\src\app\products\page.tsx
import Features from '@/components/Features';
import ProductsListing from '@/components/ProductsListing';
import SignUp from '@/components/SignUp';
import React from 'react';

const Products = () => {
    return (
        <div>
            <main className='w-full'>
                <ProductsListing />
                <Features />
                <SignUp />
            </main>
        </div>
    );
};

export default Products
