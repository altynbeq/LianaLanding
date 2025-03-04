import React, { useState } from 'react';
import { FaRegWindowClose, FaRegTrashAlt, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { createOrderDeal } from '../functions/createOrderDeal';

const LikedItemsModal = ({ onClose, likedProducts, setLikedProducts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  // Remove an item from liked items and update localStorage
  const removeItem = (_id) => {
    const updatedLikedItems = likedProducts.filter(item => item._id !== _id);
    setLikedProducts(updatedLikedItems);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikedItems));
  };

  // Clear all liked items
  const clearAll = () => {
    setLikedProducts([]);
    localStorage.removeItem('likedProducts');
  };

  // Calculate the total sum of liked items
  const getTotalSum = () => {
    return likedProducts.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleConfirmOrder = async () => {
    if (name !== '' && phone !== '' && likedProducts.length > 0) {
      const sum = getTotalSum();
      await createOrderDeal({ name: name, phoneNumber: phone, address: address }, likedProducts, sum);
      alert(`Order confirmed for ${name}. Total: ${new Intl.NumberFormat('ru-RU').format(getTotalSum())} ₸`);
      onClose(false);
    } else {
      alert('Пожалуйста, заполните все необходимые поля');
    }
  };

  return (
    <div className="fixed  inset-0  bg-opacity-50 flex items-start justify-end z-50 md:items-stretch">
      {/* Backdrop for mobile - clicking closes the modal */}
      <div 
        className="absolute inset-0 md:block" 
        onClick={() => onClose(false)}
      />
      
      {/* Modal container - full width on mobile, right-aligned with fixed width on desktop */}
      <div 
        className=" bg-white rounded-2xl md:mr-5 md:mb-10 subtle-border w-full md:w-96 lg:w-1/3 max-w-full h-full md:h-screen flex flex-col max-h-[90vh] md:max-h-screen  " 
        style={{ 
          marginTop: '10vh', 
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {!isOrdering ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-4 py-3 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-lg font-semibold text-black">Корзина товаров</h2>
              <button
                onClick={() => onClose(false)}
                className="bg-black hover:bg-gray-800 rounded-full p-2 flex-shrink-0"
                aria-label="Закрыть"
              >
                <FaRegWindowClose className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Products list */}
            <div className="flex-1 overflow-y-auto px-3 py-2">
              {likedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-10">
                  <FaShoppingCart className="w-12 h-12 text-gray-300 mb-3" />
                  <p className="text-center text-gray-500">Пока нет добавленных товаров</p>
                </div>
              ) : (
                likedProducts.map((item) => (
                  <div key={item._id} className="flex items-center gap-3 py-3 border-b">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.images[0].mainImage} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-md" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-black text-sm truncate">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{new Intl.NumberFormat('ru-RU').format(item.price)} ₸</p>
                    </div>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="p-2 text-gray-500 hover:text-red-500"
                      aria-label="Удалить"
                    >
                      <FaRegTrashAlt className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Total and action buttons */}
            <div className="p-4 border-t mt-auto bg-white sticky bottom-0">
              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-semibold text-black">Итого:</span>
                <span className="text-lg font-semibold text-gray-800">
                  {new Intl.NumberFormat('ru-RU').format(getTotalSum())} ₸
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={clearAll}
                  disabled={likedProducts.length === 0}
                  className={`py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm
                    ${likedProducts.length === 0 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  <FaRegTrashAlt className="w-4 h-4" />
                  Очистить
                </button>
                <button
                  onClick={() => setIsOrdering(true)}
                  disabled={likedProducts.length === 0}
                  className={`py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm
                    ${likedProducts.length === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  <FaShoppingCart className="w-4 h-4" />
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Order form header */}
            <div className="px-4 py-3 border-b flex items-center sticky top-0 bg-white z-10">
              <button
                onClick={() => setIsOrdering(false)}
                className="mr-2 p-1"
                aria-label="Назад"
              >
                <FaArrowLeft className="w-4 h-4" />
              </button>
              <h2 className="text-lg font-semibold text-black flex-1">Оформление заказа</h2>
              <button
                onClick={() => onClose(false)}
                className="bg-black hover:bg-gray-800 rounded-full p-2 flex-shrink-0"
                aria-label="Закрыть"
              >
                <FaRegWindowClose className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Order form content */}
            <div className="flex-1 overflow-y-auto">
              {/* Order summary */}
              <div className="px-4 py-3 bg-gray-50">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Ваш заказ</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{likedProducts.length} {likedProducts.length === 1 ? 'товар' : 'товаров'}</span>
                  <span className="text-base font-semibold text-black">
                    {new Intl.NumberFormat('ru-RU').format(getTotalSum())} ₸
                  </span>
                </div>
              </div>

              {/* Client info form */}
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-800 mb-3">Ваши данные</h3>
                
                <div className="mb-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя*</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон*</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Адрес доставки*</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-white text-black px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Введите адрес доставки"
                    required
                  />
                </div>
              </div>

              {/* Order detail */}
              <div className="px-4 pb-4">
                <h3 className="text-base font-medium text-gray-800 mb-2">Состав заказа</h3>
                <div className="border rounded-lg overflow-hidden">
                  {likedProducts.map((item, index) => (
                    <div key={item._id} className={`flex items-center gap-3 p-3 ${index !== likedProducts.length - 1 ? 'border-b' : ''}`}>
                      <div className="w-12 h-12 flex-shrink-0">
                        <img 
                          src={item.images[0].mainImage} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-md" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-medium text-black truncate">{item.name}</h4>
                        <p className="text-xs text-gray-600">{new Intl.NumberFormat('ru-RU').format(item.price)} ₸</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order action buttons */}
            <div className="p-4 border-t bg-white sticky bottom-0">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsOrdering(false)}
                  className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-sm"
                >
                  Назад
                </button>
                <button
                  onClick={handleConfirmOrder}
                  className="py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 text-sm"
                >
                  Подтвердить заказ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedItemsModal;