import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import LoadingComponent from "../Loading/LoadingComponent";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result.slice(0, 8));
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center px-2 pt-10 pb-5">
        <div>
          <p className="text-2xl font-bold text-black">Best Deal Today</p>
          <p className="text-lg text-black ">HandPicked Fresh Deal For You</p>
        </div>
        <p className="text-[#10b981]">See All</p>
      </div>
      {/* ==================== */}




{

data.length===0 ? (<LoadingComponent></LoadingComponent>) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-[#f3f8f2] rounded-2xl w-full shadow hover:shadow-xl transition-all"
          >
            <div className="h-[160px] w-full rounded-2xl overflow-hidden ">
              <img
                src={item.image_url}
                alt="product"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl text-black mt-2">{item.name}</p>
              <p className="text-black">{item.category}</p>
              <div className="flex justify-between my-2">
                <p className="text-3xl font-semibold text-black">
                  ${item.price}
                  <span className="text-lg font-normal text-black/50">
                    /{item.unit}
                  </span>
                </p>
                <div className="bg-[#10b981] p-2 rounded-full">
                  <IoMdAdd size={25} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
)

}



      
    </div>
  );
};

export default Products;
