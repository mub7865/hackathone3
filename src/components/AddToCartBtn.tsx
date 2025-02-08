// C:\Users\Ubaid Ansari\Desktop\Hackathone Day 1 to 7\Hackathone-3\src\components\AddToCartBtn.tsx

"use client";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import Swal from "sweetalert2"
const AddToCartBtn = ({ productId, className }: { productId: string; className?: string }) => {
    const router = useRouter();

    const addToCart = () => {
        Swal.fire({
            title: "Your item added sucessfully",
            icon: "success",
            draggable: true
          });
        try {
            let cartItems = [];
            const existingCart = localStorage.getItem("addToCart");
            
            if (existingCart) {
                cartItems = JSON.parse(existingCart);
                if (!Array.isArray(cartItems)) {
                    cartItems = [];
                }
            }

            if (cartItems.includes(productId)) {
                alert("This product is already in cart");
                return;
            }

            cartItems.push(productId);
            localStorage.setItem("addToCart", JSON.stringify(cartItems));
            
            // Dispatch custom event to update cart count
            window.dispatchEvent(new Event('cartUpdated'));
            
            // Refresh the cart page if we're already on it
            if (window.location.pathname === '/addToCart') {
                window.location.reload();
            } else {
                router.push('/addToCart');
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
            alert("Failed to add item to cart. Please try again.");
        }
    };

    return (
        <button
            className={`flex items-center  text-white px-6  rounded-md ${className}`}
            onClick={addToCart}
        >
            <MdOutlineShoppingCart size={35} /> Add To Cart
        </button>
    );
};

export default AddToCartBtn;