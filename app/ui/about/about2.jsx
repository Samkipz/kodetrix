"use client";
import React, { useState, useEffect, useRef } from "react";
import { Headset, NotebookTabs, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CompanyAboutSlider() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const images = [
    "/Agrik.jpg",
    "/health.jpg",
    "/Education.jpg",
    "/RE.jpeg",
    "/Education.jpg",
    "/Agrik.jpg",
  ];
  const carouselText = [
    "Agriculture ",
    "Health",
    "Education ",
    "Enterprise Solutions",
    "Financial Technology (FinTech)",
    "Smart Cities and IoT",
  ];

  const descriptionText = [
    "Agriculture solutions using IoT, AI for efficient food production.",
    "Innovative health tech solutions for a healthier future.",
    "Smart educational systems driven by AI and ML.",
    "Enterprise solutions tailored for dynamic business challenges.",
    "FinTech services revolutionizing how businesses handle finances.",
    "Smart city solutions leveraging IoT for efficient urban growth.",
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="container xl:max-w-6xl mx-auto my-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500 py-4">
        About Us
      </h2>
      <div className="flex flex-col gap-6 md:flex-row w-full p-6 bg-gray-50 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start space-y-6">
          <p className="text-center md:text-left text-base md:text-lg lg:text-xl leading-relaxed">
            Kodetrix is a licensed firm focused on delivering cutting-edge
            technology solutions for individual clients and corporates. We
            specialize in harnessing the power of data analytics, AI, ML, and
            IoT to create real-world impact across Finance, Agriculture, and
            Health sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Headset size={40} className="text-blue-500" />}
              title="Expert Support"
              description="A diverse team of experts offering unparalleled support."
            />
            <FeatureCard
              icon={<Users size={40} className="text-blue-500" />}
              title="Experienced Team"
              description="Our team brings extensive experience from a variety of industries."
            />
            <FeatureCard
              icon={<NotebookTabs size={40} className="text-blue-500" />}
              title="One Contract, All Support"
              description="A seamless experience with all support services under one roof."
            />
          </div>
        </div>

        {/* Right Section with Carousel */}
        <div className="w-full md:w-1/2 relative flex flex-col md:px-8">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 whitespace-nowrap pb-2">
            Key Industries
          </p>
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full relative rounded-lg overflow-hidden"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="relative w-full group rounded-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    width={500}
                    height={400}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                    priority
                  />
                  {/* Black overlay on hover */}
                  <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out"></div>
                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 py-4">
                    <p className="font-bold text-2xl sm:text-3xl text-center">
                      {carouselText[index]}
                    </p>
                    <p className="text-lg sm:text-xl text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      {descriptionText[index]}
                      <br />
                      <Link href="#" className="mt-6 underline">
                        Learn More
                      </Link>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? "bg-teal-500 scale-110"
                      : "bg-teal-300 hover:bg-teal-400"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
      <div className="flex justify-center md:justify-normal mb-2">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link href="#" className="text-teal-500 mt-2 hover:underline">
        Learn More
      </Link>
    </div>
  );
}
