

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaApple, FaGooglePlay, FaGlobe } from 'react-icons/fa';
import Combit from "./combit.webp";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navbar - Fixed at the top */}
      <div className="fixed top-0 left-0 w-full bg-[#03fe9d] text-black py-2 px-40 flex justify-end items-center space-x-6 text-sm z-50">
        <a href="https://apps.apple.com/in/app/commbitz-e-sim/id6572300745" className="flex items-center space-x-2 hover:text-gray-200 transition">
          <FaApple />
          
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.commbitz&pli=1" className="flex items-center space-x-2 hover:text-gray-200 transition">
          <FaGooglePlay />
          
        </a>
        <a href="#" className="flex items-center space-x-2  ">
          <FaGlobe />
          <span>English</span>
        </a>
      </div>

      {/* Main Navbar - Positioned below the first navbar */}
      <nav className="relative top-8 left-0 w-full bg-black backdrop-blur-md z-50 h-28 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <NavLink to="/">
            <img src={Combit} alt="CommBitz Logo" className="h-20 w-auto" />
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-primary transition-colors relative ${
                  isActive ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/esim"
              className={({ isActive }) =>
                `text-white hover:text-primary transition-colors relative ${
                  isActive ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`
              }
            >
              eSIM
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-primary transition-colors relative ${
                  isActive ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-white hover:text-primary transition-colors relative ${
                  isActive ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:text-primary transition-colors relative ${
                  isActive ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
                }`
              }
            >
              Contact Us
            </NavLink>

            {/* Signup/Login Button */}
            
            <button className="bg-[#03fe9d] text-black px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors" onClick={() => navigate("/login")}>
              Signup / Login
            </button>
            
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
