import React from 'react';

const CenteredTextWithLines = () => {
  return (
    <div className="text-container">
      <style>
        {`
          .text-container {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 20px 0;
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
      <span className="text">Books for kids</span>
      <div className="line"></div>
    </div>
  );
};

export default CenteredTextWithLines;
