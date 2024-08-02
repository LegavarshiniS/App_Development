// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Review = ({ review, onLike }) => {
//   return (
//     <div className="review-card">
//       <div className="review-content">
//         <h4 className="review-title">{review.title}</h4>
//         <p className="review-text">{review.text}</p>
//         <p className="review-author">- {review.author}</p>
//       </div>
//       <button className="like-button" onClick={() => onLike(review.id)}>
//         {review.liked ? 'Unlike' : 'Like'} ({review.likes})
//       </button>
//     </div>
//   );
// };


// const ShopkeeperReviews = () => {
//   const initialReviews = [
//     {
//       id: 1,
//       title: 'Great Toy Store!',
//       text: 'My kids love the toys from this store. Highly recommended!',
//       author: 'John Doe',
//       likes: 0,
//       liked: false,
//     },
//     {
//       id: 2,
//       title: 'Good selection',
//       text: 'A wide variety of toys available. Good prices too.',
//       author: 'Jane Smith',
//       likes: 0,
//       liked: false,
//     },
//     {
//       id: 3,
//       title: 'Friendly Staff',
//       text: 'The staff here are very friendly and helpful.',
//       author: 'Alice Johnson',
//       likes: 0,
//       liked: false,
//     },
//   ];

//   const [reviews, setReviews] = useState(initialReviews);

//   const handleLike = (id) => {
//     setReviews(reviews.map(review =>
//       review.id === id
//         ? { ...review, liked: !review.liked, likes: review.liked ? review.likes - 1 : review.likes + 1 }
//         : review
//     ));
//   };

//   return (
//     <div className="container" style={{ padding: '20px' }}>
//       <style>
//         {`
//           .review-card {
//             background-color: white;
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             padding: 20px;
//             margin-bottom: 20px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           }

//           .review-title {
//             font-size: 18px;
//             font-weight: bold;
//           }

//           .review-text {
//             font-size: 14px;
//             color: #666;
//             margin-top: 10px;
//           }

//           .review-author {
//             font-size: 12px;
//             color: #999;
//             margin-top: 10px;
//           }

//           .like-button {
//             margin-top: 10px;
//             background-color: red;
//             border: none;
//             color: white;
//             padding: 10px 20px;
//             border-radius: 4px;
//             cursor: pointer;
//             font-size: 14px;
//             transition: background-color 0.3s;
//           }

//           .like-button:hover {
//             background-color: darkred;
//           }
//         `}
//       </style>
//       <h2>Customer Reviews</h2>
//       {reviews.map(review => (
//         <Review key={review.id} review={review} onLike={handleLike} />
//       ))}
//     </div>
//   );
// }

// export default ShopkeeperReviews;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.jpg'; // Ensure the correct path to your profile photo

const Review = ({ review, onLike }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <h4 className="review-title">{review.title}</h4>
        <p className="review-text">{review.text}</p>
        <p className="review-author">- {review.author}</p>
      </div>
      <button className="like-button" onClick={() => onLike(review.id)}>
        {review.liked ? 'Unlike' : 'Like'} ({review.likes})
      </button>
    </div>
  );
};

const ShopkeeperReviews = () => {
  const initialReviews = [
    {
      id: 1,
      title: 'Great Toy Store!',
      text: 'My kids love the toys from this store. Highly recommended!',
      author: 'Shalini',
      likes: 0,
      liked: false,
    },
    {
      id: 2,
      title: 'Good selection',
      text: 'A wide variety of toys available. Good prices too.',
      author: 'Kavi',
      likes: 0,
      liked: false,
    },
    
  ];

  const [reviews, setReviews] = useState(initialReviews);

  const handleLike = (id) => {
    setReviews(reviews.map(review =>
      review.id === id
        ? { ...review, liked: !review.liked, likes: review.liked ? review.likes - 1 : review.likes + 1 }
        : review
    ));
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <style>
        {`
          .review-card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .review-title {
            font-size: 18px;
            font-weight: bold;
          }

          .review-text {
            font-size: 14px;
            color: #666;
            margin-top: 10px;
          }

          .review-author {
            font-size: 12px;
            color: #999;
            margin-top: 10px;
          }

          .like-button {
            margin-top: 10px;
            background-color: red;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
          }

          .like-button:hover {
            background-color: darkred;
          }
        `}
      </style>
      <h2>Customer Reviews</h2>
      {reviews.map(review => (
        <Review key={review.id} review={review} onLike={handleLike} />
      ))}
    </div>
  );
};

