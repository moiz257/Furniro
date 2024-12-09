import Image from 'next/image'
import React from 'react'

const Offers = () => {
  return (
    <div className="w-full h-full sm:h-[270px] md:h-[270px] lg:h-[320px] bg-[#FAF3EA]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 mt-10  sm:ml-10 md:ml-10">
        {/* Offer 1 */}
        <div className="flex items-center space-x-1 sm:space-x-2 sm:mt-16 md:mt-16">
          <Image src="/Group.png" alt="Image" width={60} height={60} />
          <div>
            <h2 className="font-bold text-xl">High Quality</h2>
            <p className="text-base text-[#898989]">crafted from top materials</p>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="flex items-center space-x-1 sm:space-x-2 sm:mt-16 md:mt-16">
          <Image src="/Vector.png" alt="Image" width={60} height={60} />
          <div>
            <h2 className="font-bold text-xl">Warranty Protection</h2>
            <p className="text-base text-[#898989]">Over 2 years</p>
          </div>
        </div>

        {/* Offer 3 */}
        <div className="flex items-center space-x-1 sm:space-x-2 sm:mt-16 md:mt-16">
          <Image src="/ve.png" alt="Image" width={60} height={60} />
          <div>
            <h2 className="font-bold text-xl">Free Shipping</h2>
            <p className="text-base text-[#898989]">Order over 150 $</p>
          </div>
        </div>

        {/* Offer 4 */}
        <div className="flex items-center space-x-1 sm:space-x-2 sm:mt-16 md:mt-16">
          <Image src="/imo.png" alt="Image" width={60} height={60} />
          <div>
            <h2 className="font-bold text-xl">24 / 7 Support</h2>
            <p className="text-base text-[#898989]">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
