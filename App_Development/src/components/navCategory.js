// import React from 'react';
// import { Link } from 'react-router-dom';
// import './navCategory.css';
// import { FaUserPlus, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
// import logo from '../assets/images/logo.png'; 
// import UserPanel from './userpanel';

// import ProductPage from './productpage';

// import NavBar from './navbar1';

// const NavCategory = () => {
//   return (
//     <div>
//       <div className="navbarss">
//         <div className="navbar-leftt">
//           <img src={logo} alt="Logo" className="navbar-logoo" />
//         </div>
//         <div className="navbar-rightt">
//           <UserPanel />
//         </div>
//       </div>
//       <div className="navbar-beloww">
//         <NavBar/>
//       </div>
//       <div>
//         <ProductPage/>
//       </div>
//     </div>
//   );
// };

// export default NavCategory;
import React from 'react';
import { Link } from 'react-router-dom';
import './navCategory.css';
import logo from '../assets/images/logo.png'; 
import UserPanel from './userpanel';
import ProductPage from './productpage';
import NavBar from './navbar1';

const NavCategory = () => {
  return (
    <div>
      <div className="navbarss">
        <div className="navbar-leftt">
          <img src={logo} alt="Logo" className="navbar-logoo" />
        </div>
        <div className="navbar-rightt">
          <UserPanel />
        </div>
      </div>
      <div className="navbar-beloww">
        <NavBar />
      </div>
      <div>
        <ProductPage />
      </div>
    </div>
  );
};

export default NavCategory;
