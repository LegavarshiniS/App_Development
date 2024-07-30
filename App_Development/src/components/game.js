import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Header from './header';
import NavBar from './navbar1';
import { Link } from "react-router-dom";

const products = {
  games: [
    { id: 7, name: 'Maze ball game', price: '₹200', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-24-at-6.26.57-PM-300x300.jpeg'},
    { id: 8, name: 'Mikado game toy', price: '₹150', image: 'https://toystorey.in/wp-content/uploads/2023/02/51wfdI0VU5L._AC_SS450_.jpg' },
    { id: 9, name: 'Naught & Crosses', price: '₹160', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2021-12-19-at-2.45.13-PM-1-300x300.jpeg' },
    { id: 10, name: 'Spelling Game', price: '₹150', image: 'https://toystorey.in/wp-content/uploads/2023/02/spelling-game-300x300.jpg' },
    { id: 11, name: 'Wooden Basket Ball', price: '₹130', image: 'https://toystorey.in/wp-content/uploads/2023/02/basketballl-300x300.jpg' },
    { id: 12, name: 'Frame stacking Game', price: '₹106', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-01-16-at-5.51.51-PM-1-300x300.jpeg' },
    { id: 31, name: 'Cartoon Bowling Game', price: '₹200', image: 'https://toystorey.in/wp-content/uploads/2023/02/EKT2380-1-300x300.jpeg' },
    { id: 32, name: 'Goli game', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/DSC_0181-300x300.jpg' },
    { id: 33, name: 'Dice game', price: '₹160', image: 'https://toystorey.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-24-at-18.56.01_4ab1df62-300x300.jpg' },
    { id: 34, name: 'Wizer Top', price: '₹165', image: 'https://toystorey.in/wp-content/uploads/2023/02/DSC_0362-1-scaled-1-300x300.jpg' },
    { id: 35, name: 'Slippery car', price: '₹135', image: 'https://toystorey.in/wp-content/uploads/2023/02/57903-300x300.jpg' },
    { id: 36, name: 'catty', price: '₹101', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2021-11-17-at-2.15.03-PM-300x300.jpeg' },
  ],
};

const GamePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('games');

  return (
      <div className="product-page" style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
        <Header/>
        <NavBar/>
      <h1 style={{color:'red',marginTop:'20px'}}>Games</h1>
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

export default GamePage;
