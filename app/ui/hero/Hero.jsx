"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] scroll-mt-20 scroll-smooth flex flex-col md:flex-row items-center justify-center gap-2  w-full h-full px-4 md:px-16 sm:px-6 lg:px-8"
    >
      <div className="flex px-4 lg:px-12 space-x-4 space-y-4 w-full">
        <div className="md:min-h-[72vh] h-[50%] md:h-auto md:w-1/2 flex flex-col md:items-center justify-center z-10 animate__animated animate__fadeInRight animate__delay-1s">
          <div className=" rounded-lg">
            <h1 className=" text-3xl text-foreground font-bold md:text-5xl md:mx-8">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                Kodetrix
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold md:mx-8 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700">
              We empower industries with{"  "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                <Typewriter
                  words={[
                    "AI",
                    "Data Analytics",
                    "IoT solutions",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="||"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>
            <p className="md:mx-8 md:mt-8">
              At Kodetrix, we specialize in delivering innovative technology
              solutions powered by data analytics, artificial intelligence,
              machine learning, and IoT. Our focus is on driving real-world
              impact for industries like Finance, Agriculture, and Health.
              Whether you're an individual client or a corporate entity, we are
              here to help you thrive in the digital age.
            </p>
            <span className="mt-8 w-full flex">
              <Button
                variant="outline"
                className="md:mx-8 w-1/2 h-12 group relative m-1 cursor-pointer overflow-hidden rounded-md border-2 border-primary px-5 py-3 font-mono font-semibold"
              >
                <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-primary transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
                <span className="ease relative text-primary transition duration-300 group-hover:text-white">
                  Get Started
                </span>
              </Button>
            </span>
          </div>
        </div>

        <div className="md:w-1/2 flex mt-4 md:mt-0 animate__animated animate__fadeInDown animate__delay-2s">
          <Image
            src="/silho1.jpeg"
            alt="hero-image"
            width={530}
            height={530}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
