"use client";
import React from "react";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { alex_Brush } from "../fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "next/image";
import "animate.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col md:justify-center md:items-center py-2 w-full  scroll-mt-20 scroll-smooth min-h-[90vh]"
    >
      <div className="container flex flex-col md:flex-row justify-between items-center xl:max-w-6xl mx-auto">
        {/* Left Text Section */}
        <div className="px-4 w-full md:w-1/2 flex flex-col justify-center animate__animated animate__fadeInRight animate__delay-1s z-10">
          <div className="flex flex-col items-center justify-center mb-4">
            <h1 className="mb-4 scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl xl:text-5xl text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                Kodetrix
              </span>{" "}
              Unleashes Your Future in the Sky
            </h1>
            <p className="text-gray-500 leading-relaxed font-light text-xl pb-2 text-center md:text-left mb-4">
              Experience limitless possibilities with our cutting-edge IT
              solutions.
            </p>
          </div>

          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
            <p className="text-gray-500 leading-relaxed font-light text-xl pb-2 text-center md:text-left">
              Let us be your fast and professional partner. Leave your details
              and we will get back to you
            </p>
            {/* <p
              className={`${alex_Brush.className} text-md sm:text-lg font-bold font-large bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700 md:text-4xl md:leading-normal`}
            >
              
            </p> */}
          </blockquote>
          <footer className="mx-3 mt-3">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Avatar>
                  <AvatarImage
                    src="https://gitrrrhub.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
              </div>
              <div className="grow ms-4">
                <div className="font-semibold">Rishard Munene</div>
                <div className="text-xs text-muted-foreground">
                  Chief Technology Officer | Kodetrix
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Right Image Section */}
        <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-end w-full md:w-1/2 animate__animated animate__fadeInDown animate__delay-2s">
          {/* Form */}
          <form>
            <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto md:-ml-2">
              {/* Card */}
              <Card>
                <CardHeader className="text-center">
                  <h2 className="text-2xl font-semibold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                    Contact Us
                  </h2>
                  <CardDescription>
                    Fill the form to get in touch|{"  "}
                    <a
                      className="text-primary hover:underline underline-offset-4"
                      href="mailto:info@kodetrix.com"
                    >
                      Direct chat
                    </a>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Separator asChild className="my-3 bg-background">
                      <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:before:border-gray-700 dark:after:border-gray-700">
                        Or
                      </div>
                    </Separator>
                  </div>
                  <div className="mt-5">
                    {/* Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First name" />
                      <Input placeholder="Last name" />
                      <Input placeholder="Email" />
                      <Input placeholder="Company name if any" />
                      <Textarea className="col-span-2" placeholder="Message" />

                      <div className="flex items-center space-x-2 mt-3 col-span-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">
                          Accept terms and conditions
                        </Label>
                      </div>

                      <Button
                        variant="outline"
                        className="mt-3 col-span-2 relative h-12 md:h-15 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white dark:text-gray-100 font-bold text-sm md:text-lg lg:text-xl tracking-wide transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-40 dark:focus:ring-opacity-60 shadow-lg group"
                      >
                        {/* Arrow hover effect layer */}
                        <span className="absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-gradient-to-r from-blue-400 to-blue-700 dark:from-teal-400 dark:to-purple-600 transition-all duration-300 group-hover:h-32 group-hover:-translate-y-20 opacity-50"></span>

                        {/* Background layer for hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 dark:from-teal-500 dark:to-purple-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-90 group-hover:animate-none"></span>

                        {/* Inner content */}
                        <span className="relative z-10 text-white dark:text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">
                          Submit
                        </span>
                      </Button>
                    </div>
                    {/* Grid End */}
                  </div>
                </CardContent>
              </Card>
              {/* End Card */}
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </section>
  );
}
