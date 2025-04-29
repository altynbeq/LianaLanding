import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Макет футера сеткой */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Секция "О нас" */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-3">О нас</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Мы доставляем самые свежие и элегантные цветы, чтобы сделать ваши дни ярче.
              Исследуйте наши премиальные коллекции и сезонные букеты.
            </p>
          </div>

          {/* Служба поддержки */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-3">Служба поддержки</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Информация о доставке</a></li>
              <li><a href="#" className="hover:text-white">Возвраты и возврат средств</a></li>
              <li><a href="#" className="hover:text-white">Часто задаваемые вопросы</a></li>
              <li><a href="#" className="hover:text-white">Свяжитесь с нами</a></li>
            </ul>
          </div>

          {/* Подписка и социальные сети */}
          <div>
            {/* Иконки социальных сетей */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Нижняя часть футера */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
          <p>&copy; {new Date().getFullYear()} FlowerShop. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
