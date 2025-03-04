import React from 'react';

const SeasonalEdits = () => {
  const seasonalCategories = [
    {
      id: 1,
      //   title: "SUPER BOUQUETS",
      image: "https://www.flowerbx.com/media/wysiwyg/Group_537_1_.jpg",
      alt: "Три белых вазы с букетами розовых роз"
    },
    {
      id: 2,
      //   title: "NEW SEASON TULIPS",
      image: "https://www.flowerbx.com/media/wysiwyg/Group_536.jpg",
      alt: "Розовые тюльпаны в прозрачных стеклянных вазах на мраморной поверхности"
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-gray-800 font-medium text-center mb-10 tracking-wide">СЕЗОННЫЕ РЕДАКЦИИ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {seasonalCategories.map((category) => (
            <a 
              key={category.id} 
              href="#" 
              className="relative group overflow-hidden"
            >
              <div className="aspect-w-4 aspect-h-3 md:aspect-auto md:h-106">
                <img 
                  src={category.image} 
                  alt={category.alt}
                  className="w-full rounded-2xl h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-light tracking-widest px-6 py-3 bg-black bg-opacity-20">
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalEdits;
