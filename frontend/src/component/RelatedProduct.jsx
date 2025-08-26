import React, { useContext, useEffect, useState } from "react";
import { shopDataContext } from "../context/ShopContext";
import Title from "./Title";
import Card from "./Card";

function RelatedProduct({ category, subCategory, currentProductId }) {
  let { products } = useContext(shopDataContext);
  let [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      productsCopy = productsCopy.filter(
        (item) => currentProductId !== item._id
      );
      setRelated(productsCopy.slice(0, 4));
    }
  }, [products, category, subCategory, currentProductId]);

  return (
    <div className="w-full min-h-[60vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] py-16 px-6 md:px-16 flex flex-col items-center">
      
      <div className="w-full flex items-center justify-start">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

     
      <div className="w-full mt-10 flex items-center justify-center flex-wrap gap-10">
        {related.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Card
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
