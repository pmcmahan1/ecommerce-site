import React from "react";
import "./Categories.scss";
import classics from "./classics.jpg";
import gifts from "./gifts.jpg";
import newP from "./new.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={newP} alt="" />

          <Link className="link" to="/products/1">
            <button>New</button>
          </Link>
        </div>
        <div className="row">
          <img src={gifts} alt="" />
          <Link className="link" to="/products/1">
            <button>Gifts</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={classics} alt="" />
          <Link className="link" to="/products/1">
            <button>Popular</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
