import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Header = () => {
  return (
    <div className="header">
      {/* <div className="header_logo"> */}
      <img
        width="113"
        height="50"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
      <a href="/" className="header_location">
        <div className="header_logo">
          <LocationOnIcon className="header_optionTwo" />
        </div>
        <div className="header_locationDescription">
          <span className="header_optionOne">
            Delivering to Johannesburb 1449
          </span>
          <span className="header_optionTwo">Update location</span>
        </div>
      </a>

      {/* </div> */}

      <div className="header_search">
        <button className="header_btn">All</button>
        <input
          className="header_input"
          type="text"
          placeholder="Search Amazon"
        ></input>
        /
        <SearchIcon className="search-icon" />
      </div>

      <div className="header_nav">
        <div className="header-option">
          <span className="header_optionOne">Hello, Sign in</span>
          <span className="header_optionTwo">Accounts & Lists</span>
        </div>
        <div className="header-option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_shoppingBasket">
          <ShoppingBasketIcon />
          <span className="header_optionTwo header_basketCount"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;