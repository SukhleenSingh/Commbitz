import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Combit from "../components/combit.webp";
import Bgimg from "../assets/bgimg.png";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left Side - Background Image & Text */}
      <div className="w-1/2 min-h-screen flex flex-col bg-black">
        <div
          className="flex-1 relative flex items-center justify-center text-white px-20"
          style={{
            backgroundImage: `url(${Bgimg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-left">
            {/* Logo */}
            <img src={Combit} alt="CommBitz Logo" className="h-20 w-auto" />
            {/* Heading */}
            <h2 className="text-5xl font-bold mt-6">
              International eSIM <br /> & Data cards
            </h2>
            <p className="mt-8 text-xl">
              Enter your registered email and password <br /> to manage your Dashboard, track your Users,<br />
              and enjoy benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/2 min-h-screen bg-[#121314] flex items-center justify-center">
        <div className="p-8 rounded-lg w-full max-w-md relative">
          {/* Need Help Button (Fixed) */}
          <div className="absolute top-6 right-6">
            <button className="border border-white px-4 py-1 rounded-full text-white">
              <Link to="/contact">Need Help?</Link>
            </button>
          </div>

          {/* Signup Header */}
          <h2 className="flex items-center gap-3 text-white text-3xl font-bold text-center mb-6">
            Signup to{" "}
            <span className="text-[#03fe9d]">
              <img src={Combit} alt="CommBitz Logo" className="h-8 w-auto inline" />
            </span>
          </h2>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 bg-[#121314] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#03fe9d]"
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label className="block text-white mb-2">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full p-3 bg-[#121314] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#03fe9d]"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#121314] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#03fe9d]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-white mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="************"
              className="w-full p-3 bg-[#121314] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#03fe9d]"
            />
            <span
              className="absolute right-3 top-12  text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4 relative">
            <label className="block text-white mb-2">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="************"
              className="w-full p-3 bg-[#121314] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#03fe9d]"
            />
            <span
              className="absolute right-3 top-12  text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Agree to Terms Checkbox */}
          <div className="mb-4 flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            <span>Agree to terms and conditions</span>
          </div>

          {/* Signup Button */}
          <button className="w-full py-3 bg-[#03fe9d] text-black text-lg font-bold rounded-md hover:bg-green-400 transition">
            Create
          </button>

          {/* Already have an account? */}
          <div className="mt-4 text-center">
            <p className="text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-[#03fe9d] font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
