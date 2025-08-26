import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Order() {
  let [orderData, setOrderData] = useState([]);
  let { currency } = useContext(shopDataContext);
  let { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/order/userorder",
        {},
        { withCredentials: true }
      );
      if (result.data) {
        let allOrdersItem = [];
        result.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#1c1c1c]">
      <div className="h-[8%] w-[100%] text-center mt-[80px]">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px] mt-6">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="w-[100%] min-h-[10%] border-t border-b border-white/10"
          >
            <div className="w-[100%] flex flex-col md:flex-row items-start gap-4 md:gap-6 bg-white/5 backdrop-blur-xl border border-white/10 py-[10px] px-[20px] rounded-2xl relative hover:shadow-lg transition-all duration-300">
            
              <img
                src={item.image1}
                alt=""
                className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-md object-cover"
              />

              <div className="flex flex-col gap-[8px] text-[#E5E5E5] flex-1">
                <p className="text-[18px] md:text-[25px] font-semibold">
                  {item.name}
                </p>

                <div className="flex flex-wrap items-center gap-[10px] md:gap-[15px] text-[#FFD166]">
                  <p className="text-[13px] md:text-[18px]">
                    {currency} {item.price}
                  </p>
                  <p className="text-[13px] md:text-[18px]">
                    Qty: {item.quantity}
                  </p>
                  <p className="text-[13px] md:text-[18px]">
                    Size: {item.size}
                  </p>
                </div>

                <p className="text-[12px] md:text-[16px] text-[#E5E5E5]">
                  Date:
                  <span className="text-[#FFD166] pl-1">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>

                <p className="text-[12px] md:text-[16px] text-[#E5E5E5]">
                  Payment:{" "}
                  <span className="text-[#FFD166]">{item.paymentMethod}</span>
                </p>

                <div className="flex md:hidden justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <p className="text-[12px] text-[#E5E5E5]">{item.status}</p>
                  </div>
                  <button
                    className="px-[10px] py-[5px] rounded-md bg-[#FFD166] text-[#141414] font-medium text-[12px] cursor-pointer hover:bg-[#e6b958] active:scale-95 transition-all duration-200"
                    onClick={loadOrderData}
                  >
                    Track
                  </button>
                </div>
              </div>

              
              <div className="hidden md:flex absolute left-[55%] top-[40%] items-center gap-[6px]">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-[17px] text-[#E5E5E5]">{item.status}</p>
              </div>

              <div className="hidden md:block absolute right-[5%] top-[40%]">
                <button
                  className="px-[15px] py-[7px] rounded-md bg-[#FFD166] text-[#141414] font-medium text-[16px] cursor-pointer hover:bg-[#e6b958] active:scale-95 transition-all duration-200"
                  onClick={loadOrderData}
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
