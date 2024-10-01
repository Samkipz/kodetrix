import React from 'react'
import Navbar from "@/app/ui/navbar/Navbar";
import HeroSection from './ui/hero/Hero';
import Services from './ui/services/Services';


export default function home() {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar/>
      {/* divider div here if necessary  */}
      <HeroSection/>
     
      
    </div>
  )
}
