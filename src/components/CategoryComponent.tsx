import React from 'react'

const CategoryComponent = ({ categoryName }: { categoryName: string }) => {
    return (
        <div>
            <h1 className="text-[#726E8D] text-xl md:text-[40px] font-semibold mt-20 mb-5">{categoryName}</h1>
        </div>
    )
}

export default CategoryComponent
