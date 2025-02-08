'use client'
import CheckoutComponent from '@/components/Checkout'
import React from 'react'

const CheckoutPage = () => {
  // const [products, setProducts] = React.useState<{ name: string; imageUrl: string; price: number; quantity: number; }[]>([]);

  // React.useEffect(() => {
  //   const storedCart = localStorage.getItem('checkoutCart');
  //   if (storedCart) {
  //     setProducts(JSON.parse(storedCart));
  //   }
  // }, []);

  return (
    <div>
        <CheckoutComponent  />
        {/* products={products} */}
    </div>
  );
};

export default CheckoutPage
