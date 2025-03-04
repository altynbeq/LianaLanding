import React from "react";

const Feedback = () => {
  return (
    <div className="w-full  bg-white py-10">
      {/* Внешний контейнер - центрированный с максимальной шириной */}
      <div className="max-w-screen-xl gap-4  mx-auto px-4 flex flex-col md:flex-row bg-white">
        
        {/* Левый раздел с отзывами */}
        <div className="w-full bg-gray-100 rounded-2xl md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl text-gray-800 font-bold mb-8 tracking-wider text-center md:text-left">
            ЧТО ГОВОРЯТ О НАС<br />
            НАШИ КЛИЕНТЫ
          </h2>
          
          <div className="flex  flex-col md:flex-row gap-6">
            {/* Первый отзыв */}
            <div className="md:w-1/2">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-800 font-medium mb-2">
                Я ЗАКАЗАЛА БУКЕТ ДЛЯ МАМЫ.<br />
                КРАСИВЫЕ ЦВЕТА, ЛЕГКИЙ ЗАКАЗ, ЛЕГКАЯ<br />
                ДОСТАВКА. ВСЕГДА ШИКАРНО, ВСЕГДА ОСОБЕННО.
              </p>
              <p className="font-bold text-gray-800 text-sm">СОФИЯ</p>
            </div>

            {/* Второй отзыв */}
            <div className="md:w-1/2">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-800 font-medium mb-2">
                "ЕСЛИ ВЫ ХОТИТЕ ВПЕЧАТЛЯЮЩИЕ ЦВЕТЫ,<br />
                FLOWERBX - ЭТО МЕСТО. ИХ РОЗЫ<br />
                ЛУЧШЕ ВСЕХ ДРУГИХ БРЕНДОВ."
              </p>
              <p className="font-bold text-gray-800 text-sm">ДЖОАННА</p>
            </div>
          </div>
        </div>
        
        {/* Правый раздел с изображением */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://www.flowerbx.com/media/wysiwyg/Mask_group_1-min.jpeg" 
            alt="Букет роз в крафт-бумаге" 
            className="w-full rounded-2xl h-full object-cover "
          />
        </div>

      </div>
    </div>
  );
};

export default Feedback;
