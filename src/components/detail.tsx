"use client"
import Image from "next/image";
import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

const Details: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: Tab[] = [
    {
      label: "Description",
      content: (
        <>
          <p className="text-gray-600 leading-7 mb-6">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p className="text-gray-600 leading-7">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </>
      ),
    },
    {
      label: "Additional Information",
      content: <p>Additional information goes here.</p>,
    },
    {
      label: "Reviews [5]",
      content: <p>Reviews content goes here.</p>,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Tab Headers */}
      <div className="flex justify-center space-x-10 border-b pb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-xl font-medium pb-2 ${
              activeTab === index
                ? "text-[#000000] border-b-2 border-black"
                : "text-[#9F9F9F]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">{tabs[activeTab].content}</div>

      {/* Product Images Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-beige rounded-lg overflow-hidden">
          <Image
            src="/bigsofa.png" // Replace with your image
            alt="Product 1"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <div className="bg-beige rounded-lg overflow-hidden">
          <Image
            src="/bigsofa.png" // Replace with your image
            alt="Product 3"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
