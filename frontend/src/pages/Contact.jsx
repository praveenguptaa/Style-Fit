import React from "react";
import Title from "../component/Title";
import contact from "../assets/contact.jpg";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
  return (
    <div className="w-[99vw] min-h-[100vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#1c1c1c] gap-[50px] pt-[80px] pb-[60px]">
      <Title text1={"CONTACT"} text2={"US"} />

      <div className="w-[100%] flex flex-col lg:flex-row items-center justify-center gap-[30px] px-[20px]">
        
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
          <img
            src={contact}
            alt="Contact Us"
            className="lg:w-[70%] w-[80%] shadow-lg shadow-black rounded-lg border border-white/10"
          />
        </div>

      
        <div className="lg:w-[50%] w-[100%] flex flex-col items-start justify-center gap-[15px] mt-[20px] lg:mt-0 px-[10px]">
          <p className="text-[#FFD166] text-[18px] font-bold">Our Store</p>
          <div className="text-[#E5E5E5] text-[14px] md:text-[16px]">
            <p>Daltonganj</p>
            <p>Palamu, Jharkhand, India</p>
          </div>

          <div className="text-[#E5E5E5] text-[14px] md:text-[16px]">
            <p>Tel: +91-9876543210</p>
            <p>Email: admin@style-fit.com</p>
          </div>

          <p className="text-[#FFD166] text-[18px] font-bold mt-[10px]">
            Careers at STYLE-FIT
          </p>
          <p className="text-[#E5E5E5] text-[14px] md:text-[16px]">
            Learn more about our teams and job openings
          </p>

          <button className="px-[30px] py-[12px] text-black bg-[#FFD166] hover:brightness-110 rounded-md font-semibold transition-all">
            Explore Jobs
          </button>
        </div>
      </div>

    </div>
  );
}

export default Contact;
