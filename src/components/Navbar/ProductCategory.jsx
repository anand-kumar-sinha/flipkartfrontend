import React from "react";
import "./Navbar.scss";
import cat1 from "../../Images/cat1.webp";
import cat2 from "../../Images/cat2.webp";
import cat3 from "../../Images/cat3.webp";
import cat4 from "../../Images/cat4.webp";
import cat5 from "../../Images/cat5.webp";
import cat6 from "../../Images/cat6.webp";

const ProductCategory = () => {
  return (
    <div className="productNav">
      <div className="catCont">
        <img src={cat1} alt={cat1} />
        <p>Machinces</p>
      </div>
      <div className="catCont">
        <img src={cat2} alt={cat1} />
        <p>Mobiles</p>
      </div>
      <div className="catCont">
        <img src={cat3} alt={cat1} />
        <p>Gadgets</p>
      </div>
      <div className="catCont">
        <img src={cat4} alt={cat1} />
        <p>Cloths</p>
      </div>
      <div className="catCont">
        <img src={cat5} alt={cat1} />
        <p>Grocery</p>
      </div>
      <div className="catCont">
        <img src={cat6} alt={cat1} />
        <p>Fruits</p>
      </div>
    </div>
  );
};

export default ProductCategory;
