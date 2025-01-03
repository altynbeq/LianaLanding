import React, { useState } from 'react';
import { FaRegHeart, FaShoppingCart, FaSearch, FaFilter } from 'react-icons/fa';

const ProductDiscovery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const categories = ['All', 'Toys', 'Chocolate', 'Flowers'];
  
  const products = [
    { id: 1, name: "Flower Name", price: "15,000 AMD" },
    { id: 2, name: "Flower Name", price: "15,000 AMD" },
    { id: 3, name: "Flower Name", price: "15,000 AMD" },
    { id: 4, name: "Flower Name", price: "15,000 AMD" },
    { id: 5, name: "Flower Name", price: "15,000 AMD" },
    { id: 6, name: "Flower Name", price: "15,000 AMD" },
    { id: 7, name: "Flower Name", price: "15,000 AMD" },
    { id: 8, name: "Flower Name", price: "15,000 AMD" },
    { id: 9, name: "Flower Name", price: "15,000 AMD" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-normal text-center mb-8">Discover Our Products</h1>
      
      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        {/* Search Input */}
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Price range</span>
          <input
            type="text"
            placeholder="From"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="To"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* All filter option */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 gap-5 border border-gray-300 rounded-lg flex items-center  hover:bg-gray-50">
            <span>All filters</span>
            <FaFilter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-2 rounded-full border ${
              selectedCategory === category
                ? 'bg-gray-200 border-gray-300'
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-white flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 text-gray-300">✕</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-normal">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1 hover:text-gray-600">
                  <FaRegHeart className="w-5 h-5" />
                </button>
                <button className="p-1 hover:text-gray-600">
                  <FaShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDiscovery;