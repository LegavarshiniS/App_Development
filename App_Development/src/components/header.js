import React from 'react';
import SearchBar from './search';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {


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
            padding: 20px;
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

          .header-nav {
            display: flex;
            align-items: center;
            margin-left: auto; /* Ensure nav is aligned to the right */
          }

          .header-nav ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            gap: 15px; /* Add space between items */
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
            margin-left: auto; /* Push cart icon to the right */
          }

          .header-cart-icon i {
            font-size: 42px;
            margin-top: 6px;
          }

          .header-account-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .header-account-icon i {
            font-size: 34px;
          }

          .header-account-links {
            display: flex;
          }

          .header-account-links a {
            color: white;
            text-decoration: none;
            margin-top: 5px;
            padding: 0 2px;
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
        </div>
        <SearchBar />
        <nav className="header-nav">
          <ul>
            
            <li className="header-account-icon">
              <Link to="/login">
                <i className="fa-regular fa-user"></i>
              </Link>
              <div className="header-account-links">
                <Link className="one" to="/login">Signin</Link>
                <Link className="one" to="/register">Signup</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

