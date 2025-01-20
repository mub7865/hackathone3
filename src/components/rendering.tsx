'use client'
import React, { useState } from 'react'

const Rendering = ({ price }: { price: number }) => {
  const [quantity, setQuantity] = useState(1); // State to handle quantity

  return (
    <div>
      <div className='flex items-center gap-4 '>
        <div className="p-2 border flex gap-10 items-center bg-[#F9F9F9]">
          <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
            -
          </button>
          <h1>{quantity}</h1>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <h2>= £{quantity * price}</h2> {/* Multiply quantity by price */}
      </div>
    </div>
  );
}

export default Rendering;
