import React from "react";

const Com6p = () => {
  return (
    <div className="text-base font-light px-4 md:px-6 max-w-screen-xl mx-auto my-12">
      {/* Заголовок и стрелки */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold uppercase">
          Discover Our Newest Edits
        </h3>
        <div className="flex space-x-2">
          {/* Заглушки-стрелки (без логики прокрутки) */}
          <button className="bg-zinc-100/[0.6] w-8 h-8 rounded-full opacity-70" />
          <button className="bg-zinc-100/[0.6] w-8 h-8 rounded-full opacity-70" />
        </div>
      </div>

      {/* Горизонтальный скролл-контейнер */}
      <div className="relative overflow-x-auto">
        <ul className="flex flex-nowrap space-x-6 py-1">
          {/* Карточка 1 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2995/"
              className="flex flex-col rounded-sm"
            >
              <a href="https://www.flowerbx.com/mimosa-branches">
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/m/i/mimosa_vase_5.jpg"
                  alt="Mimosa"
                />
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Mimosa</div>
                <div className="text-gray-900 font-bold">From £70.00</div>
              </div>
            </form>
          </li>

          {/* Карточка 2 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/3597/"
              className="flex flex-col rounded-sm"
            >
              <a
                href="https://www.flowerbx.com/canary-dutch-tulip"
                className="relative"
              >
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/d/u/dutch_tulip_canary_dutch_tulip_wrap_2.jpg"
                  alt="Canary Dutch Tulip"
                />
                <span className="text-xs font-bold py-1 px-3 absolute top-0 right-0 uppercase bg-white/70">
                  5 Colours
                </span>
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Canary Dutch Tulip</div>
                <div className="text-gray-900 font-bold">From £50.00</div>
              </div>
            </form>
          </li>

          {/* Карточка 3 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2937/"
              className="flex flex-col rounded-sm"
            >
              <a
                href="https://www.flowerbx.com/sunshine-narcissus"
                className="relative"
              >
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_sunshine_narcissus_vase_3.jpg"
                  alt="Sunshine Narcissus"
                />
                <span className="text-xs font-bold py-1 px-3 absolute top-0 right-0 uppercase bg-white/70">
                  3 Colours
                </span>
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Sunshine Narcissus</div>
                <div className="text-gray-900 font-bold">From £70.00</div>
              </div>
            </form>
          </li>

          {/* Карточка 4 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2933/"
              className="flex flex-col rounded-sm"
            >
              <a
                href="https://www.flowerbx.com/ballet-slippers-italian-ranunculus"
                className="relative"
              >
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/i/t/italian_ranunculus_ballet_slippers_italian_ranunculus_vase_4.jpg"
                  alt="Ballet Slippers Italian Ranunculus"
                />
                <span className="text-xs font-bold py-1 px-3 absolute top-0 right-0 uppercase bg-white/70">
                  6 Colours
                </span>
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Ballet Slippers Italian Ranunculus</div>
                <div className="text-gray-900 font-bold">From £155.00</div>
              </div>
            </form>
          </li>

          {/* Карточка 5 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2919/"
              className="flex flex-col rounded-sm"
            >
              <a
                href="https://www.flowerbx.com/mademoiselle-hyacinth"
                className="relative"
              >
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/h/y/hyacinth_madamoiselle_hyacinth_vase_3.jpg"
                  alt="Mademoiselle Hyacinth"
                />
                <span className="text-xs font-bold py-1 px-3 absolute top-0 right-0 uppercase bg-white/70">
                  4 Colours
                </span>
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Mademoiselle Hyacinth</div>
                <div className="text-gray-900 font-bold">From £55.00</div>
              </div>
            </form>
          </li>

          {/* Карточка 6 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2946/"
              className="flex flex-col rounded-sm"
            >
              <a
                href="https://www.flowerbx.com/paperwhite-narcissus"
                className="relative"
              >
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/n/a/narcissus_paperwhite_narcissus_vase_2.jpg"
                  alt="Paperwhite Narcissus"
                />
                <span className="text-xs font-bold py-1 px-3 absolute top-0 right-0 uppercase bg-white/70">
                  3 Colours
                </span>
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Paperwhite Narcissus</div>
                <div className="text-gray-900 font-bold">From £70.00</div>
              </div>
            </form>
          </li>

          {/* Карточка 7 */}
          <li className="flex-shrink-0 w-64">
            <form
              action="https://www.flowerbx.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuZmxvd2VyYnguY29tLw%2C%2C/product/2775/"
              className="flex flex-col rounded-sm"
            >
              <a
                href="https://www.flowerbx.com/petal-white-anemone"
                className="relative"
              >
                <img
                  className="cursor-pointer object-contain w-full h-64"
                  src="https://www.flowerbx.com/media/catalog/product/cache/56fd523474de0c2d7da1734a645ef677/a/n/anemone_petal_white_anemone_stem_2.jpg"
                  alt="Petal White Anemone"
                />
                <span className="text-xs font-bold py-1 px-3 absolute top-0 right-0 uppercase bg-white/70">
                  6 Colours
                </span>
              </a>
              <div className="flex flex-col text-sm uppercase mt-2">
                <div>Petal White Anemone</div>
                <div className="text-gray-900 font-bold">From £100.00</div>
              </div>
            </form>
          </li>

          {/* Можно продолжать добавлять остальные товары, 
              если они повторяются — либо удалить дубли. */}

        </ul>
      </div>
    </div>
  );
};

export default Com6p;
