import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SpecialOffers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const offers = [
    { name: "Flower Name", price: "15,000 AMD" },
    { name: "Flower Name", price: "15,000 AMD" },
    { name: "Flower Name", price: "15,000 AMD" },
    { name: "Flower Name", price: "15,000 AMD" },
    { name: "Flower Name", price: "15,000 AMD" },
    { name: "Flower Name", price: "15,000 AMD" },
  ];

  const displayedOffers = offers.slice(currentSlide, currentSlide + 4);

  const nextSlide = () => {
    if (currentSlide < offers.length - 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-normal text-center mb-12">Special Offers</h1>
      
      <div className="relative">
        <div className="flex justify-between items-center">
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 -translate-x-full"
            disabled={currentSlide === 0}
          >
            <FaChevronLeft className={`w-8 h-8 ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>

          <div className="flex gap-6 overflow-hidden">
            {displayedOffers.map((offer, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-white flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 text-gray-300">✕</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-normal mb-2">{offer.name}</h3>
                <p className="text-gray-600">{offer.price}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 translate-x-full"
            disabled={currentSlide >= offers.length - 4}
          >
            <FaChevronRight className={`w-8 h-8 ${currentSlide >= offers.length - 4 ? 'text-gray-300' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <button 
          className="px-8 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => console.log('Show more clicked')}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default SpecialOffers;