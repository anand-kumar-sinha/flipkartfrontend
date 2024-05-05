import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/1.jpg";
import img2 from "../../Images/2.jpg";
import img3 from "../../Images/3.jpg";
import img4 from "../../Images/4.jpg";
import img5 from "../../Images/5.jpg";
import img6 from "../../Images/6.jpg";
import img7 from "../../Images/7.jpg";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="carousel">
      <Carousel
        swipeable={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="imgCont">
          <img src={img1} />
        </div>
        <div className="imgCont">
          <img src={img2} />
        </div>
        <div className="imgCont">
          <img src={img3} />
        </div>
        <div className="imgCont">
          <img src={img4} />
        </div>
        <div className="imgCont">
          <img src={img5} />
        </div>
        <div className="imgCont">
          <img src={img6} />
        </div>
        <div className="imgCont">
          <img src={img7} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
