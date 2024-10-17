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

  const images = ["/Agrik.jpg", "/health.jpg", "/Education.jpg", "/RE.jpeg"];
  const carouselText = [
    "Agriculture text",
    "Health industry text",
    "Education industry text",
    "Real Estate industry text",
  ];

  const descriptionText = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque provident, aliquid dicta assumenda non!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque provident, aliquid dicta assumenda non!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque provident, aliquid dicta assumenda non!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque provident, aliquid dicta assumenda non!",
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
    <div className="container xl:max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
        About Us
      </h2>
      <div className="flex flex-col gap-2 md:flex-row w-full p-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center md:items-start">
          <p className="mt-4 md:mt-6 text-center md:text-left text-sm sm:text-base">
            Kodetrix is a licensed firm focused on delivering cutting-edge
            technology solutions to individual clients and corporates. We
            specialize in harnessing the power of data analytics, AI, ML, and
            IoT to create real-world impact in sectors such as Finance,
            Agriculture, and Health.
          </p>

          <div className="flex flex-col md:flex-row mt-6 md:space-x-4 gap-4">
            <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
              <div className="flex justify-center md:justify-normal mb-4 text-primary">
                <Headset size={40} />
              </div>
              <h3 className="font-semibold w-full">Expert Support</h3>
              <p className="text-muted-foreground">
                A diverse team of experts with a wide range of experience in
                complex domains.
              </p>
              <Link href="#" className="text-primary mt-2 hover:underline">
                Learn More
              </Link>
            </div>
            <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
              <div className="flex justify-center md:justify-normal mb-4 text-primary">
                <Users size={40} />
              </div>
              <h3 className="font-semibold w-full">Experienced Team</h3>
              <p className="text-muted-foreground">
                A diverse team of experts with a wide range of experience in
                complex domains.
              </p>
              <Link href="#" className="text-primary mt-2 hover:underline">
                Learn More
              </Link>
            </div>
            <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
              <div className="flex justify-center md:justify-normal mb-4 text-primary">
                <NotebookTabs size={40} />
              </div>
              <h3 className="font-semibold w-full">
                One Contract, All support
              </h3>
              <p className="text-muted-foreground">
                A diverse team of experts with a wide range of experience in
                complex domains.
              </p>
              <Link href="#" className="text-primary mt-2 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section with improved carousel */}
        <div className="w-full md:w-1/2 relative flex flex-col md:px-8">
          <p className="mt-4 md:mt-8 text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 whitespace-nowrap pb-2">
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
                  <div className="absolute inset-0 flex">
                    {/* Left tap region */}
                    <div
                      className="w-1/4 h-full cursor-pointer"
                      onClick={scrollPrev}
                    />
                    {/* Middle region (non-interactive) */}
                    <div className="w-1/2 h-full" />
                    {/* Right tap region */}
                    <div
                      className="w-1/4 h-full cursor-pointer"
                      onClick={scrollNext}
                    />
                  </div>
                  {/* Text overlay on hover */}
                  <div className="absolute inset-0 flex flex-col items-center text-white px-4 py-2">
                    <p className="font-bold text-3xl">{carouselText[index]}</p>
                    <p className="text-xl text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out  mx-2 ">
                      {descriptionText[index]}
                      <br />
                      <Link
                        href="#"
                        className="mt-8 hover:underline"
                      >
                        Learn More
                      </Link>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/75"
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
