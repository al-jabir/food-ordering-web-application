import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftside">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="rightside">
        <Link to="/">home</Link>

        <Link to="/menu">menu</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
