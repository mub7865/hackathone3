'use client'

import React, { useState } from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email');
            return;
        }
        
        setIsSubmitting(true);
        setError('');
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setEmail('');
            // Show success message (you can add a toast notification here)
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        "Exclusive offers",
        "Free events",
        "Large discounts"
    ];

    return (
        <section className="relative w-full min-h-[400px] bg-SignUp bg-cover bg-center py-12 md:py-16 lg:py-24">
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
            
            <div className="relative container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
                        Join the club and get the benefits
                    </h2>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                        Sign up for our newsletter and receive exclusive offers on new ranges, 
                        sales, pop up stores and more
                    </p>
                    
                    {/* Benefits */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-2 text-white"
                            >
                                <IoCheckmarkCircle className="w-5 h-5 text-white/90 flex-shrink-0" />
                                <span className="text-sm md:text-base">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <form 
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
                    >
                        <div className="flex-1">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-white/90 border border-transparent 
                                         rounded-l placeholder-gray-500 focus:outline-none 
                                         focus:ring-2 focus:ring-purple-600 focus:border-transparent
                                         transition-all duration-200"
                                aria-label="Email address"
                            />
                            {error && (
                                <p className="mt-2 text-sm text-red-400 text-left">{error}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-3 bg-[#2A254B] text-white font-medium rounded-r
                                     hover:bg-[#3B3760] focus:outline-none focus:ring-2 
                                     focus:ring-purple-600 focus:ring-offset-2 
                                     disabled:opacity-70 disabled:cursor-not-allowed
                                     transition-all duration-200 whitespace-nowrap"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Signing up...
                                </span>
                            ) : (
                                'Sign up'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp
