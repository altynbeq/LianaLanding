import React, { useState } from 'react';

export const FlowersSlider = ({ bouquetImages }) => {
  const [mainImage, setMainImage] = useState(bouquetImages[0]); // Default to the first image

  return (
    <div>
      {/* Main Bouquet Image */}
      <div className="relative w-full rounded-[30px] border-[3px] border-gray-300 overflow-hidden mb-4">
        <img 
          src={mainImage} 
          alt="Bouquet" 
          className="w-full h-[500px] object-cover" 
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 mb-4">
        {bouquetImages.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`Bouquet ${index + 1}`}
            className={`w-28 h-28 object-cover rounded-lg cursor-pointer ${mainImage === img ? 'border-2 border-gray-300' : ''}`}
            onClick={() => setMainImage(img)} // Set clicked image as main image
          />
        ))}
      </div>
    </div>
  );
};

