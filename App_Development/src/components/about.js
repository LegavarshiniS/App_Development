import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .about-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            box-shadow: 0 0 10px red;
            margin-top: 25px;
            margin-left: 400px;
          }
          .about-title {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #F04721;
          }
          .about-text {
            font-size: 1.2em;
            line-height: 1.6;
            color: #F04721;
          }
          .about-highlight {
            color: #ff69b4;
          }
          .back-button {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 1em;
            color: red;
            background-color: whitesmoke;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }
          .back-button:hover {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 1em;
            color: white;
            background-color: red;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }
        `}
      </style>
      <div className="about-container">
        <h1 className="about-title">ABOUT DREAMLAND</h1>
        <p className="about-text">
          Welcome to <span className="about-highlight">Dreamland</span>, your ultimate destination for discovering a world of enchanting toys and delightful play experiences. At Dreamland, we believe in the magic of play and its profound impact on a child's growth and development. Our mission is to provide an extensive range of high-quality, safe, and educational toys that cater to the diverse interests and needs of children.
        </p>
        <p className="about-text">
          Our journey began with a simple dream – to bring joy and creativity into the lives of children through exceptional toys. We are committed to curating a selection of products that not only entertain but also inspire imagination, learning, and exploration. Every toy in our collection is carefully chosen to ensure it meets our high standards of quality.
        </p>
        <p className="about-text">
          At Dreamland, we understand the importance of a seamless shopping experience. Our user-friendly online store is designed to make finding the perfect toy easy and enjoyable. Whether you're a parent looking for the latest educational toy, a grandparent seeking a special gift, or anyone in between, you'll find something magical at Dreamland.
        </p>
        <p className="about-text">
          Thank you for visiting Dreamland. We look forward to being a part of your child's playful journey and helping create cherished memories that will last a lifetime.
        </p>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
};

export default AboutUs;
