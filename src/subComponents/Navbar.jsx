import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaGlobe, FaUser } from 'react-icons/fa';
import LikedItemsModal from '../components/LikedItemsModal';
import CartItemsModal from '../components/CartItemsModal';
import AuthModal from '../components/Auth/AuthModal'

const Navbar = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ cartModal, SetCartModal ] = useState(false);
  const [ logInModal, setLogInModal ] = useState(false);

  const toggleCartModal = () => {
    SetCartModal(!cartModal);
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleLogInModal = () => {
    setLogInModal(!logInModal);
  }

  return (
    <>
      <nav className="fixed bg-white w-full border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-black hover:text-gray-600 transition-all font-medium">
                Shop
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-all font-medium">
                Contact
              </a>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 text-center">
              <span className="text-3xl font-bold text-black hover:text-gray-700 transition-colors">
                Logo
              </span>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* <button className="p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition">
                <FaSearch size={20} />
              </button> */}
              <button
                onClick={toggleModal}
                className="p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition"
              >
                <FaHeart size={20} />
              </button>
              <button
                onClick={toggleCartModal}
                className="p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition"
              >
                <FaShoppingCart size={20} />
              </button>
              {/* <button className="p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition">
                <FaGlobe size={20} />
              </button> */}
              <button 
                onClick={toggleLogInModal}
                className="p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition">
                <FaUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Liked Items Modal */}
      { isModalOpen && <LikedItemsModal onClose={toggleModal} /> }
      { cartModal && <CartItemsModal onClose={toggleCartModal} /> }
      { logInModal && <AuthModal onClose={toggleLogInModal} /> }
    </>
  );
};

export default Navbar;
