import { useState } from 'react'
import './index.css'
import Navbar from './subComponents/Navbar'
import MainPage from './components/MainPage'
import SpecialOffers from './components/SpecialOffers'
import ProductDiscovery from './components/Products'
import AboutUs from './components/About'

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <MainPage />
      <SpecialOffers />
      <ProductDiscovery />
      <AboutUs />
    </div>
  )
}

export default App