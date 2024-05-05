import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mob1 from '../../Images/mob1.webp'
import mob2 from '../../Images/mob2.webp'
import mob3 from '../../Images/mob3.webp'
import mob4 from '../../Images/mob4.webp'
import mob5 from '../../Images/mob5.webp'
import mob6 from '../../Images/mob6.webp'
import './Slider.scss'

const MobSlider = () => {
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
        <img src={mob1} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={mob2} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={mob3} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={mob4} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={mob5} alt="" />
        <p>Moto gs</p>
      </div>
      <div className="mobileSliderCard">
        <img src={mob6} alt="" />
        <p>Moto gs</p>
      </div>
    </Carousel>
  );
};

export default MobSlider;
