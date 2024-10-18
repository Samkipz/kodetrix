"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  Headset,
  NotebookTabs,
  SquareCheckBig,
  Users,
} from "lucide-react";
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
    "Agriculture",
    "Health",
    "Education",
    "Enterprise Solutions",
    "Financial Technology (FinTech)",
    "Smart Cities & IoT",
  ];

  const descriptionText = [
    "Innovating agricultural practices with smart technology, boosting productivity and sustainability.",
    "Leveraging health tech to enhance patient care and streamline healthcare systems.",
    "Transforming education through cutting-edge learning platforms and AI-driven solutions.",
    "Empowering businesses with scalable enterprise solutions that drive growth and efficiency.",
    "Building future-ready financial solutions through secure and scalable FinTech innovations.",
    "Leading the charge in building smarter, more connected cities with IoT-driven infrastructure.",
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
    <section
      id="about"
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-2 w-full  scroll-mt-20 scroll-smooth min-h-[90vh] "
    >
      <div className="container xl:max-w-6xl mx-auto ">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          About Us
        </h2>
        <div className="flex flex-col gap-2 md:flex-row w-full ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 py-4 flex flex-col justify-center items-center ">
            <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left md:text-lg xl:text-xl leading-relaxed">
              Kodetrix is a forward-thinking technology firm, licensed to
              deliver innovative IT solutions tailored to solve modern
              challenges. We utilize the latest advancements in data analytics,
              AI, machine learning, and IoT to create impactful solutions in
              sectors such as Finance, Agriculture, Health, and more. Our
              mission is to provide sustainable digital transformation for both
              businesses and individuals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center mb-4 text-teal-500">
                  {" "}
                  <SquareCheckBig
                    size={40}
                    className="text-teal-500 dark:text-teal-400"
                  />{" "}
                  {/* Replace with any check icon */}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Dedicated support team with industry expertise.
                </p>
                <Link
                  href="#"
                  className="text-teal-500 dark:text-teal-400 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center mb-4 text-teal-500">
                  <SquareCheckBig
                    size={40}
                    className="text-teal-500 dark:text-teal-400"
                  />{" "}
                  {/* Replace with any check icon */}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Seasoned experts with insights across industries.
                </p>
                <Link
                  href="#"
                  className="text-teal-500 dark:text-teal-400 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center mb-4 text-teal-500">
                  <SquareCheckBig
                    size={40}
                    className="text-teal-500 dark:text-teal-400"
                  />{" "}
                  {/* Replace with any check icon */}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  One-stop digital solutions for efficiency.
                </p>
                <Link
                  href="#"
                  className="text-teal-500 dark:text-teal-400 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>
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
              className="w-full relative rounded-lg overflow-hidden mt-4"
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
    </section>
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
