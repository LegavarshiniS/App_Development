import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";

const products = {
  games: [
    { id: 1, name: 'Sky high drone', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408260/300/492408260-1_6659.jpeg' },
    { id: 2, name: 'Nerf Strike blaster', price: '₹330.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491934389/300/491934389-1_4411.jpeg' },
    { id: 3, name: 'Lego Aircraft', price: '₹110.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493661565/300/493661565-1.jpeg' },
    { id: 4, name: 'Lego cottage', price: '₹220.00', image: 'https://hmadmin.hamleys.in/product/493664514/300/493664514-1.jpg' },
    { id: 5, name: 'Windup car', price: '₹150.00', image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410361/300/492410361-1_9184.webp' },
    { id: 6, name: 'Lego Hulk', price: '₹170.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176404/300/493176404-1.jpeg' },
    { id: 25, name: 'Starter football', price: '₹1199.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408070/300/492408070-1.webp' },
    { id: 26, name: 'Cricket ball', price: '₹250.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491568038/300/491568038-1.webp' },
    { id: 27, name: 'Speedup cricket', price: '₹160.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492362803/300/492362803-1_4096.webp' },
    { id: 28, name: 'Zephyr cars',price: '₹160.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491553629/300/491553629_1966.jpeg' },
    { id: 29, name: 'Lego Ninjago', price: '₹250.00', image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493664221/300/493664221-1.jpeg' },
    { id: 30, name: 'Cricket wind ball', price: '₹190.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491569127/300/491569127_-_1.webp' },
   
  ],
};

const AllPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('games');

  return (
      <div className="product-page" style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
        <Header/>
        <NavBar/>
      <h1 style={{color:'red',marginTop:'20px'}}>9+ Years(12 products)</h1>
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

export default AllPage;
