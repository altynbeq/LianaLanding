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
import Dashboard from '../components/AdminPanel/Dashboard';
import Products from '../components/AdminPanel/Products';
import Orders from '../components/AdminPanel/Orders';
import Customers from '../components/AdminPanel/Customers';
import Analytics from '../components/AdminPanel/Analytics'; 

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Главная');

  const menuItems = [
    { name: 'Главная', icon: FaTachometerAlt },
    { name: 'Продукты', icon: FaBox },
    { name: 'Заказы', icon: FaShoppingCart },
    { name: 'Клиенты', icon: FaUsers },
    { name: 'Аналитика', icon: FaChartLine },
    { name: 'Настройки', icon: FaCog },
    { name: 'Управление контентом', icon: FaFileAlt },
    { name: 'Уведомления', icon: FaBell },
    { name: 'Интеграции', icon: FaLink }
  ];

  return (
    <div className="flex w-screen min-h-screen bg-white">
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
          {activeItem === 'Главная' && <Dashboard />}
          {activeItem === 'Продукты' && <Products />}
          {activeItem === 'Заказы' && <Orders />}
          {activeItem === 'Клиенты' && <Customers />}
          {activeItem === 'Аналитика' && <Analytics />}
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
