"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center py-12 w-full scroll-mt-20 scroll-smooth min-h-[90vh] bg-gray-50 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`, // Slower background movement
          willChange: "transform",
        }}
      ></div>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white opacity-60 dark:bg-gray-950 z-1"></div>

      <div className="container flex flex-col md:flex-row justify-between items-center px-4 xl:max-w-6xl mx-auto z-10">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center animate__animated animate__fadeInRight animate__delay-1s z-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-center md:text-left">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              Kodetrix
            </span>
          </h1>
          <h2 className="text-md sm:text-lg md:text-2xl lg:text-3xl font-bold mt-4 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700 whitespace-nowrap">
            We empower industries with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              <Typewriter
                words={["AI", "Data Analytics", "IoT solutions"]}
                loop={false}
                cursor
                cursorStyle="||"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
            At Kodetrix, we specialize in delivering innovative technology
            solutions powered by data analytics, artificial intelligence,
            machine learning, and IoT. Our focus is on driving real-world impact
            for industries like Finance, Agriculture, and Health. Whether you
            are an individual client or a corporate entity, we are here to help
            you thrive in the digital age.
          </p>
          <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
            <Button
              variant="outline"
              className="relative mt-8 sm:w-3/4 w-1/2 h-12 md:h-15 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white font-bold text-sm md:text-lg lg:text-xl tracking-wide transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-40 shadow-lg group"
            >
              {/* Arrow hover effect layer */}
              <span className="absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 group-hover:h-32 group-hover:-translate-y-20 opacity-50"></span>

              {/* Background layer for hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-90 group-hover:animate-none"></span>

              {/* Inner content */}
              <span className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Get Started
              </span>
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-4 md:mt-auto flex w-full justify-center items-center md:items-start md:w-1/2 animate__animated animate__fadeInDown animate__delay-2s">
          <Image
            src="/Bg.png"
            alt="hero-image"
            width={530}
            height={530}
            className="rounded-lg z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
