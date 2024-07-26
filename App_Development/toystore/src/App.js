import './App.css';
import Home from './components/home';
import Login from './components/login';
import Header from './components/header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Slideshow from './components/slide';
import ShopByAge from './components/homeage';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
        <Router>
        <Routes>

          <Route exact path="/" element={<Home />}/> 
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/register" element={<Register/>}/>
        
        </Routes>
       
      </Router>  
    
     
    </div>
  );
}

export default App;

