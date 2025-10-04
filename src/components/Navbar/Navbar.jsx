import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="heading">
      <div className="navbar-container">
        <div className="logo">
          <img src="/pictures/icon.jpeg" alt="icon" />
        </div>
        <div className={`topnav ${menuOpen ? 'responsive' : ''}`} id="myTopnav">
          <Link className="active" to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/academy">Academy</Link>
          <Link to="/packages">Package</Link>
          <Link to="/more-services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <span className="icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;