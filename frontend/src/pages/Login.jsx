import React, { useState, useContext } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from "../context/UserContext";
import Loading from "../component/Loading";
import { toast } from "react-toastify";

function Login() {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      setLoading(false);
      getCurrentUser();
      navigate("/");
      toast.success("User Login Successful");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("User Login Failed");
    }
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1c1c1c] flex flex-col items-center justify-center text-[#E5E5E5]">
      
      <div
        className="absolute top-6 left-6 flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        {/* <img className="w-10" src={Logo} alt="STYLE-FIT Logo" /> */}
        <h1 className="text-[22px] font-bold font-sans text-[#FFD166]">STYLE-FIT</h1>
      </div>

      
      <div className="max-w-[500px] w-[90%] bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 flex flex-col items-center">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome Back 👋</h2>
          <p className="text-sm text-gray-400">
            Login to continue shopping with STYLE-FIT
          </p>
        </div>

        
        <div
          onClick={googlelogin}
          className="w-full h-12 bg-[#FFD166] text-black rounded-xl flex items-center justify-center gap-2 font-medium cursor-pointer hover:scale-105 hover:shadow-xl transition-all"
        >
          <img src={google} alt="Google" className="w-5" />
          Continue with Google
        </div>

        
        <div className="w-full flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            type="email"
            className="w-full h-12 bg-transparent border border-white/20 rounded-xl px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              className="w-full h-12 bg-transparent border border-white/20 rounded-xl px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show ? (
              <IoEyeOutline
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer text-gray-400"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEye
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer text-gray-400"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#FFD166] text-black font-semibold rounded-xl flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all"
          >
            {loading ? <Loading /> : "Login"}
          </button>
        </form>

        
        <p className="text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-[#FFD166] hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Create New Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
