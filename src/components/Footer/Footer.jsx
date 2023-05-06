import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Join the family</h1>
          <div className="signup">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">JOIN</button>
          </div>
          <span>
            Join our family to earn exclusive deals and rewards, as well as
            other opportunities. Take the time to also follow our socials linked
            below!
          </span>
          <div className="socials">
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <YouTubeIcon className="icon" />
          </div>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>About</span>
          <span>FAQ</span>
          <span>Contact Us</span>
          <span>Shipping + Returns</span>
          <span>Privacy Policy</span>
        </div>
        <div className="item">
          <h1>Company</h1>
          <span>Jobs</span>
          <span>Blog</span>
          <span>Newsletter</span>
          <span>Affiliates</span>
          <span>Collabs</span>
        </div>
        <div className="item">
          <h1>Shop</h1>
          <span>Rewards</span>
          <span>Products</span>
          <span>Gift Certificates</span>
          <span>Store Locations</span>
          <span>Bulk Orders</span>
        </div>
      </div>
      <div className="bottom">
        <span className="copyright">© Copyright 2023. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
