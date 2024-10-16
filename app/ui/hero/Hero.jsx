"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center py-12 w-full scroll-mt-20 scroll-smooth min-h-[90vh] "
    >
      <div className="container flex flex-col md:flex-row justify-between items-center px-4 xl:max-w-6xl mx-auto ">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center animate__animated animate__fadeInRight animate__delay-1s z-10 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center md:text-left">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              Kodetrix
            </span>
          </h1>
          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700 whitespace-nowrap">
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
            for industries like Finance, Agriculture, and Health. Whether you are
            an individual client or a corporate entity, we are here to help you
            thrive in the digital age.
          </p>
          <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
            <Button
              variant="outline"
              className="mt-8 w-1/2 h-12 group relative cursor-pointer overflow-hidden rounded-md border-2 border-primary px-5 py-3 font-mono font-semibold"
            >
              <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span className="ease relative text-primary transition duration-300 group-hover:text-background">
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
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
