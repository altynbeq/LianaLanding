import React, { useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { createDeal } from '../functions/createDeal';

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Обязательное поле';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Обязательное поле';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    await createDeal(formData);
    console.log('Form submitted:', formData);
    setFormData({ name: '', phoneNumber: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl h-auto relative">
        
        {/* Close Button - better placement for mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black z-10 p-1 rounded-full hover:bg-gray-100"
          aria-label="Закрыть"
        >
          <FaRegWindowClose size={28} strokeWidth={2} />
        </button>
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741003270/IMAGE_2025-03-03_17_01_01_n6zc2i.jpg" 
            alt="Цветочная подписка" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
          
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1740998675/logo_sppzis.svg" 
              alt="Liana Flowers" 
              className="h-14 md:h-16"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 text-center md:text-left">
            Подписка на цветы
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 md:p-4 bg-white border text-black ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                placeholder="Введите ваше имя"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-black mb-2">
                Номер телефона
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full p-3 md:p-4 bg-white text-black border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                placeholder="Введите ваш номер телефона"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>
            
            <div className="mt-auto flex justify-center">
              <button
                type="submit"
                className="w-full md:w-[60%] bg-stone-950 text-white py-3 md:py-2 rounded-2xl hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black text-lg font-medium"
              >
                Подписаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
