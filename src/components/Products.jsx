import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaSearch, FaFilter } from 'react-icons/fa';
import { SelectedFlowerModal } from '../subcompents/SelectedFlowerModal';

const ProductDiscovery = ({ likedProducts = [], setLikedProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const categories = ['Все', 'Игрушки', 'Шоколад', 'Цветы'];

  useEffect(() => {
    // Fetch products from the API
    fetch('https://lianalandingback.onrender.com/api/products/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const toggleLike = (product) => {
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

  // Function to handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true); // Open modal when a product is clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Reset selected product when closing modal
  };

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    // Filter by category
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    // Filter by search query
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by price range
    const productPrice = product.price;
    const matchesPrice =
      (!priceFrom || productPrice >= parseFloat(priceFrom)) &&
      (!priceTo || productPrice <= parseFloat(priceTo));

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white w-screen max-w-full">
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl mt-20 text-gray-800 font-normal text-center mb-8">Откройте наши продукты</h1>
        
        {/* Секция поиска и фильтра */}
        <div className="flex flex-wrap gap-4 mb-8 items-center">
          {/* Поле ввода для поиска */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-black bg-white px-4 py-2 border border-gray-300 rounded-lg pr-10"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Диапазон цен */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Диапазон цен</span>
            <input
              type="text"
              placeholder="От"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="w-24 px-3 text-black bg-white py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="До"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="w-24 px-3 text-black bg-white py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Опция "Все фильтры" */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 gap-5 border border-gray-300 rounded-lg flex items-center hover:bg-gray-800">
              <span>Все фильтры</span>
              <FaFilter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Фильтры по категориям */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-black border-gray-300'
                  : 'border-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Check if there are any filtered products */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-600">
            Нет продуктов, соответствующих выбранным фильтрам.
          </div>
        ) : (
          // Сетка продуктов
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product._id} className="flex flex-col">
                <div className="bg-gray-100 rounded-lg aspect-square mb-4 flex items-center justify-center">
                  <div className=" border-2 border-white flex items-center justify-center">
                    <img
                      src={product?.images[0]?.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                      onClick={() => handleProductClick(product)} // Open modal on product click
                    />
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg text-gray-800 font-normal">{product.name}</h3>
                    <p className="text-gray-600">{new Intl.NumberFormat('ru-RU').format(product.price)} ₸</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white outline-none focus:ring-0 focus:shadow-none w-6 h-6" onClick={() => toggleLike(product)}>
                      {likedProducts.some(p => p._id === product._id) ? (
                        <FaHeart className="text-red-500 outline-none w-6 h-6" />
                      ) : (
                        <FaRegHeart className="text-gray-500 outline-none w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show modal if product is selected */}
        {isModalOpen && selectedProduct && (
          <SelectedFlowerModal
          setLikedProducts={setLikedProducts}
          currentImageIndex = {currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
            selectedFlower={selectedProduct}
            closeModal={closeModal}
          />
        )}

      </div>
    </div>
  );
};

export default ProductDiscovery;
