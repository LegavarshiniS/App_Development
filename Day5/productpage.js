import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './productpage.css';
import { Link } from "react-router-dom";

const products = {
  toys: [
    { id: 1, name: 'Blue Dinosaur', price: '₹150.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-06-16-at-10.23.37-AM-1-300x300.jpeg' },
    { id: 2, name: 'Bunny Pull along', price: '₹330.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/IMG_20200816_103024_110-300x300.jpg' },
    { id: 3, name: 'Caterpillar', price: '₹110.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-24-at-1.50.23-PM-1-300x300.jpeg' },
    { id: 4, name: 'Tractor Big', price: '₹220.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/DSC_0095-min-scaled-1-300x300.jpg' },
    { id: 5, name: 'Green Dinosaur', price: '₹150.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-06-16-at-10.26.12-AM.jpeg' },
    { id: 6, name: 'Car Taxi', price: '₹170.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-30-at-3.44.46-PM-300x300.jpeg' },
    { id: 25, name: ' Giraffe Pull along', price: '₹199.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-28-at-4.13.15-PM-300x300.jpeg' },
    { id: 26, name: 'Zebra Pull along', price: '₹250.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-28-at-4.13.15-PM-1-300x300.jpeg' },
    { id: 27, name: 'Fish Pull Along', price: '₹160.00', image: 'https://toystorey.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-06-at-6.58.20-PM-300x300.jpeg' },
    { id: 28, name: 'Tractor – small', price: '₹160.00', image: 'https://toystorey.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-02-at-5.29.46-PM-1-300x300.jpeg' },
    { id: 29, name: 'Zebra Pull along', price: '₹250.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/DSC_0190-scaled-1-300x300.jpg' },
    { id: 30, name: 'Train set ', price: '₹190.00', image: 'https://toystorey.in/wp-content/uploads/2023/02/Wooden-Train-set-%E2%80%93-Magnet-Train-Toy-300x300.jpeg' },
  ],
  games: [
    { id: 7, name: 'Maze ball game', price: '₹200', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-24-at-6.26.57-PM-300x300.jpeg'},
    { id: 8, name: 'Mikado game toy', price: '₹150', image: 'https://toystorey.in/wp-content/uploads/2023/02/51wfdI0VU5L._AC_SS450_.jpg' },
    { id: 9, name: ' Naught & Crosses', price: '₹160', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2021-12-19-at-2.45.13-PM-1-300x300.jpeg' },
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
  education: [
    { id: 13, name: 'ABCD Train', price: '₹100', image: 'https://toystorey.in/wp-content/uploads/2023/02/71CrMdDoV3L._SL1500_-300x300.jpg' },
    { id: 14, name: 'Rainbow Rings Tower', price: '₹150', image: 'https://toystorey.in/wp-content/uploads/2024/04/61kHXp-OlmL._SL1500_-300x300.jpg' },
    { id: 15, name: 'Animal Pin Board', price: '₹200', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-11-29-at-1.32.14-PM-300x300.jpeg' },
    { id: 16, name: 'Lacing Board Puzzle', price: '₹300', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-22-at-7.49.04-PM-300x300.jpeg' },
    { id: 17, name: ' Magnet Fishing Game', price: '₹100', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-11-14-at-8.48.03-PM-1-300x300.jpeg' },
    { id: 18, name: 'Fruits cart', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-10-19-at-1.35.02-PM-300x300.jpeg' },
    { id: 19, name: 'Math game', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-19.27.48_470ab978-300x300.jpg' },
    { id: 20, name: 'Building blocks', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-26-at-3.56.20-PM-1-300x300.jpeg' },
    { id: 21, name: 'Shapes stacker', price: '₹500', image: 'https://toystorey.in/wp-content/uploads/2024/02/S3908316066564308b7274d99fadf4e76Y-300x300.jpg' },
    { id: 22, name: 'Wing top', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-08-17-at-5.55.38-AM-300x300.jpeg' },
    { id: 23, name: 'letter tracing', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-02-11-at-6.22.37-PM-300x300.jpeg' },
    { id: 24, name: 'Abacus frame', price: '₹250', image: 'https://toystorey.in/wp-content/uploads/2024/02/EKT3085-2-300x300.jpg' },
  ],
};

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('toys');

  return (
    <div className="product-page">
      <h1>Filter by Category</h1>
      <div className="category-links">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
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
    </div>
  );
};

export default ProductPage;
