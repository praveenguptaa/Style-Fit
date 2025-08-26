import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from "../component/RelatedProduct";
import Loading from "../component/Loading";

function ProductDetail() {
  let { productId } = useParams();
  let { products, currency, addtoCart, loading } = useContext(shopDataContext);
  let [productData, setProductData] = useState(false);

  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setImage(item.image1);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div>
      <div className="w-[99vw] min-h-screen bg-gradient-to-l from-[#141414] to-[#1c1c1c] flex flex-col lg:flex-row items-center justify-start gap-[20px] pt-[70px] pb-[70px] md:pt-0 md:pb-0">
        <div className="lg:w-[50vw] md:w-[90vw] w-full lg:h-[90vh] h-auto flex flex-col lg:flex-row items-center justify-center gap-[20px]">
          <div className="lg:w-[20%] md:w-[80%] w-full h-auto lg:h-[80%] flex lg:flex-col flex-row flex-wrap items-center justify-center gap-[10px] p-2">
            {[image1, image2, image3, image4].map((img, index) => (
              <div
                key={index}
                className="md:w-[100px] w-[60px] h-[60px] md:h-[110px] bg-white/10 border border-white/20 rounded-md shadow-md hover:scale-105 transition-all"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full cursor-pointer rounded-md object-cover"
                  onClick={() => setImage(img)}
                />
              </div>
            ))}
          </div>

          <div className="lg:w-[60%] w-[90%] lg:h-[78%] h-[300px] border border-white/20 rounded-md overflow-hidden shadow-lg mt-3 lg:mt-0">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-md object-fill"
            />
          </div>
        </div>

        <div className="lg:w-[50vw] w-full lg:h-[75vh] h-auto flex flex-col items-start justify-start py-[20px] px-[20px] gap-[10px] text-[#E5E5E5]">
          <h1 className="text-[28px] md:text-[40px] font-semibold">
            {productData.name.toUpperCase()}
          </h1>

          <div className="flex items-center gap-1">
            <FaStar className="text-[18px] md:text-[20px] fill-[#FFD166]" />
            <FaStar className="text-[18px] md:text-[20px] fill-[#FFD166]" />
            <FaStar className="text-[18px] md:text-[20px] fill-[#FFD166]" />
            <FaStar className="text-[18px] md:text-[20px] fill-[#FFD166]" />
            <FaStarHalfAlt className="text-[18px] md:text-[20px] fill-[#FFD166]" />
            <p className="text-[16px] md:text-[18px] font-semibold pl-[5px]">
              (124)
            </p>
          </div>

          <p className="text-[24px] md:text-[30px] font-semibold">
            {currency} {productData.price}
          </p>

          <p className="w-[95%] md:w-[60%] text-[15px] md:text-[18px] leading-relaxed opacity-90">
            {productData.description}
          </p>

          <div className="flex flex-col gap-[10px] my-[10px]">
            <p className="text-[18px] md:text-[22px] font-semibold">
              Select Size
            </p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 rounded-md transition-all duration-200 
              ${
                item === size
                  ? "bg-[#FFD166] text-black font-bold"
                  : "bg-white/10 text-[#E5E5E5] hover:bg-white/20"
              }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="text-[14px] md:text-[16px] active:bg-slate-700 cursor-pointer bg-[#FFD166] py-[10px] px-[20px] rounded-2xl mt-[10px] border border-white/20 text-black font-semibold shadow-md shadow-black hover:scale-105 transition-all"
              onClick={() => addtoCart(productData._id, size)}
            >
              {loading ? <Loading /> : "Add to Cart"}
            </button>
          </div>

          <div className="w-[90%] h-[1px] bg-white/20"></div>

          <div className="w-[95%] text-[14px] md:text-[16px] text-[#E5E5E5] opacity-90 mt-2">
            <p>✅ 100% Original Product.</p>
            <p>✅ Cash on delivery is available.</p>
            <p>✅ Easy return & exchange within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] flex flex-col items-start justify-start overflow-x-hidden">
        <div className="flex px-[20px] mt-[90px] lg:ml-[80px] lg:mt-[0px] gap-4">
          <p className="border px-5 py-3 text-sm text-[#E5E5E5] bg-white/5 rounded-md">
            Description
          </p>
          <p className="border px-5 py-3 text-sm text-[#E5E5E5] bg-white/5 rounded-md">
            Reviews (124)
          </p>
        </div>

        <div className="w-[80%] md:h-[150px] h-[220px] bg-white/5 border border-white/10 text-[#E5E5E5] text-[13px] md:text-[15px] lg:text-[18px] px-[20px] py-[20px] rounded-xl shadow-md lg:ml-[100px] ml-[20px] mt-5">
          <p className="w-[95%] h-[90%] flex items-center justify-center">
            Upgrade your wardrobe with this stylish slim-fit cotton shirt,
            available now on STYLE-FIT. Crafted from breathable, high-quality
            fabric, it offers all-day comfort and effortless style. Easy to
            maintain and perfect for any setting, this shirt is a must-have
            essential for those who value both fashion and function.
          </p>
        </div>

        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default ProductDetail;
