import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from 'react-redux'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const products = useSelector(state=>state.cart.products)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Shop All
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
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingBasketIcon className="icon" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
