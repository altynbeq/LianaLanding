import React, { useState } from 'react';
import { FaRegWindowClose, FaRegHeart, FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";

const LikedItemsModal = ({ onClose }) => {
  const likedItems = [
    { id: 1, name: 'Red Roses Bouquet', price: 49.99, image: '/api/placeholder/100/100' },
    { id: 2, name: 'White Lilies', price: 39.99, image: '/api/placeholder/100/100' },
    { id: 3, name: 'Tulip Collection', price: 29.99, image: '/api/placeholder/100/100' },
  ];

  const removeItem = (id) => {
    setLikedItems(items => items.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setLikedItems([]);
  };

  const addAllToCart = () => {
    // Implementation for adding to cart
    console.log('Adding all items to cart:', likedItems);
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
    >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Liked Items</h2>
            <button onClick={() => onClose(false)}>
              <FaRegWindowClose className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {likedItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-red-500">
                    <FaRegHeart className="w-5 h-5 fill-current" />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-gray-700">
                    <FaRegTrashAlt className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t mt-auto">
            <div className="flex gap-4">
              <button
                onClick={clearAll}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Clear All
              </button>
              <button
                onClick={addAllToCart}
                className="flex-1 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
              >
                <FaShoppingCart className="w-5 h-5" />
                Add All to Cart
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LikedItemsModal;
