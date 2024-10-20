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

export default function CompanyAboutSlider() {
  return (
    <section
      id="about"
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-2 w-full scroll-mt-20 scroll-smooth min-h-[90vh]"
    >
      <div className="container xl:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          About Us
        </h2>
        <div className="flex flex-col gap-2 md:flex-row w-full">
          {/* Left Section */}
          <div className="w-full md:w-1/2 py-4 flex flex-col justify-center items-center">
            <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left md:text-lg xl:text-xl leading-relaxed p-2">
              Kodetrix is a forward-thinking technology firm, licensed to
              deliver innovative IT solutions tailored to solve modern
              challenges. We utilize the latest advancements in data analytics,
              AI, machine learning, and IoT to create impactful solutions in
              sectors such as Finance, Agriculture, Health, and more. Our
              mission is to provide sustainable digital transformation for both
              businesses and individuals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 p-1">
              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%">
                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#1e3a8a", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <SquareCheckBig stroke="url(#gradient1)" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Dedicated support team with industry expertise.
                </p>
                <Link
                  href="#"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%">
                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#1e3a8a", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <SquareCheckBig stroke="url(#gradient2)" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Seasoned experts with insights across industries.
                </p>
                <Link
                  href="#"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white dark:bg-background rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%">
                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#1e3a8a", stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <SquareCheckBig stroke="url(#gradient3)" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  One-stop digital solutions for efficiency.
                </p>
                <Link
                  href="#"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mt-2 inline-block hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
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
      <Link href="#" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 mt-2 hover:underline">
        Learn More
      </Link>
    </div>
  );
}
