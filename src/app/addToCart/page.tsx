// Hackathone-3\src\app\addToCart\page.tsx
'use client'
import CartContent from '@/components/CartContent';
import React, { useEffect } from "react";
import {  sanityUserPost } from "@/app/services/userApi";


const CartProducts = () => {

    useEffect(()=>{
        sanityUserPost()
    },[])

    return (
        <>
            <main>
                <section className="pt-9 lg:pt-16 pl-6 lg:pl-[188px] pr-6 lg:pr-[193px] bg-[#F9F9F9] text-[#2A254B]">
                    <h1 className="text-[24px] leading-[33.6px] lg:text-[36px] lg:leading-[50.4px]">Your shopping cart</h1>
                    <CartContent />
                </section>
            </main>
        </>
    );
};

export default CartProducts;
