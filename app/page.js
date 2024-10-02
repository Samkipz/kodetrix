import React from "react";
import Navbar from "@/app/ui/navbar/Navbar";
import HeroSection from "./ui/hero/Hero";
import Services from "./ui/services/Services";
import About from "./ui/about/About";
import Contact from "./ui/contact/Contact";
import Footer from "./ui/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex min-h-screen">
        <HeroSection />
      </div>
      <div className="flex min-h-screen bg-primary">
        <About/>
      </div>
      <div className="flex min-h-screen bg-primary-foreground">
        <Services />
      </div>
      <div className="flex min-h-screen bg-primary">
        <Contact/>
      </div>
      <div className="flex min-h-screen bg-primary-foreground">
        <Footer/>
      </div>
    </div>
  );
}
