import React, { useState, useContext, useEffect } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Home() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const { serverUrl } = useContext(authDataContext);

  const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`, {
        withCredentials: true,
      });
      setTotalProducts(products.data.length);

      const orders = await axios.post(
        `${serverUrl}/api/order/list`,
        {},
        { withCredentials: true }
      );
      setTotalOrders(orders.data.length);
    } catch (err) {
      console.error("Failed to fetch counts", err);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] text-white relative overflow-x-hidden">
      <Nav />
      <Sidebar />

      <div className="w-[75%] absolute left-[25%] flex flex-col gap-10 py-24 px-8">
        <h1 className="text-4xl md:text-3xl font-bold text-[#FFD166]">
          STYLE-FIT Admin Panel
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-full md:w-[400px] h-[180px] bg-[#1a1a1a] border border-white/20 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4">
            <span className="text-lg md:text-xl font-semibold text-[#FFD166]">
              Total Products
            </span>
            <span className="px-6 py-3 bg-[#00000050] rounded-lg text-xl md:text-2xl border border-white/20">
              {totalProducts}
            </span>
          </div>

          <div className="w-full md:w-[400px] h-[180px] bg-[#1a1a1a] border border-white/20 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4">
            <span className="text-lg md:text-xl font-semibold text-[#FFD166]">
              Total Orders
            </span>
            <span className="px-6 py-3 bg-[#00000050] rounded-lg text-xl md:text-2xl border border-white/20">
              {totalOrders}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
