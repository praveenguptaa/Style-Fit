import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import upload from "../assets/upload image.jpg";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../component/Loading";

function Add() {
  let [image1, setImage1] = useState(false);
  let [image2, setImage2] = useState(false);
  let [image3, setImage3] = useState(false);
  let [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [price, setPrice] = useState("");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
  let { serverUrl } = useContext(authDataContext);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      let result = await axios.post(
        serverUrl + "/api/product/addproduct",
        formData,
        { withCredentials: true }
      );

      toast.success("Product Added Successfully");
      setLoading(false);

      if (result.data) {
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("TopWear");
        setBestSeller(false);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add Product Failed");
    }
  };

  const sizeClass = (size) =>
    `px-5 py-2 rounded-lg cursor-pointer border-2 border-white/10 
     ${
       sizes.includes(size)
         ? "bg-[#FFD166] text-black border-[#FFD166]"
         : "bg-[#1a1a1a] text-white hover:border-[#FFD166]"
     }`;

  const inputClass =
    "w-full max-w-[600px] h-[40px] rounded-lg bg-[#1a1a1a] text-white px-4 border-2 border-white/10 placeholder:text-white/60 focus:border-[#FFD166] outline-none";

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#1c1c1c] text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      <div className="w-[82%] absolute right-0 top-[70px] flex justify-center">
        <form
          onSubmit={handleAddProduct}
          className="w-full md:w-[90%] flex flex-col gap-10 py-10 px-8"
        >
          <h1 className="text-[32px] text-[#ffd166] md:text-[40px] font-bold">
            Add Product Page
          </h1>

          
          <div className="flex gap-4 flex-wrap">
            {[image1, image2, image3, image4].map((img, idx) => {
              const setImage = [setImage1, setImage2, setImage3, setImage4][
                idx
              ];
              return (
                <label
                  key={idx}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] cursor-pointer"
                >
                  <img
                    src={!img ? upload : URL.createObjectURL(img)}
                    alt=""
                    className="w-full h-full rounded-lg border-2 border-white/10 hover:border-[#FFD166] object-cover"
                  />
                  <input
                    type="file"
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </label>
              );
            })}
          </div>

          
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Product Name</label>
            <input
              type="text"
              placeholder="Type here"
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

         
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Product Description</label>
            <textarea
              placeholder="Type here"
              className={inputClass + " h-[100px] py-2"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

         
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold">Category</label>
              <select
                className={inputClass + " bg-[#1a1a1a]"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold">Sub-Category</label>
              <select
                className={inputClass + " bg-[#1a1a1a]"}
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option>TopWear</option>
                <option>BottomWear</option>
                <option>WinterWear</option>
              </select>
            </div>
          </div>

          
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Price</label>
            <input
              type="number"
              placeholder="₹ 2000"
              className={inputClass}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">Sizes</label>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={sizeClass(size)}
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((i) => i !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="bestseller"
              className="w-6 h-6 cursor-pointer"
              onChange={() => setBestSeller((prev) => !prev)}
              checked={bestseller}
            />
            <label htmlFor="bestseller" className="text-lg font-semibold">
              Add to Bestseller
            </label>
          </div>

          
          <button className="w-[180px] py-3 rounded-xl bg-[#FFD166] text-black font-semibold hover:brightness-110 transition-all flex justify-center">
            {loading ? <Loading /> : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
