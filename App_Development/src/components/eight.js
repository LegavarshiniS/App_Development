import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";

const products = {
  games: [
    { id: 1, name: 'Race car', price: '₹150.00', image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176598/300/493176598-1_7247.webp' },
    { id: 2, name: 'Lego Tractor', price: '₹330.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959960/300/491959960-1.webp' },
    { id: 3, name: 'Funvention motor boat', price: '₹110.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491567148/300/491567148-1.webp' },
    { id: 4, name: 'Robo Dackel', price: '₹220.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491947797/300/491947797-1.webp' },
    { id: 5, name: 'Chinese checkers', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491603812/300/491603812-1.webp' },
    { id: 6, name: 'Remote car', price: '₹170.00', image: 'https://hmadmin.hamleys.in/product/493662863/300/493662863-1.jpg' },
   
  ],
};

const EightPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('games');

  return (
      <div className="product-page" style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
        <Header/>
        <NavBar/>
      <h1 style={{color:'red',marginTop:'20px'}}>4-8 Years(6 products)</h1>
      <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products[selectedCategory].map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            style={{ 
              backgroundColor: '#fff', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '20px', 
              margin: '10px', 
              width: '200px', 
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s' 
            }}
          >
            <img src={product.image} alt={product.name} className="product-image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h3 className="product-name" style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
            <p className="product-price" style={{ fontSize: '16px', color: '#888' }}>{product.price}</p>
            <div className="product-actions" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '10px' }}>
              <FaHeart className="icon" style={{ cursor: 'pointer', color: '#F04721', transition: 'color 0.3s' }} />
              <FaShoppingCart className="icon" style={{ cursor: 'pointer', color: '#F04721', transition: 'color 0.3s' }} />
              <Link to="/payment">
              <button className="buy-button" style={{ backgroundColor: '#F04721', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontSize: '16px', color: 'white', transition: 'background-color 0.3s' }}>Buy</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EightPage;
