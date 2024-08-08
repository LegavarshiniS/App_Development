import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Footer from './footer';
import './cart.css';
import Panel from './panel';
import Header from './header';
import Header2 from './header2';


const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const cartItems = location.state?.cart || JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleDelete = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleIncrement = (index) => {
    const newCart = cart.map((item, i) => i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item);
    setCart(newCart);
  };

  const handleDecrement = (index) => {
    const newCart = cart.map((item, i) => i === index ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } : item);
    setCart(newCart);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleBuy = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
      setIsDialogOpen(false);
      navigate('/payment');
    }, 1000); 
  };

  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price.replace('₹', '') * (item.quantity || 1)), 0).toFixed(2);

  return (
    <div className="page-container">
    <Header2/>
      <div className="cart-header">
        <div className="cart-summary">
          <span>{totalItems} Items</span>
          <span>Total Price: ₹{totalPrice}</span>
        </div>
        <div className="cart-actions">
          <button className="continue-button" onClick={handleContinueShopping}>Continue Shopping</button>
          <button className="checkout-button" onClick={handleBuy}>Checkout</button>
        </div>
      </div>
      <div className="content-wrap">
        {cart.length === 0 ? (
          <>
            <h2 style={styles.heading}>Your Cart is Empty!</h2>
            <button
              style={styles.continueButton}
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </>
        ) : (
          <div className="cart-items-container">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹{(item.price.replace('₹', '') * (item.quantity || 1)).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(index)} className="quantity-button">-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => handleIncrement(index)} className="quantity-button">+</button>
                  </div>
                  <button onClick={() => handleDelete(index)} className="delete-button">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Checking Out</h3>
            <p>Checking out {totalItems} items... Please wait.</p>
          </div>
        </div>
      )}
      <style>{`
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: whitesmoke;
          border-bottom: 1px solid #ccc;
          width:1000px;
          margin-left:240px;
        }

        .cart-summary {
          display: flex;
          gap: 20px;
        }

        .cart-actions {
          display: flex;
          gap: 10px;
        }

        .checkout-button {
          background-color: #F04721;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        .checkout-button:hover {
          background-color: white;
          color:#F04721;
        }

        .continue-button {
          background-color:#F04721;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        .continue-button:hover {
          background-color: white;
          color:#F04721;
        }

        .content-wrap {
          padding: 20px;
        }

        .cart-items-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 1000px; /* Increased width */
          margin: 0 auto; /* Center the container */
        }

        .cart-item {
          display: flex;
          align-items: center;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 15px;
          width: 100%;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .cart-item-image {
          width: 100px;
          height: 100px;
          margin-right: 20px;
        }

        .cart-item-details {
          flex-grow: 1;
          text-align: left;
        }

        .cart-item-name {
          font-size: 18px;
          margin: 0;
        }

        .cart-item-price {
          font-size: 16px;
          color: #888;
        }

        .cart-item-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
        }

        .quantity-button {
          background-color: #F04721;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 5px 8px;
          cursor: pointer;
          font-size: 14px;
          margin: 0 5px;
          transition: background-color 0.3s;
        }

        .quantity-button:hover {
          background-color: #D33E1A;
        }

        .delete-button {
          background-color: #F04721;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .delete-button:hover {
          background-color: #D33E1A;
        }

        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .dialog-box {
          background: #F04721;
          color:white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '17px',
    marginBottom: '20px',
  },
  continueButton: {
    backgroundColor: '#F04721',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    fontSize: '12px',
    margin: '10px',
    borderRadius: '4px',
    display: 'inline-block',
  },
};

export default CartPage;
