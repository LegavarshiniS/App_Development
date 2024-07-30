import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";

const products = {
  toys: [
    { id: 1, name: 'Spiderman puzzle', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491396006/300/491396006-1.webp' },
    { id: 2, name: 'Panorama Puzzle', price: '₹330.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491960169/300/491960169-1.webp' },
    { id: 3, name: 'Ironman Mask', price: '₹110.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491568833/300/491568833-1.webp' },
    { id: 4, name: 'Marvel Spidey', price: '₹220.00', image: 'https://hmadmin.hamleys.in/product/493175380/300/493175380-1.jpg' },
    { id: 5, name: 'Spiderman vehicle', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491635693/300/491635693-1.webp' },
    { id: 6, name: 'Marvel Spiderman', price: '₹170.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491668593/300/491668593-1.webp' },
    // { id: 25, name: '', price: '₹199.00', image: '' },
    // { id: 26, name: '', price: '₹250.00', image: '' },
    // { id: 27, name: '', price: '₹160.00', image: '' },
    // { id: 28, name: '',price: '₹160.00', image: '' },
    // { id: 29, name: '', price: '₹250.00', image: '' },
    // { id: 30, name: '', price: '₹190.00', image: '' },
  ],
};

const MarvelPage = () => {
  const selectedCategory = 'toys';

  return (
    <div className="product-page">
     <Header/>
     <NavBar/>
      <div className="category-links">
       
          <h1 style={{color:'red',marginTop:'20px'}}>MARVEL</h1>
       
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

export default MarvelPage;
