import React, { useEffect, useState } from "react";
import "../index.scss";
import Navbar from "../components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Rating, ThinStar  } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { PiVanFill } from "react-icons/pi";


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

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
  return (
    <>
      <Navbar />

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
          <Rating style={{ maxWidth: 100, marginBottom: '10px'}} value={4} itemStyles={myStyles}/>
          <p className="productYear">Lowest Price Ever</p>
          <span>
            <p className="productPrice off"> {product?.price}%off</p>
            <p className="productPrice offer">{product?.price}</p>
            <p className="productPrice">₹{product?.price}</p>
          </span>

          <div className="productDelivery"><PiVanFill /><p>Free Delivery</p></div>

          <p style={{marginLeft: '2px', fontWeight: '600',  fontSize: '22px'}}>Size</p>
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
