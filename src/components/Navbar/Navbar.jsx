import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import icon from '../../public/pictures/icon.jpeg'


// FontAwesome CSS can also be placed in index.html or imported globally, but here's inline import if needed:
// import 'font-awesome/css/font-awesome.min.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const myFunction = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="heading">
  <div className="navbar-container">
    <div className="logo">
      <img src="/pictures/icon.jpeg" alt="icon" />
    </div>
    <div className={`topnav ${menuOpen ? 'responsive' : ''}`} id="myTopnav">
      <a className="active" href="#home">Home</a>
      <a href="#AboutUs">About Us</a>
      <a href="#OurServices">Our Services</a>
      <Link to="/academy">Academy</Link>
      <a href="#Package">Package</a>
      <a href="#Services">Services</a>
      <a href="#ContactUs">Contact Us</a>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  </div>
</div>

  );
};

export default Navbar;
