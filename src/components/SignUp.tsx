'use client'

import React from 'react'

const SignUp = () => {
    return (
        <section className="relative w-full min-h-[400px] bg-SignUp bg-cover bg-center py-12 md:py-16 lg:py-24">
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
            
            <div className="relative container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
                    {/* Static Heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
                        Join the club and get the benefits
                    </h2>
                    {/* Static Message */}
                    <p className="text-white">
                        Sign up to receive exclusive offers and updates. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SignUp
