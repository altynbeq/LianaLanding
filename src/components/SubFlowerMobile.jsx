import React from 'react'

import { FaArrowCircleDown } from "react-icons/fa";

export const SubFlowerMobile = () => {
  return (
    <div className="fixed inset-0 z-50 mr-5 flex items-center justify-center bg-black/50">
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
            <div className='flex  mt-10 flex-col '>
              {/* Col 1 */}
              
              <div className='flex ml-2 text-[10px] flex-row'>
                <h1 className='text-black mt-10 text-md'>
                  ВЫБЕРИ <br /> 
                  <span style={{ fontFamily: 'Satisfy, cursive' }} className="text-3xl">Идеальный</span> <br />  
                  БУКЕТ <br /> 
                </h1>
               
                <div 
                  id="img-5" 
                  className='w-[150px] mt-10 ml-5 rounded-2xl h-100px] cursor-pointer'
                  onClick={() => handleImageClick('img-5')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350546/twoo_wbyx0z.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
              </div>
              
              {/* Col 2 */}
              <div className='flex ml-2  flex-row'>
                <div 
                  id="img-1" 
                  className='w-[130px] mt-5 mr-5 rounded-2xl h-[130px] cursor-pointer'
                  onClick={() => handleImageClick('img-1')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350813/three_yy3he2.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>

                <div 
                  id="img-3" 
                  className='w-[200px] mt-5 mr-5 rounded-2xl h-[200px] cursor-pointer'
                  onClick={() => handleImageClick('img-3')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350428/onee_m6qqth.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
                
              </div>
                

              {/* Col 3 */}
              <div className='flex flex-row'>
                <div 
                  id="img-6" 
                  className='w-[250px]  ml-2  rounded-2xl h-[150px] cursor-pointer'
                  onClick={() => handleImageClick('img-6')}
                >
                  <img 
                    src="https://res.cloudinary.com/dyyyaoggd/image/upload/v1741350824/five_rjdfoy.jpg"
                    alt="Bouquet"
                    className="w-30 rounded-2xl h-30"
                  />
                </div>
                <div className='mt-20 ml-5'>
                  <FaArrowCircleDown className='text-[30px] mt-20 bg-white text-black' />
                </div>
              </div>

              {/* Col 4 */}
              <div className='flex ml-2 flex-col'>
                <h1 className='text-black text-5xl'>
                  Подписки
                </h1>
                <h3 className='text-black text-sm p-2'>
                  Это регулярная доставка свежих сезонных <br /> цветов  для вашего дома или бизнеса
                </h3>                
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}
