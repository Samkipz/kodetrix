import React from "react";

export default function HeroSection() {
   return (
   <div id="hero"
     className='z-10 w-full h-full py-24 px-4 sm:px-6 lg:px-8 relative  flex flex-col items-start justify-center bg-white opacity-90'
     style={{ 
       backgroundImage: 'url(/hero.jpeg)', 
       backgroundSize: 'cover', 
       backgroundPosition: 'center', 
       backgroundRepeat: 'no-repeat'
     }}
   >
     {/* Overlay for better text visibility */}
     {/* <div className='absolute inset-0 bg-black opacity-30' /> Dark overlay */}
     
     <h1 className='text-white font-bold text-4xl md:mx-8'> 
       Welcome to <span className='text-blue-700'>Kodetrix</span>
     </h1>
   </div>
 )
}
