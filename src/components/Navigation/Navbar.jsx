import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftside" id={showLinks ? "open" : "close"}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">home</Link>
          <Link to="/menu">menu</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/">home</Link>
        <Link to="/menu">menu</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <button onClick={() => setShowLinks(!showLinks)}>
          <MenuIcon style={{ color: "black" }} />
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
