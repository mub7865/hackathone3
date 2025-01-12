'use client'
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <header className="w-[390px] h-[69px] flex flex-col lg:items-center FFFFFF  lg:px-10 lg:w-full lg:h-[132px] ">

                <div className="hidden lg:border-b-[0.5px] border-[#0000004f] lg:h-1/2 lg:w-full lg:mx-auto lg:flex justify-between items-center">
                    <IoSearch className="text-xl" />
                    <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>
                    <div className=" flex text-xl items-center gap-3">
                        <Link href="/addToCart">
                            <h2 className="flex relative  gap-[2px]">
                                <MdOutlineShoppingCart /> <span className="absolute bottom-[12px] left-[8px] w-4 bg-[#2f2c3f] text-white text-sm text-center rounded-full">0</span>
                            </h2>
                        </Link>
                        <CgProfile />
                    </div>
                </div>


                <div className="lg:hidden  flex justify-between">
                    <h1 className="text-[#22202E] text-2xl font-semibold ml-6 my-[19px]">Avion</h1>
                    <div className="flex gap-5 my-[26px] mr-5">
                        {/* Search */}

                        <IoSearch className="text-[16px] block" />
                        <Link href="/cart"><MdOutlineShoppingCart /></Link>





                        {/* menubar */}
                        <template className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" onClick={() => { setIsOpen(!isOpen) }}>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
                            </svg>
                        </template>
                    </div>
                </div>

                {isOpen == true ? (
                    <nav className="absolute top-[70px] left-0 flex flex-col gap-2 w-[390px] lg:h-1/2 px-5 py-5 bg-[#ecd2bf] text-black">
                        <Link href="/" className="hover:text-[#444242] ">Home</Link>
                        <Link href="/about" className="hover:text-[#444242]">About</Link>
                        <Link href="/" className="hover:text-[#444242]">Contact</Link>
                        <Link href="/" className="hover:text-[#444242] ">Plant pots</Link>
                        <Link href="/" className="hover:text-[#444242]">Ceramics</Link>
                        <Link href="/" className="hover:text-[#444242]">Tables</Link>
                        <Link href="/" className="hover:text-[#444242]">Chairs</Link>
                        <Link href="/" className="hover:text-[#444242]">Crockery</Link>
                        <Link href="/" className="hover:text-[#444242]">Tableware</Link>
                        <Link href="/" className="hover:text-[#444242]">Cutlery</Link>
                    </nav>
                ) : (
                    <nav className="hidden lg:flex lg:w-[675px] justify-between items-center lg:h-1/2 text-[#726E8D]">
                          <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1 ">Home</Link>
                          <Link href="/about" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">About</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Plant pots</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Ceramics</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tables</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Chairs</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Crockery</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tableware</Link>
                        <Link href="/" className="hover:text-[#312d3b] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Cutlery</Link>
                    </nav>
                )}

            </header>









        </>
    )
}

export default Header