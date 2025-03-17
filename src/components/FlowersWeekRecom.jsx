import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaArrowLeft, FaRegHeart, FaHeart } from "react-icons/fa";
import { SelectedFlowerModal } from '../subcompents/SelectedFlowerModal';

const FlowersWeekRecom = ({ likedProducts = [], setLikedProducts, type }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://lianalandingback.onrender.com/api/products/products?offerType=${type == 'week' ? 'weekly' : 'special'}`);
        const data = await response.json();

        if (response.ok) {
          setProducts(data);  
        } else {
          setProducts([]);  
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);  
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);  

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(Math.max(0, scrollPosition - 1));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(Math.min(products.length - 4, scrollPosition + 1));
    }
  };

  const openModal = (flower) => {
    setSelectedFlower(flower);
    setCurrentImageIndex(0);  
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFlower(null);
  };

  // Add or remove liked product
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

  if (loading) {
    return (
      <div className="w-full py-8 px-4 bg-white flex justify-center items-center">
        <div className="loader">Loading...</div> 
      </div>
    );
  }

  return (
    <div className="w-screen py-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl text-gray-800 font-medium tracking-wide">{ type == 'week' ? 'LIANA FLOWERS: НАШИ ЛУЧШИЕ РЕКОМЕНДАЦИИ НЕДЕЛИ' : 'LIANA FLOWERS: НАШИ ЛУЧШИЕ РЕКОМЕНДАЦИИ НА 8 МАРТA'}</h2>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft} 
              className="p-2 border border-gray-200 hover:bg-gray-50"
              aria-label="Предыдущие продукты"
            >
              <FaArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollRight} 
              className="p-2 border border-gray-200 hover:bg-gray-50"
              aria-label="Следующие продукты"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.length === 0 ? (
            <p className="text-center text-xl font-semibold text-gray-600 w-full">{ type == 'week' ? 'Нет специальных предложений на этой неделе' : 'Нет специальных предложений' }</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="flex-shrink-0 w-64">
                <div 
                  className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-100 hover:z-10"
                  onClick={() => openModal(product)}
                >
                  <img 
                    src={product.images[0]?.mainImage} 
                    alt={product.name}
                    className="w-full rounded-2xl aspect-square object-cover bg-gray-100 hover:shine-effect"
                  />
                  {product.tag && (
                    <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs">
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-gray-800 font-medium">{product.name}</h3>
                    {/* Heart Icon next to the product name */}
                    <button className="bg-white outline-none focus:ring-0 focus:shadow-none w-6 h-6" onClick={() => toggleLike(product)}>
                      {likedProducts.some(p => p._id === product._id) ? (
                        <FaHeart className="text-red-500 outline-none w-6 h-6" />
                      ) : (
                        <FaRegHeart className="text-gray-500 outline-none w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-800">{new Intl.NumberFormat('ru-RU').format(product.price)} ₸</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedFlower && <SelectedFlowerModal setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} selectedFlower={selectedFlower} setLikedProducts={setLikedProducts} closeModal={closeModal} /> }
    </div>
  );
};

export default FlowersWeekRecom;
