import React, { useEffect, useState } from "react";
import "../index.scss";
import Navbar from "../components/Navbar/Navbar";
import ProductCategory from "../components/Navbar/ProductCategory";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Product = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let item;
    item = await localStorage.getItem("product");
    item = JSON.parse(item);
    setProduct(item);
  };
  return (
    <>
      <Navbar />
      <ProductCategory />

      <div className="product">
        <div className="productImg">
          <Carousel
            swipeable={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
          >
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
            <div className="imgCont">
              <img src={product?.imgUrl} />
            </div>
          </Carousel>
        </div>
        <div className="productData">
          <p className="productName">{product?.name}</p>
          <span>
            <p className="productPrice">₹ {product?.price}</p>
            <p className="productPrice offer">₹ {product?.price}</p>
            <p className="productPrice off"> {product?.price}%off</p>
          </span>

          <div className="size">
            <div>32B</div>
            <div>32B</div>
            <div>32B</div>
            <div>32B</div>
            <div>32B</div>
            <div>32B</div>
            <div>32B</div>
            <div>32B</div>
          </div>

          <button>Buy</button>
        </div>
      </div>
    </>
  );
};

export default Product;
