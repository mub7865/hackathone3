'use client'
import React, { useEffect, useState } from 'react';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const CheckoutComponent = () => {
    const [subtotal, setSubtotal] = useState(0);
    const shipping = 5.00; // Set a default shipping cost

    useEffect(() => {
        const storedCart = localStorage.getItem('checkoutCart');
        if (storedCart) {
            const items: CartItem[] = JSON.parse(storedCart);
            const total = items.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);
            setSubtotal(total);
        }
    }, []);

    const totalAmount = subtotal + shipping;

    const handleCompletePurchase = () => {
        // Clear cart data from local storage
        localStorage.removeItem('checkoutCart');
        // Redirect to a confirmation page (or display a success message)
        window.location.href = '/confirmation'; // Change this to your confirmation page
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold text-[#2A254B] mb-4">Checkout</h1>
            <p className="text-gray-600 mb-6">Thank you for your order! Please review your details below.</p>
            {/* Add your checkout form and payment details here */}
            {/* Payment method will be implemented here in the future using Stripe */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-medium text-[#2A254B] mb-4">Order Summary</h2>
                {/* Display order summary here */}
                <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Shipping:</span>
                    <span>£{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>£{totalAmount.toFixed(2)}</span>
                </div>
                <button 
                    onClick={handleCompletePurchase} 
                    className="mt-4 w-full py-3 bg-[#2A254B] text-white rounded-md hover:bg-[#3B3760] transition-colors duration-200">
                    Complete Purchase
                </button>
            </div>
        </div>
    );
};

export default CheckoutComponent;
