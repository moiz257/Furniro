"use client";
import Image from "next/image";
import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import React from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", img: "/chair.jpg", discount: "30%" },
  { name: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", img: "/pic2.jpg" },
  { name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "50%", img: "/woodchair.jpg" },
  { name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", img: "/table.jpg", new: true },
  { name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", img: "/lamp.jpg" },
  { name: "Muggo", description: "Small mug", price: "Rp 150.000", img: "/mug.jpg", new: true },
  { name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "50%", img: "/bed.jpg" },
  { name: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", img: "/pot.jpg" },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#333333]">Our Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:ml-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-md  overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={product.img}
              alt={product.name}
              width={400}
              height={300}
              priority
              className="w-[250px] md:w-[255px] h-64 object-cover group-hover:opacity-70 transition duration-300"
            />

            {product.discount && (
              <span className="absolute top-2 left-3/4 md:left-3/4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                -{product.discount}
              </span>
            )}
            {product.new && (
              <span className="absolute top-2 left-3/4 md:left-3/4 bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            )}

            <div className="p-4">
              <h3 className="font-bold text-[#3A3A3A] text-xl md:text-2xl mb-1">{product.name}</h3>
              <p className="text-[#898989] text-sm md:text-base truncate mb-2 font-semibold">{product.description}</p>
              <p className="text-lg md:text-xl font-bold text-[#3A3A3A]">
                {product.price}
                {product.oldPrice && (
                  <span className="text-sm md:text-sm text-[#B0B0B0] line-through ml-2">{product.oldPrice}</span>
                )}
              </p>
            </div>

            
          <div className="w-[250px] flex-col flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
             <div className=" md:w-[255px] absolute inset-0 flex flex-col bg-black bg-opacity-60 items-center justify-center ">
              <button className="text-orange-400 bg-white px-10 py-3  text-sm font-semibold">
                <Link href="/shop">Add To Cart</Link>
              </button>
              <div className="flex mt-4 gap-x-3 items-center justify-center px-12 py-1">
                <div className="flex">
              <IoShareSocial className="text-white md:text-xl mt-1" />   
                  <h3 className="text-white text-md font-semibold">
                      Share
                   </h3>
                </div>
                 <div className="flex">
              <HiOutlineArrowsRightLeft className="text-white mt-1 md:mt-0 md:text-2xl " />
              <Link href="/comparison">
                 <h3  className="text-white text-md font-semibold">
                  Compare
                 </h3>
              </Link>
                 </div>
                 <div className="flex">
                 <CiHeart className="text-white md:text-2xl mt-1 md:mt-0" />
                 <h3 className="text-white text-md font-semibold">
                  Like
                 </h3>
                 </div>
              </div>
            </div>
          </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="px-16 py-3 bg-white text-orange-400 border-2 border-orange-400 font-bold ">Show More</button>
      </motion.div>
    </div>
  );
};

export default ProductGrid;
