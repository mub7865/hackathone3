'use client'
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import Navlinks from "./Navlinks";
import { useRouter} from "next/navigation";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Update cart count from localStorage
  const updateCartCount = () => {
    try {
      const cartItems = localStorage.getItem('addToCart');
      if (cartItems) {
        const items = JSON.parse(cartItems);
        setCartCount(Array.isArray(items) ? items.length : 0);
      } else {
        setCartCount(0);
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
      setCartCount(0);
    }
  };

  // Update wishlist count from localStorage
  const updateWishlistCount = () => {
    try {
      const wishlistItems = localStorage.getItem('wishlist');
      if (wishlistItems) {
        const items = JSON.parse(wishlistItems);
        setWishlistCount(Array.isArray(items) ? items.length : 0);
      } else {
        setWishlistCount(0);
      }
    } catch (error) {
      console.error('Error updating wishlist count:', error);
      setWishlistCount(0);
    }
  };

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/categories?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for storage changes
  useEffect(() => {
    updateCartCount();
    updateWishlistCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('storage', updateWishlistCount);
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('wishlistUpdated', updateWishlistCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('storage', updateWishlistCount);
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('wishlistUpdated', updateWishlistCount);
    };
  }, []);

  return (
    <header className="flex flex-col lg:items-center md:px-10 md:w-full md:h-[90px] lg:h-[132px]">
      {/* Top Bar - Desktop */}
      <div className="hidden  md:flex md:border-b-[0.5px] border-[#0000004f] md:h-1/2 md:w-full md:mx-auto justify-between items-center">
        <div ref={searchRef} className="relative flex items-center">
          {showSearch ? (
            <form onSubmit={handleSearch} className="absolute left-0 top-[-15px] z-50">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="p-2 border rounded-md w-[200px] outline-none"
                autoFocus
              />
            </form>
          ) : (
            <IoSearch 
              className="text-xl cursor-pointer" 
              onClick={() => setShowSearch(true)}
            />
          )}
        </div>
        <Link href="/" className="text-[#22202E] text-2xl font-semibold">
          Avion
        </Link>
        <div className="flex text-xl items-center gap-3">
          <Link href="/wishlist" className="relative">
            <AiOutlineHeart className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute bottom-[12px] left-[8px] w-4 bg-[#2f2c3f] text-white text-sm text-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/addToCart" className="relative">
            <MdOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute bottom-[12px] left-[8px] w-4 bg-[#2f2c3f] text-white text-sm text-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <CgProfile className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between">
        <Link href="/" className="text-[#22202E] text-2xl font-semibold ml-6 my-[19px]">
          Avion
        </Link>
        <div className="flex gap-5 my-[26px] mr-5">
          <div ref={searchRef} className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="absolute right-0 top-[-15px] z-50">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="p-2 border rounded-md w-[150px] outline-none"
                  autoFocus
                />
              </form>
            ) : (
              <IoSearch 
                className="text-[16px] cursor-pointer" 
                onClick={() => setShowSearch(true)}
              />
            )}
          </div>
          <Link href="/wishlist" className="relative">
            <AiOutlineHeart className="text-[16px]" />
            {wishlistCount > 0 && (
              <span className="absolute bottom-[12px] left-[8px] w-4 bg-[#2f2c3f] text-white text-[10px] text-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/addToCart" className="relative">
            <MdOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute bottom-[12px] left-[8px] w-4 bg-[#2f2c3f] text-white text-[10px] text-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      {isOpen ? (
        // Mobile Navigation
        <nav className={`absolute top-[70px] left-0 flex flex-col gap-2 w-full lg:h-1/2 px-5 py-5 bg-gray-800/50 backdrop-blur-md text-white z-50 transition-all duration-300 ease-in-out`}>
         <Navlinks/>
          
        </nav>
      ) : (
        // Desktop Navigation
        <nav className="hidden lg:flex md:flex md:gap-5 justify-between items-center lg:h-1/2 md:mx-auto md:h-1/2 text-[#726E8D]">
         
          <Navlinks/>
          
        </nav>
      )}
    </header>
  );
};

export default Header;
