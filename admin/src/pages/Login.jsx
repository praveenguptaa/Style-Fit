import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext);
  const { adminData, getAdmin } = useContext(adminDataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const AdminLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/adminlogin`,
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      toast.success("Admin Login Successfully");
      getAdmin();
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Admin Login Failed");
      setLoading(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] text-white flex flex-col items-center justify-start">
      
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
        
        <h1 className="text-[22px] font-bold font-sans text-[#FFD166]">STYLE-FIT</h1>
      </div>

      
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold text-[#FFD166]">
          Login Page
        </span>
        <span className="text-[16px] text-[#ffffffc7]">
          Admin login to STYLE-FIT
        </span>
      </div>

     
      <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#FFD16633] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        
        <form
          onSubmit={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="text"
              className="w-[100%] h-[50px] border-2 border-[#FFD16655] rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold focus:border-[#FFD166] focus:outline-none transition-all"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-2 border-[#FFD16655] rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold focus:border-[#FFD166] focus:outline-none transition-all"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {!show ? (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}

            <button
              className="w-[100%] h-[50px] bg-[#FFD166] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold text-black hover:bg-[#e6c145] transition-all"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
