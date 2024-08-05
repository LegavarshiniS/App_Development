import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ImageComponent = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/navCategory'); 
  };

  const imageStyle = {
    width: '1150px', 
    height: '400px', 
    marginTop: '40px', 
    cursor: 'pointer', 
  };

  return (
    <div>
      <img
        src="https://toyzone.in/cdn/shop/files/premium-range.jpg?v=1671702631"
        alt="Raksha Bandhan"
        style={imageStyle}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageComponent;
