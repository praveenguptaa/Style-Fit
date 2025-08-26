import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="w-full md:h-[36vh] h-auto mb-[77px] md:mb-0 text-white">
      <div
        className="w-full md:h-[30vh] h-auto 
                   bg-[#0d0d0d] 
                   flex flex-col md:flex-row 
                   items-center md:items-center 
                   justify-center md:px-[50px] px-[10px] py-6 md:py-0 gap-6 md:gap-0"
      >
        <div className="w-full md:w-[30%] flex flex-col gap-2 items-center md:items-start justify-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2 md:mt-10">
            <p className="text-[18px] md:text-[20px] font-semibold text-[#FFD166]">
              STYLE-FIT
            </p>
          </div>
          <p className="text-[14px] md:text-[15px] text-gray-300 hidden md:block">
            Style-Fit is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery—all backed
            by trusted service designed to make your life easier every day.
          </p>
          <p className="text-[14px] text-gray-300 flex md:hidden text-center">
            Fast. Easy. Reliable. STYLE-FIT Shopping
          </p>
        </div>

        <div className="w-full md:w-[25%] flex flex-col items-center justify-center text-center">
          <p className="text-[18px] md:text-[20px] font-sans font-semibold text-[#FFD166] mt-2 md:mt-10">
            COMPANY
          </p>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-300 hidden md:block cursor-pointer hover:text-[#FFD166]">
              Home
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-[#FFD166]">
              About us
            </li>
            <li className="text-gray-300 hidden md:block cursor-pointer hover:text-[#FFD166]">
              Delivery
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-[#FFD166]">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[25%] flex flex-col items-center justify-center text-center">
          <p className="text-[18px] md:text-[20px] font-sans font-semibold text-[#FFD166] mt-2 md:mt-10">
            GET IN TOUCH
          </p>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-300">+91-9876543210</li>
            <li className="text-gray-300">contact@style-fit.com</li>
            <li className="text-gray-300 hidden md:block">+919876543210</li>
            <li className="text-gray-300 hidden md:block">
              admin@style-fit.com
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-600"></div>

      <div className="w-full h-[5vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] flex items-center justify-center text-gray-400 text-[12px] md:text-[14px] px-2 text-center">
        © 2025 STYLE-FIT - All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
