import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Business from "./business.png";
import Apn from "./apn.png";
import ET from "./et.png";
import communication from "./communication.png";
import startup from "./startup.png";
import telecom from "./Telecom.png";

const Features = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [Business, Apn, ET, communication, startup, telecom];

  return (
    <section className="partner-slider bg-[#19272f] py-20 px-20">
      <div className="container mx-auto px-6">
        <p className="text-white text-2xl">News</p>
        <h1 className="text-white text-4xl my-4 ">Feature Listing</h1>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-48 h-32 flex flex-col items-center justify-center border border-green-500 rounded-lg shadow-lg p-6 gap-4 ">
                <img src={logo} alt={`Partner ${index + 1}`} className="w-auto h-16 object-contain" />
                <h1 className="text-green-500">Learn More</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Features;
