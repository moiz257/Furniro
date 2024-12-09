import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductDetail: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Image Section */}
        <div className="space-y-4">
          {/* Thumbnails */}
          <div className="flex flex-col-reverse gap-2 mt-12">
            <Image
              src="/sofa2.png"
              alt="Thumbnail 1"
              width={70}
              height={70}
              className="w-26 h-26 object-cover rounded-lg cursor-pointer"
            />
            <Image
              src="/sofa3.png"
              alt="Thumbnail 2"
              width={70}
              height={70}
              className="w-26 h-26 object-cover rounded-lg cursor-pointer"
            />
            <Image
              src="/sofa4.png"
              alt="Thumbnail 3"
              width={70}
              height={70}
              className="w-26 h-26 object-cover rounded-lg cursor-pointer"
            />
          </div>

          {/* Main Image */}
          <div className=" flex justify-center items-center h-[400px]">
            <Image
              src="/sofa.png"
              alt="Asgaard Sofa"
              width={600}
              height={400}
              className="rounded-lg mb-[36rem]"
            />
          </div>
        </div>

        {/* Right Side: Details Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#000000]">Asgaard Sofa</h1>
          <p className="text-xl text-[#9F9F9F] mb-2">Rs. 250,000.00</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <div className="w-[1px] h-[30px] bg-black/60 mr-3 ml-5"></div>
            <span className="ml-2 text-[#9F9F9F]">5 Customer Reviews</span>
          </div>
          <p className="text-[#000000] mb-6">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-semibold">Size</h3>
            <div className="flex space-x-2 mt-2">
              <button className="px-4 py-2 border rounded bg-orange-400">L</button>
              <button className="px-4 py-2 border rounded">XL</button>
              <button className="px-4 py-2 border rounded">XS</button>
            </div>
          </div>
          {/* Colors */}
          <div className="mb-4">
            <h3 className="font-semibold">Color</h3>
            <div className="flex space-x-3 mt-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer"></div>
            </div>
          </div>
          {/* Quantity */}
          <div className="flex gap-3 h-[40px]">
          <div className="mb-6">
            <input
              type="number"
              defaultValue={1}
              className="w-16 border rounded px-2 py-1"
            />
          </div>
          {/* Buttons */}
          <div className="flex space-x-4">
            <Link href="/cart">
            <button className=" text-[#000000] border border-black/50 px-6 py-2 rounded-md">
              Add To Cart
            </button>
            </Link>
            <Link href="/comparison">
            <button className="text-[#000000] border border-black/50 px-6 py-2 rounded">Compare</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
