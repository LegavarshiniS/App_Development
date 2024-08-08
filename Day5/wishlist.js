import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.jpg';

const ProfileWish = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

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
      position: fixed;
      width: 100%;
      z-index: 1000;
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
      margin-top: 4px;
      font-size: 30px;
    }

    .header-links {
      display: flex;
      align-items: center;
    }

    .header-links a {
      color: white;
      text-decoration: none;
      margin-left: 20px;
      font-size: 20px;
    }

    .header-links i {
      font-size: 30px;
      color: white;
      margin-left: 20px;
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
        font-size: 60px;
        margin-top: 10px;
      }

      .header-links {
        margin-top: 10px;
      }
    }

    @media (max-width: 480px) {
      .header-logo h1 {
        font-size: 24px;
      }

      .header-links i {
        font-size: 30px;
      }
    }

    .sidebar-container {
      position: fixed;
      left: 0;
      top: 99px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: white;
      color: white;
      height: 100vh;
      width: 300px;
      box-shadow: -2px 0 10px red;
    }

    .profile-photo-container {
      width: 140px;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-top: 18px;
      margin-bottom: 40px;
      overflow: hidden;
    }

    .profile-photo {
      width: 100%;
      height: auto;
    }

    .sidebar-link, .side-link {
      position: relative;
      margin-bottom: 20px;
      font-size: 18px;
      color: red;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 10px;
      transition: background-color 0.3s, color 0.3s;
    }

    .sidebar-link:hover, .side-link:hover {
      background-color: red;
      color: white;
    }

    .sidebar-link i, .side-link i {
      font-size: 24px;
      margin-right: 10px;
      transition: color 0.3s;
    }

    .sidebar-link:hover i, .side-link:hover i {
      color: white;
    }

    .link-text {
      transition: color 0.3s;
    }

    .sidebar-link:hover .link-text, .side-link:hover .link-text {
      color: white;
    }

    .side-link {
      color: white;
      background-color: red;
    }

    .side-link i, .side-link .link-text {
      color: white;
    }

    @media (max-width: 768px) {
      .sidebar-container {
        padding: 10px;
        width: 150px;
      }

      .profile-photo-container {
        width: 60px;
        height: 60px;
        margin-top: 60px;
      }

      .sidebar-link i, .side-link i {
        font-size: 20px;
      }

      .sidebar-link, .side-link {
        font-size: 16px;
        margin-bottom: 15px;
      }
    }

    @media (max-width: 480px) {
      .sidebar-container {
        width: 120px;
      }

      .profile-photo-container {
        width: 50px;
        height: 50px;
        margin-top: 40px;
      }

      .profile-photo {
        font-size: 25px;
      }

      .sidebar-link i, .side-link i {
        font-size: 18px;
      }

      .sidebar-link, .side-link {
        font-size: 14px;
        margin-bottom: 12px;
      }
    }

    .wishlist-container {
      margin-left: 320px;
      padding: 20px;
    }

    .wishlist-title {
      text-align: center;
      margin-bottom: 20px;
      margin-top: 100px;
    }

    .wishlist-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .wishlist-card {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px;
      margin: 10px;
      width: 200px;
      text-align: center;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .wishlist-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .wishlist-name {
      font-size: 18px;
      margin: 10px 0;
    }

    .wishlist-price {
      font-size: 16px;
      color: #888;
    }

    .empty-message {
      text-align: center;
      font-size: 18px;
      color: #555;
    }

    .continue-shopping-button {
      background-color: #F04721;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      display: block;
      margin: 20px auto;
      transition: background-color 0.3s;
      text-decoration: none !important;
    }

    .continue-shopping-button:hover {
      background-color: #D43F1A;
    }

    .buy-button {
      background-color: red;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      display: block;
      margin: 10px auto 0;
      transition: background-color 0.3s;
      text-decoration: none !important;
    }

    .buy-button:hover {
      background-color: white;
      color: red;
    }
  `}
</style>

      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <h1>DREAMLAND</h1>
        </div>
        <div className="header-links">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </div>
      </header>
      <div className="sidebar-container">
        <div className="profile-photo-container">
          <img src={profile} alt="Profile" className="profile-photo" />
        </div>
        <Link to="/dashboard" className="sidebar-link">
          <i className="fas fa-user"></i>
          <span className="link-text">Profile</span>
        </Link>
        <Link to="/dashboard" className="sidebar-link">
          <i className="fas fa-tachometer-alt"></i>
          <span className="link-text">Dashboard</span>
        </Link>
        <Link to="/profilewish" className="side-link">
          <i className="fas fa-heart"></i>
          <span className="link-text">Wishlist</span>
        </Link>
        <Link to="/orders" className="sidebar-link">
          <i className="fas fa-box"></i>
          <span className="link-text">Orders</span>
        </Link>
      </div>
      <div className="wishlist-container">
        <h1 className="wishlist-title">My Wishlist</h1>
        <div className="wishlist-grid">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
                <div key={item.id} className="wishlist-card">
                <img src={item.image} alt={item.name} className="wishlist-image" />
                <h3 className="wishlist-name">{item.name}</h3>
                <p className="wishlist-price">{item.price}</p>
                <Link to="/payment">
                <button className="buy-button">Buy</button>
                </Link>
              </div>
            ))
          ) : (
            <p className="empty-message">Your wishlist is empty.</p>
          )}
        </div>
        <Link to="/toy">
          <button className="continue-shopping-button">Continue Shopping</button>
        </Link>
      </div>
    </>
  );
};

export default ProfileWish;
