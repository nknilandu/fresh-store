import React from "react";
import { TbApple } from "react-icons/tb";
import { Apple, CakeSlice, Donut, Ham, LeafyGreen, Milk, Shrimp, Snowflake, Wine } from "lucide-react";

const Category = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 pt-12 pb-5">
        <div>
          <p className="text-2xl font-bold text-black">Category</p>
          <p className="text-lg text-black ">
            Explore By Organic Food Categories
          </p>
        </div>
        <p className="text-[#10b981]">See All</p>
      </div>
      {/* ======================= */}
      <div className="flex flex-wrap gap-5 justify-center">
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Apple size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Fruite</p>
        </div>

        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <LeafyGreen size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Veggies</p>
        </div>

        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Milk size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Dairy</p>
        </div>
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Donut size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Snacks</p>
        </div>
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <CakeSlice size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Bakery</p>
        </div>
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Wine size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Drinks</p>
        </div>
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Ham size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Meat</p>
        </div>
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Shrimp size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Seafood</p>
        </div>
        <div>
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <Snowflake size={26} className="text-black" />
            </div>
          </div>
          <p className="text-[#6d7b84] text-center">Frozen</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
