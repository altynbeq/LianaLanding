import React, { useState, useRef, useEffect } from 'react';
import { FaRegWindowClose } from "react-icons/fa";

import { ChevronLeft, ChevronRight, X } from 'lucide-react';


const FlowerSubscriptionModal = ({onClose}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  const subscriptionPlans = [
    {
      id: 1,
      bouquets: 4,
      price: 20000,
      image: "https://res.cloudinary.com/dzzldqqsc/image/upload/v1744809468/sub3_nsli5g.jpg"
    },
    {
      id: 2,
      bouquets: 7,
      price: 45000,
      image: "https://res.cloudinary.com/dzzldqqsc/image/upload/v1744809486/sub2_ygfsiu.jpg",
      isHit: true
    },
    {
      id: 3,
      bouquets: 9,
      price: 95000,
      image: "https://res.cloudinary.com/dzzldqqsc/image/upload/v1744809504/sub1_asn1ub.jpg"
    }
  ];

  return (
    <>
      {
      isMobile ? 
        <MobileSubscriptionModalPC 
        subscriptionPlans={subscriptionPlans} 
        onClose={onClose}
        selectedPlan={selectedPlan} 
        setSelectedPlan={setSelectedPlan}
      /> :
      <FlowerSubscriptionModalPC 
        subscriptionPlans={subscriptionPlans} 
        onClose={onClose}
        selectedPlan={selectedPlan} 
        setSelectedPlan={setSelectedPlan}
      />
      }
    </>
  );
};

const FlowerSubscriptionModalPC = ({ onClose, subscriptionPlans, selectedPlan, setSelectedPlan }) => {
  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white h-[90%] gap-5 rounded-2xl max-w-6xl w-full p-6 relative">
        <div className="flex justify-between items-center mb-6">
            <div className='gap-4 flex flex-col'>
                <h1 className="text-5xl text-black ">Подписки</h1>
                <p className="text-black text-[20px] text-center mr-20 ">
                    Это регулярная доставка свежих сезонных цветов  для вашего дома или бизнеса
                </p>
            </div>
            <button
              onClick={() => onClose(false)}
              className="absolute top-4 right-4 bg-black text-white z-10 p-2 rounded-full hover:bg-gray-100"
              aria-label="Закрыть модальное окно"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
           
        </div>

        <div className="grid  grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`
                relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
                transition-all duration-300 transform 
                ${selectedPlan === plan.id 
                  ? 'scale-105 border-4 border-blue-500' 
                  : 'hover:scale-105'}
              `}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.isHit && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm z-10">
                  ХИТ
                </div>
              )}
              
              <img 
                src={plan.image} 
                alt={`${plan.bouquets} букета`} 
                className="w-full aspect-[3/4] object-cover"
              />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black text-white py-2 px-4 rounded-2xl text-center">
                  <p className="text-xl font-semibold">{plan.bouquets} букета = {plan.price.toLocaleString()}₸</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
          <p className="text-gray-600 text-[20px] ">
            Идеально подойдет для тех, кто хочет окружить себя <br/> эстетикой и красотой с выгодой до 30%
          </p>
        </div>

        <div className="absolute rounded-2xl p-2 bg-black bottom-4 right-4 flex items-center space-x-2">
          <img 
            src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg" 
            alt="Administrator" 
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">Администратор Ева</p>
            <p className="text-sm text-white">Добрый день! Чем могу помочь?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MobileSubscriptionModalPC = ({ onClose, subscriptionPlans,  setSelectedPlan }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setSelectedPlan(subscriptionPlans[currentSlide - 1].id);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < subscriptionPlans.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setSelectedPlan(subscriptionPlans[currentSlide + 1].id);
    }
  };

  return (
    <div className="fixed p-4 inset-0 z-50 flex items-center justify-center bg-black/50 p-2">
      <div className="bg-white rounded-xl w-full max-w-md h-full max-h-[90vh] relative flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 pb-0">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-black">Подписки</h1>
            <button
              onClick={() => onClose(false)}
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
              aria-label="Закрыть модальное окно"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-black mb-4">
            Это регулярная доставка свежих сезонных цветов для вашего дома или бизнеса
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative m-5 rounded-2xl flex-1 overflow-hidden">
          <div className="absolute inset-0">
            <div 
              ref={sliderRef}
              className="h-full flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {subscriptionPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className="w-full h-full flex-shrink-0"
                >
                  <div className="relative h-full">
                    {plan.isHit && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs z-10">
                        ХИТ
                      </div>
                    )}
                    
                    <img 
                      src={plan.image} 
                      alt={`${plan.bouquets} букета`} 
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black text-white py-2 px-4 rounded-2xl text-center">
                        <p className="text-lg font-semibold">{plan.bouquets} букета = {plan.price.toLocaleString()}₸</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrevSlide} 
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full ${currentSlide === 0 ? 'opacity-50' : 'opacity-90'}`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNextSlide} 
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full ${currentSlide === subscriptionPlans.length - 1 ? 'opacity-50' : 'opacity-90'}`}
            disabled={currentSlide === subscriptionPlans.length - 1}
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots Indicator */}
        </div>

        {/* Footer */}
        <div className="p-4 pt-2">
          <p className="text-xs text-gray-600 mb-3">
            Идеально подойдет для тех, кто хочет окружить себя эстетикой и красотой с выгодой до 30%
          </p>
          
          <div className="bg-black rounded-xl p-2 flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg" 
              alt="Administrator" 
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold text-white">Администратор Ева</p>
              <p className="text-xs text-white">Добрый день! Чем могу помочь?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerSubscriptionModal;



