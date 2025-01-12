"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
    id: number;
    productName: string;
    Productprice: number;
    Productdetail: string;
    imageUrl: string;
    quantity: number;
}

const CartProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const addToCart: number[] = JSON.parse(localStorage.getItem('addToCart')!);
            console.log('addToCart from localStorage:', addToCart); // Log to check what is being fetched

            if (addToCart) {
                let cartProducts = await client.fetch(
                    `*[_type == "Product" && id in $addToCart] {
                        id,
                        productName,
                        Productprice,
                        Productdetail,
                        "imageUrl": ProductImage.asset->url
                    }`, { addToCart }
                );
                console.log(cartProducts);

                cartProducts = cartProducts.map((product: Product) => ({ ...product, quantity: 1 }));
                setProducts(cartProducts);
            } else {
                alert('Cart is empty');
            }
        };
        fetchProducts();
    }, []);

    const increment = (i: number) => {
        const temp: Product[] = [...products];
        if (temp[i].quantity) {
            temp[i].quantity++;
        }
        setProducts(temp);
    };

    const decrement = (i: number) => {
        const temp: Product[] = [...products];
        if (temp[i].quantity && temp[i].quantity > 1) {
            temp[i].quantity--;
        }
        setProducts(temp);
    };

    const totalAmount = (): number => {
        return products.reduce((acc, product) => acc + product.quantity * product.Productprice, 0);
    };

    const handleCheckout = () => {
        localStorage.removeItem('addToCart');
        setProducts([]);
    };

    return (
        <>
            <main>
                <section className=" pt-9 lg:pt-16 pl-6 lg:pl-[188px] pr-6 lg:pr-[193px] bg-[#F9F9F9] text-[#2A254B]">
                    <h1 className="text-[24px] leading-[33.6px] lg:text-[36px] lg:leading-[50.4px]">Your shopping cart</h1>

                    <table className="mt-12 w-full lg:w-full">
                        <thead className='max-sm:hidden'>
                            <tr className="text-[#2A254B]">
                                <td className='text-sm leading-[19.6px]'>Product</td>
                                <td className='text-sm leading-[19.6px]'>Quantity</td>
                                <td className='text-sm leading-[19.6px]'>Total</td>
                            </tr>
                        </thead>

                        <div className="max-sm:hidden lg:mt-3 lg:w-[145%] h-[1px] bg-[#EBE8F4]"></div> {/* Invalid div inside table */}

                        <tbody>
                            {products.map((product, i) => (
                                <tr className="sm:*:pt-5" key={product.id}>
                                    <td>
                                        <div className="lg:pt-5 flex gap-x-[21px] lg:items-center">
                                            <Image src={product.imageUrl} alt="Failed to load" width={109} height={134}></Image>
                                            <div className=" lg:my-[20px] text-[#2A254B] space-y-2">
                                                <h4 className="text-[16px] leading-[20px]">{product.productName}</h4>
                                                <p className="text-sm w-[179px]">{product.Productdetail}</p>
                                                <p>£{product.Productprice}</p>
                                                <div className="lg:hidden py-3 px-4 max-sm:visible flex items-center gap-x-8">
                                                    <button onClick={() => increment(i)}>+</button>
                                                    <span>{product.quantity}</span>
                                                    <button onClick={() => decrement(i)}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="max-sm:hidden lg:flex lg:py-3 lg:px-4 items-center gap-8">
                                            <button onClick={() => increment(i)}>+</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => decrement(i)}>-</button>
                                        </div>
                                    </td>
                                    <td className="max-sm:hidden">£{product.quantity * product.Productprice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-[33px] w-full h-[1px] bg-[#EBE8F4]"></div>

                    <div className="pt-7 pb-[55px] lg:pb-[48px] w-fit ml-auto">
                        <div className="space-y-3">
                            <div className="flex gap-x-4 items-center w-fit ml-auto">
                                <h4 className="text-[#4E4D93]">Subtotal</h4>
                                <h3 className=" text-[#2A254B]">£{totalAmount()}</h3>
                            </div>
                            <p className="lg:whitespace-nowrap lg:w-fit text-right text-sm text-[#4E4D93]">
                                Taxes and shipping are calculated at checkout
                            </p>
                        </div>
                        <button
                            type="submit"
                            onClick={handleCheckout}
                            className="bg-[#2A254B] lg:w-full block w-fit ml-auto text-white py-4 mt-8 lg:mt-4 px-[117px] lg:px-[48px]"
                        >
                            Go to checkout
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default CartProducts;
