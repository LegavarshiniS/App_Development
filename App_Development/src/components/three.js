import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";
const products = {
  toys: [
    
    { id: 1, name: 'Furrendz Dino', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409348/300/492409348-1.webp' },
    { id: 2, name: 'Furrendz unicorn', price: '₹330.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409354/300/492409354-1.webp' },
    { id: 3, name: 'HappyLand Bus', price: '₹110.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492365288/300/492365288-1.webp' },
    { id: 4, name: 'ELC nesting eggs', price: '₹220.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492365283/300/492365283-1.webp' },
    { id: 5, name: 'Tikiri sea horse', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491960152/300/491960152-2.webp' },
    { id: 6, name: 'Chicco bear rattle', price: '₹170.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410986/300/492410986-1_8981.jpeg' },
    { id: 25, name: 'Abracadabra teether', price: '₹199.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493658577/300/493658577-1.jpeg' },
    { id: 26, name: 'Vroom toy', price: '₹250.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491902490/300/491902490-1.webp' },
    { id: 27, name: 'Soft Buddies ball', price: '₹160.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491298405/300/491298405-1.webp' },
    { id: 28, name: 'JCB wheeler',price: '₹160.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492908386/300/492908386-1_8130.jpeg' },
    { id: 29, name: 'Softbuddies penguin', price: '₹250.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491165007/300/491165007-1.webp' },
    { id: 30, name: 'Fuzzbuzz sitting dog', price: '₹190.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491602221/300/491602221.webp' },
  ],
};

const ThreePage = () => {
  const selectedCategory = 'toys';

  return (
    <div className="product-page">
     <Header/>
     <NavBar/>
      <div className="category-links">
       
          <h1 style={{color:'red',marginTop:'20px'}}>0-3 YEARS(12 products)</h1>
       
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

export default ThreePage;
