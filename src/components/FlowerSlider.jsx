import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Flower from '../assets/Flower.gif'; // Loading spinner during transition

const FlowerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Мы создаем красоту в каждом букете.",
      subtitle: "Свежие цветы, стильные композиции и быстрая доставка – все для ваших особенных моментов",
      cta: "Заказать",
      image: 'https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739781/IMAGE_2025-02-28_15_49_20_tgh4we.jpg',
      imageAlt: "Pink tulips bouquet wrapped in kraft paper",
    },
    {
      title: "Лилия, роза или пион – в Liana Flowers найдется идеальный букет для каждого.",
      subtitle: "Подчеркните свои чувства с помощью живых, ярких и ароматных композиций.",
      cta: "Увидеь все",
      image: 'https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_35_sozuu2.jpg',
      imageAlt: "Red roses arrangement",
    },
    {
      title: "Лилия, роза или пион – в Liana Flowers найдется идеальный букет для каждого.",
      subtitle: "Доставим быстро, оформим с любовью!",
      cta: "Заказать",
      image: 'https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg',
      imageAlt: "White and pink peonies bouquet",
    },
  ];

  // Set up auto-sliding every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-screen  mt-10 md:h-full  md:mt-20 bg-white">
      <div className="mx-auto  my-1 md:my-5 h-[90vh] md:h-[75vh] relative overflow-hidden bg-white">
        {/* Slider Container */}
        <div
          className="flex mt-10 mb-10 w-full transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col md:flex-row-reverse px-4 md:px-20 w-full h-full flex-shrink-0">
              {/* Image Content (on top for mobile, on right for desktop) */}
              <div className="w-full mt-1 md:w-1/2 h-[55%] md:h-full flex items-center justify-center p-0 md:p-4 md:mt-0">
                <img 
                  src={slide.image} 
                  alt={slide.imageAlt} 
                  className="max-w-full rounded-2xl max-h-full object-contain"
                />
              </div>

              {/* Text Content (below image for mobile, to the left for desktop) */}
              <div className="w-full z-10 mb-9 md:w-1/2 flex flex-col justify-center items-center p-1 md:p-8">
                <div className="mb-3 md:mb-5">
                  <img src={Flower} alt="Loading" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]" />
                </div>
                <h3 className="text-xs md:text-sm tracking-widest text-gray-800 mb-2 text-center px-2">{slide.title}</h3>
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 tracking-wider mb-4 md:mb-6 text-center px-2">{slide.subtitle}</h2>
                <a href="/products" className="text-xs md:text-sm tracking-wider bg-black text-white px-3 py-1 md:px-4 md:py-2 rounded-2xl">{slide.cta}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FlowerSlider;
