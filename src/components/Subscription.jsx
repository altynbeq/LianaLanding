import React, { useState } from "react";
import SubscriptionModal from "./SubscriptionModal";
import FlowerSubscriptionModal from "./FlowerSub";
import {FlowerSelectionModal} from "./SubFlowerType";
import FlowerOrderModal from "./FlowerOrderModal";

const Subscription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full bg-white py-10">
      {/* Title & Subtitle Section */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          Цветочная подписка от Liana Flowers 🌿💐
        </h1>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          Превратите будни в праздник с нашей цветочной подпиской! Мы регулярно доставляем свежие букеты, создавая атмосферу уюта, радости и красоты.
        </p>
        {/* Subscribe Now Button */}
        <div className="mt-5">
          <button
            className="bg-stone-950 text-white py-3 px-6 rounded-2xl text-lg font-medium inline-block"
            onClick={openModal}
          >
            Подписаться сейчас
          </button>
        </div>
      </div>

      {/* Outer container - full width */}
      <div className="w-full px-4 mx-auto">
        {/* Flex container for columns - No wrapping on large screens */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 max-w-screen-xl mx-auto">
          
          {/* Column 1 */}
          <div className="flex flex-col w-full md:w-1/3 text-center">
            <figure className="mb-3 p-3">
              <img
                className="cursor-pointer w-full h-auto rounded-2xl"
                src="https://www.flowerbx.com/media/wysiwyg/Rectangle_35_1.jpg"
                alt="Подписка на подписку"
              />
            </figure>
            <h2 className="text-xl text-gray-800 font-bold py-3 uppercase">
              Как это работает?
            </h2>
            <p className="text-gray-800 mb-5 italic">
              ✔ Выберите формат – еженедельная или ежемесячная доставка <br />
              ✔ Укажите предпочтения – любимые цвета и стили <br />
              ✔ Получайте цветы – мы подберем идеальный букет и привезем его к вам
            </p>
            {/* <div>
              <a
                className="bg-stone-950 text-white py-3 px-6 inline-block w-full md:w-auto rounded-2xl text-lg font-medium"
                href="/#"
              >
                Перейти к покупке
              </a>
            </div> */}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col w-full md:w-1/3 text-center">
            <figure className="mb-3 p-3">
              <img
                className="cursor-pointer rounded-2xl w-full h-auto"
                src="https://www.flowerbx.com/media/wysiwyg/Rectangle_34_1__1.jpg"
                alt="Подписка на престиж"
              />
            </figure>
            <h2 className="text-xl text-gray-800 font-bold py-3 uppercase">
              Для кого подойдет подписка?
            </h2>
            <p className="text-gray-800 mb-5 italic">
                🌸 Для дома – наполните пространство свежестью и ароматами <br />
                🏢 Для офиса – создайте уютную атмосферу для работы и встреч <br />
                🎁 В подарок – порадуйте близких регулярной доставкой цветов
            </p>
            {/* <div>
              <a
                className="bg-stone-950 text-white py-3 px-6 inline-block w-full md:w-auto rounded-2xl text-lg font-medium"
                href="/#"
              >
                Перейти к покупке
              </a>
            </div> */}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col w-full md:w-1/3 text-center">
            <figure className="mb-3 p-3">
              <img
                className="cursor-pointer w-full h-auto rounded-2xl"
                src="https://www.flowerbx.com/media/wysiwyg/Tulip-Subs---SB1547_FB_024.jpg"
                alt="Сезонная подписка"
              />
            </figure>
            <h2 className="text-xl text-gray-800 font-bold py-3 uppercase">
              Почему Liana Flowers?
            </h2>
            <p className="text-gray-800 mb-5 italic">
              ✅ Только свежие и качественные цветы <br />
              ✅ Гибкие условия подписки <br />
              ✅ Быстрая доставка по городу
            </p>
            {/* <div>
              <a
                className="bg-stone-950 text-white py-3 px-6 inline-block w-full md:w-auto rounded-2xl text-lg font-medium"
                href="/#"
              >
                Перейти к покупке
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {/* <SubscriptionModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      /> */}
      {/* <FlowerSubscriptionModal isOpen={isModalOpen} onClose={setIsModalOpen}  /> */}
      {/* <FlowerOrderModal /> */}
      {isModalOpen && <FlowerSelectionModal isOpen={isModalOpen} onClose={setIsModalOpen} />}
    </div>
  );
};

export default Subscription;