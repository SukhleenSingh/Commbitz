import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+447452292014?text=Hello!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-[#03fe9d] text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    >
      <FaWhatsapp size={25} />
    </a>
  );
};

export default WhatsAppButton;
