import React from 'react';
import { Link } from 'react-router-dom';
import './navcategory3.css';
import { FaUserPlus, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; 
import NavBar from './navbar1';
//import UserPanel from './userpanel';





const NavCategory3 = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          {/* <UserPanel/> */}
        </div>
      </div>
      <div className="navbar-below">
        <NavBar/>
      </div>
      <div>
        {/* <Age/> */}
      </div>
    </div>
  );
};

export default NavCategory3;