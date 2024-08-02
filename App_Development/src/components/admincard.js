import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// CardManager component
const CardManager = () => {
  const initialCards = [
    {
      id: 1,
      title: 'Blue Dino',
      
      imageUrl: 'https://toystorey.in/wp-content/uploads/2023/02/WhatsApp-Image-2022-06-16-at-10.23.37-AM-1-300x300.jpeg',
    },
    {
      id: 2,
      title: 'Barbie Mini Ride',
      
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/2445/7966/products/Barbie-Mini-Ride-On6_4ecde602-3de4-4b0f-9344-f88c3c89bf06_600x.jpg?v=1668078945',
    },
    {
      id: 3,
      title: 'Aircraft',
     
      imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493661565/300/493661565-1.jpeg',
    },
    {
      id: 4,
      title: 'Remote car',
      
      imageUrl: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176598/300/493176598-1_7247.webp',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      description: `Description for card ${cards.length + 1}`,
      imageUrl: `https://via.placeholder.com/150?text=Image+${cards.length + 1}`, // Placeholder image URL
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="container" style={{ marginLeft: '320px', padding: '20px' }}>
      <style>
        {`
          .card-manager {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            width: 250px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .card-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 4px;
          }

          .card-title {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
          }

          .card-description {
            font-size: 14px;
            color: #666;
            margin-top: 10px;
          }

          .card-buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }

          .card-button {
            background-color: red;
            border: none;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
          }

          .card-button:hover {
            background-color: darkred;
          }

          .add-card-button {
            margin-top: 20px;
            background-color:red;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
            margin-left:-1150px;
          }

          .add-card-button:hover {
            background-color: white;
            color:red;

          }
        `}
      </style>
      <div className="card-manager">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <div className="card-title">{card.title}</div>
            <div className="card-description">{card.description}</div>
            <div className="card-buttons">
              <button className="card-button" onClick={() => deleteCard(card.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-card-button" onClick={addCard}>
        Add Card
      </button>
    </div>
  );
}

export default CardManager;
