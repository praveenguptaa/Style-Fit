import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { shopDataContext } from "../context/ShopContext";

function Nav() {
  let { getCurrentUser, userData, setUserData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let { showSearch, setShowSearch, search, setSearch, getCartCount } =
    useContext(shopDataContext);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      setUserData(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  return (
    <div className="w-screen h-[70px] bg-[#0e0c0c] fixed top-0 z-10 flex items-center justify-between px-8 shadow-md shadow-black/40">
     
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        
        <h1 className="text-lg md:text-xl font-bold text-[#FFD166]">
          STYLE-FIT
        </h1>
      </div>

      
      <div className="hidden md:flex gap-6">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-xl bg-white/5 text-[#ffd166] hover:bg-[#FFD166] hover:text-black transition-all"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/collection")}
          className="px-4 py-2 rounded-xl bg-white/5 text-[#ffd166] hover:bg-[#FFD166] hover:text-black transition-all"
        >
          Collections
        </button>
        <button
          onClick={() => navigate("/about")}
          className="px-4 py-2 rounded-xl bg-white/5 text-[#ffd166] hover:bg-[#FFD166] hover:text-black transition-all"
        >
          About
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="px-4 py-2 rounded-xl bg-white/5 text-[#ffd166] hover:bg-[#FFD166] hover:text-black transition-all"
        >
          Contact
        </button>
      </div>

      
      <div className="flex items-center gap-4 relative">
        {!showSearch && (
          <IoSearchCircleOutline
            className="w-10 h-10 text-[#FFD166] cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              setShowSearch((prev) => !prev);
              navigate("/collection");
            }}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className="w-10 h-10 text-[#FFD166] cursor-pointer hover:scale-110 transition-all"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}

        {!userData && (
          <FaCircleUser
            className="w-7 h-7 text-[#FFD166] cursor-pointer hover:scale-110 transition-all"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        )}
        {userData && (
          <div
            className="w-8 h-8 bg-[#FFD166] text-black font-bold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1).toUpperCase()}
          </div>
        )}

        <div className="relative hidden md:block">
          <MdOutlineShoppingCart
            className="w-8 h-8 text-[#FFD166] cursor-pointer hover:scale-110 transition-all"
            onClick={() => navigate("/cart")}
          />
          <span className="absolute -top-2 -right-2 bg-[#FFD166] text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
            {getCartCount()}
          </span>
        </div>
      </div>

      
      {showSearch && (
        <div className="absolute top-[70px] left-0 w-full bg-black/60 backdrop-blur-md p-4 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[80%] md:w-[50%] h-12 rounded-xl px-5 bg-white/10 text-[#E5E5E5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
          />
        </div>
      )}

      
      {showProfile && (
        <div className="absolute top-[75px] right-6 w-56 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl shadow-lg p-3">
          <ul className="flex flex-col gap-2 text-[#E5E5E5]">
            {!userData && (
              <li
                className="px-4 py-2 rounded-lg hover:bg-[#FFD166] hover:text-black cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="px-4 py-2 rounded-lg hover:bg-[#FFD166] hover:text-black cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                Logout
              </li>
            )}
            <li
              className="px-4 py-2 rounded-lg hover:bg-[#FFD166] hover:text-black cursor-pointer"
              onClick={() => {
                navigate("/order");
                setShowProfile(false);
              }}
            >
              Orders
            </li>
            <li
              className="px-4 py-2 rounded-lg hover:bg-[#FFD166] hover:text-black cursor-pointer"
              onClick={() => {
                navigate("/about");
                setShowProfile(false);
              }}
            >
              About
            </li>
          </ul>
        </div>
      )}

      
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-gradient-to-r from-[#0a0a0a] to-[#1c1c1c] flex items-center justify-around md:hidden">
        <button
          className="flex flex-col items-center text-[#FFD166]"
          onClick={() => navigate("/")}
        >
          <IoMdHome className="w-6 h-6" /> Home
        </button>
        <button
          className="flex flex-col items-center text-[#FFD166]"
          onClick={() => navigate("/collection")}
        >
          <HiOutlineCollection className="w-6 h-6" /> Collections
        </button>
        <button
          className="flex flex-col items-center text-[#FFD166]"
          onClick={() => navigate("/contact")}
        >
          <MdContacts className="w-6 h-6" /> Contact
        </button>
        <button
          className="relative flex flex-col items-center text-[#FFD166]"
          onClick={() => navigate("/cart")}
        >
          <MdOutlineShoppingCart className="w-6 h-6" /> Cart
          <span className="absolute -top-2 right-0 bg-[#FFD166] text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
            {getCartCount()}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
