import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaRegUser, FaBoxOpen, FaLock, FaTruck } from "react-icons/fa";


const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/api/placeholder/40/40" alt="Logo" className="rounded-full" />
            <div className="hidden md:flex gap-6">
              <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Shop</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <FaSearch className="w-5 h-5" />
            <FaHeart className="w-5 h-5" />
            <FaShoppingCart className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <FaRegUser className="w-5 h-5" />
              <span className="text-sm">EN</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
            <div className="w-1/2 aspect-square bg-white flex items-center justify-center">
              <div className="border-2 border-gray-300 w-full h-full flex items-center justify-center">
                <span className="text-gray-400">Image</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-light">Share the Joy<br />of Fresh Flowers</h1>
            <p className="text-gray-600">
              Embrace the beauty of each season with our curated selection of blooms. Whether it's spring roses or winter whites, find flowers that capture every moment and elevate any space.
            </p>
            <p className="text-gray-600">
              Our handpicked, seasonal arrangements bring nature's charm to life, creating memories that blossom with every petal.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300">
                Explore Our Flowers
              </button>
              <button className="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 bg-gray-100 p-8 rounded-lg">
          <div className="flex items-center gap-3">
            <FaBoxOpen className="w-5 h-5" />
            <div>
              <h3 className="font-medium">Thoughtful flowers</h3>
              <p className="text-sm text-gray-600">Exclusive offers on beautiful blooms.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaLock className="w-5 h-5" />
            <div>
              <h3 className="font-medium">Secure Payments</h3>
              <p className="text-sm text-gray-600">Shop safely with our trusted methods.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaTruck className="w-5 h-5" />
            <div>
              <h3 className="font-medium">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Fresh flowers delivered to your door.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;