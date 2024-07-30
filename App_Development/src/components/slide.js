import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slideshow = () => {
  const images = [
    "https://toycra.com/cdn/shop/files/BO-05-06_1264x422.jpg?v=1613769851",
    "https://toycra.com/cdn/shop/files/Wooden_Toys_1710x570.jpg?v=1681476513",
    "https://toycra.com/cdn/shop/files/Smoby_1710x570.jpg?v=1639478171",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Link to="/navcategory">
    <div className="slideshow-container">
      <style>
        {`
          .slideshow-container {
            position: relative;
            width: 100%;
            height: 545px;
            margin: auto;
            overflow: hidden;
          }

          .slide {
            display: none;
            width: 100%;
            height: 100%;
          }

          .active-slide {
            display: block;
          }

          .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
          }

          .next {
            right: 0;
            border-radius: 3px 0 0 3px;
          }

          .prev {
            left: 0;
            border-radius: 3px 0 0 3px;
          }

          .prev:hover, .next:hover {
            background-color: rgba(0,0,0,0.8);
          }

          .dot-container {
            position: absolute;
            bottom: 15px;
            width: 100%;
            text-align: center;
          }

          .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
          }

          .active-dot, .dot:hover {
            background-color: #717171;
          }
        `}
      </style>

      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? "active-slide" : ""}`}>
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ))}

      <a className="prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&#10094;</a>
      <a className="next" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&#10095;</a> 

      <div className="dot-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    </Link>
  );
};

export default Slideshow;
