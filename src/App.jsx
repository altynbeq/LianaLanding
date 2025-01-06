import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './subComponents/Navbar';
import MainPage from './components/MainPage';
import SpecialOffers from './components/SpecialOffers';
import ProductDiscovery from './components/Products';
import AboutUs from './components/About';
import AdminPanel from './components/pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className='bg-white'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <MainPage />
                <SpecialOffers />
                <ProductDiscovery />
                <AboutUs />
              </>
            }
          />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
