import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import SearchResults from './components/SearchResults';
import Buynow from './components/Buynow'; 
import OrderHistory from './components/OrderHistory'; // Adjust path as needed
import PastHistory from './components/PastHistory';

// Search category pages
import Ethnic from './components/search/ethnic';
import Westerndress from './components/search/westerndress';
import Menswear from './components/search/menswear';
import Footwear from './components/search/footwear';
import Home from './components/search/home';
import Beauty from './components/search/beauty';
import Accessories from './components/search/accessories';

import CartPage from './components/Card/CartPage';
// view details
import ProductDetail from './components/ProductDetail';


import AboutUs from './Foopages/AboutUs';
import HelpCenter from './Foopages/HelpCenter'
import QuickLinks from "./Foopages/QuickLinks";





import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
      
      <Route path="/ethnic" element={<Ethnic />} />
      <Route path="/westerndress" element={<Westerndress />} />
      <Route path="/menswear" element={<Menswear />} />
      <Route path="/footwear" element={<Footwear />} />
      <Route path="/home" element={<Home />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/accessories" element={<Accessories />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/buy/:id" element={<Buynow />} />
      <Route path="/OrderHistory" element={<OrderHistory />} />

      <Route path="/PastHistory" element={<  PastHistory/>} />

      

      <Route path="/about" element={<AboutUs />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/quick-links" element={<QuickLinks />} />




      </Routes>
    </div>
  );
}

export default App;
