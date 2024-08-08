import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";

const products = {
  toys: [
    { id: 1, name: 'Land Animals', price: '₹150.00', image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/12071179a.webp' },
    { id: 2, name: 'My First Animals', price: '₹330.00', image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/17564429b.jpg' },
    { id: 3, name: 'My first words', price: '₹110.00', image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/17564430a.webp' },
    { id: 4, name: 'BabyTouch colors', price: '₹220.00', image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/11590263a.webp' },
    { id: 5, name: 'ABC Board', price: '₹150.00', image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/80458a.webp' },
    { id: 6, name: 'Night-Night book', price: '₹170.00', image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/11831988b.jpg' },
   
  ],
};

const EarlyPage = () => {
  const selectedCategory = 'toys';

  return (
    <div className="product-page">
     <Header/>
     <NavBar/>
      <div className="category-links">
       
          <h1 style={{color:'red',marginTop:'20px'}}>EARLY LEARNING BOOKS</h1>
       
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
              <Link to="/payment">=
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

export default EarlyPage;
