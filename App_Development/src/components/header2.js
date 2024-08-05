import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SearchBar from './search';

const Header2 = () => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            background-color: #F04721;
            color: white;
          }

          .header-logo {
            display: flex;
            align-items: center;
          }

          .header-logo img {
            height: 59px;
          }

          .header-logo h1 {
            display: inline;
            margin-left: 10px;
            margin-top: 20px;
            font-size: 40px;
          }

          .header-account-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-left: 10px; /* Space between DREAMLAND text and icon */
          }

          .header-account-icon i {
            font-size: 34px;
            cursor: pointer;
            color: white; /* Ensure icon color is white */
            margin-left:1070px;
          }

          .header-account-dropdown {
            position: absolute;
            top: 40px;
            right: 0;
            background-color: white;
            color: black;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            display: ${dropdownVisible ? 'block' : 'none'};
            z-index: 1;
          }

          .header-account-dropdown a {
            display: block;
            padding: 8px 16px;
            color: red;
            text-decoration: none;
          }

          .header-account-dropdown a:hover {
            background-color: #f1f1f1;
          }

          .header-nav {
            display: flex;
            align-items: center;
            margin-left: auto;
          }

          .header-nav ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 15px;
          }

          .header-nav li {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .header-nav a {
            color: white;
            text-decoration: none;
            text-align: center;
          }

          .header-wishlist-icon i {
            font-size: 34px;
            margin-bottom: 5px;
          }

          .header-cart-icon {
            margin-left: auto;
          }

          .header-cart-icon i {
            font-size: 42px;
            margin-top: 6px;
          }

          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              align-items: flex-start;
            }

            .header-logo {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .header-logo h1 {
              font-size: 30px;
              margin-top: 10px;
            }

            .header-nav ul {
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              margin-top: 10px;
            }

            .header-nav li {
              width: 100%;
              margin: 5px 0;
              text-align: left;
            }

            .header-nav a {
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .header-logo h1 {
              font-size: 24px;
            }

            .header-nav a {
              font-size: 14px;
            }

            .header-wishlist-icon i, .header-cart-icon i, .header-account-icon i {
              font-size: 24px;
            }

            .header-account-links a {
              font-size: 12px;
            }
          }
        `}
      </style>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <h1>DREAMLAND</h1>
          <div className="header-account-icon">
            <i className="fa-regular fa-user" onClick={toggleDropdown}></i>
            {dropdownVisible && (
              <div className="header-account-dropdown">
                <Link to="/dashboard">Profile</Link>
                
                <Link to="/">Logout</Link>
              </div>
            )}
          </div>
        </div>
        {!isCartPage }
      </header>
    </>
  );
};

export default Header2;
