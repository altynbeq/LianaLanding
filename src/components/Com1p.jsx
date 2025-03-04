import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the mobile menu state
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>
        <div
          className={`border-b-2 bg-white z-50 text-base font-light left-0 fixed top-0 w-full border-neutral-100 border-solid transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="items-center justify-between px-6 w-full m-auto sm:max-w-[40.00rem] md:max-w-3xl md:relative md:pl-6 md:pr-6 md:pt-5 md:pb-5 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
            <div className="text-gray-800 font-medium flex justify-between items-center">
              {/* Logo */}
              <div className="w-32 m-auto md:w-40">
                <Link to="/" className="items-center justify-center flex">
                  <img
                    className="cursor-pointer w-40 h-auto max-w-full"
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1740998675/logo_sppzis.svg"
                    alt="Логотип"
                  />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 bg-white text-black  focus:outline-none"
              >
                <span className="text-2xl">{isMenuOpen ? "×" : "☰"}</span>
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex justify-center px-6 flex-col md:flex-row w-full text-sm text-stone-950 font-bold uppercase sm:max-w-[40.00rem] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl`}
          >
            <div className="pb-4 text-gray-800 pt-2 md:pl-6 md:pr-6">
              <Link to="/products" className="text-gray-800">
                Цветы
              </Link>
            </div>

            <div className="pb-4 text-gray-800 pt-2 md:pl-6 md:pr-6">
              <Link to="/" className="text-gray-800">
                Экспресс-доставка
              </Link>
            </div>

            <div className="pb-4 pt-2 md:pl-6 md:pr-6">
              <Link to="/" className="text-gray-800">
                Подписки
              </Link>
            </div>

            <div className="pb-4 pt-2 md:pl-6 md:pr-6">
              <Link to="/" className="text-gray-800">
                События
              </Link>
            </div>

            <div className="pb-4 pt-2 md:pl-6 md:pr-6">
              <Link to="/" className="text-gray-800">
                Вазы
              </Link>
            </div>

            <div className="pb-4 pt-2 md:pl-6 md:pr-6">
              <Link to="/" className="text-gray-800">
                Мероприятия
              </Link>
            </div>

            <div className="pb-4 pt-2 md:pl-6 md:pr-6">
              <Link to="/" className="text-gray-800">
                Индивидуальные услуги
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center mt-4 md:mt-0">
              <a
                href="https://wa.me/7770320505"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500 hover:text-green-600 w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/liana.uralsk?igsh=bjR3dHplbGI1MjMw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-600 hover:text-pink-700 w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
