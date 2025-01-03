import React, { useState } from 'react';
import { FaRegWindowClose, FaRegTrashAlt, FaShoppingCart, FaCreditCard } from "react-icons/fa";

const CartItemsModal = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Red Roses Bouquet', price: 49.99, quantity: 1, image: '/api/placeholder/100/100' },
    { id: 2, name: 'White Lilies', price: 39.99, quantity: 2, image: '/api/placeholder/100/100' },
    { id: 3, name: 'Tulip Collection', price: 29.99, quantity: 1, image: '/api/placeholder/100/100' },
  ]);

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const proceedToCheckout = () => {
    // Implementation for proceeding to checkout
    console.log('Proceeding to checkout:', cartItems);
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <FaRegWindowClose className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-gray-700">
                  <FaRegTrashAlt className="w-5 h-5" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">Your cart is empty.</div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-lg font-bold">${calculateTotal()}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Clear Cart
              </button>
              <button
                onClick={proceedToCheckout}
                className="flex-1 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
              >
                <FaCreditCard className="w-5 h-5" />
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItemsModal;
