import React from 'react'
import { useState } from "react";
import { Search } from "lucide-react";
import Combit from '../components/combit.webp'
import Bgimg from '../assets/bgimg.png'
import Google from '../assets/Google.png'
import { Link } from 'react-router-dom';
function Login() {
  return (
    
      <div className="flex h-screen bg-black">
      {/* Left Side - Background Image & Text */}
      <div
        className="w-1/2 h-full relative flex items-center justify-center text-white px-20"
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
          <h2 className="text-5xl font-bold mt-6">International eSIM <br/>& Data cards</h2>
          <p className="mt-8 text-xl">
            Enter your registered email and password <br/>to manage your Dashboard, track your Users,<br/>
            and enjoy benefits.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-[#121314] flex items-center justify-center">
        <div className=" p-8 rounded-lg w-full max-w-md">
          {/* Need Help Button */}
          <div className="absolute top-6 right-6 mr-8 mt-4">
            
            <button className="border border-white px-4 py-1 rounded-full text-white">
             <Link to='/contact'>
              Need Help?
              </Link>
            </button>
            
          </div>

          {/* Sign in Header */}
          <h2 className="flex gap-6 text-white text-3xl font-bold text-center mb-4">
            Sign in to <span className="text-[#03fe9d]"><img src={Combit} alt="CommBitz Logo" className="h-20 w-auto" /></span>
          </h2>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-white mb-2">Email or Phone Number</label>
            <input
              type="text"
              placeholder="Please enter your Email or Mobile Number"
              className="w-full p-3 bg-[#121314] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#03fe9d]"
            />
          </div>

          {/* Next Button */}
          <button className="w-full py-3 bg-[#03fe9d] text-black text-lg font-bold rounded-md hover:bg-green-400 transition">
            Next
          </button>

          {/* Signup Link */}
          <p className="text-center text-white mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#03fe9d] font-semibold">
              Signup
            </Link>
          </p>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="mx-4 text-white">Or continue with</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center items-center ">
          <button className="w-auto px-4 flex justify-center items-center  py-3 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition">
            <img src={Google} alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login
