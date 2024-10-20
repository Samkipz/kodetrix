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
          Who We Are
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
          </div>

          {/* Right Section with Carousel */}
          {/*  */}
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
