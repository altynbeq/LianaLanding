import React, { useState } from 'react';

export const SelectedFlowerModal = ({ selectedFlower, closeModal, currentImageIndex, setCurrentImageIndex, setLikedProducts }) => {
  // Combine main image with additional images for carousel
  const imagesForCarousel = [
    selectedFlower.images[0]?.mainImage,
    ...selectedFlower.images[0]?.additionalImages || []
  ];

  const [ isInCart, setInCart ] = useState(false);

  // Function to change the current image in the modal carousel
  const changeImage = (index) => {
    setCurrentImageIndex(index);  // Change the current image to the selected index
  };

  const toggleLike = (product) => {
    setInCart(!isInCart);
    setLikedProducts((prevLikes) => {
      const isProductLiked = prevLikes.some(p => p._id === product._id);
      let newLikes;
      if (isProductLiked) {
        newLikes = prevLikes.filter(p => p._id !== product._id); // Remove product from liked
      } else {
        newLikes = [...prevLikes, product]; // Add product to liked
      }
      return newLikes;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl max-h-[95vh] flex flex-col md:flex-row relative">
        {/* Left side - Main Image */}
        <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-auto relative">
          <img
            src={imagesForCarousel[currentImageIndex]}
            alt={selectedFlower.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Mobile Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 md:hidden bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2"
            aria-label="Закрыть модальное окно"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 pr-4">
              {selectedFlower.tag && (
                <span className="inline-block bg-gray-100 px-2 py-1 text-xs mb-2">
                  {selectedFlower.tag}
                </span>
              )}
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 break-words">{selectedFlower.name}</h2>
            </div>

            {/* Desktop Close button */}
            <button
              onClick={closeModal}
              className="hidden md:block bg-black hover:bg-gray-200 rounded-full p-2 ml-2 flex-shrink-0"
              aria-label="Закрыть модальное окно"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-lg sm:text-xl font-medium text-gray-800 mb-4">{new Intl.NumberFormat('ru-RU').format(selectedFlower.price)} ₸</p>

          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">Описание</h3>
            <p className="text-sm sm:text-base text-gray-600">{selectedFlower.description}</p>
          </div>

          {/* Image Carousel */}
          <div className="mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">Другие изображения</h3>
            <div className="flex overflow-x-auto gap-2 sm:gap-4 pb-4 hide-scrollbar">
              {imagesForCarousel.map((image, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 relative cursor-pointer ${
                    index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => changeImage(index)}
                >
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-auto pt-4 border-t">
            <button 
              className="w-full bg-black text-white py-2.5 sm:py-3 px-4 hover:bg-gray-800 transition-colors text-sm sm:text-base rounded-lg"
              onClick={() => toggleLike(selectedFlower)}
            >
              {isInCart ? "Товар в корзине" : "Добавить в корзину"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
