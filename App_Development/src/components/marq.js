import React from 'react';
import '../assets/css/marq.css'; // Ensure this path is correct

const MarqueeGrid = ({ items = [] }) => { // Provide a default empty array for items
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-content">
          {items.map((item, index) => (
            <div className="marquee-item" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="marquee-content">
          {items.map((item, index) => (
            <div className="marquee-item" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeGrid;
