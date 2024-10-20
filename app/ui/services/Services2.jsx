"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import {
  ChartNetwork,
  CloudCog,
  FileCheck2,
  MonitorSmartphone,
  TrainFront,
  UserCog,
} from "lucide-react";

export default function Services() {
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  // Animation when elements enter the viewport
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      const sectionTop = servicesSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        setHasEnteredViewport(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="services"
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-2 w-full scroll-mt-20 scroll-smooth min-h-[90vh]"
    >
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MonitorSmartphone, title: "Web & Mobile Development" },
              { icon: FileCheck2, title: "IT Consultancy" },
              { icon: UserCog, title: "IT Support" },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Industries Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Key Industries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/Agrik.jpg", title: "Agriculture" },
              { image: "/health.jpg", title: "Health" },
              { image: "/Education.jpg", title: "Education" },
              { image: "/Agrik.jpg", title: "Enterprise Solutions" },
              { image: "/Agrik.jpg", title: "FinTech" },
              { image: "/Agrik.jpg", title: "Smart Cities & IoT" },
            ].map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-48 w-full object-cover"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-100 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold">{industry.title}</h3>
                    <p className="mt-2 text-sm">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
