import React from "react";
import "./Navbar.scss";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/en.png" alt="" />
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardDoubleArrowDownIcon/>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>

        </div>
        <div className="center">
          <Link className="link">E-COMMERCE</Link>
        </div>
        <div className="right">
        <div className="item">
            <Link className="link" to="/products/1">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <FavoriteBorderIcon/>
            <PersonOutlineIcon/>
            <div className="cartIcon">
              <AddShoppingCartIcon/>
              <span>0</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
