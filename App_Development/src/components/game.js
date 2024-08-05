import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar1';
import Header2 from './header2';

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
  
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(cart));
    setMessage(`${product.name} added to cart`);
    setTimeout(() => {
      setMessage('');
      navigate('/cart', { state: { cart } });
    }, 3000);
  };

  const handleAddToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = [...wishlist, product];
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    setMessage(`${product.name} added to wishlist`);
    setTimeout(() => {
      setMessage('');
      navigate('/profilewish', { state: { wishlist } });
    }, 3000);
  };

  const selectedCategory = 'games';

  return (
    <div>
      <Header2/>
     <NavBar />
      <div className="product-page">
        <div className="category-links">
          <h1 style={{ color: 'red', marginTop: '20px' }}>GAMES</h1>
        </div>
        <div className="product-grid">
          {products[selectedCategory].map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-actions">
                <FaHeart className="icon" onClick={() => handleAddToWishlist(product)} />
                <FaShoppingCart className="icon" onClick={() => handleAddToCart(product)} />
                <button className="buy-button">Buy</button>
              </div>
            </div>
          ))}
        </div>
        {message && <div className="message">{message}</div>}
      </div>
      <style jsx>{`
  .product-page {
    text-align: center;
    padding: 20px;
    background-color: white;
    position: relative; /* Ensure this container has relative positioning for z-index to work */
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

  .message {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: red;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    font-weight: bold;
    z-index: 1000;
  }

  /* Ensure that the header has a higher z-index than the navbar */
  .header {
    position: relative;
    z-index: 1001;
  }

  .navbar {
    position: relative;
    z-index: 1000;
  }
`}</style>
    </div>
  );
};

export default GamePage;
