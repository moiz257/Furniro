import React from "react";

const ProductSpecifications: React.FC = () => {
  const specs = [
    {
      title: "General",
      details: [
        { label: "Sales Package", value1: "1 sectional sofa", value2: "1 Three Seater, 2 Single Seater" },
        { label: "Model Number", value1: "TFCBJXR56HS", value2: "DTUBJXR56SB" },
        { label: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
        { label: "Configuration", value1: "L-shaped", value2: "L-shaped" },
        { label: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
        { label: "Upholstery Color", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
      ],
    },
    {
      title: "Product",
      details: [
        { label: "Filling Material", value1: "Foam", value2: "Matt" },
        { label: "Finish Type", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
        { label: "Adjustable Headrest", value1: "No", value2: "Yes" },
        { label: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
        { label: "Origin of Manufacture", value1: "India", value2: "India" },
      ],
    },
    {
      title: "Dimensions",
      details: [
        { label: "Width", value1: "265.32 cm", value2: "265.32 cm" },
        { label: "Height", value1: "76 cm", value2: "76 cm" },
        { label: "Depth", value1: "157.76 cm", value2: "157.76 cm" },
        { label: "Weight", value1: "45 KG", value2: "65 KG" },
        { label: "Seat Height", value1: "41.52 cm", value2: "41.52 cm" },
        { label: "Leg Height", value1: "5.46 cm", value2: "5.46 cm" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-14 py-10">
      <div className="flex flex-col gap-8">
        {specs.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-[28px] text-[#000000] font-[500] border-b pb-2">{section.title}</h2>
            <div className="space-y-6">
              {section.details.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 sm:flex-row md:flex-row lg:flex-row gap-x-4">
                  <span className="font-[400] text-[20px] text-[#000000]">{item.label}</span>
                  <div className="flex flex-col font-[400] text-[20px] space-x-4 text-[#000000]">
                    <span className="flex-1">{item.value1}</span>
                  </div>
                  <div className="flex flex-col font-[400] text-[20px] space-x-4 text-[#000000]">
                    <span className="flex-1">{item.value2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecifications;
