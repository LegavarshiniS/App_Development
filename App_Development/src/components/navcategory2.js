import React from 'react';
import { Link } from 'react-router-dom';
import './navcategory2.css';
import { FaUserPlus, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; 
//import UserPanel from './userpanel';
import Brand from './brand';
import NavBar from './navbar1';



const NavCategory2 = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          {/* <UserPanel /> */}
        </div>
      </div>
      <div className="navbar-below">
        <NavBar />
      </div>
      <div>
        <Brand/>
      </div>
    </div>
  );
};

export default NavCategory2;