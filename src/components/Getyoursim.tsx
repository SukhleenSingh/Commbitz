import React from "react";

function Getyoursim() {
  return (
    <div
      className="flex  items-center gap-12 justify-center px-10 py-10 text-white"
      style={{
        background: "linear-gradient(90deg, #19d2b0 0%, #2087c6 41%, #2087c6 99%)",
      }}
    >
      {/* Heading Section */}
      <div >
      <h2 className="text-4xl font-semi-bold mb-2">Get your Global eSIM <br/>activated in seconds.</h2>
      <br/><h5 className="text-lg mb-2">We've got you covered!</h5>
      </div>
      

      {/* Buttons Section */}
      <div className="flex gap-4 justify-center items-center">
        <button className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition">
          Installation Guide
        </button>
        <button className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition">
          Customer Support
        </button>
        <button className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition">
          Check your device Compatibility
        </button>
        <button className="bg-[#03fe9d] text-black px-6 py-3 rounded-md font-medium hover:bg-green-300 transition">
          Activate your eSIM
        </button>
      </div>
    </div>
  );
}

export default Getyoursim;
