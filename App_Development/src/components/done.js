import React from 'react';
import { useNavigate } from 'react-router-dom';
import done from '../assets/images/done.png'; // Ensure the correct path to your image

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Define the action for the button click, e.g., navigate to another page
    navigate('/navCategory');
  };

  return (
    <div className="payment-success-container">
      <style>
        {`
          .payment-success-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
          }

          .success-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px red;
            text-align: center;
          }

          .success-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
          }

          .success-message {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
          }

          .button {
            background-color: red;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .button:hover {
            background-color: white;
            color:red;
          }
        `}
      </style>
      <div className="success-box">
        <img src={done} alt="Success" className="success-image" />
        <div className="success-message">Payment Successful!</div>
        <button className="button" onClick={handleButtonClick}>
          BACK
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
