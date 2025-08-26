import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Lists() {
  const [list, setList] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`);
      setList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeList = async (id) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/product/remove/${id}`,
        {},
        { withCredentials: true }
      );
      if (result.data) fetchList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] text-white">
      <Nav />
      <div className="w-[100%] h-[100%] flex items-start justify-start">
        <Sidebar />

        <div className="w-[82%] h-[100%] ml-[100px] md:ml-[230px] lg:ml-[320px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] px-[10px]">
          <div className="w-[400px] text-[28px] md:text-[40px] mb-[20px] text-[#FFD166] font-semibold">
            All Listed Products
          </div>

          {list?.length > 0 ? (
            list.map((item, index) => (
              <div
                key={index}
                className="w-[90%] md:h-[120px] h-[90px] bg-[#1a1a1a] rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px] border border-white/10 hover:bg-[#FFD166] hover:text-black transition-all"
              >
                <img
                  src={item.image1}
                  className="w-[30%] md:w-[120px] h-[90%] rounded-lg"
                  alt={item.name}
                />
                <div className="w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]">
                  <div className="w-[100%] md:text-[20px] text-[15px]">
                    {item.name}
                  </div>
                  <div className="md:text-[17px] text-[15px]">
                    {item.category}
                  </div>
                  <div className="md:text-[17px] text-[15px]">
                    ₹{item.price}
                  </div>
                </div>
                <div className="w-[10%] h-[100%] flex items-center justify-center">
                  <span
                    className="w-[35px] h-[30%] flex items-center justify-center rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-all"
                    onClick={() => removeList(item._id)}
                  >
                    X
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-lg">No products available.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lists;
