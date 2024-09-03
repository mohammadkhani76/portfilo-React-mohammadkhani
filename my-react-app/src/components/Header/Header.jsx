import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header">
      <nav className="desktop__nav">
        <img src={logo} alt="logo" className="Header__logo" />
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>About us</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>

      <nav className="mobile__nav">
        <img src={logo} alt="logo" className="Header__logo" />
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <ul className="mobile__menu">
            <li>Home</li>
            <li>About us</li>
            <li>Product</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
