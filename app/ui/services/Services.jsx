"use client";
import React from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Services() {
  const industries = [
    { image: "/agritech.jpg", title: "Agriculture" },
    { image: "/health.jpg", title: "Health" },
    { image: "/Education.jpg", title: "Education" },
    { image: "/ES.jpg", title: "Enterprise Solutions" },
    { image: "/fintech.png", title: "FinTech" },
    { image: "/iot.jpg", title: "Smart Cities & IoT" },
  ];
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: false,
    infinite: true,
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
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-2 w-full  scroll-mt-20 scroll-smooth min-h-[90vh] "
    >
      <div className="container xl:max-w-6xl mx-auto px-2">
        {/* Key Industries Section */}
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          What We Do
        </h2>

        <div className="py-4">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left whitespace-nowrap pb-2">
            Key Industries
          </p>
          <Slider {...settings}>
            {industries.map((industry, index) => (
              <div key={index} className="px-2">
                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    className="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    width={400}
                    height={250}
                    priority
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-100 flex items-center justify-center p-6">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* End Key Industries Section */}

        {/* Services Section */}
        <section className="py-4">
          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left whitespace-nowrap pb-2">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MonitorSmartphone size={45} />,
                title: "Web & Mobile Development",
                description:
                  "Building modern, responsive web and mobile applications tailored to your business needs.",
              },
              {
                icon: <FileCheck2 size={45} />,
                title: "IT Consultancy",
                description:
                  "Providing expert IT consulting services to optimize your infrastructure and operations.",
              },
              {
                icon: <UserCog size={45} />,
                title: "IT Support",
                description:
                  "Comprehensive IT support to ensure seamless business continuity and technology management.",
              },
              {
                icon: <TrainFront size={45} />,
                title: "AI & Automation",
                description:
                  "Leveraging AI and automation technologies to enhance efficiency and innovation.",
              },
              {
                icon: <CloudCog size={45} />,
                title: "DevOps & Cloud Computing",
                description:
                  "Streamlining your cloud infrastructure and DevOps pipelines for scalable, efficient solutions.",
              },
              {
                icon: <ChartNetwork size={45} />,
                title: "Data Analytics",
                description:
                  "Unlocking actionable insights from data to drive informed business decisions.",
              },
            ].map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out dark:bg-background">
                  <div className="py-2 px-2 ">
                    <div className="flex flex-col items-center justify-center mb-4 ">
                      {service.icon}
                      <h4 className="mt-2 text-lg leading-normal mb-1 font-semibold">
                        {service.title}
                      </h4>
                    </div>

                    {/* Accordion for description */}
                    {/* <details className="text-gray-500 dark:text-gray-400">
                    <summary className="cursor-pointer font-medium">
                      Learn more
                    </summary>
                    <p className="mt-2">{service.description}</p>
                  </details> */}
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-6xl border rounded-lg">
                  <DialogHeader>
                    <DialogTitle>{service.title}</DialogTitle>
                    <DialogDescription>{service.description}</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium delectus accusamus modi voluptas minus,
                    similique a distinctio dolores quas repudiandae magni
                    voluptatum iusto animi saepe magnam dolore? Provident,
                    aspernatur aliquid assumenda, facere unde repudiandae
                    obcaecati labore dolor in animi, esse tempora impedit optio
                    inventore id rerum illum accusantium iure nam.
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
        {/* End Services Section */}
      </div>
    </section>
  );
}
