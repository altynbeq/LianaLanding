import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

export const CartButton = ({handleCartClick, likedProducts}) => {
  return (
    <button
      onClick={handleCartClick}
      className="relative bg-white subtle-border p-2 text-black hover:text-gray-600 transition-colors"
      aria-label="Корзина"
    >
      <FaShoppingCart className="w-6 h-6" />
      {likedProducts.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {likedProducts.length}
        </span>
      )}
    </button>
  );
};

