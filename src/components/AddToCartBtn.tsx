"use client";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";

const AddToCartBtn = ({ id }: { id: number }) => {
    const router = useRouter();

    const addToCart = () => {
        let addToCart = JSON.parse(localStorage.getItem("addToCart")!);

        if (addToCart === null) {
            localStorage.setItem("addToCart", JSON.stringify([]));
            addToCart = JSON.parse(localStorage.getItem("addToCart")!);
        }

        if (Array.isArray(addToCart)) {
            const isProductPresent = addToCart.find((item: number) => item === id);

            if (isProductPresent) {
                alert("This product is already in cart");
            } else {
                addToCart.push(id);
            }
        }

        localStorage.setItem("addToCart", JSON.stringify(addToCart));

        router.push(`/addToCart`);
    };

    return (
        <button
            className="flex items-center bg-[#2f2c3f] text-white px-6 py-2 rounded-md"
            onClick={addToCart}
        >
            <MdOutlineShoppingCart size={35} /> Add To Cart
        </button>
    );
};

export default AddToCartBtn;
