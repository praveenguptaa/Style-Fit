import React from "react";
import Title from "../component/Title";
import about from "../assets/about.jpg";
import NewLetterBox from "../component/NewLetterBox";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#141414] to-[#1c1c1c] flex flex-col items-center justify-center gap-16 pt-20">
      
      <Title text1={"ABOUT"} text2={"US"} />

      
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
        
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img
            src={about}
            alt="About"
            className="lg:w-2/3 w-4/5 rounded-2xl shadow-lg shadow-black/60 hover:scale-105 transition-transform duration-300"
          />
        </div>

        
        <div className="lg:w-1/2 w-full flex flex-col gap-6 text-[#E5E5E5]">
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            STYLE-FIT born for smart, seamless shopping—created to deliver
            quality products, trending styles, and everyday essentials in one
            place. With reliable service, fast delivery, and great value,
            STYLE-FIT makes your online shopping experience simple, satisfying,
            and stress-free.
          </p>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Modern shoppers—combining style, convenience, and affordability.
            Whether it’s fashion, essentials, or trends, we bring everything you
            need to one trusted platform with fast delivery, easy returns, and a
            customer-first shopping experience you’ll love.
          </p>
          <h3 className="text-lg lg:text-xl font-bold text-[#FFD166] mt-2">
            Our Mission
          </h3>
          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Our mission is to redefine online shopping by delivering quality,
            affordability, and convenience. STYLE-FIT connects customers with
            trusted products and brands, offering a seamless, customer-focused
            experience that saves time, adds value, and fits every lifestyle and
            need.
          </p>
        </div>
      </div>

      
      <div className="w-full flex flex-col items-center gap-6">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="w-4/5 flex flex-col lg:flex-row items-center justify-center gap-8 py-10">
          
          <div className="w-11/12 lg:w-1/3 h-64 bg-white/5 border border-white/10 rounded-2xl shadow-md backdrop-blur-xl flex flex-col items-center justify-center gap-4 px-6 py-4 text-center text-[#E5E5E5] hover:scale-105 hover:shadow-xl transition-all">
            <b className="text-xl font-semibold text-[#FFD166]">
              Quality Assurance
            </b>
            <p className="text-sm opacity-90">
              We guarantee quality through strict checks, reliable sourcing, and
              a commitment to customer satisfaction always.
            </p>
          </div>

         
          <div className="w-11/12 lg:w-1/3 h-64 bg-white/5 border border-white/10 rounded-2xl shadow-md backdrop-blur-xl flex flex-col items-center justify-center gap-4 px-6 py-4 text-center text-[#E5E5E5] hover:scale-105 hover:shadow-xl transition-all">
            <b className="text-xl font-semibold text-[#FFD166]">Convenience</b>
            <p className="text-sm opacity-90">
              Shop easily with fast delivery, simple navigation, secure
              checkout, and everything you need in one place.
            </p>
          </div>

          
          <div className="w-11/12 lg:w-1/3 h-64 bg-white/5 border border-white/10 rounded-2xl shadow-md backdrop-blur-xl flex flex-col items-center justify-center gap-4 px-6 py-4 text-center text-[#E5E5E5] hover:scale-105 hover:shadow-xl transition-all">
            <b className="text-xl font-semibold text-[#FFD166]">
              Exceptional Customer Service
            </b>
            <p className="text-sm opacity-90">
              Our dedicated support team ensures quick responses, helpful
              solutions, and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
