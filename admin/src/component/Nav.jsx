import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import { toast } from "react-toastify";

function Nav() {
  let navigate = useNavigate();
  let { serverUrl } = useContext(authDataContext);
  let { getAdmin } = useContext(adminDataContext);

  const logOut = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      toast.success("LogOut Successfully");
      getAdmin();
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("LogOut Failed");
    }
  };

  return (
    <div className="w-[100vw] h-[70px] bg-gradient-to-r from-[#141414] to-[#1c1c1c] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      
      <div
        className="flex items-center gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        
        <h1 className="text-[20px] font-bold text-[#FFD166] font-sans">STYLE-FIT</h1>
      </div>

      
      <button
        className="text-[15px] hover:bg-[#FFD166] hover:text-black border border-[#FFD166] cursor-pointer bg-transparent py-[10px] px-[20px] rounded-2xl text-[#FFD166] font-semibold transition-all"
        onClick={logOut}
      >
        LogOut
      </button>
    </div>
  );
}

export default Nav;
