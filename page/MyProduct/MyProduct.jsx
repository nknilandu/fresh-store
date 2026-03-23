import { useEffect, useState } from "react";
import { Link } from "react-router";

const MyProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from public/product.json
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  // delete action
  const handleDelete = () => {
    console.log("deleted");
  };

  return (
    <div className="max-w-7xl mx-auto overflow-x-auto p-4 text-black">
      <table className="table w-full">
        {/* Table Head */}
        <thead>
          <tr>
            <th className=" text-black/50 border-b border-gray-200">Product</th>
            <th className=" text-black/50 border-b border-gray-200">
              Category
            </th>
            <th className=" text-black/50 border-b border-gray-200">
              Price / Unit
            </th>
            <th className=" text-black/50 border-b border-gray-200">Rating</th>
            <th className=" text-black/50 border-b border-gray-200">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={product.image_url} alt={product.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-sm opacity-50">{product.category}</div>
                  </div>
                </div>
              </td>

              <td className="border-b border-gray-200">{product.category}</td>
              <td className="border-b border-gray-200">
                ${product.price} / {product.unit}
              </td>
              <td className="border-b border-gray-200">{product.rating} ⭐</td>
              <th className="border-b border-gray-200 space-x-2">
                <Link
                  className="btn btn-outline btn-info btn-xs"
                  to={`/details/${product.id}`}
                >
                  Details
                </Link>
                <button
                  className="btn btn-outline btn-error btn-xs"
                  onClick={handleDelete}
                >
                  Remove
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProduct;
