import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <div className="contain">
      <div className="heat">
        <Link to="/index" className="any">
          <h1 className="logo">
            <img 
              src="./vhass-logo.png" 
              alt="VHASS Cybersecurity" 
              className="header-logo" 
            />
            VHASS
          </h1>
        </Link>
        
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/workshop">WorkShop</Link>
          <Link to="/entrepreneur">Entrepreneur</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contacts">HelpDesk</Link>
          {isAuth ? (
            <Link to="/account">Account</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;