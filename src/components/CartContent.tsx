"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { MdDelete } from 'react-icons/md';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

interface Product {
    _id: string;
    slug: string;
    name: string;
    price: number;
    discription: string;
    imageUrl: string;
    quantity: number;
}

const CartContent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const addToCartString = localStorage.getItem('addToCart');
                if (!addToCartString) {
                    setIsLoading(false);
                    return;
                }

                const addToCart = JSON.parse(addToCartString);
                if (!Array.isArray(addToCart) || addToCart.length === 0) {
                    setIsLoading(false);
                    return;
                }

                const cartProducts = await client.fetch(
                    `*[_type == "product" && _id in $addToCart] {
                        _id,
                        slug,
                        name,
                        price,
                        discription,
                        "imageUrl": image.asset->url
                    }`,
                    { addToCart }
                );

                if (cartProducts && Array.isArray(cartProducts)) {
                    const productsWithQuantity = cartProducts.map((product: Product) => ({
                        ...product,
                        quantity: 1
                    }));
                    setProducts(productsWithQuantity);
                }
            } catch (error) {
                console.error('Error fetching cart products:', error);
                toast.error('Failed to load cart items');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const updateQuantity = (index: number, newQuantity: number) => {
        if (newQuantity < 1 || newQuantity > 99) return;
        
        setProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index] = {
                ...updatedProducts[index],
                quantity: newQuantity
            };
            return updatedProducts;
        });
    };

    const removeItem = (index: number) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
        
        // Update localStorage
        const updatedCart = updatedProducts.map(product => product._id);
        localStorage.setItem('addToCart', JSON.stringify(updatedCart));
        
        // Update cart count
        window.dispatchEvent(new Event('cartUpdated'));
        toast.success('Item removed from cart');
    };

    const totalAmount = (): number => {
        return products.reduce((acc, product) => acc + product.quantity * product.price, 0);
    };

    const handleCheckout = () => {
        if (products.length === 0) {
            toast.error('Your cart is empty');
            return;
        }
        // Store cart data in local storage
        const cartData = products.map(product => ({
            id: product._id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        }));
        localStorage.setItem('checkoutCart', JSON.stringify(cartData));
        // Redirect to checkout page
        window.location.href = '/checkout';
        // Payment method will be implemented here in the future using Stripe
        toast.success('Proceeding to checkout...');
    };

    if (isLoading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2A254B]"></div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-medium text-gray-700">Your cart is empty</h2>
                <p className="text-gray-500">Add some items to your cart to see them here</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-medium text-[#2A254B] mb-8">Shopping Cart</h1>
            
            <div className="bg-white rounded-lg shadow-sm">
                {/* Desktop Table Header */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 p-4 border-b text-sm font-medium text-[#2A254B]">
                    <div className="col-span-2">Product</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </div>

                {/* Cart Items */}
                <div className="divide-y">
                    {products.map((product, i) => (
                        <div key={product.slug} className="p-4">
                            <div className="grid md:grid-cols-4 gap-4 items-center">
                                {/* Product Info */}
                                <div className="md:col-span-2 flex gap-4">
                                    <div className="relative w-24 h-24 md:w-28 md:h-28">
                                        <Image 
                                            src={product.imageUrl} 
                                            alt={product.name}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-[#2A254B]">{product.name}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{product.discription}</p>
                                        </div>
                                        <p className="text-[#2A254B] font-medium">£{product.price}</p>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center justify-start md:justify-center">
                                    <div className="flex items-center border rounded-md">
                                        <button 
                                            onClick={() => updateQuantity(i, product.quantity - 1)}
                                            className="p-2 hover:bg-gray-100 rounded-l-md transition-colors"
                                            aria-label="Decrease quantity"
                                        >
                                            <FiMinus className="w-4 h-4" />
                                        </button>
                                        <span className="w-12 text-center">{product.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(i, product.quantity + 1)}
                                            className="p-2 hover:bg-gray-100 rounded-r-md transition-colors"
                                            aria-label="Increase quantity"
                                        >
                                            <FiPlus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Total and Remove */}
                                <div className="flex items-center justify-between md:justify-between">
                                    <span className="font-medium">£{product.quantity * product.price}</span>
                                    <button
                                        onClick={() => removeItem(i)}
                                        className="p-2 text-red-500 hover:text-red-700 transition-colors"
                                        aria-label="Remove item"
                                    >
                                        <MdDelete className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Summary */}
                <div className="p-4 md:p-6 bg-gray-50 rounded-b-lg">
                    <div className="max-w-md ml-auto space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-xl font-medium text-[#2A254B]">£{totalAmount()}</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Taxes and shipping calculated at checkout
                        </p>
                        <button
                            onClick={handleCheckout}
                            className="w-full py-3 px-4 bg-[#2A254B] text-white rounded-md
                                     hover:bg-[#3B3760] transition-colors duration-200
                                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A254B]"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartContent;
