import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface BannerProps {
  title: string;
  currentPage: string;
  
}

const Banner: React.FC<BannerProps> = ({ title, currentPage }) => {
  return (
    <div className="w-full">
      {/* Banner Section with Next.js Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact.jpeg" 
            alt="Shop Banner"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="opacity-75" 
          />
          {/* Blur Effect */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-4"> 
            <Image 
              src="/logo.png" 
              alt="Logo"
              width={120} 
              height={100}
              className="object-contain "
            />
          </div>


          {/* Title */}
          <h1 className="text-4xl md:text-6xl  font-semibold text-[#000000]">
            {title} {/* Dynamic Title */}
          </h1>
          {/* Breadcrumb Navigation */}
          <div className="flex gap-2 mt-4 items-center">
            <p className="text-[#000000] text-lg font-bold">Home</p>
            <IoIosArrowForward className="text-[#000000] text-2xl" />
            <span className="text-lg text-[#000000]">{currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
