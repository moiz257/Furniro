import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/sofa.png", // Replace with your image path
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-10 p-6">
      {/* Left Section */}
      <div className="w-full md:w-2/3 overflow-x-auto overflow-y-hidden">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b bg-[#F9F1E7] text-[#000000] text-sm">
        <div className="flex justify-between items-center gap-4 px-4">
          <div className="flex gap-4">
            <th className="py-3">Product</th>
            <th className="py-3">Price</th>
          </div>
          <div className="flex gap-4">
            <th className="py-3">Quantity</th>
            <th className="py-3">Subtotal</th>
          </div>
        </div>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => (
        <tr key={item.id} className="border-b text-sm">
          <td className="py-4 flex items-center gap-4 px-4">
            <div className="w-16 h-16 relative">
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={800}
                className="rounded-lg w-[600px] h-[100px]"
              />
            </div>
            <span className="text-[#9F9F9F] text-base">{item.name}</span>
          </td>
          <td className="py-4 text-[#9F9F9F] px-4">
            Rs. {item.price.toLocaleString()}
          </td>
          <td className="py-4 px-4">
            <input
              type="number"
              value={item.quantity}
              className="w-12 text-center border rounded-md"
              readOnly
            />
          </td>
          <td className="py-4 text-gray-700 px-4">
            Rs. {(item.price * item.quantity).toLocaleString()}
          </td>
          <td className="py-4 text-center text-red-500 cursor-pointer px-4">
            <MdDelete className="text-[#000000] text-lg" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


{/* Right Section */}
<div className="w-full md:w-1/3 bg-[#F9F1E7] p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-[#000000]">Cart Totals</h2>
  <div className="mt-4">
    <div className="flex justify-between font-bold py-2 text-[#000000]">
      <span className="">Subtotal</span>
      <span className="text-sm text-[#9F9F9F]">Rs. {calculateTotal().toLocaleString()}</span>
    </div>
    <div className="flex justify-between py-2 font-bold text-[#000000]">
      <span>Total</span>
      <span className="text-xl text-[#B88E2F]">Rs. {calculateTotal().toLocaleString()}</span>
    </div>
  </div>
  <Link href="/checkout">
  <button className="w-[130px] px-4 mt-6 py-3 ml-28  text-[#000000] rounded-xl border border-black/60 text-center">
    Check Out
  </button>
  </Link>
</div>
    </div>
  );
};

export default Cart;
