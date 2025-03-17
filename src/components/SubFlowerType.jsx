import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export const FlowerSelectionModal = ({ isOpen, onClose }) => {
  const [selectedBouquet, setSelectedBouquet] = useState(null);

  const handleImageClick = (id) => {
    console.log(`User selected image ID: ${id}`);
    setSelectedBouquet(id);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="relative bg-white rounded-3xl w-full max-w-5xl h-[90%] overflow-hidden shadow-xl mx-4">
          {/* Close Button */}
          <button
              onClick={() => onClose(false)}
              className="absolute top-4 right-4 bg-black text-white z-10 p-2 rounded-full hover:bg-gray-100"
              aria-label="Закрыть модальное окно"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          
          <section className='flex flex-col'>
            <div className='flex mx-10 mt-20 flex-row gap-10'>
              {/* Col 1 */}
              <div className='flex flex-col'>
                <h1 className='text-black'>
                  ВЫБЕРИ <br /> 
                  <span style={{ fontFamily: 'Satisfy, cursive' }} className="text-4xl">Идеальный</span> <br />  
                  БУКЕТ <br /> 
                </h1>
                <div 
                  id="img-1" 
                  className='w-[230px] mt-10 rounded-2xl h-[230px] cursor-pointer'
                  onClick={() => handleImageClick('img-1')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350813/three_yy3he2.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
                <div 
                  id="img-2" 
                  className='w-[200px] rounded-2xl h-[200px] cursor-pointer'
                  onClick={() => handleImageClick('img-2')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg"
                    alt="Bouquet"
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Col 2 */}
              <div className='flex flex-col'>
                <div 
                  id="img-3" 
                  className='w-[300px] rounded-2xl h-[300px] cursor-pointer'
                  onClick={() => handleImageClick('img-3')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350428/onee_m6qqth.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
                <div 
                  id="img-4" 
                  className='w-[300px] mt-20 rounded-2xl h-[300px] cursor-pointer'
                  onClick={() => handleImageClick('img-4')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350824/four_wouark.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
              </div>

              {/* Col 3 */}
              <div className='flex flex-col'>
                <div 
                  id="img-5" 
                  className='w-[250px] ml-10 rounded-2xl h-[250px] cursor-pointer'
                  onClick={() => handleImageClick('img-5')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350546/twoo_wbyx0z.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
                <div 
                  id="img-6" 
                  className='w-[250px] ml-10 mt-10 rounded-2xl h-[250px] cursor-pointer'
                  onClick={() => handleImageClick('img-6')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350824/five_rjdfoy.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
                
                <div className="rounded-3xl ml-10 pr-2 py-1 bg-black flex items-center space-x-2">
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1740739973/IMAGE_2025-02-28_15_52_37_vmfzpb.jpg"
                    alt="Administrator"
                    className="w-12 h-12 rounded-3xl"
                  />
                  <div>
                    <p className="font-semibold">Администратор Ева</p>
                    <p className="text-sm text-white">Добрый день! Чем могу помочь?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  );
};
