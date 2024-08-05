import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageGallery = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="gallery-container">
      <style>
        {`
          .gallery-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 20px;
            margin-left:130px;
          }

          .left-images {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 45%;
          }

          .left-images img {
            width: 100%;
            height: auto;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.2s;
          }

          .left-images img:hover {
            transform: scale(1.05);
          }

          .right-image {
            width: 45%;
            margin-right:80px;
          }

          .right-image img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        `}
      </style>

      <div className="left-images">
        <img
          src="https://www.funcorp.in/cdn/shop/files/Early_Learning_Books_1200x1200_compress_1170x.jpg?v=1674654852"
          alt="Image 1"
          onClick={() => handleClick('/early')}
        />
        <img
          src="https://www.funcorp.in/cdn/shop/files/Story_Books_1200x1200_compress_1170x.jpg?v=1674654852"
          alt="Image 2"
          onClick={() => handleClick('/story')}
        />
        <img
          src="https://www.funcorp.in/cdn/shop/files/Interactive_Activity_Books_1200x1200_compress_1170x.jpg?v=1674654852"
          alt="Image 3"
          onClick={() => handleClick('/activity')}
        />
        <img
          src="https://www.funcorp.in/cdn/shop/files/Picture_Books_1200x1200_compress_1170x.jpg?v=1674654852"
          alt="Image 4"
          onClick={() => handleClick('/picture')}
        />
      </div>

      <div className="right-image">
        <img
          src="https://www.funcorp.in/cdn/shop/files/Drawing_Painting_Colouring_Books_1200x1200_compress_1170x.jpg?v=1674654852"
          alt="Right Image"
          onClick={() => handleClick('/draw')}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
