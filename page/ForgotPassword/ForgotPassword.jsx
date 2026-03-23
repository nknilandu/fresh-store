import React, { useContext } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const ForgotPassword = () => {

    const { resetPass } = useContext(AuthContext)

      const handleSubmit = (e) => {
         e.preventDefault()
         const email = e.target.email.value

         resetPass(email).then(()=> {
            console.log("success")
         }).catch((e)=> {
            console.log(e)
         })

    }



  return (
    <div className="py-10 flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-black mb-2">
          Reset Password
        </h2>
        <p className="text-black/70 mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>

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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to Login */}
        <p className="mt-8 text-center text-gray-600">
          Remembered your password?{" "}
          <Link to="/login" className="text-emerald-500 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;