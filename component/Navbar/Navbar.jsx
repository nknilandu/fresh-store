import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { RiLeafFill } from "react-icons/ri";
import avatar from "../../src/assets/avater.jpg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

  const { user, loading, authSignOut } = useContext(AuthContext);

  // console.log(user)

  const handleLogOut = () => {
      authSignOut().then(()=> {
        alert("log out success")
      }).catch(e=> {
        console.log(e)
      })
  }




  const linkClass = ({ isActive }) =>
    isActive ? "text-green-500 font-semibold" : "text-black/50";
  const list = (
    <>
      <li>
        {" "}
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink className={linkClass} to="all-product">
          All Product
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink className={linkClass} to="categories">
          Categories
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink className={linkClass} to="add-product">
          Add Product
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink className={linkClass} to="my-product">
          My Product
        </NavLink>{" "}
      </li>

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
          <ul className="flex items-center gap-5 text-black/50">{list}</ul>
        </div>
        {/* ============ */}
        <div className="flex gap-4">
          

            


            { loading ? (<span className="loading loading-spinner text-secondary"></span>) : 
              user ? (<>
            <div className="text-black/80 flex items-center gap-2">
            <ShoppingCart size={18} />
            <p>My Cart</p>
          </div>
          <div className="h-10 w-10 overflow-hidden">
            <img src={avatar} alt="" className="object-cover h-full w-full" />
          </div>
          <button onClick={handleLogOut} className="btn bg-[#10b981] border-0 rounded-full px-5">Log out</button>
          </>) : (<Link to="/login" className="btn bg-[#10b981] border-0 rounded-full px-5">Sign In</Link>)
            }






        </div>
      </div>
    </div>
  );
};

export default Navbar;
