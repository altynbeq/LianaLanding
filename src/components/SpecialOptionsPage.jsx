import React from 'react';

export const SpecialOptionsPage = () => {
  return (
    <div className="font-sans text-gray-800">
      

      {/* Hero Section with Banner Image and Overlay Text */}
      <div className="relative w-screen h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://www.flowerbx.com/media/wysiwyg/Group_31_1.jpg')",
            filter: "brightness(0.9)"
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-white text-6xl font-light tracking-widest">WEDDINGS</h1> */}
        </div>
      </div>

      {/* Description Text Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="mb-8 text-lg">
          If you are in search of the very best in luxury flowers for your dream wedding, our team of industry-leading event florists are on hand to help. From destination celebrations over multiple venues to small and intimate town hall gatherings, we'll add the floral details that complete your special day.
        </p>

        <p className="mb-12 text-lg">
          Each wedding styling experience is unique. We don't offer packages or set arrangements, and will instead make seasonal suggestions to bring your ideas to life.
        </p>

        {/* Contact Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-zinc-900 text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Gallery Section with Three Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
        {/* Wedding Flowers: Across the UK */}
        <div className="text-center">
          <div className="h-80 overflow-hidden mb-6">
            <img 
              src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_57.jpg" 
              alt="Elegant venue entrance with floral decorations" 
              className="w-full rounded-2xl h-full object-cover"
            />
          </div>
          <h2 className="uppercase font-medium text-xl mb-4 tracking-wide">Wedding Flowers:<br />Across the UK</h2>
          <p className="text-sm px-4">
            FLOWERBX can help to make your most important day completely unforgettable. From the ceremony to cocktail hour to the dancefloor - we will create memorable and distinct floral moments that create new and stunning experiences for you and your guests as they move throughout your event. When it comes to show-stopping floral moments, there is little that our team can't accomplish.
          </p>
        </div>
        
        {/* City Celebrations */}
        <div className="text-center">
          <div className="h-80 overflow-hidden mb-6">
            <img 
              src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_58.jpg" 
              alt="Wedding bouquet with lilies of the valley" 
              className="w-full rounded-2xl h-full object-cover"
            />
          </div>
          <h2 className="uppercase font-medium text-xl mb-4 tracking-wide">City<br />Celebrations</h2>
          <p className="text-sm px-4">
            If you are planning an intimate wedding celebration - flowers can add some extra attention to detail. Our florists will make sure every aspect of your wedding feels extraordinary - no matter how small.
          </p>
        </div>
        
        {/* Destination Weddings */}
        <div className="text-center">
          <div className="h-80 overflow-hidden mb-6">
            <img 
              src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_59.jpg" 
              alt="Elegant wedding table setting with floral decorations" 
              className="w-full rounded-2xl h-full object-cover"
            />
          </div>
          <h2 className="uppercase font-medium text-xl mb-4 tracking-wide">Destination<br />Weddings</h2>
          <p className="text-sm px-4">
            Love FLOWERBX? Why not bring us with you to your destination wedding! Our experienced team has relationships with trusted growers and wholesalers all over the world. In working with us overseas, you can guarantee you will enjoy the same FLOWERBX quality and beauty you would receive back at home.
          </p>
        </div>
      </div>
      
      {/* Second Contact Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-zinc-900 text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-zinc-800 transition-colors">
          CONTACT US
        </button>
      </div>
      
      {/* Additional Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 mb-16">
        {/* Image 1 - Staircase with Floral Decoration */}
        <div className="h-96 overflow-hidden">
          <img 
            src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_36_1_.jpg" 
            alt="Elegant staircase decorated with wedding flowers" 
            className="w-full rounded-2xl h-full object-cover"
          />
        </div>
        
        {/* Image 2 - Close-up of Floral Arrangement */}
        <div className="h-96 overflow-hidden">
          <img 
            src="https://www.flowerbx.com/media/wysiwyg/ChelseaInBloom_087_33.jpg" 
            alt="Close-up of luxury wedding floral arrangement" 
            className="w-full rounded-2xl h-full object-cover"
          />
        </div>
      </div>

      {/* Team Section - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 mb-16">
        {/* Our Wedding Events Team */}
        <div className="text-center">
          <h2 className="uppercase font-medium text-xl mb-6 tracking-wide">Our Wedding Events Team</h2>
          <p className="text-sm">
            Our team is made up of account managers, event designers, florists, and production managers. We are experts in finetuning each element of your florals, to capture the spirit of your special day.
          </p>
        </div>
        
        {/* On Your Big Day */}
        <div className="text-center">
          <h2 className="uppercase font-medium text-xl mb-6 tracking-wide">On Your Big Day</h2>
          <p className="text-sm">
            You can trust our team to take care of everything while you enjoy each moment. We will coordinate directly with your venue and other vendors to ensure a seamless operation from delivery to removal.
          </p>
        </div>
      </div>

      {/* Featured Table Setting Image */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="h-96 overflow-hidden">
          <img 
            src="https://www.flowerbx.com/media/wysiwyg/installations-banner_5_1.jpg" 
            alt="Elegant wedding table setting with pink and white flowers and candles" 
            className="w-full rounded-2xl h-full object-cover"
          />
        </div>
      </div>

      {/* Floral Choices & Seasonality Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
        <h2 className="uppercase font-medium text-xl mb-6 tracking-wide">Floral Choices & Seasonality</h2>
        <p className="text-sm max-w-4xl mx-auto">
          Elevate every stem with your bespoke take on any tonal floral palette. Our team will help you discover what's in season and make suggestions on varieties that'll work well together.
        </p>
      </div>
    </div>
  );
};
