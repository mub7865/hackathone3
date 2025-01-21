import Link from 'next/link';
import React from 'react';

const ConfirmationPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold text-[#2A254B] mb-4">Thank You for Your Purchase!</h1>
            <p className="text-gray-600 mb-6">Your order has been successfully processed. We appreciate your business!</p>
            <p className="text-gray-600">You will receive an email confirmation shortly.</p>
            <Link href='/'>
            <button className="mt-4 w-full py-3 bg-[#2A254B] text-white rounded-md hover:bg-[#3B3760] transition-colors duration-200">
                Return to Home
            </button>
            </Link>
        </div>
    );
};

export default ConfirmationPage;
