import React from 'react';
import { FaBoxOpen, FaLock, FaTruck } from 'react-icons/fa';

const Perks = () => {
  return (
    <div className="flex  justify-center  items-center bg-white py-1">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex bg-gray-100 px-8 py-5 rounded-2xl items-center gap-4 shadow-md w-full">
            <FaBoxOpen className="w-7 h-7 text-black flex-shrink-0" />
            <div>
              <h3 className="font-medium text-black">Цветы для любимых</h3>
              <p className="text-sm text-gray-600">Эксклюзивные предложения на прекрасные букеты.</p>
            </div>
          </div>
          <div className="flex bg-gray-100 px-8 py-5 rounded-2xl items-center gap-4 shadow-md w-full">
            <FaLock className="w-7 h-7 text-black flex-shrink-0" />
            <div>
              <h3 className="font-medium text-black">Безопасные платежи</h3>
              <p className="text-sm text-gray-600">Покупайте безопасно с нашими проверенными методами.</p>
            </div>
          </div>
          <div className="flex bg-gray-100 px-8 py-5 rounded-2xl items-center gap-4 shadow-md w-full">
            <FaTruck className="w-7 h-7 text-black flex-shrink-0" />
            <div>
              <h3 className="font-medium text-black">Быстрая доставка</h3>
              <p className="text-sm text-gray-600">Свежие цветы доставлены к вашему дому.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
