import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../component/CartTotal";

function Cart() {
  const { products, currency, cartItem, updateQuantity } =
    useContext(shopDataContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-br from-[#141414] to-[#1c1c1c]">
      <div className="h-[8%] w-[100%] text-center mt-[80px]">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="w-[100%] h-[92%] flex flex-col gap-[20px]">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="w-[100%] border-t border-b border-[#333]"
            >
              <div className="w-[100%] flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#2a2a2a] py-[10px] px-[20px] rounded-2xl relative">
                <img
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-md"
                  src={productData.image1}
                  alt=""
                />

                <div className="flex flex-col gap-[10px]">
                  <p className="text-[18px] sm:text-[25px] text-white">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <p className="text-[18px] sm:text-[20px] text-[#FFD166]">
                      {currency} {productData.price}
                    </p>
                    <p className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] text-[14px] sm:text-[16px] text-black bg-[#FFD166] rounded-md flex items-center justify-center border-[1px] border-[#333]">
                      {item.size}
                    </p>
                  </div>
                </div>

                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="w-[60px] sm:w-auto px-2 py-1 sm:py-2 text-white text-[16px] sm:text-[18px] font-semibold bg-[#1f1f1f] border-[1px] border-[#FFD166] rounded-md sm:absolute sm:top-[40%] sm:left-[50%] mt-2 sm:mt-0"
                  onChange={(e) =>
                    e.target.value === " " || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />

                <RiDeleteBin6Line
                  className="text-[#FFD166] w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] absolute top-2 right-2 sm:top-[40%] sm:right-[5%]"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center sm:justify-start items-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <button
            className="text-[16px] sm:text-[18px] hover:bg-[#FFD166]/50 cursor-pointer font-bold bg-[#FFD166] py-[10px] px-[30px] sm:px-[50px] rounded-2xl text-black flex items-center justify-center gap-[15px] sm:gap-[20px] border-[1px] border-[#333] mx-auto sm:ml-[30px] mt-[20px]"
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/placeorder");
              } else {
                console.log("Your cart is empty!");
              }
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
