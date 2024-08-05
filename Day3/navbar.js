// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//       />
//       <style>
//         {`
//           .navbar {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background-color: white;
//             padding: 10px;
//             position: sticky;
//             top: 0;
//             width: 1200;
//             box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//             z-index: 1000;
//           }

//           .navbar a {
//             color: #F04721;
//             text-decoration: none;
//             padding: 10px 20px;
//             font-size: 16px;
//             font-weight: bold;
//             transition: color 0.3s;
//           }

//           .navbar a:hover {
//             color: #899095 ;
//           }

//           .dropdown {
//             position: relative;
//             display: inline-block;
//           }

//           .dropdown-content {
//             display: none;
//             position: absolute;
//             background-color: white;
//             min-width: 160px;
//             box-shadow: 0 8px 16px rgba(0,0,0,0.1);
//             z-index: 1;
//           }

//           .dropdown-content a {
//             color: #9A8B87;
//             padding: 12px 16px;
//             text-decoration: none;
//             display: block;
//             font-size: 14px;
//           }

//           .dropdown-content a:hover {
//             background-color: #f1f1f1;
//             color: #333;
//           }

//           .dropdown:hover .dropdown-content {
//             display: block;
//           }

//           .dropdown:hover .dropbtn {
//             color: red;
//           }

//           .separator {
//             border-left: 1px solid #9A8B87;
//             height: 24px;
//             margin: 0 15px; /* Adjusted margin for less space */
//           }

//           .navbar i {
//             color: #9A8B87;
//             margin-right: 5px; /* Reduced margin */
//           }

//           .cont {
//             color: #9A8B87;
//             text-decoration: none;
//             font-size: 16px;
//             font-weight: bold;
//             transition: color 0.3s;
//           }

//           .cont:hover {
//             color: red; /* Hover effect for CONTACT US */
//           }
//         `}
//       </style>

//       <nav className="navbar">
//         <div className="dropdown">
//           <Link className="dropbtn" to="/">TOP BRANDS</Link>
//           <div className="dropdown-content">
//             <Link to="/brand1">Brand 1</Link>
//             <Link to="/brand2">Brand 2</Link>
//             <Link to="/brand3">Brand 3</Link>
//           </div>
//         </div>
//         <div className="dropdown">
//           <Link className="dropbtn" to="/">OTHER BRANDS</Link>
//           <div className="dropdown-content">
//             <Link to="/brandA">Brand A</Link>
//             <Link to="/brandB">Brand B</Link>
//             <Link to="/brandC">Brand C</Link>
//           </div>
//         </div>
//         <div className="dropdown">
//           <Link className="dropbtn" to="/">SPECIAL OFFERS</Link>
//           <div className="dropdown-content">
//             <Link to="/offer1">Offer 1</Link>
//             <Link to="/offer2">Offer 2</Link>
//             <Link to="/offer3">Offer 3</Link>
//           </div>
//         </div>
//         <div className="separator"></div>
//         <i className="fa-solid fa-headset"></i>
//         <Link to="/contact" className="cont">CONTACT US</Link>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  const [isAgeOpen, setAgeOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <div className="dropdown" onClick={() => setShopOpen(!isShopOpen)}>
              <span>Shop By Category</span>
              {isShopOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory">Toys</Link></li>
                  <li><Link to="/navcategory">Games</Link></li>
                  <li><Link to="/navcategory">Education</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onClick={() => setBrandsOpen(!isBrandsOpen)}>
              <span>Shop By Brands</span>
              {isBrandsOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory2">Brand 1</Link></li>
                  <li><Link to="/navcategory2">Brand 2</Link></li>
                  <li><Link to="/navcategory2">Brand 3</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onClick={() => setAgeOpen(!isAgeOpen)}>
              <span>Shop By Age</span>
              {isAgeOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/navcategory3">0-3 years</Link></li>
                  <li><Link to="/navcategory3">4-6 years</Link></li>
                  <li><Link to="/navcategory3">6-9 years</Link></li>
                  
                </ul>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onClick={() => setAgeOpen(!isAgeOpen)}>
              <span>More</span>
              {isAgeOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="contact">Contact Us</Link></li>
                  <li><Link to="/age/3-5">About Us</Link></li>
                  <li><Link to="/age/6-8">FAQ</Link></li>
                 
                </ul>
              )}
            </div>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button" className="search-button">Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;