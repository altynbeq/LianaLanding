import React from "react";

const Com5p = () => {
  return (
    <div className="px-4 w-full mx-auto">
      {/* Заголовок */}
      <h2 className="text-center text-2xl font-bold uppercase my-6">
        The Seasonal Edits
      </h2>

      {/* Контейнер для двух колонок */}
      <div className="flex flex-row justify-center gap-6">
        {/* Колонка 1 */}
        <div className="w-full flex justify-center">
          <div className="relative max-w-sm">
            <img
              className="cursor-pointer w-full h-auto"
              src="https://www.flowerbx.com/media/wysiwyg/Group_537_1_.jpg"
              alt="Super Bouquets"
            />
            
           
          </div>
        </div>

        {/* Колонка 2 */}
        <div className="w-full flex justify-center">
          <div className="relative max-w-sm">
            <img
              className="cursor-pointer w-full h-auto"
              src="https://www.flowerbx.com/media/wysiwyg/Group_536.jpg"
              alt="New Season Tulips"
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Com5p;
