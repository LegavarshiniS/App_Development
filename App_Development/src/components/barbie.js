import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar1';
import Header2 from './header2';

const products = {
  toys: [
        { id: 1, name: 'Doll House', price: '₹150.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/2_e6b40c0e-c1a9-441b-a27a-07866155d6f7_600x.jpg?v=1667280232' },
        { id: 2, name: 'Little Kitchen', price: '₹330.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/45052-02_db345a45-3ade-4c90-939a-eab5f633d4ec_600x.jpg?v=1665139311' },
        { id: 3, name: 'Barbie POP catch', price: '₹110.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/barbie-pop-catch5_fb0a8ff5-b070-4278-9ff0-ccdc3af657dc_600x.jpg?v=1664884558' },
        { id: 4, name: 'Barbie mini ride', price: '₹220.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Barbie-Mini-Ride-On6_4ecde602-3de4-4b0f-9344-f88c3c89bf06_600x.jpg?v=1668078945' },
        { id: 5, name: 'Walkie Talkie', price: '₹150.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/primary-image_d8f36db0-76d9-4ab7-9f9b-3853d1dbca7a_600x.jpg?v=1664351710' },
        { id: 6, name: 'Dream Villa', price: '₹170.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Super-star-dream-villa-doll-house_600x.jpg?v=1666858782' },
        { id: 25, name: 'Doll House(classic)', price: '₹199.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Glamour-Doll-house---44185_600x.jpg?v=1666847885' },
        { id: 26, name: 'Dream doll house', price: '₹250.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Super-star-dream-doll-hous46_600x.jpg?v=1666848445' },
        { id: 27, name: 'Bowling set', price: '₹160.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Barbie-Bowling-Set---10_600x.jpg?v=1666935303' },
        { id: 28, name: 'Standard kitchen set', price: '₹160.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/4533566p_600x.jpg?v=1670308127' },
        { id: 29, name: 'Walkie Talkie', price: '₹250.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Barbie-Walkie-Talkie-Blister-Pack8_600x.jpg?v=1666844943' },
        { id: 30, name: 'Three story house', price: '₹190.00', image: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/0_600x.jpg?v=1666848597' },
      ],
};

const BarbiePage = () => {
  
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

  const selectedCategory = 'toys';

  return (
    <div>
      <Header2/>
     <NavBar />
      <div className="product-page">
        <div className="category-links">
          <h1 style={{ color: 'red', marginTop: '20px' }}>BARBIE</h1>
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

export default BarbiePage;

