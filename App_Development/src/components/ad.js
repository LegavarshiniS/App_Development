import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ImageComponent = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    navigate('/nextpage'); // Navigate to the target page
  };

  const imageStyle = {
    width: '1150px',  // Adjust width as needed
    height: '400px',  // Maintain aspect ratio
    marginTop: '40px', // Corrected marginTop property
    cursor: 'pointer', 
  };

  return (
    <div>
      <img
        src="https://toyzone.in/cdn/shop/files/premium-range.jpg?v=1671702631"
        alt="Raksha Bandhan"
        style={imageStyle}
        onClick={handleClick} // Handle click event
      />
    </div>
  );
};

export default ImageComponent;
