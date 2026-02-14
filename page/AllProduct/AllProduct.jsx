import React, { Suspense } from "react";
import Items from "../../component/Items/Items";


const AllProduct = () => {

    // without async await
    // const data = fetch("./product.json").then(res=>res.json())
    // console.log(data)


    //with async way
    const productData = async ()=> {
        const data = await fetch("./product.json")
        const res = await data.json()
        return res
    }
    const data = productData()




  return (
    <div className="max-w-7xl mx-auto p-5 text-black">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-black">Best Deal Today</p>
          <p className="text-lg text-black ">HandPicked Fresh Deal For You</p>
        </div>
        <div>
          {/* ========= search ========= */}
          <label className="input rounded-full bg-transparent border border-black/30">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      {/* ======================= */}
                  <Suspense fallback={<span className=" loading loading-spinner text-primary"></span>}>
                    <Items data={data}></Items>
                  </Suspense>

    </div>
  );
};

export default AllProduct;
