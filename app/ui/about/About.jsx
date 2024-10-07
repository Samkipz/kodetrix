import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center scroll-mt-20 scroll-smooth min-h-[90vh] py-4 dark:bg-gray-900"
    >
      <div className="mt-10 px-4 py-1 bg-blue-100 dark:bg-background rounded-full">
        <h1 className="text-primary dark:text-foreground font-medium">ABOUT</h1>
      </div>

     
      <div className="flex flex-col lg:flex-row mt-8 items-center justify-between max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <Image 
            src="/hero1.jpeg"
            alt="Server racks"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-8">
          <h2 className="text-3xl font-bold text-primary dark:text-blue-400">
            We Eliminate your IT Problems
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            With specialized services and solutions to meet the unique IT needs of your business.
          </p>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <span className="bg-blue-200 p-2 rounded-full dark:bg-gray-700">
                {/* Use appropriate icon component here */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17.25L15 12m0 0L9.75 6.75M15 12H3" />
                </svg>
              </span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-200 dark:text-white">
                  Expert support in Complex IT domains
                </h3>
                <p className="mt-2 text-gray-400 dark:text-gray-300">
                  System administration, Database administration, Software solutions, etc.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="bg-blue-200 p-2 rounded-full dark:bg-gray-700">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3 0 .353-.036.697-.105 1.031m-2.757 3.56A3 3 0 119 13c0-.353.036-.697.105-1.031m2.757-3.56A3 3 0 0112 8z" />
                </svg>
              </span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-200 dark:text-white">
                  Highly Skilled and Experienced Team
                </h3>
                <p className="mt-2 text-gray-400 dark:text-gray-300">
                  Networking, Cybersecurity, Software development, Quality assurance, IT audit, etc.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="bg-blue-200 p-2 rounded-full dark:bg-gray-700">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
              </span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-200 dark:text-white">
                  One contract, all IT-related Support
                </h3>
                <p className="mt-2 text-gray-400 dark:text-gray-300">
                  Managed IT services, Business IT support, Software solutions, etc.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Description Section */}
      <div className="mt-10 text-center text-gray-300 dark:text-gray-400 max-w-4xl mx-auto">
        <p>
          Kodetrix is a licensed firm that offers ICT services to individual clients and corporates. 
          We are dedicated to providing comprehensive enterprise solutions in outsourced IT support, 
          managed IT services, LAN infrastructure, and Software solutions to ensure efficient, secure, 
          and optimized IT operations.
        </p>
      </div>
    </div>
  );
}

