import React, { useState } from 'react';
import {
  FaTachometerAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
  FaFileAlt,
  FaBell,
  FaLink,
  FaBars
} from 'react-icons/fa';
import Dashboard from '../../subComponents/AdminPanel/Dashboard';
import Products from '../../subComponents/AdminPanel/Products';
import Orders from '../../subComponents/AdminPanel/Orders';
import Customers from '../../subComponents/AdminPanel/Customers';
import Analytics from '../../subComponents/AdminPanel/Analytics'; 

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: FaTachometerAlt },
    { name: 'Products', icon: FaBox },
    { name: 'Orders', icon: FaShoppingCart },
    { name: 'Customers', icon: FaUsers },
    { name: 'Analytics', icon: FaChartLine },
    { name: 'Settings', icon: FaCog },
    { name: 'Content Management', icon: FaFileAlt },
    { name: 'Notifications', icon: FaBell },
    { name: 'Integrations', icon: FaLink }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className={`${!isOpen && 'hidden'} font-bold text-xl`}>Admin Panel</h1>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 rounded-lg hover:bg-gray-700"
          >
            <FaBars size={20} />
          </button>
        </div>
        
        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center p-4 hover:bg-gray-700 transition-colors
                  ${activeItem === item.name ? 'bg-gray-700' : ''}`}
              >
                <Icon size={20} />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-4">
          <h2 className="text-2xl font-semibold text-gray-800">{activeItem}</h2>
        </header>
        
        <main className="p-6">
          {activeItem === 'Dashboard' && <Dashboard />}
          {activeItem === 'Products' && <Products />}
          {activeItem === 'Orders' && <Orders />}
          {activeItem === 'Customers' && <Customers />}
          {activeItem === 'Analytics' && <Analytics />}
          {/* {activeItem !== 'Dashboard' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-500">Content for {activeItem} will appear here</p>
            </div>
          )} */}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
