'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <a href="/" className="text-[34px] font-[700] text-black">Furniro.</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`${
            isOpen ? 'fixed inset-0 backdrop-blur-md flex flex-col items-center justify-center z-50' : 'hidden'
          }`}
        >
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-black">
            <AiOutlineClose size={24} />
          </button>

          {/* Mobile Links */}
          <div className="space-y-8 text-center">
            <Link href="/" onClick={handleLinkClick} className="block text-black font-medium text-[16px] ">Home</Link>
            <Link href="/shop" onClick={handleLinkClick} className="block text-black font-medium text-[16px] ">Shop</Link>
            <Link href="/blog" onClick={handleLinkClick} className="block text-black font-medium text-[16px] ">Blog</Link>
            <Link href="/contact" onClick={handleLinkClick} className="block text-black font-medium text-[16px] ">Contact</Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link href="/" className="text-black font-medium text-[16px] ">Home</Link>
          <Link href="/shop" className="text-black font-medium text-[16px] ">Shop</Link>
          <Link href="/blog" className="text-black font-medium text-[16px] ">Blog</Link>
          <Link href="/contact" className="text-black font-medium text-[16px] ">Contact</Link>
        </div>

        {/* Icon Section */}
        <div className="hidden md:flex space-x-6 items-center">
          <FaUser className="text-black cursor-pointer" />
          <FaSearch className="text-black cursor-pointer" />
          <FaHeart className="text-black cursor-pointer" />
          <FaShoppingCart className="text-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
