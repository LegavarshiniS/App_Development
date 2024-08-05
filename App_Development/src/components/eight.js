
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar1';
import Header2 from './header2';

const products = {
  eight: [
        { id: 1, name: 'Race car', price: '₹150.00', image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176598/300/493176598-1_7247.webp' },
        { id: 2, name: 'Lego Tractor', price: '₹330.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959960/300/491959960-1.webp' },
        { id: 3, name: 'Funvention motor boat', price: '₹110.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491567148/300/491567148-1.webp' },
        { id: 4, name: 'Robo Dackel', price: '₹220.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491947797/300/491947797-1.webp' },
        { id: 5, name: 'Chinese checkers', price: '₹150.00', image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491603812/300/491603812-1.webp' },
        { id: 6, name: 'Remote car', price: '₹170.00', image: 'https://hmadmin.hamleys.in/product/493662863/300/493662863-1.jpg' },
       
      ],
};

const EightPage = () => {
  
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

  const selectedCategory = 'eight';

  return (
    <div>
      <Header2/>
     <NavBar />
      <div className="product-page">
        <div className="category-links">
          <h1 style={{ color: 'red', marginTop: '20px' }}>4 - 8 YEARS OLD</h1>
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

export default EightPage;


