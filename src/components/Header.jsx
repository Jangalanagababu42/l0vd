// src/components/Header.js
import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
const Header = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(true);

  return (
    <header className="sticky top-0 bg-white z-50 mb-5 ">
      {isNotificationVisible && (
        <div className="bg-black text-white flex justify-between items-center px-4 py-2 ">
          <p className="ml-20">
            Our archive API is now available for 5 networks instantly
          </p>
          <button
            className="text-white"
            onClick={() => setNotificationVisible(false)}
          >
            &times;
          </button>
        </div>
      )}
      <nav className="flex justify-between items-center py-4 px-8 shadow-none">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-45 w-136 ml-20" />
        </div>
        <ul className="flex space-x-6 text-lg ">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About us
            </a>
          </li>
          <li>
            <a href="#networks" className="hover:text-blue-600">
              Networks
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-600">
              Products
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Contact us
        </a>
      </nav>
    </header>
  );
};

export default Header;
