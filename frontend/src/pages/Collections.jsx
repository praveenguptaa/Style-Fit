import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../component/Card";

function Collections() {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const sortProducts = () => {
    let fbCopy = filterProduct.slice();
    switch (sortType) {
      case "low-high":
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => sortProducts(), [sortType]);
  useEffect(() => setFilterProduct(products), [products]);
  useEffect(() => applyFilter(), [category, subCategory, search, showSearch]);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] flex flex-col md:flex-row pt-[70px] pb-[110px] overflow-x-hidden">
      <div
        className={`md:w-[30vw] lg:w-[20vw] w-full md:min-h-[100vh] ${
          showFilter ? "h-auto" : "h-[50px]"
        } p-4 border-r border-[#2e2e2e] text-gray-200 lg:fixed bg-[#141414] md:bg-transparent`}
      >
        <p
          className="text-[20px] md:text-[25px] font-semibold flex gap-2 items-center justify-between cursor-pointer text-[#FFD166] md:cursor-default"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          <span className="md:hidden">
            {!showFilter ? (
              <FaChevronRight className="text-[18px]" />
            ) : (
              <FaChevronDown className="text-[18px]" />
            )}
          </span>
        </p>

        <div
          className={`border border-[#2e2e2e] pl-5 py-3 mt-4 rounded-md bg-[#1a1a1a] transition-all duration-300 ${
            showFilter ? "block" : "hidden"
          } md:block`}
        >
          <p className="text-[16px] md:text-[18px] text-[#FFD166] font-medium">
            CATEGORIES
          </p>
          <div className="flex flex-col gap-2 mt-2">
            {["Men", "Women", "Kids"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 text-[#E5E5E5] font-light cursor-pointer text-sm md:text-base"
              >
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="w-4 h-4 accent-[#FFD166] border border-[#555] rounded"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div
          className={`border border-[#2e2e2e] pl-5 py-3 mt-4 rounded-md bg-[#1a1a1a] transition-all duration-300 ${
            showFilter ? "block" : "hidden"
          } md:block`}
        >
          <p className="text-[16px] md:text-[18px] text-[#FFD166] font-medium">
            SUB-CATEGORIES
          </p>
          <div className="flex flex-col gap-2 mt-2">
            {["TopWear", "BottomWear", "WinterWear"].map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-2 text-[#E5E5E5] font-light cursor-pointer text-sm md:text-base"
              >
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="w-4 h-4 accent-[#FFD166] border border-[#555] rounded"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:pl-[20%] md:py-[10px] w-full">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 md:px-8">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          <select
            className="bg-[#1a1a1a] border border-[#2e2e2e] w-[80%] md:w-[200px] h-[45px] px-3 mt-3 lg:mt-0 text-white rounded-lg hover:border-[#FFD166] text-sm md:text-base"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        <div className="w-full min-h-[70vh] flex items-center justify-center flex-wrap gap-5 mt-6 px-2 md:px-8">
          {filterProduct.map((item, index) => (
            <Card
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
