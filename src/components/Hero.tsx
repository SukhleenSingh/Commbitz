import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import Image1 from "./First.png";
import Image2 from "./second.png";
import Image3 from "./Thirdhero.png";

const images = [Image1, Image2, Image3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track active slide

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update slide index
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <Slider {...settings} className="relative w-full h-screen">
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Image as Background */}
            <div
              className="absolute inset-0 w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>

            {/* Dots on the Image */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? "bg-[#03fe9d] w-6 h-2" : "bg-white"
                  }`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex justify-center items-center px-6 lg:px-20">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center">
          
          {/* Left Side - White Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white max-w-lg text-left"
          >
            <p className="text-lg text-gray-300 mb-2">
              Pioneering the World's 1st Early Stage<br /> Profitable eSIM Company
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Travel Smart <br /> With eSIM.
            </h1>
          </motion.div>

          {/* Right Side - Dark Background with Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-black/50 text-white p-10 md:p-8 rounded-lg max-w-lg lg:max-w-xl mt-4 lg:mt-0 h-80 md:h-80 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Affordable eSIM.
            </h2>
            <p className="text-xl md:text-2xl mt-4">
              Global Connectivity. Unlimited Freedom.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
