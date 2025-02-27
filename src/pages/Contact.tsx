
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '@/components/Footer';

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <Footer/>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-5xl font-semibold text-center">Contact Us</h2>

        <div className="bg-[#1c2b35] mx-8 my-6 p-10 rounded-3xl shadow-lg">
          <div className="mt-12 flex flex-col md:flex-row gap-8">

            {/* Contact Info */}
            <div className="bg-[#03fe9d] text-black p-8 rounded-xl w-full md:w-2/3 shadow-lg h-[500px]">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="mt-2 text-lg">Say something to start a live chat!</p>
              <h3 className="text-2xl mt-12 font-normal">Head Office</h3>
              <div className="mt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <span>hello@commbitz.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>+44 7452 292014</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span>124 City Road, London, United Kingdom, EC1V 2NX</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 mt-32 text-black text-xl ">
                <span className="cursor-pointer"><Youtube className="w-6 h-6"  /></span>
                <span className="cursor-pointer"><Facebook className="w-6 h-6" /></span>
                <span className="cursor-pointer"><Instagram className="w-6 h-6" /></span>
              </div>
            </div>

            {/* Contact Form */}
            <div className=" p-8 rounded-xl w-full md:w-3/2 shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-lg font-normal">First Name</label>
                    <input
                      type="text"
                      className="p-3 w-full bg-transparent border-b border-gray-500 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-normal">Last Name</label>
                    <input
                      type="text"
                      className="p-3 w-full bg-transparent border-b border-gray-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-lg font-normal">Email</label>
                    <input
                      type="email"

                      className="p-3 w-full bg-transparent border-b border-gray-500 outline-none"
                    />
                  </div>
                  <div className="flex  items-center gap-2 border-b border-gray-500 pb-2">
                    <div className="flex flex-col">
                      <label className="text-lg font-normal">Phone Number</label>
                      <div className="flex gap-4 mt-4">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="flex-1 bg-transparent outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-lg font-normal">Select Subject?</label>
                  <select className="p-3 w-full bg-transparent border-b border-gray-500 outline-none">
                  <option>Select Subject</option>
                  </select>
                </div>

                <div className="flex flex-col">
                <label className="text-lg font-normal">Message</label>
                <textarea
                  placeholder="Write your message ..."
                  className="p-3 w-full bg-transparent border-b border-gray-500 outline-none"
                  rows={3}
                ></textarea>
                </div>
                {/* Button aligned to right */}
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-[#03fe9d] text-black font-semibold rounded-lg shadow-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
