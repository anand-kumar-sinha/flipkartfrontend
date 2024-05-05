import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cloth1 from "../../Images/cloth1.webp";
import cloth2 from "../../Images/cloth2.webp";
import cloth3 from "../../Images/cloth3.webp";
import cloth4 from "../../Images/cloth4.webp";
import cloth5 from "../../Images/cloth5.webp";
import cloth6 from "../../Images/cloth6.webp";
import cloth7 from "../../Images/cloth7.webp";
import cloth8 from "../../Images/cloth8.webp";
import "./Slider.scss";

const ClothSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div className="mobileSliderCard">
        <img src={cloth1} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth2} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth3} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth4} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth5} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth6} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth7} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={cloth8} alt="" />
        <p>Moto gs</p>
      </div>
    </Carousel>
  );
};

export default ClothSlider;
