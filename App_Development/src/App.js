import './App.css';
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './components/register';
import CartPage from './components/cart';
import WishPage from './components/wish';
import DashBoard from './components/dashboard';
import Profilewish from './components/profilewish';
import ProfileOrder from './components/profileorder';
import ProfileBoard from './components/prodashboard';
import NavCategory from './components/navCategory';
import NavCategory2 from './components/navcategory2';
import NavCategory3 from './components/navcategory3';
import GamePage from './components/game';
import ToyPage from './components/toy';
import EduPage from './components/education';
import BarbiePage from './components/barbie';
import MarvelPage from './components/marvel';
import OtherPage from './components/other';
import ThreePage from './components/three';
import EightPage from './components/eight';
import AllPage from './components/allage';
import EarlyPage from './components/early';
import StoryPage from './components/story';
import ActivityPage from './components/activity';
import PicturePage from './components/picture';
import DrawPage from './components/draw';
import ContactPage from './components/contact';
import PaymentPage from './components/payment';
import PaymentDone from './components/payment';
import FullPageImage from './components/done';
import DonePage from './components/done';
import AboutUs from './components/about';
import PaymentSuccessful from './components/done';


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
         <Route exact path="/dashboard" element={<DashBoard/>}/>
         <Route exact path="/profilewish" element={<Profilewish/>}/>
         <Route exact path="/orders"element={<ProfileOrder/>}/>
         <Route exact path="/board"element={<ProfileBoard/>}/>
         <Route exact path="/contact"element={<ContactPage/>}/>
         <Route exact path="/about"element={<AboutUs/>}/>

         <Route exact path="/navCategory" element={<NavCategory/>}/>
         <Route exact path="/navCategory2" element={<NavCategory2/>}/>
         <Route exact path="/navCategory3" element={<NavCategory3/>}/>
         <Route exact path="/game" element={<GamePage/>}/>
         <Route exact path="/toy" element={<ToyPage/>}/>
         <Route exact path="/edu" element={<EduPage/>}/>

         <Route exact path="/barbie" element={<BarbiePage/>}/>
         <Route exact path="/marvel" element={<MarvelPage/>}/>
         <Route exact path="/others" element={<OtherPage/>}/>

         <Route exact path="/three" element={<ThreePage/>}/>
         <Route exact path="/eight" element={<EightPage/>}/>
         <Route exact path="/all" element={<AllPage/>}/>

         <Route exact path="/early" element={<EarlyPage/>}/>
         <Route exact path="/story" element={<StoryPage/>}/>
         <Route exact path="/activity" element={<ActivityPage/>}/>
         <Route exact path="/picture" element={<PicturePage/>}/>
         <Route exact path="/draw" element={<DrawPage/>}/>
         <Route exact path="/payment" element={<PaymentPage/>}/>
         <Route exact path="/pay" element={<PaymentSuccessful/>}/>





        </Routes>
       
      </Router>  
{/*     
      { id: 1, name: '', price: '₹150.00', image: '' },
    { id: 2, name: '', price: '₹330.00', image: '' },
    { id: 3, name: '', price: '₹110.00', image: '' },
    { id: 4, name: '', price: '₹220.00', image: '' },
    { id: 5, name: '', price: '₹150.00', image: '' },
    { id: 6, name: '', price: '₹170.00', image: '' },
    { id: 25, name: '', price: '₹199.00', image: '' },
    { id: 26, name: '', price: '₹250.00', image: '' },
    { id: 27, name: '', price: '₹160.00', image: '' },
    { id: 28, name: '',price: '₹160.00', image: '' },
    { id: 29, name: '', price: '₹250.00', image: '' },
    { id: 30, name: '', price: '₹190.00', image: '' }, */}
    </div>
  );
}

export default App;

