import React, { useState } from "react";
import "./Product.scss";
import img from "../../components/NewProducts/img.jpg";
import img2 from "../../components/NewProducts/img2.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [img, img2];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$19</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum velit,
          cupiditate in rerum, molestias quas cumque accusamus dolorem molestiae
          numquam voluptate nemo quo eos beatae alias unde. Eum, numquam enim?
        </p>
        <div className="quantity">
          <button
            onClick={
              quantity === 1 ? null : () => setQuantity((prev) => prev - 1)
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Candle</span>
              <span>Product Type: Floral</span>
              <span>Tag: Lavender, Beeswax, Natural</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <span>ADDITIONAL INFORMATION</span>
              <span>FAQ</span>
            </div>
      </div>
    </div>
  );
};

export default Product;
