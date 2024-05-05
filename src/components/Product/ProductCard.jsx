import React from "react";
import product1 from "../../Images/product1.webp";
import './ProductCard.scss'
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const clickHandler = async () => {
    let product = await JSON.stringify(item)
    localStorage.setItem('product', product)
    navigate(`/product/${item._id}`)
  }
  return (
    <div className="productCard" onClick={clickHandler}>
      <img src={item.imgUrl} alt={item.name} />
      <p>
        {item.name}
      </p>
    </div>
  );
};

export default ProductCard;
