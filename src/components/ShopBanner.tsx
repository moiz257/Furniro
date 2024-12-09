import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";

const ShopBanner = () => {
  return (
    <div className="w-full">
      {/* Banner Section with Next.js Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/ban.jpeg" // Replace with your image path in public folder
            alt="Shop Banner"
            layout="fill"
            objectFit="cover"
            quality={90}
            className=" opacity-75" // Opacity of 60%
          />
          {/* Blur effect */}
          <div className="absolute inset-0  backdrop-blur-sm"></div>
        </div>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#000000]">Shop</h1>
          <div className=" flex gap-2 mt-4">
          <p className="text-[#000000] text-lg font-bold mt-2">
            Home 
          </p>
        <IoIosArrowForward className="text-[#000000] mt-3 font-extrabold text-2xl" />
          <span className="mx-2 text-lg text-[#111111be] mt-2">Shop</span> 
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-6 px-4 bg-[#FFF3E3]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Filter Button */}
          <div className=" flex gap-2 ">
       <div className="flex">
           <TbAdjustmentsHorizontal className="mt-4 text-xl "/>
          <button className=" text-[#000000] py-2 px-6 text-lg ">
            Filter
          </button>
       </div>
      <div className="flex gap-6">
       <div className="flex gap-2">
          <PiSquaresFour className="mt-4 text-xl " />
          <BsViewList className="mt-4 text-xl "/>
          <div className="w-[1px] h-[30px] bg-black mt-3"></div>
        </div>
          <div>
           <p className="text-center text-[#000000] mt-3">
            Showing 1-16 of 32 results
            </p>
          </div>
        </div>
          </div>
          {/* Showing Results */}
          {/* Sort and Display Options */}
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="show" className="text-[#000000] font-bold">
              Show:
            </label>
            <select
              id="show"
              className=" rounded-md py-2 px-4"
            >
              <option className="text-[#9F9F9F]">16</option>
              <option className="text-[#9F9F9F]">32</option>
              <option className="text-[#9F9F9F]">64</option>
            </select>
            <label htmlFor="sort" className="text-[#000000] font-bold">
              Sort by:
            </label>
            <select
              id="sort"
              className=" rounded-md py-2 px-4"
            >
              <option className="text-[#9F9F9F]">Default</option>
              <option className="text-[#9F9F9F]">Price</option>
              <option className="text-[#9F9F9F]">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
