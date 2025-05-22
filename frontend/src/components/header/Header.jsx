import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ isAuth, isLanding }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`contain ${isLanding ? 'landing-header' : ''}`}>
      <div className="heat">
        <Link to="/" className="any">
          <h1 className="logo">
            <img 
              src="/vhass-logo.png" 
              alt="VHASS Cybersecurity" 
              className="header-logo" 
            />
            VHASS
          </h1>
        </Link>
        
        <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
          <nav className="navbar">
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link to="/workshop" onClick={() => setIsMenuOpen(false)}>WorkShop</Link>
            <Link to="/entrepreneur" onClick={() => setIsMenuOpen(false)}>Entrepreneur</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>HelpDesk</Link>
          </nav>
          
          <div className="auth-link">
            {isAuth ? (
              <Link to="/account" onClick={() => setIsMenuOpen(false)}>Account</Link>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            )}
          </div>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Header;