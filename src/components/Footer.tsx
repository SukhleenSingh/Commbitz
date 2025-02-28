
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import Footerimg from './footerimg.png';
import Combit from "./combit.webp";

const Footer = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const selectedCountries = ["AX", "AL", "AD", "AM", "AZ", "BH"]; // ISO country codes
        setCountries(
          data
            .filter((country) => selectedCountries.includes(country.cca2))
            .map((country) => ({
              name: country.name.common,
              flag: country.flags.svg,
            }))
        );
      })
      .catch((error) => console.error("Error fetching country flags:", error));
  }, []);

  return (
    <footer className="bg-black text-white py-10 relative">
      {/* Coconut Tree Background */}
      <div className="absolute left-0 bottom-0 w-60 h-60 md:w-80 md:h-80 bg-no-repeat bg-contain"
           style={{ backgroundImage: `url(${Footerimg})`}}>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section - Contact Info */}
        <div className="md:col-span-1 z-10">
          <img src={Combit} alt="COMMBITZ" className="w-40 mb-4" />
          <p className="mt-4">+44 7452 292014</p>
          <p>hello@commbitz.com</p>
          <ul className="mt-2 space-y-1">
            <li>COMMBITZ for IoT & M2M</li>
            <li>COMMBITZ for Business</li>
            <li>COMMBITZ for Virtual Numbers</li>
          </ul>
        </div>

        {/* Center Section - Popular Countries (Dynamic Flags) */}
        <div className="md:col-span-1 z-10">
          <h3 className="text-lg font-semibold mb-3">Popular Countries</h3>
          <ul className="space-y-2">
            {countries.map((country, index) => (
              <li key={index} className="flex items-center space-x-2">
                <img src={country.flag} alt={country.name} className="w-5 h-5 rounded-lg" />
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - More Info with Navigation */}
        <div className="md:col-span-1 z-10">
          <h3 className="text-lg font-semibold mb-3">More Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/contact")}>
              <span className="text-white">&#9656;</span>
              <span className="hover:underline">Contact</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/blog")}>
              <span className="text-white">&#9656;</span>
              <span className="hover:underline">Blogs</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/faqs")}>
              <span className="text-white">&#9656;</span>
              <span className="hover:underline">FAQ's</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/faqs")}>
              <span className="text-white">&#9656;</span>
              <span className="hover:underline">Troubleshoot</span>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="md:col-span-1 z-10">
          <h3 className="text-lg font-semibold mb-3">Complete Info, Just a Click Away!</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 rounded-l-md bg-black text-white border border-gray-600 focus:outline-none"
            />
            <button className="bg-[#03fe9d] text-black px-4 py-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-6 pt-6 text-center">
        {/* Left Section - Privacy Policy Links */}
        <p className="text-white text-[14px] ml-16">
          COMMBITZ 2025 All Rights Reserved | 
          <Link to="/privacypolicy" className="hover:underline ml-2">Privacy Policy</Link> | 
          <Link to="/termsconditions" className="hover:underline ml-2">Terms & Conditions</Link> | 
          <Link to="/shippingpolicy" className="hover:underline ml-2">Shipping Policy</Link> | 
          <Link to="/refundpolicy" className="hover:underline ml-2">Refund Policy</Link>
        </p>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-6 mr-16">
          <Link to= 'https://www.linkedin.com/company/commbitz/'>
          <FaLinkedin className="text-white text-2xl cursor-pointer" />
          </Link>
          <Link to ='https://www.instagram.com/commbitz_esim/?hl=en'>
          <FaInstagram className="text-white text-2xl cursor-pointer" />
          </Link>
          <Link to='https://www.youtube.com/@Commbitz_esim'>
          <FaYoutube className="text-white text-2xl cursor-pointer" />
          </Link>
          <Link to='https://www.facebook.com/commbizesim'>
          <FaFacebook className="text-white text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
