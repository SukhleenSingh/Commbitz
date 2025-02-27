import React, { useState, useEffect } from "react";

// Import Mobile Images
import Mobile1 from "./Mobile1.png";
import Mobile2 from "./Mobile2.png";
import Mobile3 from "./Mobile3.png";

const mobileImages = [Mobile1, Mobile2, Mobile3];

const Details = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Get started with Commbitz",
      button: "Step 1",
      description:
        
      <div>
      <b>Download:</b>
      <br />
      Download the Commbitz app from the App Store or Google Play and create your account.
    </div> },
    {
      title: "Get started with Commbitz",
      button: "Step 2",
      description:
      <div>
        <b>Select your eSIM Plan:</b>
        <br/>
         Browse through available international eSIM card plans within the app. Choose the one that best fits your needs, whether for data, calls, or both.

      </div>
    },
    {
      title: "Get started with Commbitz",
      button: "Step 3",
      description:
      <div>
        <b>Activate your eSIM:</b>
        <br/>
        Few simple steps and start using your plan instantly without the need for a physical SIM card.
        </div>
    },
  ];

  // Auto-change step and image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0e8562] via-[#0b486c] via-30% to-[#2ea7db] to-60% p-4">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-12">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-white space-y-5">
          <h1 className="text-4xl font-semibold">{steps[currentStep].title}</h1>
          <div className="bg-[#03fe9d] text-black px-4 py-2 rounded-lg text-lg font-semibold inline-block">
            {steps[currentStep].button}
          </div>
          <p className="text-lg">{steps[currentStep].description}</p>
        </div>

        {/* Right Side - Image Display (All Images Visible) */}
        <div className="relative flex justify-center items-center w-full md:w-[500px]">
          {mobileImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Mobile ${index + 1}`}
              className={`absolute transition-transform duration-700 ${
                index === currentStep
                  ? "scale-105 opacity-100 z-10" // Active image (in front)
                  : "scale-90 opacity-50 blur-sm z-0" // Background images (blurred)
              }`}
              style={{
                width: "100%", // Maintains original aspect ratio
                maxWidth: "250px", // Limits size for responsiveness
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
