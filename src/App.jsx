import React, { useState, useEffect, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import AdminPanel from './pages/AdminPanel';
import ProductDiscovery from "./components/Products";
import { SpecialOptionsPage } from "./components/SpecialOptionsPage";
import loader from './assets/loader.json';
import Navbar from "./components/Navbar";
import FlowerSlider from "./components/FlowerSlider";
import FlowersWeekRecom from "./components/FlowersWeekRecom";
import TrendingFlowers from "./components/TrendingFlowers";
import SeasonalEdits from "./components/SeasonalEdits";
import Offers from "./components/Offers";
import Feedback from "./components/Feedback";
import Subscription from "./components/Subscription";
import Perks from "./components/Perks";
import Footer from "./components/Footer";
import { LogIn } from './components/LogIn';

import { ProtectedRoute } from './components/ProtectedRoute';
// Import CartButton
import { CartButton } from './components/Cart';
import LikedItemsModal from "./components/LikedItemsModal";


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
                    {/* <SeasonalEdits /> */}
                    <FlowersWeekRecom type="special" />
                    {/* <Offers /> */}
                    <Feedback />
                    <Footer />
                  </div>

                  {!isModalOpen && <CartButton handleCartClick={handleCartClick} likedProducts={likedProducts} />}
                </>
              }
            />
            
            <Route
              path="/admin-panel"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="/logIn" element={<div className="w-screen"> <LogIn /></div>} />
            <Route path="/special-offers" element={ <div className="flex flex-col gap-20" > <Navbar /> <SpecialOptionsPage /> <Footer /></div>} />
            <Route path="/products" element={<div className="flex flex-col gap-20" > <Navbar /> <ProductDiscovery likedProducts={likedProducts} setLikedProducts={setLikedProducts} /> </div>} />
          </Routes>
        {/* Add the CartButton so it appears on all pages */}

        {/* Liked Items Modal */}
        {isModalOpen && <LikedItemsModal onClose={handleCloseModal} likedProducts={likedProducts} setLikedProducts={setLikedProducts} />}
      </div>
    </Router>
  );
};

export default App;
