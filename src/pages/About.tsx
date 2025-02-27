// import React from 'react';
// import Navbar from '../components/Navbar';
// import Aboutus from '../assets/Aboutus.png';

// import Footer from '@/components/Footer';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative flex justify-center items-center w-full mb-[-100px]">
//   {/* Container for the image */}
//   <div 
//     className="relative w-[1200px] h-[800px] flex items-center justify-start px-10 rounded-md"
//     style={{ 
//       backgroundImage: `url(${Aboutus})`, 
//       backgroundSize: 'contain', 
//       backgroundRepeat: 'no-repeat', 
//       backgroundPosition: 'center'
//     }}
//   >
//     {/* About Us Text - Aligned to the left */}
//     <h1 className="text-5xl font-bold text-white">About Us</h1>
//   </div>
// </div>


//       {/* Content Section */}
//       <div className="max-w-auto mx-32 px-4 ">
//         <h2 className="text-[#03fe9d] text-2xl font-bold mb-4">Seamless Connectivity, Anytime, Anywhere</h2>
//         <p className="text-[18px] mb-6">
//           At Commbitz, we make global travel effortless with our instant-activation eSIM. Say goodbye to expensive roaming, 
//           SIM swaps, and activation hassles—just scan, connect, and go in 190+ countries. Enjoy high-speed data and make global 
//           travel smoother and more convenient than ever before.
//         </p>

//         <h2 className="text-[#03fe9d] text-2xl font-bold mb-4">Why Choose Commbitz?</h2>
//         <ul className="list-disc pl-5 space-y-3 text-[18px]">
//           <li>One Tap, Instant Connection Gone are the days of swapping SIM cards or waiting in long queues at airport kiosks. With Commbitz eSIM, all you need to do is scan a QR code, activate your plan, and get connected—in seconds. It’s that simple! No physical SIMs, no shipping delays—just seamless connectivity at your fingertips.</li>
//           <li>Global Reach, Local Comfort Whether you’re exploring the bustling streets of Tokyo, relaxing on a beach in Bali, or attending a business meeting in New York, Commbitz ensures reliable, high-speed data coverage. Our partnerships with leading network providers guarantee the best connection, so you always stay connected—just like a local.</li>
//           <li>No Hidden Costs, No Surprises We understand that international roaming can be expensive and unpredictable. That’s why Commbitz offers transparent pricing with no hidden charges. Choose from a variety of flexible data plans that fit your needs, and pay only for what you use—saving you money while giving you peace of mind.</li>
//           <li>24/7 Support, Anytime, Anywhere Traveling should be exciting, not stressful. That’s why our dedicated support team is available 24/7 to assist you with any questions, troubleshooting, or concerns. Whether you need help setting up your eSIM or resolving an issue on the go, we’re always just a message away.</li>
//         </ul>
//         <p className="text-[18px] my-8">
//         Stay Connected, Stay Free With Commbitz, you’re not just getting an eSIM—you’re unlocking a world of effortless connectivity. Travel anywhere, anytime, without worrying about staying online
//         </p>
//       </div>

//       {/* Call to Action */}
//       <div className="text-left mx-32 py-8 bg-black text-[#03fe9d] text-xl font-semibold">
//         Download the Commbitz app today on the App Store or Google Play, and experience the future of global connectivity!
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default About;

import React from 'react';
import Navbar from '../components/Navbar';
import Aboutus from '../assets/Aboutus.png';
import Footer from '@/components/Footer';
import AboutMobile from '../assets/AboutMobile.png';
import Appstore from '../components/appstore.svg';
import Playstore from '../components/playstore.svg';
import Combit from '../components/combit.webp';


const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative flex justify-center items-center w-full mb-[-100px]">
        <div
          className="relative w-[1200px] h-[800px] flex items-center justify-start px-10 rounded-md"
          style={{
            backgroundImage: `url(${Aboutus})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      {/* Content Section */}
      <div className="max-w-auto mx-32 px-4">
        <h2 className="text-[#03fe9d] text-2xl font-bold mb-4">Seamless Connectivity, Anytime, Anywhere</h2>
        <p className="text-[18px] mb-6">
          At Commbitz, we make global travel effortless with our instant-activation eSIM. Say goodbye to expensive roaming,
          SIM swaps, and activation hassles—just scan, connect, and go in 190+ countries. Enjoy high-speed data and make global
          travel smoother and more convenient than ever before.
        </p>
        <h2 className="text-[#03fe9d] text-2xl font-bold mb-4">Why Choose Commbitz?</h2>
        <ul className="list-disc pl-5 space-y-3 text-[18px]">
          <li>One Tap, Instant Connection Gone are the days of swapping SIM cards or waiting in long queues at airport kiosks. With Commbitz eSIM, all you need to do is scan a QR code, activate your plan, and get connected—in seconds. It’s that simple! No physical SIMs, no shipping delays—just seamless connectivity at your fingertips.</li>
          <li>Global Reach, Local Comfort Whether you’re exploring the bustling streets of Tokyo, relaxing on a beach in Bali, or attending a business meeting in New York, Commbitz ensures reliable, high-speed data coverage. Our partnerships with leading network providers guarantee the best connection, so you always stay connected—just like a local.</li>
          <li>No Hidden Costs, No Surprises We understand that international roaming can be expensive and unpredictable. That’s why Commbitz offers transparent pricing with no hidden charges. Choose from a variety of flexible data plans that fit your needs, and pay only for what you use—saving you money while giving you peace of mind.</li>
          <li>24/7 Support, Anytime, Anywhere Traveling should be exciting, not stressful. That’s why our dedicated support team is available 24/7 to assist you with any questions, troubleshooting, or concerns. Whether you need help setting up your eSIM or resolving an issue on the go, we’re always just a message away.</li>
        </ul>
        <p className="text-[18px] my-8">
          Stay Connected, Stay Free With Commbitz, you’re not just getting an eSIM—you’re unlocking a world of effortless connectivity. Travel anywhere, anytime, without worrying about staying online
        </p>
      </div>



      {/* Download Section with Logo and Mobile */}
      <div className="relative mx-32 py-16 rounded-xl mb-16">
        <div className="flex items-center justify-between px-8">
          {/* Left Side - Logo */}
          <div className="w-2/3">
            <img
              src={Combit}
              alt="Commbitz Logo"
              className="max-w-[300px]"
            />
            <h3 className="text-white text-[16px] font-bold mt-4 w-auto">
              Stay Connected, Stay Free With Commbitz, you’re not just getting an eSIM—<br/>you’re unlocking a world of effortless connectivity.
              Travel anywhere,<br/> anytime, without worrying about staying online.
            </h3>
          </div>

          {/* Right Side - Mobile Image */}
          <div className="w-1/3 flex justify-end relative">
            <img
              src={AboutMobile}
              alt="Commbitz App"
              className="h-[800px] w-[600px] object-contain absolute top-[-300px]"
            />
          </div>
        </div>

        {/* New Row - Centered Text and Buttons (Now Below) */}
        <div className="w-full h-[300px] bg-[#03fe9d] text-center flex flex-col justify-center items-center mt-8 py-6 px-12 rounded-lg relative">
          <h3 className="text-black text-2xl font-semibold mb-6 w-[80%]">
            Download the Commbitz app today on the App Store or Google Play, and experience the future of global connectivity!
          </h3>
          <div className="flex justify-center gap-4">
            <img
              src={Playstore}
              alt="Get it on Google Play"
              className="h-12 cursor-pointer hover:scale-105 transition-transform"
            />
            <img
              src={Appstore}
              alt="Download on the App Store"
              className="h-12 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
};
export default About;