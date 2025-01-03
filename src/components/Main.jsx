import React from 'react'
import backgroundImage from '../assets/bg.jpeg'; 

const Main = () => {
    return (
      <div
        className='text-1xl text-red-700 flex justify-center w-[75%]'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      >
        Main
      </div>
    );
  };
  

export default Main