import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-br from-[#141414] to-[#1c1c1c] flex items-center justify-center flex-col gap-[20px]">
      <h1 className="text-white md:text-[70px] text-[40px] font-bold">404</h1>
      <p className="text-[#ccc] md:text-[24px] text-[18px]">Page Not Found</p>
      <button
        className="bg-[#FFD166] hover:bg-[#e6be4c] transition-colors px-[25px] py-[12px] rounded-xl text-black text-[18px] font-semibold cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}

export default NotFound;
