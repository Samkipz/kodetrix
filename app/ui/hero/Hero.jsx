"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  
  return (
    <div 
      id="hero"
      className='gap-y-4 scroll-mt-20 scroll-smooth w-full h-full py-24 px-4 md:px-12 sm:px-6 lg:px-8 relative flex-col md:flex md:flex-row items-start shadow-sm shadow-gray-400'
    >  
      <section className=' -mr-2 md:w-1/2 flex flex-col gap-4 md:shadow-sm  z-10 animate__animated animate__fadeInRight animate__delay-1s'>
      
          <h1 className=' text-3xl text-foreground font-bold md:text-5xl md:mx-8 shadow-sm'> 
            Welcome to {" "}
             <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700'>
              Kodetrix
              {/* <Typewriter
              words={["Kodetrix"]}
              loop={false}
              cursor
              cursorStyle="||"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
          /> */}
              </span>
          </h1>
          <h2 className='text-xl md:text-2xl font-bold md:mx-8 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700'> 
           
          {/* {`Let's build great things together.`}  */}
          <Typewriter
              words={["Let's build great things together.", "Innovate and inspire with us!"]}
              loop={false}
              cursor={true}
              cursorStyle="||"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
          />
          </h2>
       
        <p className='md:h-55 text-lg md:mx-8 mt-2 font-semibold text-gray-600 leading-tight md:leading-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Laborum asperiores velit reiciendis eveniet eaque magnam deserunt cupiditate? 
          Molestias rerum necessitatibus tempora dicta ducimus dolores error sed similique quod voluptate, 
          quia consequatur placeat quis eum, maxime esse excepturi nobis nulla commodi deleniti. 
          Enim, repellendus suscipit deleniti ducimus illo voluptatum molestias ratione, 
          culpa modi iusto ullam fugit? Illo, tempora?
        </p>
        <Button className='mt-1 md:mt-20 py-6 md:order-last md:w-1/2'><Link href='#about'>Learn More</Link></Button>
      </section> 
       
      <section className='  md:w-1/2 flex mt-4 md:mt-0 md:shadow-sm animate__animated animate__fadeInDown animate__delay-2s'>
        <Image 
          src="/hero.jpeg" 
          alt="hero-image" 
          width={1000} 
          height={600}
          className='rounded-lg min-w-[45vw] md:min-h-[72vh]  h-[50%] md:h-auto'
        />
      </section>   
    </div>
   );
 }
