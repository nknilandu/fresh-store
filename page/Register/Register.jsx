import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { registerUser, updateProfile } = useContext(AuthContext)


    const handleSubmit = (e) => {

        e.preventDefault()

        // console.log('aa')

        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.username.value
        const photo = e.target.url.value


        // console.log(email, password)

        registerUser(email, password).then(res=>{
            console.log(res)

            //update profile

            const userData = {
                displayName: name,
                photoURL: photo
            }

            updateProfile(userData).then(()=> {
                console.log("profile updated")

                
            }).catch(e=> {
                console.log(e)
            })

            // navigate user


        }).catch(e=> {
            console.log(e)
        })




    }



  return (
    <div className="py-10 flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-black mb-2">Create Account</h2>
        <p className="text-black/70 mb-8">
          Join FreshStore and start shopping organic today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Full Name
            </label>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaRegUser />
              </span>
              <input
                type="text"
                name="username"
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>
          </div>

          {/* Profile */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Image Url
            </label>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaRegUser />
              </span>
              <input
                type="text"
                name="url"
                placeholder="https://www.example.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Email Address
            </label>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MdOutlineEmail />
              </span>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Password
            </label>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiLock />
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              Or register with
            </span>
          </div>
        </div>

        {/* Social Buttons */}

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 hover:bg-gray-200">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          <span className="text-sm font-medium text-black">Google</span>
        </button>

        {/* Login */}
        <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to='/login'
            className="text-emerald-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
