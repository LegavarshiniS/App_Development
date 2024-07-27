import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the path as needed
//import profilePhoto from '../assets/images/profile-photo.jpg'; // Adjust the path as needed

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const panelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const infoStyle = {
    fontSize: '16px',
    color: '#555',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const profilePhotoStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #F04721;
            color: white;
          }

          .header-logo img {
            height: 59px;
          }

          .header-logo h1 {
            display: inline;
            margin-left: 10px;
            margin-top: 4px;
            font-size: 40px;
          }

          .header-account-icon {
            position: relative;
            cursor: pointer;
          }

          .header-account-icon i {
            font-size: 34px;
          }

          .dropdown-menu {
            position: absolute;
            top: 50px;
            right: 0;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 150px;
            display: ${dropdownOpen ? 'block' : 'none'};
          }

          .dropdown-menu a {
            display: block;
            padding: 10px 20px;
            color: #333;
            text-decoration: none;
          }

          .dropdown-menu a:hover {
            background-color: #f9f9f9;
          }
        `}
      </style>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <h1>DREAMLAND</h1>
        </div>
        <div className="header-account-icon" onClick={toggleDropdown}>
          <i className="fa-regular fa-user"></i>
          <div className="dropdown-menu">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </header>
      <div style={panelStyle}>
        {/* <img src={profilePhoto} alt="Profile" style={profilePhotoStyle} /> */}
        <h2 style={headerStyle}>User Panel</h2>
        <p style={infoStyle}>Welcome to your user panel.</p>
        <button style={buttonStyle}>Click Me</button>
      </div>
    </>
  );
};

export default App;
