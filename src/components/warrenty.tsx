import Link from "next/link";
import React from "react";

const ProductSpecifications: React.FC = () => {
  const specs = [
    {
      title: "Warranty",
      details: [
        { label: "Warranty Summary", value1: "1 Year Manufacturing Warranty", value2: "1.2 Year Manufacturing Warranty" },
        { label: "Warranty Service Type", value1: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com", value2: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com" },
        { label: "Covered in Warranty", value1: "Warranty Against Manufacturing Defect", value2: "Warranty of the product is limited to manufacturing defects only." },
        { label: "Not Covered in Warranty", value1: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", value2: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage." },
        { label: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
        { label: "Domestic Warranty", value1: "1 Year", value2: "3 Months" },
      ],
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-14 py-10">
      <div className="flex flex-col gap-8">
        {specs.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-[28px] font-[500] border-b pb-2 text-[#000000]">{section.title}</h2>
            <div className="space-y-6">
              {section.details.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 sm:flex-row md:flex-row lg:flex-row gap-x-4">
                  <span className="font-[400] text-[20px] text-[#000000]">{item.label}</span>
                  <div className="flex flex-col space-x-4 font-[400] text-[20px] text-[#000000]">
                    <span className="flex-1">{item.value1}</span>
                  </div>
                  <div className="flex flex-col space-x-4 font-[400] text-[20px] text-[#000000]">
                    <span className="flex-1">{item.value2}</span>
                  </div>
                </div>
              ))}
          </div>
         <div className=" flex justify-evenly gap-8">
          <button className="px-12 py-4 mt-4 md:ml-48 bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"> {/* Reduced padding */}
            <Link href="/shop">ADD TO CART</Link>
          </button>
                    <button className="px-12 py-4 mt-4 bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"> {/* Reduced padding */}
            <Link href="/shop">ADD TO CART</Link>
          </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecifications;
