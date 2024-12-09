import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full mx-auto max-w-7xl px-4 py-8 md:mt-16">
      {/* Top Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F]">
          For more information about our product & services, please feel free
          to drop us <br /> an email. Our staff is always here to help you. Do not
          hesitate!
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between sm:px-36 md:px-40 gap-10">
        {/* Left Section */}
        <div className="w-full md:w-5/12 mb-6 md:mb-0">
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-6">
              <div className="text-yellow-500">
              <FaLocationDot className="w-8 h-8" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657A8 8 0 119.343 9.343a8 8 0 018.314 7.314z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
               
              </div>
              <div>
                <p className="text-xl font-bold">Address</p>
                <p className="text-[#000000]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-6">
              <div className="text-yellow-500">
              <FaPhoneAlt className="w-8 h-8" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l4.5-4.5m0 0L15 3m0 0l4.5 4.5M9 21l6-6M15 3v8m0-8L9 9"
                  />
                
              </div>
              <div>
                <p className=" text-xl font-bold">Phone</p>
                <p className="text-[#000000]">Mobile: +(84) 546-6789</p>
                <p className="text-[#000000]">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start space-x-6 ">
              <div className="text-yellow-500">
                
              <FaClock className="w-8 h-8" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6h4m6 4H6m16 0H6m16 0H6m16 0H6"
                  />
                
              </div>
              <div>
                <p className="text-xl font-bold">Working Time</p>
                <p className="text-[#000000]">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-[#000000]">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-6/12 bg-white shadow-md p-6 rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-[#000000]">Your Name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000000]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000000]">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000000]">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                rows={4}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[130px] px-4 py-2 font-bold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
