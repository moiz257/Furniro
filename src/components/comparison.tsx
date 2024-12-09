import React from "react";
import Image from "next/image";

const ProductList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 px-8">
      {/* Heading Section */}
  
    {/* Product Cards Section */}
<div className="flex flex-col justify-center items-center sm:flex md:flex-row lg:flex-row  gap-20 px-6 py-6">
        {/* Left Section */}
        <div className="md:mb-32 sm:mb-28 lg:mb-32">
          <h2 className="w-[200px] text-[28px] font-[500]  text-[#000000]">
            Go to Product page for more Products
          </h2>
          <button className="text-[20px] text-[#727272] font-[500] underline mt-2">
            View More
          </button>
        </div>
  {/* Product 1 */}
  <div className="p-4 bg-white border border-gray-200 shadow-md rounded-lg w-[280px]">
    <div className="w-full h-48 relative mb-4">
      <Image
        src="/sofa4.png" // Replace with the correct path in your public folder
        alt="Asgaard Sofa"
        width={600}
        height={600}  
        className="rounded-lg"
      />
    </div>
    <h3 className="text-[24px] font-semibold text-[#000000]">Asgaard Sofa</h3>
    <p className="text-[#000000] text-[18px] mt-2">Rs. 250,000.00</p>
    <div className="flex items-center text-yellow-500 mt-1 space-x-3">
      <span className="text-[18px] font-[500] text-[#000000] mr-1">4.7</span>
      <span>★★★★★</span>
      <div className="w-[1px] h-[20px]  bg-black"></div>
      <span className="text-gray-500 text-sm ml-2">24 Reviews</span>
    </div>
  </div>

  {/* Center Product 2 */}
  <div className="p-4 bg-white border border-gray-200 shadow-md rounded-lg w-[280px]">
    <div className="w-full h-48 relative mb-4">
      <Image
        src="/sofa3.png" // Replace with the correct path in your public folder
        alt="Outdoor Sofa Set"
        width={600}
        height={600} 
        className="rounded-lg"
      />
    </div>
    <h3 className="text-[24px] font-semibold text-[#000000]">
      Outdoor Sofa Set
    </h3>
    <p className="text-[#000000] text-[18px] mt-2">Rs. 220,000.00</p>
    <div className="flex items-center text-yellow-500 mt-1 space-x-3">
      <span className="text-[18px] font-[500] text-[#000000] mr-1">4.2</span>
      <span>★★★★☆</span>
      <div className="w-[1px] h-[20px] bg-black"></div>
      <span className="text-[#9F9F9F] text-[13px] font-[400] ml-2">16 Reviews</span>
    </div>
  </div>
        {/* Right Section - Add Product */}
        <div className="flex flex-col md:mb-36 sm:mb-[190px] lg:mb-[200px]">
        <h2 className="text-[24px] font-[600] text-center ">Add A Product</h2>
        <button className="flex   w-[242px] px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600">
          <span className="ml-10">Choose a Product</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        </div>
      </div>



    </div>
  );
};

export default ProductList;
