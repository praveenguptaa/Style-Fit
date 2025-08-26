import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className="w-[18%] min-h-[100vh] bg-gradient-to-b from-[#141414] to-[#1c1c1c] border-r border-white/10 fixed left-0 top-0 py-[60px]">
      <div className="flex flex-col gap-4 pt-[40px] pl-[10%] text-[15px]">
        <div
          className="flex items-center justify-center md:justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg border border-white/10 hover:bg-[#FFD166] hover:text-black transition-all"
          onClick={() => navigate("/add")}
        >
          <IoIosAddCircleOutline className="w-[20px] h-[20px]" />
          <p className="hidden md:block">Add Items</p>
        </div>

        <div
          className="flex items-center justify-center md:justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg border border-white/10 hover:bg-[#FFD166] hover:text-black transition-all"
          onClick={() => navigate("/lists")}
        >
          <FaRegListAlt className="w-[20px] h-[20px]" />
          <p className="hidden md:block">List Items</p>
        </div>

        <div
          className="flex items-center justify-center md:justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg border border-white/10 hover:bg-[#FFD166] hover:text-black transition-all"
          onClick={() => navigate("/orders")}
        >
          <SiTicktick className="w-[20px] h-[20px]" />
          <p className="hidden md:block">View Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
