import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SearchBar from './search';
import Footer from './footer';

// Combined Header Component
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

          .header-logo img {
            height: 59px;
          }

          .header-logo h1 {
            display: inline;
            margin-left: 10px;
            margin-top: 4px;
            font-size: 40px;
          }

          .header-nav ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .header-nav li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 15px;
          }

          .header-nav a {
            color: white;
            text-decoration: none;
            text-align: center;
          }

          .header-wishlist-icon a.wishlist-link {
            color: black;
          }

          .header-wishlist-icon i {
            font-size: 34px;
            margin-bottom: 5px;
            color: black;
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
            <li className="header-wishlist-icon">
              <Link to="/wish">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="/wish" className="wishlist-link">Wish Lists</Link>
            </li>
            <li className="header-account-icon">
              <a href="/profile">
                <i className="fa-regular fa-user"></i>
              </a>
              <div className="header-account-links">
                <Link className="one" to="/login">Signin</Link>
                <Link className="one" to="/register">Signup</Link>
              </div>
            </li>
            <li className="header-cart-icon">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

// Combined ContactPage Component
const ContactPage = () => {
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <style>
        {`
          .page-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .content-wrap {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #f9f9f9;
          }

          .contact-form {
            width: 100%;
            max-width: 600px;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }

          .contact-form h2 {
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
            text-align: center;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .form-group textarea {
            resize: vertical;
            height: 150px;
          }

          button[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #f04721;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button[type="submit"]:hover {
            background-color: #e03616;
          }
        `}
      </style>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