const AdminSide = () => {
  return (
    <div className="sidebar-container">
      <style>
        {`
          .sidebar-container {
            position: fixed;
            left: 0;
            top: 99px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white; 
            color: white; 
            height: 100vh;
            width: 300px; 
            box-shadow: -2px 0 10px red;
            margin-top:-27px;
          }

          .profile-photo-container {
            width: 140px; /* Adjust size as needed */
            height: 140px; /* Adjust size as needed */
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%; /* Makes the container circular */
            margin-top: 18px; /* Increased space from the top */
            margin-bottom: 40px; /* Increased space below the icon */
            overflow: hidden; /* Ensures the photo fits within the circle */
          }

          .profile-photo {
            width: 100%; /* Ensures the photo covers the container */
            height: auto; /* Maintains the aspect ratio */
          }

          .sidebar-link {
            position: relative;
            margin-bottom: 20px; /* Increased margin below each link */
            font-size: 18px;
            color: red; /* Default text color */
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link i {
            font-size: 24px; /* Adjust icon size as needed */
            margin-right: 10px; /* Space between icon and text */
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .link-text {
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .sidebar-link:hover {
            background-color: red; /* Background color on hover */
            color: white; /* Text color on hover */
          }

          .sidebar-link:hover i {
            color: white; /* Icon color on hover */
          }

          .sidebar-link:hover .link-text {
            color: white; /* Text color on hover */
          }

          .side-link {
            position: relative;
            margin-bottom: 20px; /* Increased margin below each link */
            font-size: 18px;
            color: white; /* Text color */
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            background-color: red; /* Background color */
            transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
          }

          .side-link i {
            font-size: 24px; /* Adjust icon size as needed */
            margin-right: 10px; /* Space between icon and text */
            color: white; /* Icon color */
            transition: color 0.3s; /* Smooth transition for hover effect */
          }

          .side-link:hover {
            background-color: darkred; /* Darker background color on hover */
            color: white; /* Text color on hover */
          }

          .side-link:hover i {
            color: white; /* Icon color on hover */
          }

          .side-link:hover .link-text {
            color: white; /* Text color on hover */
          }

          @media (max-width: 768px) {
            .sidebar-container {
              padding: 10px;
              width: 150px; /* Adjust width for smaller screens */
            }

            .profile-photo-container {
              width: 60px;
              height: 60px;
              margin-top: 60px; /* Increased space from the top for smaller screens */
            }

            .sidebar-link i, .side-link i {
              font-size: 20px;
            }

            .sidebar-link, .side-link {
              font-size: 16px;
              margin-bottom: 15px; /* Increased margin below each link */
            }
          }

          @media (max-width: 480px) {
            .sidebar-container {
              width: 120px; /* Adjust width for smaller screens */
            }

            .profile-photo-container {
              width: 50px;
              height: 50px;
              margin-top: 40px; /* Increased space from the top for smaller screens */
            }

            .profile-photo {
              font-size: 25px;
            }
             

            .sidebar-link i, .side-link i {
              font-size: 18px;
            }

            .sidebar-link, .side-link {
              font-size: 14px;
              margin-bottom: 12px; /* Increased margin below each link for smaller screens */
            }
          }
        `}
      </style>
      <div className="profile-photo-container">
        <img src={profile} alt="Profile" className="profile-photo" />
      </div>
      <Link to="/adminboard" className="sidebar-link">
        <i className="fas fa-user"></i>
        <span className="link-text">Profile</span>
      </Link>
      <Link to="/" className="sidebar-link">
        <i className="fas fa-tachometer-alt"></i>
        <span className="link-text">Dashboard</span>
      </Link>
      <Link to="/adminadd" className="sidebar-link">
      <i className="fa-regular fa-eye"></i>
        <span className="link-text">View Items</span>
      </Link>
     
       
        <Link to="/feedback" className="side-link">
        <i className="fa-solid fa-comment"></i>
        <span className="link-text">Feedback</span>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: red; /* Header background color */
            color: white;
          }

          .header-logo {
            display: flex;
            align-items: center;
          }

          .header-logo img {
            height: 50px;
          }

          .header-title {
            font-size: 24px;
            margin-left: 10px;
          }
        `}
      </style>
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <h1 className="header-title">DREAMLAND</h1>
      </div>
      <div className="header-icons">
        <Link to="/">
          <i className="fas fa-home" style={{ color: 'white', fontSize: '24px' }}></i>
        </Link>
      </div>
    </header>
  );
};

const ShopkeeperDashboard = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <AdminSide />
        <div className="content-container">
          <ShopkeeperReviews />
        </div>
      </div>
      <style>
        {`
          .main-content {
            display: flex;
          }

          .content-container {
            flex: 1;
            padding: 20px;
            margin-left: 320px; /* Adjusted for sidebar width */
          }
        `}
      </style>
    </div>
  );
};

export default ShopkeeperDashboard;

