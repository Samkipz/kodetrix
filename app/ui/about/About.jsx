"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  CircleChevronRight,
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
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-10 px-5 w-full  scroll-mt-20 scroll-smooth min-h-[70vh]"
    >
      <div className="container xl:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          Who We Are
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left md:text-lg xl:text-xl leading-relaxed">
              Kodetrix is a forward-thinking technology firm, licensed to
              deliver innovative IT solutions tailored to solve modern
              challenges. We utilize the latest advancements in data analytics,
              AI, machine learning, and IoT to create impactful solutions in
              sectors such as Finance, Agriculture, Health, and more. Our
              mission is to provide sustainable digital transformation for both
              businesses and individuals.
            </p>
          </div>

          {/* Right Section (Why Us) */}
          <div className="w-full md:w-1/2 border-2 border-red-400">
            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left whitespace-nowrap pb-2">
              Why Us
            </h2>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">
                  <CircleChevronRight size={24} />
                </span>
                <p className="text-lg">
                  A diverse team of experts offering unparalleled support.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">
                  <CircleChevronRight size={24} />
                </span>
                <p className="text-lg ">
                  Extensive experience from a variety of industries.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">
                  <CircleChevronRight size={24} />
                </span>
                <p className="text-lg ">
                  Cutting-edge technology tailored to your specific needs.
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-500">
                  <CircleChevronRight size={24} />
                </span>
                <p className="text-lg ">
                  One-stop digital solutions for maximum efficiency and impact.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
