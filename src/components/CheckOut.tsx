import React from "react";

const Checkout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-[36px] font-bold mb-6 text-[#000000]">Billing details</h2>
          <form className="space-y-6">
            {/* First Name and Last Name */}
            <div className="flex space-x-6">
              <div className="flex flex-col w-1/2">
                <label className="text-[16px] font-[500] mb-1">First Name</label>
                <input
                  type="text"
                  className="w-[211px] h-[75px] border rounded-lg px-3 py-3 border-black/30" // Adjusted padding for height
                  placeholder=""
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-[16px] font-[500] mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-[211px] h-[75px] border rounded-lg px-3 py-3 border-black/30" // Adjusted padding for height
                  placeholder=""
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Company Name (Optional)</label>
              <input
                type="text"
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30"
                placeholder=""
              />
            </div>

            {/* Country / Region */}
            <div className="flex flex-col">
              <label className="text-sm font-[500] mb-1">Country / Region</label>
              <select className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30">
                <option>Sri Lanka</option>
                <option>Pakistan</option>
                <option>India</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Street Address</label>
              <input
                type="text"
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30"
                placeholder=""
              />
            </div>

            {/* Town/City */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Town / City</label>
              <input
                type="text"
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30"
                placeholder=""
              />
            </div>

            {/* Province */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Province</label>
              <select className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30">
                <option>Western Province</option>
                <option>Central Province</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">ZIP Code</label>
              <input
                type="text"
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30"
                placeholder=""
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Phone</label>
              <input
                type="text"
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Email Address</label>
              <input
                type="email"
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30"
                placeholder=""
              />
            </div>

            {/* Additional Information */}
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] mb-1">Additional Information</label>
              <textarea
                className="w-[489px] h-[75px] border rounded-lg px-3 py-6 border-black/30 "
                placeholder=""
                rows={3}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-[24px] font-[500] mb-6">Product</h2>
              <h2 className="text-[24px] font-[500] mb-6">Subtotal</h2>
            </div>
          <div className="border-b pb-4">
            <div className="flex justify-between mb-2">
              <span className="text-[#9F9F9F] text-[16px]">Asgaard Sofa x 1</span>
              <span className="text-[#000000] font-[300] text-[16px] leadind-[24px] ">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-[#000000] font-[400] text-[16px] leadind-[24px] ">Subtotal</span>
              <span className="text-[#000000] font-[300] text-[16px] leadind-[24px] ">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span className="text-[#000000] font-[400] text-[16px] leadind-[24px] ">Total</span>
              <span className="text-[#B88E2F] font-[700] text-[24px] leadind-[36px] ">Rs. 250,000.00</span>
            </div>
          </div>

          {/* Payment Methods */}
<div className="mt-6">
  <div className="space-y-6">
    <div className="space-y-2">
      <label className="flex items-center">
        <input
          type="radio"
          name="payment"
          className="mr-4 w-5 h-5 border-black focus:ring-[#B88E2F]"
          defaultChecked
        />
        <span className="text-[#000000] text-[16px] font-[400]">Direct Bank Transfer</span>
      </label>
      <p className=" text-[#9F9F9F] text-[16px] font-[300] leading-[24px] pl-9">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order will not be shipped until the
        funds have cleared in our account.
      </p>
    </div>

    <div>
      <label className="flex items-center">
        <input
          type="radio"
          name="payment"
          className="mr-4 w-5 h-5 border-black focus:ring-[#B88E2F]"
        />
        <span className="text-[#9F9F9F] text-[16px] font-[500]">Cash On Delivery</span>
      </label>
    </div>
  </div>
  <p className="text-[16px] text-[#000000] mt-8 leading-[24px] font-[300]">
    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
    <a href="#" className="text-[#000000] text-[16px] font-[600]">privacy policy</a>.
  </p>
</div>

{/* Place Order Button */}
<button className="w-[319px] text-[20px] ml-24 h-[64px] text-[#000000] border border-black/60 rounded-lg mt-8">
  Place Order
</button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
