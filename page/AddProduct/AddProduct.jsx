import { useEffect, useState } from "react";
import { FaBox, FaDollarSign, FaImage } from "react-icons/fa";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now().toString(),
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      unit: e.target.quantity.value + e.target.unit.value,
      rating: 3.5,
      image_url: e.target.image.value,
      is_best_deal: false,
      description: e.target.description.value,
    };

    console.log(formData);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="py-20 flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Product</h2>
        <p className="text-sm text-gray-500 mb-6">
          Add your new product details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Product Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaBox />
              </span>
              <input
                type="text"
                name="name"
                placeholder="iPhone 13 Pro"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>
          </div>
          {/* ============ */}
          <div className="flex gap-3">
            {/* Quantity */}
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-medium text-black/70">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="500"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>

            {/* Unit */}
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-medium text-black/70">
                Unit
              </label>

              <select
                name="unit"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              >
                <option value="">Unit</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="L">L</option>
                <option value="pc">pc</option>
                <option value="bunch">bunch</option>
              </select>
            </div>

            {/* Price */}
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-medium text-black/70">
                Price
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="price"
                  placeholder="1200"
                  className="w-full pl-4 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                  required
                />
              </div>
            </div>
          </div>
          {/* ============ */}

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Category
            </label>

            <div className="relative">
              <select
                name="category"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              >
                <option value="">Select Category</option>

                {categories.map((item) => (
                  <option key={item.id} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Image URL
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaImage />
              </span>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Description
            </label>
            <div className="relative">
              <textarea
                name="description"
                placeholder="Write product details..."
                className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
