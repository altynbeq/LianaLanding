import React from 'react';

const TrendingFlowers = () => {
  const categories = [
    {
      id: 1,
      name: "НОВИНКИ",
      image: "https://www.flowerbx.com/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/l/a/large_pink_version_02.jpg",
      alt: "Белые цветы в стеклянной вазе"
    },
    {
      id: 2,
      name: "РОЗОВЫЙ РЕДАКТ",
      image: "https://www.flowerbx.com/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/l/a/large_pink_version_02.jpg",
      alt: "Розы ранункулус в стеклянной вазе с свечой"
    },
    {
      id: 3,
      name: "ТЮЛЬПАНЫ",
      image: "https://www.flowerbx.com/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/l/a/large_pink_version_02.jpg",
      alt: "Розовые тюльпаны в стеклянной вазе"
    },
    {
      id: 4,
      name: "РОЗЫ",
      image: "https://www.flowerbx.com/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/l/a/large_pink_version_02.jpg",
      alt: "Розы в стеклянной вазе с свечой"
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-gray-800 font-medium text-center mb-12 tracking-wide">ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href="/products" 
              className="group transition-opacity hover:opacity-90"
            >
              <div className="bg-gray-50">
                <img 
                  src={category.image} 
                  alt={category.alt}
                  className="w-full rounded-2xl aspect-square object-cover"
                />
              </div>
              <div className="mt-4 mb-8 text-center">
                <h3 className="font-medium text-gray-800 tracking-wide">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingFlowers;
