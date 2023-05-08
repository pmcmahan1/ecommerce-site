import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              New
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Best Sellers
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              All
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Lia's Candles
          </Link>
        </div>
        <div className="right">
          <img src="" alt="" className="flag" />
          <div className="icons">
            <SearchIcon className="icon" />
            <PersonOutlineIcon className="icon" />
            <div className="cartIcon">
              <ShoppingBasketIcon className="icon" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
