import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { SiEbox } from "react-icons/si";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/order/list`,
        {},
        { withCredentials: true }
      );
      setOrders(result.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { withCredentials: true }
      );
      if (result.data) await fetchAllOrders();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] text-white">
      <Nav />
      <div className="w-full h-full flex items-start">
        <Sidebar />

        <div
          className="
            flex flex-col gap-[30px] 
            overflow-x-hidden 
            py-[50px] px-[10px]
            w-full min-h-screen
            mt-[70px]
            ml-[80px]    /* mobile */
            md:ml-[230px] /* tablet */
            lg:ml-[320px] /* desktop */
          "
        >
          <div className="w-fit text-[22px] md:text-[40px] mb-[20px] text-[#FFD166] font-semibold">
            All Orders List
          </div>

          {orders.map((order, index) => (
            <div
              key={index}
              className="w-[90%] bg-[#1a1a1a] rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px] border border-white/10 hover:border-[#FFD166] transition-all"
            >
              <SiEbox className="w-[60px] h-[60px] text-black p-[5px] rounded-lg bg-[#FFD166]" />

              <div>
                <div className="flex items-start justify-center flex-col gap-[5px] text-[16px] text-[#56dbfc]">
                  {order.items.map((item, i) => (
                    <p key={i}>
                      {item.name.toUpperCase()} * {item.quantity}{" "}
                      <span>{item.size}</span>
                      {i !== order.items.length - 1 && ","}
                    </p>
                  ))}
                </div>

                <div className="text-[15px] text-green-100 mt-[5px]">
                  <p>
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                  <p>{order.address.street + ", "}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.pinCode}
                  </p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              <div className="text-[15px] text-green-100">
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? "Done" : "Pending"}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                <p className="text-[20px] text-[#FFD166]">₹ {order.amount}</p>
              </div>

              <select
                value={order.status}
                className="px-[5px] py-[10px] bg-[#333333] rounded-lg border border-[#FFD166] text-white hover:bg-[#FFD166] hover:text-black transition-all"
                onChange={(e) => statusHandler(e, order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
