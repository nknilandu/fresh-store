import { ShoppingCart } from "lucide-react";
import React from "react";
import { RiLeafFill } from "react-icons/ri";
import avatar from "../../src/assets/avater.jpg"

const Navbar = () => {
  const list = (
    <>
      <li>Home</li>
      <li>All Fruits</li>
      <li>Categories</li>
    </>
  );
  return (
    <div className="border-b mb-2 bg-white">
      <div className="flex justify-between py-3 max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 ">
          <RiLeafFill className="text-[#10b981]" size={20} />
          <h1 className="text-xl font-bold text-black">
            Fresh<span className="text-[#10b981]">Store</span>
          </h1>
        </div>
        {/* ============ */}
        <div className="flex items-center">
          <ul className="flex items-center gap-5 text-black/50">
            {list}
          </ul>
        </div>
        {/* ============ */}
        <div className="flex gap-4">
            <div className="text-black/80 flex items-center gap-2">
                 <ShoppingCart size={18}/>
                <p >My Cart</p>
            </div>
            <div className="h-10 w-10 overflow-hidden">
                <img src={avatar} alt="" className="object-cover h-full w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
