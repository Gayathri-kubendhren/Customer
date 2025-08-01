// Sidebar.jsx
import img1 from '../assets/img-1.jpg';

import { useState } from 'react';
import { FaBars, FaTachometerAlt, FaBox, FaUsers, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: <FaTachometerAlt />, link: '/dashboard' },
   { label: 'Products', icon: <FaBox />, link: '/' }, 
    { label: 'Customers', icon: <FaUsers />, link: '/customers' },
    { label: 'Orders', icon: <FaClipboardList />, link: '/orders' },
    { label: 'Settings', icon: <FaCog />, link: '/settings' },
    { label: 'Logout', icon: <FaSignOutAlt />, link: '/logout' },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="flex justify-between items-center">
          <img src={img1} alt="Meesho" className="h-14 w-auto object-contain" />
        </div>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#E71665] p-2 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#E71665] text-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:flex md:flex-col`}
      >
         
        <nav className="flex-1 px-4 py-6 space-y-4 text-sm">
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="flex items-center space-x-3 hover:bg-pink-600 p-2 rounded-md transition-colors"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
