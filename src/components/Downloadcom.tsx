import React from "react";
import Image from "./qr.webp"; 
import appImage from "./appstore.svg"; 
import playImage from "./playstore.svg";
function Download() {
  return (
    <div className="bg-black pt-20 pb-20 ">
    <div
      className="flex flex-col md:flex-row items-center justify-between px-10 mx-28 rounded-lg  "
      style={{
        background: "linear-gradient(45deg, #0e8562, #0b486c 20%, #2ea7db 47%, #139960 82%)",
      }}
    >
      {/* Left Section - Text & Buttons */}
      <div className="text-white max-w-md">
        <h2 className="text-4xl font-bold mb-4">Get the Commbitz app.</h2>
        <div className="flex space-x-4 mb-4 pt-4">
          <a href="#" className="w-40">
            <img src={appImage} alt="App Store" className="w-full" />
          </a>
          <a href="#" className="w-40">
            <img src={playImage} alt="Google Play" className="w-full" />
          </a>
        </div>
        <p className="text-lg pt-4">Download or scan the code to install the app.</p>
      </div>

      {/* Right Section - Mobile Image */}
      <div className="mt-2 md:mt-0 h-[500px] pr-12 ">
        <img src={Image} alt="App Preview" width={480} height={350} className="rounded-lg  " />
      </div>
    </div>
    </div>
  );
}

export default Download;
