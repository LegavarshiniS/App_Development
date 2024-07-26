import React from 'react';

const Centere = () => {
  return (
    <div className="text-container">
      <style>
        {`
          .text-container {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 30px 0;
            margin-top:30px;
          }

          .line {
            flex: 1;
            border-bottom: 4px solid red;
            margin: 0 120px;
          }

          .text {
            font-size: 24px;
            font-weight: bold;
            color: #000;
          }
        `}
      </style>
      <div className="line"></div>
      <span className="text">Shop By Brand</span>
      <div className="line"></div>
    </div>
  );
};

export default Centere;
