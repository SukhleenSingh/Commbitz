
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-secondary">
              CommBitz
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </NavLink>
            <NavLink to="/esim" className="text-gray-700 hover:text-primary transition-colors">
              eSIM
            </NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </NavLink>
            <NavLink to="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </NavLink>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Sign In / Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
