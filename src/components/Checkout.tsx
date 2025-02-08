'use client'
import { client } from '@/sanity/lib/client';
import React, {  useState } from 'react';
import { useRouter } from 'next/navigation'; // Router import karo
import Image from 'next/image';


const CheckoutComponent = () => {
    const router = useRouter();

    const [products, setProducts] = React.useState<{ name: string; imageUrl: string; price: number; quantity: number; _id: string; }[]>([]);
    React.useEffect(() => {
        const storedCart = localStorage.getItem('checkoutCart');
        if (storedCart) {
            setProducts(JSON.parse(storedCart));
        }
    }, []);


    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })
  console.log(setFormErrors);
  

    const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
    // const shipping = 5.00; // Example shipping cost
    const totalAmount = subtotal;


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    // const validiateForm = () => {
    //     const error = {
    //         firstName: !formValues.firstName,
    //         lastName: !formValues.lastName,
    //         email: !formValues.email,
    //         phone: !formValues.phone,
    //         address: !formValues.address,
    //         zipCode: !formValues.zipCode,
    //         city: !formValues.city,
    //     };
    //     setFormErrors(error);
    //     return Object.values(error).every((error) => !error)
    // }
    const handleSendDataToSanity = async () => {
        const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            phone: formValues.phone,
            address: formValues.address,
            zipCode: formValues.zipCode,
            city: formValues.city,
            products: products.map(item => ({
                _type: 'reference',
                _ref: item._id
            })),
            totalAmount: totalAmount,
            orderDate: new Date().toISOString
        };
        try {
            await client.create(orderData)
            localStorage.removeItem('apllied');
            router.push('/confirmation');
            
        } catch (error) {
            console.log('error creating order', error)
        }
    }

    // const handleCompletePurchase = () => {
    //     // Clear cart data from local storage
    //     localStorage.removeItem('checkoutCart');
    //     // Redirect to a confirmation page (or display a success message)
    //     window.location.href = '/confirmation'; // Change this to your confirmation page
    // };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl text-[#2a2450] font-bold mb-8 text-center">Checkout</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Order Summary Section */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-medium text-[#2A254B] mb-4">Order Summary</h2>
                        {products.map((product) => (
                            <div key={product.name} className="flex items-center justify-between mb-4 pb-4 border-b">
                                <Image src={product.imageUrl} alt={product.name} height={50} width={50} className="w-12 h-12 rounded object-cover" />
                                <h3 className="flex-1 ml-4 text-[#2A254B]">{product.name}</h3>
                                <span className="text-[#2A254B]">£{(product.price * product.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold mt-6">
                            <span className="text-[#2A254B]">Total:</span>
                            <span className="text-[#2A254B]">£{totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Billing Information Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-xl font-bold text-[#2a2450] mb-6">Billing Information</h2>
                    <form className="space-y-4">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-[#2a2450] text-lg mb-2">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Enter your first name"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.firstName && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-[#2a2450] text-lg mb-2">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter your last name"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.lastName}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.lastName && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>
                        {/* email */}

                        <div className="flex flex-col">
                            <label htmlFor="city" className="text-[#2a2450] text-lg mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.email}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.city && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>

                        {/* City */}
                        <div className="flex flex-col">
                            <label htmlFor="city" className="text-[#2a2450] text-lg mb-2">City:</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter your city"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.city}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.city && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>

                        {/* Zip Code */}
                        <div className="flex flex-col">
                            <label htmlFor="zipCode" className="text-[#2a2450] text-lg mb-2">Zip Code:</label>
                            <input
                                type="text"
                                id="zipCode"
                                placeholder="Enter your zip code"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.zipCode}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.zipCode && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label htmlFor="address" className="text-[#2a2450] text-lg mb-2">Address:</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter your address"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.address}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.address && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-[#2a2450] text-lg mb-2">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
                                value={formValues.phone}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.phone && (
                                <p className="text-red-500 text-sm mt-1">This field is required</p>
                            )}
                        </div>

                        {/* Complete Purchase Button */}
                        <button
                            type="button"
                            onClick={handleSendDataToSanity}
                            className="mt-6 w-full py-3 bg-[#2A254B] text-white rounded-md hover:bg-[#3B3760] transition-colors duration-200 text-lg"
                        >
                            Complete Purchase
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutComponent;
