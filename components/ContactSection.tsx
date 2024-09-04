import React from "react";
import {FaMobileAlt} from "react-icons/fa";

function ContactSection() {
  return (
    <div className="contact-section py-8">
      <h2 className="text-center text-2xl font-bold mb-4">Contact Me</h2>
      <div className="flex items-center justify-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        <FaMobileAlt className="mr-2" />
        <span>+971504323046</span>
      </div>
    </div>
  );
}

export default ContactSection;
