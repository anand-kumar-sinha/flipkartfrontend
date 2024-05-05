import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import ProductCategory from "../components/Navbar/ProductCategory";
import ProductCard from "../components/Product/ProductCard";
import "../index.scss";
import Footer from "../components/Footer/Footer";
import MobSlider from "../components/Slider/MobSlider";
import ClothSlider from "../components/Slider/ClothSlider";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  });

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://flipkartbackend.vercel.app/products"
      );

      setProducts(data);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <ProductCategory />

      {/* image slider */}
      <Slider />

      {/* mobile slider */}

      <div style={{ padding: "50px" }}>
        <p className="title">Top Mobiles</p>
        <MobSlider />
      </div>

      {/* cloth slider */}

      <div style={{ padding: "50px" }}>
        <p className="title">Top Cloths</p>
        <ClothSlider />
      </div>

      {/* top products */}
      <div className="title">Top Products</div>
      <div className="homeProducts">
        {products && products.map((item, index) => <ProductCard key={index} item={item} />)}
      </div>
      <Footer />
    </>
  );
};

export default Home;
