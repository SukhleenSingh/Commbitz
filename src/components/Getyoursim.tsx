import React, { useState } from "react";
import { Link } from "react-router-dom";

function Getyoursim() {
  const [showGuide, setShowGuide] = useState(false);
  const [showDevice, setShowDevice] = useState(false);
  const [showEsim, setShowEsim] = useState(false);

  return (
    <div
      className="flex flex-wrap items-center gap-12 justify-between px-10 py-10 text-white"
      style={{
        background: "linear-gradient(90deg, #19d2b0 0%, #2087c6 41%, #2087c6 99%)",
      }}
    >
      {/* Heading Section */}
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-4xl font-semibold mb-2">
          Get your Global eSIM <br /> activated in seconds.
        </h2>
        <h5 className="text-lg mb-2">We've got you covered!</h5>
      </div>

      {/* Buttons Section */}
      <div className="flex  gap-4 justify-center items-center ">
        
        {/* Installation Guide Dropdown */}
        <div className="relative">
          <button
            className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition"
            onClick={() => setShowGuide(!showGuide)}
          >
            Installation Guide <i className="fas fa-angle-double-right"></i>
          </button>
          {showGuide && (
            <ul className="absolute mt-2 text-sm bg-black text-white p-3 space-y-2 rounded-md shadow-md">
              <li>
                <a href="https://www.youtube.com/shorts/voW6qD5mQKE" target="_blank">
                  <i className="fab fa-youtube"></i> Guidelines for Android
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/shorts/yJk3lSCnF2Y" target="_blank">
                  <i className="fab fa-youtube"></i> Guidelines for iOS
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Customer Support */}
        <button className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition">
          <Link to="/contact">Customer Support</Link>
        </button>

        {/* Device Compatibility Dropdown */}
        <div className="relative">
          <button
            className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition"
            onClick={() => setShowDevice(!showDevice)}
          >
            Check your Device Compatibility
          </button>
          {showDevice && (
            <div className="flex gap-4 justify-center items-center absolute mt-2 bg-black p-4 rounded-md w-80 text-center shadow-md">
              <input
                type="text"
                placeholder="Enter your Phone Model"
                className="p-2 rounded-md text-black w-full"
              />
              <button className=" bg-[#03fe9d] px-4 py-2 rounded-md text-black">
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Activate eSIM Dropdown */}
        <div className="relative">
          <button
            className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition"
            onClick={() => setShowEsim(!showEsim)}
          >
            Activate your eSIM
          </button>
          {showEsim && (
            <div className="flex gap-4 right-0 absolute mt-2 bg-black p-4 rounded-md w-80 text-center shadow-md">
              <input
                type="text"
                placeholder="Enter eSIM Number"
                className="p-2 rounded-md text-black w-full"
              />
              <button className=" bg-[#03fe9d] px-4 py-2 rounded-md text-black">
                Apply
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Getyoursim;
