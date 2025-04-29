import React, { useState, useEffect } from 'react';
import { Plus, ChevronDown, X } from 'lucide-react';
import { FaRegCalendarAlt, FaRegWindowClose } from "react-icons/fa";
import { CalendarComp } from '../subcompents/SubscrModal/Calendar';
import { IntervalComp } from '../subcompents/SubscrModal/IntervalComp';
import { FlowersSlider } from '../subcompents/SubscrModal/FlowersSlider';
import { DeliveryMethodSelector } from '../subcompents/SubscrModal/DeliveryOptions'

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-700 rounded-3xl',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300'
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const FlowerOrderModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [subscriptionSize, setSubscriptionSize] = useState('7 букетов');
  const [totalAmount, setTotalAmount] = useState('45.000₸');

  const bouquetImages = [
    "https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg",
    "https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg",
    "https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg"
  ];

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 w-full flex items-center justify-center z-50 p-4'>
      <div className="bg-white p-10 rounded-2xl overflow-hidden flex w-full max-w-7xl h-auto relative">
        <div isOpen={isOpen} onClose={() => onClose()} className="w-full">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Side - Order Form */}
            <div className='mr-10 flex flex-col w-full'>
              <h1 className="text-4xl text-black mb-6">ЗАКАЗ</h1>

              {/* Delivery Method */}
              <DeliveryMethodSelector deliveryMethod={deliveryMethod}  setDeliveryMethod={setDeliveryMethod} />

              {/* Delivery Date */}
              <CalendarComp />

              {/* Delivery Interval */}
              <IntervalComp />

              {/* Recipient Details */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-black">Получатель</h3>
                <input 
                  type="text"
                  placeholder="ФИО"
                  className="w-full bg-white text-black p-2 border rounded mb-2"
                />
                <input 
                  type="text"
                  placeholder="Адрес доставки"
                  className="w-full bg-white text-black p-2 border rounded mb-2"
                />
                <input 
                  type="tel"
                  placeholder="+7 (999) 99-99"
                  className="w-full bg-white text-black p-2 border rounded"
                />
              </div>

              {/* Order Comment */}
              <div>
                <h3 className="font-semibold mb-2 text-black">Комментарий к заказу</h3>
                <textarea
                  placeholder="Напишите здесь свои особые пожелания к заказу"
                  className="w-full bg-white text-black p-2 border rounded h-24"
                />
              </div>
            </div>

            {/* Right Side - Bouquet Selection */}
            <FlowersSlider bouquetImages={bouquetImages} />
           

            {/* Third Column - Subscription & Amount */}
            <div>
            <button
              onClick={() => onClose(false)}
              className="absolute top-4 right-4 bg-black text-white z-10 p-2 rounded-full hover:bg-gray-100"
              aria-label="Закрыть модальное окно"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
              <div className="mt-10 space-y-4">
                {/* Promo Code Input */}
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Введите промокод" 
                    className="w-full bg-white text-black rounded-2xl p-3 border "
                  />
                  <Button className="bg-black text-white rounded-2xl">
                    Применить
                  </Button>
                </div>

                {/* Subscription Size */}
                <div className="flex text-black rounded-2xl justify-between items-center p-2 border ">
                  <div>
                     <h2 className='font-bold'>
                     Размер подписки
                     </h2>
                  <span>
                   {subscriptionSize}
                  </span>
                  </div>
                 
                  <div className="flex items-center">
                    <Plus size={20} />
                  </div>
                </div>

                {/* Total Amount */}
                <div className="flex text-black rounded-2xl justify-between items-center p-2 border ">
                  <div>
                     <h2 className='font-bold'>
                     Сумма
                     </h2>
                  <span>
                   {totalAmount}
                  </span>
                  </div>
                 
                  <div className="flex items-center">
                    <Plus size={20} />
                  </div>
                </div>
                {/* New Button 1 */}
                <Button className="w-full flex justify-between items-center">
                  Добавить открытку
                  <Plus size={20} />
                </Button>

                {/* New Button 2 */}
                <Button className="w-full flex justify-between items-center">
                  Добавить шоколад
                  <Plus size={20} />
                </Button>
              </div>
              {/* Submit Button */}
              <div className='bottom-0'>
                <button
                  // onClick={}
                  className={`px-4 w-full mt-20 rounded-3xl py-2  transition-colors `}
                  style={{
                    background: "linear-gradient(135deg, #5D001E 0%, #A10035 100%)"
                  }}
                >
                  ОФОРМИТЬ ЗАКАЗ
                </button>
              </div>
               
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlowerOrderModal;
