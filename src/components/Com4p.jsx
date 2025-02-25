import React from "react";

const Com4p = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 82em) {
              /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */
              #a-1 {
                min-width: 100% !important;
              }
              #a-2 {
                min-width: 100% !important;
              }
              #a-3 {
                min-width: 100% !important;
              }
            }
          `,
        }}
      />
      {/* Внешний контейнер с адаптивной шириной и центрированием */}
      <div className="text-base font-light px-4 w-full mx-auto sm:max-w-[40rem] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
        {/* Flex-контейнер для трех колонок */}
        <div className="flex flex-wrap justify-center ">
          
          {/* Колонка 1 */}
          <div className="flex flex-col w-full md:w-1/3">
            <figure className="mb-3 p-3">
              {/* Убираем hidden/md:block, делаем картинку видимой всегда */}
              <img
                className="cursor-pointer w-full h-auto max-w-full"
                src="https://www.flowerbx.com/media/wysiwyg/Rectangle_35_1.jpg"
                alt="The Signature Subscription"
              />
            </figure>
            <h2 className="text-xl font-bold py-3 text-center uppercase">
              The Signature Subscription
            </h2>
            <p className="text-center mb-5 italic">
              Perfect for: Bringing floral beauty to everyday moments
            </p>
            <div className="text-center max-w-full text-white uppercase">
              <div className="inline-block max-w-full mr-2 mb-2">
                <a
                  className="bg-stone-950 items-center py-2 px-4 inline-block min-w-[12.50rem] max-w-full rounded md:pl-6 md:pr-6"
                  href="https://www.flowerbx.com/luxury-flower-subscription/signature"
                  id="a-1"
                >
                  <span className="cursor-pointer">SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>

          {/* Колонка 2 */}
          <div className="flex flex-col w-full md:w-1/3">
            <figure className="mb-3 p-3">
              <img
                className="cursor-pointer w-full h-auto max-w-full"
                src="https://www.flowerbx.com/media/wysiwyg/Rectangle_34_1__1.jpg"
                alt="The Prestige Subscription"
              />
            </figure>
            <h2 className="text-xl font-bold py-3 text-center uppercase">
              The Prestige Subscription
            </h2>
            <p className="text-center mb-5 italic">
              Perfect for: Flower lovers with premium style
            </p>
            <div className="text-center max-w-full text-white uppercase">
              <div className="inline-block max-w-full mr-2 mb-2">
                <a
                  className="bg-stone-950 items-center py-2 px-4 inline-block min-w-[12.50rem] max-w-full rounded md:pl-6 md:pr-6"
                  href="https://www.flowerbx.com/luxury-flower-subscription/prestige"
                  id="a-2"
                >
                  <span className="cursor-pointer">SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>

          {/* Колонка 3 */}
          <div className="flex flex-col w-full md:w-1/3">
            <figure className="mb-3 p-3">
              <img
                className="cursor-pointer w-full h-auto max-w-full"
                src="https://www.flowerbx.com/media/wysiwyg/Tulip-Subs---SB1547_FB_024.jpg"
                alt="The Seasonal Subscription"
              />
            </figure>
            <h2 className="text-xl font-bold py-3 text-center uppercase">
              The Seasonal Subscription
            </h2>
            <p className="text-center mb-5 italic">
              Now in season: Tulips
            </p>
            <div className="text-center max-w-full text-white uppercase">
              <div className="inline-block max-w-full mr-2 mb-2">
                <a
                  className="bg-stone-950 items-center py-2 px-4 inline-block min-w-[12.50rem] max-w-full rounded md:pl-6 md:pr-6"
                  href="https://www.flowerbx.com/luxury-flower-subscription/seasonal"
                  id="a-3"
                >
                  <span className="cursor-pointer">SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Com4p;
