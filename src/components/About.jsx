import React from 'react';

const AboutUs = () => {
  const cards = [
    {
      text: "Our handpicked, seasonal arrangements bring nature's charm to life.",
      shape: "rounded-bl-full rounded-br-full"
    },
    {
      text: "Our handpicked, seasonal arrangements bring nature's charm to life, creating memories that blossom with every petal.",
      shape: "rounded-full"
    },
    {
      text: "Our handpicked, seasonal arrangements bring nature's charm to life.",
      shape: "rounded-tl-full rounded-tr-full"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-normal text-center mb-16">About Us</h2>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="w-full md:w-1/3 relative"
          >
            <div className={`bg-gray-100 ${card.shape} aspect-square flex items-center justify-center p-8`}>
              <div className="w-48 h-48 border-2 border-white flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 text-gray-300">✕</div>
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600 px-4">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;