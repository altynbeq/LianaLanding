import React from 'react';

const Offers = () => {
  const services = [
    {
      id: 1,
      title: "МЕРОПРИЯТИЯ И ВЕЧЕРИНКИ",
      image: "https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_20_1_1_.jpg",
      alt: "Длинный обеденный стол с белыми стульями и декором из зелени"
    },
    {
      id: 2,
      title: "КОРПОРАТИВНЫЕ ЗАКАЗЫ",
      image: "https://www.flowerbx.com/media/wysiwyg/Group_94_2_1_.jpg",
      alt: "Подарочная коробка с белыми цветами"
    },
    {
      id: 3,
      title: "ИНСТАЛЛЯЦИИ",
      image: "https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_31_1_2_1_.jpg",
      alt: "Розовая цветочная инсталляция у входа в магазин"
    },
    {
      id: 4,
      title: "СВЕЖИЕ ПОСТАВКИ",
      image: "https://www.flowerbx.com/media/wysiwyg/Rectangle_36_1_.jpg",
      alt: "Белые цветы в белых вазах с книгами и аксессуарами"
    },
    {
      id: 5,
      title: "БУКЕТЫ НЕВЕСТЫ",
      image: "https://www.flowerbx.com/media/wysiwyg/Rectangle_40.jpg",
      alt: "Невеста с розовым букетом на фоне украшенного цветами стола"
    },
    {
      id: 6,
      title: "БИЗНЕС-УСЛУГИ",
      image: "https://www.flowerbx.com/media/wysiwyg/Armand-de-Brignac-ret_12_1_1_.jpg",
      alt: "Элегантные цветочные композиции в металлических вазах"
    }
  ];

  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {services.slice(0, 4).map((service) => (
            <a key={service.id} href="/special-offers" className="group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 mb-6 text-center">
                <h3 className="font-medium text-gray-800 tracking-wide">{service.title}</h3>
              </div>
            </a>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.slice(4, 6).map((service) => (
            <a key={service.id} href="#" className="group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 mb-6 text-center">
                <h3 className="font-medium text-gray-800 tracking-wide">{service.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
