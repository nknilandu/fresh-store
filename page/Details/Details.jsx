import { useContext } from "react";
import { GoDash, GoPlus } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Details = () => {

  const { b } = useContext(AuthContext)
  console.log(b)

  const { id } = useParams();
  // console.log(id)

  const data = useLoaderData();
  // console.log(data)

  const itemData = data.find((item) => item.id === Number(id));
  // console.log(itemData)

  const filterData = data
    .filter(
      (item) => item.category === itemData.category && item.id !== Number(id),
    )
    .slice(0, 4);

  return (
    <div>
      {itemData ? (
        <div className="max-w-7xl mx-auto px-5 py-10 text-black">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 h-[200] w-full rounded-2xl overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src={itemData.image_url}
                alt=""
              />
            </div>
            <div className="flex-1">
              <p className="border border-[#10b981] rounded-full px-4 py-0.5 w-fit bg-green-500/5 text-[#10b981]">
                Category: {itemData.category}
              </p>
              <h1 className="text-4xl font-semibold mt-5">{itemData.name}</h1>
              <p className="text-3xl mt-5">
                {itemData.price}
                <span className="text-lg opacity-40">/{itemData.unit}</span>
              </p>
              <p className="text-xl mt-10">{itemData.description}</p>

              {/* button */}
              <div className="mt-10 flex gap-5">
                <div className="flex">
                  <div className="border border-black/40 px-4 py-1.5 text-2xl rounded-l-full border-r-0">
                    <GoPlus />
                  </div>
                  <div className="border border-black/40 px-6 py-1.5 text-lg">
                    1
                  </div>
                  <div className="border border-black/40 px-4 py-1.5 text-2xl rounded-r-full border-l-0">
                    <GoDash />
                  </div>
                </div>
                <button className="  bg-[#10b981] text-white font-semibold border-0 rounded-full w-full">
                  Add to card
                </button>
              </div>
            </div>
          </div>

          {/* ===================================== */}

          <div>
            <div className="flex justify-between items-center pt-10 pb-5">
              <div>
                <p className="text-2xl font-bold text-black">
                  Related Products
                </p>
                <p className="text-lg text-black ">
                  HandPicked Fresh Deal For You
                </p>
              </div>
              <p className="text-[#10b981]">See All</p>
            </div>
            {/* ==================== */}

            <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-x-visible scrollbar-hide">
              {/* card 1 */}

              {filterData.map((item) => (
                <div
                  // key={index}
                  className="p-3 bg-[#f3f8f2] rounded-2xl w-full shadow hover:shadow-md transition-all"
                >
                  <div className="h-[160px] min-w-[250px] w-full rounded-2xl overflow-hidden ">
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
                        {item.price}
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

              {/* ====== */}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-black text-2xl h-[65vh] flex items-center justify-center">
          No data found
        </div>
      )}
    </div>
  );
};

export default Details;
