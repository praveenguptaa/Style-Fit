import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price }) {
  const { currency } = useContext(shopDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="w-[220px] sm:w-[45%] md:w-[240px] h-[360px] 
                       bg-gradient-to-t from-[#1c1c1c] to-[#141414] 
                       rounded-2xl shadow-lg hover:shadow-xl hover:scale-105
                       flex flex-col cursor-pointer border border-white/10 transition-all duration-300"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      
      <div className="w-full h-[60%] overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-100 transition-transform duration-500"
        />
      </div>

      
      <div className="mt-2 px-3 text-[#E5E5E5] font-semibold text-md line-clamp-1">
        {name}
      </div>

     
      <div className="mt-1 px-3 text-[#FFD166] font-semibold text-sm">
        {currency} {price}
      </div>

      
      <button
        className="mt-3 mx-3 w-[calc(100%-1.5rem)] py-1.5 bg-[#FFD166] text-black 
                               rounded-full text-sm font-semibold transition-all hover:brightness-110"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
