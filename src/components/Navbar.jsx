import { useEffect } from 'react';

import BannerSlider from './Bannerslider';
import CategorySection from './CategorySection';
import ProductsSection from './ProductsSection';
import Westerndress from './Westerndress';
import Otherproduct from './Otherproduct';
import Footer1 from './Footer1';
import Footer2 from './Footer2';

import img1 from '../assets/image/img-1.jpg';
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaClipboardList,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const searchOptions = [
  { label: 'Ethnic', path: '/ethnic' },
  { label: 'Western Dress', path: '/westerndress' },
  { label: 'Menswear', path: '/menswear' },
  { label: 'Footwear', path: '/footwear' },
  { label: 'Home', path: '/home' },
  { label: 'Beauty', path: '/beauty' },
  { label: 'Accessories', path: '/accessories' },
];

const Navbar = () => {

const [isImpersonating, setIsImpersonating] = useState(false);

  useEffect(() => {
    const flag = localStorage.getItem('impersonating') === 'true';
    setIsImpersonating(flag);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

const handleExitImpersonation = () => {
    localStorage.removeItem('impersonating');
    localStorage.removeItem('token');
    window.location.href = '/admin'; // Return to Admin Portal
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredOptions([]);
      setShowDropdown(false);
      return;
    }

    const matches = searchOptions.filter(option =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(matches);
    setShowDropdown(true);
  };

  const handleSelect = (path) => {
    navigate(path);
    setSearchTerm('');
    setFilteredOptions([]);
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = searchOptions.find(option =>
      option.label.toLowerCase() === searchTerm.toLowerCase()
    );
    if (match) {
      handleSelect(match.path);
    } else {
      alert("No matching page found.");
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    // navigate('/login');
  };



  return (
    <div className="border-b shadow-sm w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-8 py-4 bg-white gap-4 md:gap-0">

        {/* Logo */}
        <div className="flex justify-between items-center">
          <img src={img1} alt="Meesho" className="h-14 w-auto object-contain" />
        </div>

        <form className="relative w-full md:flex-1 mx-2 md:mx-4" onSubmit={handleSubmit}>
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Try Saree, Kurti or Search by Product Code"
            className="w-full border px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E71665]"
          />
          {showDropdown && filteredOptions.length > 0 && (
            <ul className="absolute bg-white border rounded-md w-full mt-1 z-10 shadow-md max-h-52 overflow-auto">
              {filteredOptions.map((option, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
                  onClick={() => handleSelect(option.path)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Right Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-sm text-gray-700 w-full md:w-auto">
          {/* Sign Up Button */}
          {/* <button className="px-3 py-1.5 bg-[#E71665] text-white rounded-md hover:scale-105 transition duration-200 w-full md:w-auto">
            Sign Up
          </button> */}

          <Link
            to="/Signup"
            className="px-3 py-1.5 bg-[#E71665] text-white rounded-md hover:scale-105 transition duration-200 w-full md:w-auto text-center"
          >
            Sign Up
          </Link>

          {/* Profile section */}
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="text-sm font-semibold text-gray-700 hover:text-[#E71665] hover:underline"
              >
                Hi, {user.first_name}
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 cursor-pointer hover:text-[#E71665] hover:underline font-medium"
            >
              <FaUser />
              <span>Profile</span>
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 cursor-pointer hover:text-[#E71665] hover:underline font-medium"
          >
            <FaShoppingCart />
            <span>Cart</span>
          </Link>

          {/* Order History */}
          <Link
            to="/OrderHistory"
            className="flex items-center gap-2 hover:text-[#E71665] hover:underline font-medium"
          >
            <FaClipboardList />
            <span>Orders</span>
          </Link>
        </div>
      </div>


      <div className="w-full bg-[#E71665] text-white text-center py-2 text-sm font-semibold animate-pulse">
        🎉 Flat ₹300 OFF on First Order! Limited Time Only 🎉
      </div><br></br>
      <BannerSlider />
      <div>
        <CategorySection />
      </div>
      <div>

        <ProductsSection />
      </div>
      <div>
        < Westerndress />
      </div>
      <div>
        <Otherproduct />
      </div>
      <div>
        <Footer1 />
      </div>

      <div className="flex flex-col min-h-screen">

        <Footer2 />
      </div>
  
       {isImpersonating && (
        <div className="bg-red-600 text-white p-2 text-center font-bold">
          🚨 Impersonating a Customer —{' '}
          <button onClick={handleExitImpersonation} className="underline">
            Exit Impersonation
          </button>
        </div>
      )}



    </div>
  );
};

export default Navbar;
