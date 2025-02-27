// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import lyca from "./lyca.webp";
// import tmob from "./tmob.webp";
// import vodafone from "./vodafone.webp";
// import ais from "./ais.webp";
// import chinamob from "./chinamob.webp";


// const PartnerSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true
//   };


//   const logos = [
//     lyca, vodafone, tmob, chinamob, ais
//   ];

//   return (
//     <section className="partner-slider mt-10">
//       <div className="container mx-auto">
//         <Slider {...settings}>
//           {logos.map((logo, index) => (
//             <div key={index} className="partner-logo">
//               <img src={logo} width="180" height="50" alt={`Partner ${index + 1}`} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default PartnerSlider;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import lyca from "./lyca.webp";
import tmob from "./tmob.webp";
import vodafone from "./vodafone.webp";
import ais from "./ais.webp";
import chinamob from "./chinamob.webp";
import three from './three.webp';
import telepfonica from './Telefonica.webp'

const PartnerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide arrows for a cleaner look
  };

  const logos = [lyca, vodafone, tmob, chinamob, ais, three,telepfonica];

  return (
    <section className="partner-slider  bg-black py-10 px-20">
      <div className="container mx-auto">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="partner-logo flex justify-center">
              <div className="w-[200px] h-[150px] flex items-center justify-center border border-green-500 rounded-lg p-4 ">
                <img src={logo} alt={`Partner ${index + 1}`} className="w-auto h-12" />
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnerSlider;
