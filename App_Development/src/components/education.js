import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";

const products = {
  education: [
    { id: 13, name: 'ABCD Train', price: '₹100', image: 'https://toystorey.in/wp-content/uploads/2023/02/71CrMdDoV3L._SL1500_-300x300.jpg' },
    { id: 14, name: 'Rainbow Rings Tower', price: '₹150', image: 'https://toystorey.in/wp-content/uploads/2024/04/61kHXp-OlmL._SL1500_-300x300.jpg' },
    { id: 15, name: 'Animal Pin Board', price: '₹200', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-11-29-at-1.32.14-PM-300x300.jpeg' },
    { id: 16, name: 'Lacing Board Puzzle', price: '₹300', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-22-at-7.49.04-PM-300x300.jpeg' },
    { id: 17, name: 'Magnet Fishing Game', price: '₹100', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-11-14-at-8.48.03-PM-1-300x300.jpeg' },
    { id: 18, name: 'Fruits cart', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-10-19-at-1.35.02-PM-300x300.jpeg' },
    { id: 19, name: 'Math game', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-19.27.48_470ab978-300x300.jpg' },
    { id: 20, name: 'Building blocks', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-26-at-3.56.20-PM-1-300x300.jpeg' },
    { id: 21, name: 'Shapes stacker', price: '₹500', image: 'https://toystorey.in/wp-content/uploads/2024/02/S3908316066564308b7274d99fadf4e76Y-300x300.jpg' },
    { id: 22, name: 'Wing top', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-08-17-at-5.55.38-AM-300x300.jpeg' },
    { id: 23, name: 'Letter tracing', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-02-11-at-6.22.37-PM-300x300.jpeg' },
    { id: 24, name: 'Abacus frame', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2024/02/EKT3085-2-300x300.jpg' },
  ],
};

const EduPage = () => {
  const [selectedCategory] = useState('education');

  return (
    <div className="product-page">
        <Header/>
        <NavBar/>
      <div className="category-links">
      <h1 style={{color:'red', marginTop:'20px'}}>Educational Toys</h1>
        
      </div>
      <div className="product-grid">
        {products[selectedCategory].map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <FaHeart className="icon" />
              <FaShoppingCart className="icon" />
              <Link to="/payment">
              <button className="buy-button">Buy</button></Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .product-page {
          text-align: center;
          padding: 20px;
          background-color: white;
        }
        
        h1 {
          margin-bottom: 20px;
        }
        
        .category-links {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .category-button {
          background-color: #F04721;
          border: none;
          border-radius: 25px;
          padding: 10px 20px;
          margin: 0 10px;
          cursor: pointer;
          font-size: 16px;
          color: white;
          transition: background-color 0.3s;
        }
        
        .category-button.active, .category-button:hover {
          background-color: #F04721;
        }
        
        .product-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .product-card {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          margin: 10px;
          width: 200px;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .product-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        
        .product-name {
          font-size: 18px;
          margin: 10px 0;
        }
        
        .product-price {
          font-size: 16px;
          color: #888;
        }
        
        .product-actions {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
        }
        
        .icon {
          cursor: pointer;
          color: #F04721;
          transition: color 0.3s;
        }
        
        .icon:hover {
          color: #F04721;
        }
        
        .buy-button {
          background-color: #F04721;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 16px;
          color: white;
          transition: background-color 0.3s;
        }
        
        .buy-button:hover {
          background-color: #F04721;
        }
      `}</style>
    </div>
  );
};

export default EduPage;
