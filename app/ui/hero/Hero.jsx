import React from "react";

export default function HeroSection() {
  return (
    <div id="hero"
      className='w-full h-ful py-24 px-4 md:px-12 sm:px-6 lg:px-8 relative flex flex-col items-start justify-center'
      style={{ 
        backgroundImage: 'url(/hero1.jpeg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        opacity: 1
      }}
    >
      {/* Overlay for better text visibility */}
      <div className='inset-0 bg-black opacity-70 absolute' />
       
      <h1 className='text-white font-bold text-4xl md:mx-8 z-10 relative'> 
        Welcome to <span className='text-primary'>Kodetrix</span>
      </h1>
    </div>
  );
}
