import React, { useContext } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((r) => {
        console.log(r);
        //success

        navigate('/all-product')


      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="py-10 flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-black mb-2">Welcome Back</h2>
        <p className="text-black/70 mb-8">Login to your FreshStore account.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black/70">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
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
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
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

          {/*  Forgot */}

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-emerald-500 font-medium hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or login with</span>
          </div>
        </div>

        {/* Social Button */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-gray-200 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          <span className="text-sm font-medium text-black">Google</span>
        </button>

        {/* Register link */}
        <p className="mt-8 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-emerald-500 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
