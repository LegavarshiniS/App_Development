import './App.css';
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './components/register';
import CartPage from './components/cart';
import WishPage from './components/wish';
import UserPanel from './components/dashboard';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
        <Router>
        <Routes>

         <Route exact path="/" element={<Home />}/> 
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/register" element={<Register/>}/>
         <Route exact path="/cart" element={<CartPage/>}/>
         <Route exact path="/wish" element={<WishPage/>}/>
         <Route exact path="/dashboard" element={<UserPanel/>}/>

        </Routes>
       
      </Router>  
    
     
    </div>
  );
}

export default App;

