import React from 'react';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

export const CartButton = ({handleCartClick, likedProducts}) => {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <button
      onClick={handleCartClick}
      className={`fixed bottom-20 right-4 p-4 bg-black text-white rounded-full shadow-lg transition-transform transform ${
        isMoving ? 'animate-move' : ''
      }`}
      style={{
        transition: 'transform 0.5s ease',
      }}
    >
      <div className="relative">
        <span className="text-2xl"><FaShoppingCart /></span>
        {/* Badge showing the product count */}
        <span className="absolute bottom-5 left-5 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
          { likedProducts.length } 
        </span>
      </div>
    </button>
  );
};

