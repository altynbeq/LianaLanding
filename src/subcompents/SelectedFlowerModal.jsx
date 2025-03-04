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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative">
        {/* Left side - Main Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src={imagesForCarousel[currentImageIndex]}
            alt={selectedFlower.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              {selectedFlower.tag && (
                <span className="inline-block bg-gray-100 px-2 py-1 text-xs mb-2">
                  {selectedFlower.tag}
                </span>
              )}
              <h2 className="text-2xl font-medium text-gray-800">{selectedFlower.name}</h2>
            </div>

            {/* Close button moved here */}
            <button
              onClick={closeModal}
              className="bg-black hover:bg-gray-200 rounded-full p-2 ml-2 flex-shrink-0"
              aria-label="Закрыть модальное окно"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-xl font-medium text-gray-800 mb-4">{selectedFlower.price} ₸</p>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Описание</h3>
            <p className="text-gray-600">{selectedFlower.description}</p>
          </div>

          {/* <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Детали</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Свежесрезанные и ручно составленные</li>
              <li>• Поставляются в виде бутона для продолжительного срока в вазе</li>
              <li>• Бесплатная доставка при заказе от £75</li>
              <li>• Ваза не включена</li>
            </ul>
          </div> */}

          {/* Image Carousel */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Другие изображения</h3>
            <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
              {imagesForCarousel.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  onClick={() => changeImage(index)} // Change image on click
                  className={`w-32 h-32 object-cover rounded-lg cursor-pointer ${
                    index === currentImageIndex ? 'border-2 border-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button className="w-full bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors" onClick={() => toggleLike(selectedFlower)}>
              { isInCart ? "Товар в корзине" : "Добавить в корзину"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
