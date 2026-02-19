import React, { useEffect, useState } from "react";
import { TbApple } from "react-icons/tb";
import { Apple, CakeSlice, Donut, Ham, LeafyGreen, Milk, Shrimp, Snowflake, Wine } from "lucide-react";

const Category = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('./category.json').then(res=>res.json()).then(data=>{
      setData(data.slice(0, 8))
    })
  }, [])

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
      <div className="flex flex-wrap justify-center gap-5 px-3">
       

    {
      data.map((item, i)=>(
        <div key={i} className="text-black">
          <div className="p-3 bg-[#f3f8f2] w-fit rounded-full">
            <div className="p-5 bg-white w-fit rounded-full">
              <img src={item.icon} alt={item.category} />
            </div>
          </div>
          <p className="opacity-70 text-center">{item.category}</p>
        </div>
      ))
    }


      </div>
    </div>
  );
};

export default Category;
