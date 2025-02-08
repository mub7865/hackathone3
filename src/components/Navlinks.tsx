import Link from 'next/link'
const Navlinks = () => {  
  return (
    <>
      <Link href="/" className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1 ">Home</Link>
      <Link href="/products" className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">All Products</Link>
      <Link href="/about" className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">About</Link>
      <Link
        href={`/products?category=${encodeURIComponent('Chairs')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1 ">Chairs</Link>
      <Link
        href={`/products?category=${encodeURIComponent('Ceramics')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">Ceramics</Link>
      <Link
        href={`/products?category=${encodeURIComponent('Crockory')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">Crockory
      </Link>
      <Link
        href={`/products?category=${encodeURIComponent('Cutlery')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">Cutlery
      </Link>
      <Link
        href={`/products?category=${encodeURIComponent('Plant Pots')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">Plant Pots
      </Link>
      <Link
        href={`/products?category=${encodeURIComponent('Tables')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">Tables
      </Link>

      <Link
        href={`/products?category=${encodeURIComponent('Tableware')}`}
        className="hover:text-[#444242] lg:hover:text-[#312d3b]   md:text-[14px]   lg:text-[20px] lg:border-b-2 lg:border-transparent lg:hover:border-[#5a526c] lg:pb-1">Tableware
      </Link>
    </>
  )
}

export default Navlinks
