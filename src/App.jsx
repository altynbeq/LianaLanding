import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import AdminPanel from './pages/AdminPanel';
import ProductDiscovery from "./components/Products";
import { SpecialOptionsPage } from "./components/SpecialOptionsPage";
import loader from './assets/loader.json';
import Navbar from "./components/com1p";
import FlowerSlider from "./components/FlowerSlider";
import FlowersWeekRecom from "./components/FlowersWeekRecom";
import TrendingFlowers from "./components/TrendingFlowers";
import SeasonalEdits from "./components/SeasonalEdits";
import Offers from "./components/Offers";
import Feedback from "./components/Feedback";
import Subscription from "./components/com4p";
import Perks from "./components/Perks";
import Footer from "./components/Footer";

// Import CartButton
import { CartButton } from './components/Cart';
import LikedItemsModal from "./components/LikedItemsModal";

import Flower from './assets/Flower.gif';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [likedProducts, setLikedProducts] = useState([]); // products liked by user

  // Initialize liked items from localStorage
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || []; // Get liked products from localStorage
    setLikedProducts(storedLikes); // Set state to the stored liked products
  }, []);

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts)); // Update localStorage when likedProducts changes
  }, [likedProducts]);

  const handleCartClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <Router>
      <div className='bg-white'>
        {/* Show the loader while loading data */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="bg-white ">
                    <Navbar />
                    <FlowerSlider />
                    <Perks />
                    <FlowersWeekRecom type="week" likedProducts={likedProducts} setLikedProducts={setLikedProducts} />
                    <TrendingFlowers />
                    <Subscription />
                    <SeasonalEdits />
                    <FlowersWeekRecom type="special" />
                    <Offers />
                    <Feedback />
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/special-offers" element={ <div className="flex flex-col gap-20" > <Navbar /> <SpecialOptionsPage /> <Footer /></div>} />
            <Route path="/products" element={<div className="flex flex-col gap-20" > <Navbar /> <ProductDiscovery likedProducts={likedProducts} setLikedProducts={setLikedProducts} /> </div>} />
          </Routes>
        {/* Add the CartButton so it appears on all pages */}
        {!isModalOpen && <CartButton handleCartClick={handleCartClick} likedProducts={likedProducts} />}

        {/* Liked Items Modal */}
        {isModalOpen && <LikedItemsModal onClose={handleCloseModal} likedProducts={likedProducts} setLikedProducts={setLikedProducts} />}
      </div>
    </Router>
  );
};

export default App;
