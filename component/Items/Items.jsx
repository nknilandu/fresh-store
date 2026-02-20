import React, { use } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router";

const Items = ({ data }) => {
  const itemData = use(data);
  // console.log(itemData)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between mt-8">
      {itemData.map((item, i) => (
        <Link to={`/details/${item.id}`} key={i} >
        <div className="p-3 bg-[#f3f8f2] rounded-2xl w-full shadow hover:shadow-xl transition-all">
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
        </Link>
      ))}
    </div>
  );
};

export default Items;

//  <div >

{
  /*  */
}
