import { Apple } from "lucide-react";
import { useLoaderData } from "react-router";

const Categories = () => {
  const data = useLoaderData()
  // console.log(data)

  return (
    <div className="max-w-7xl mx-auto text-black p-5">
      {/* ========= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {
          data.map((item, i)=>(
            <div key={i} className="bg-[#e0f3e9] rounded-2xl shadow flex items-center gap-5 p-5">
          <div className="h-15 w-15 p-3 rounded-full bg-[#f5faf7] ">
            <img
              src={item.icon}
              alt="category"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <p className="text-xl font-bold">{item.category}</p>
            <p>
              {item.title}
            </p>
          </div>
        </div>
          ))
        }

      </div>
      {/* ========= */}
    </div>
  );
};

export default Categories;
