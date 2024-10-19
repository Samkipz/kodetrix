import React from "react";
import Navbar from "@/app/ui/navbar/Navbar";
import HeroSection from "./ui/hero/Hero";
import Services from "./ui/services/Services";
import About from "./ui/about/About";
import Contact from "./ui/contact/Contact";
import Footer from "./ui/footer/Footer";
import Team from './ui/team/Team';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar className />

      <div className="flex min-h-[90vh] bg-primary-foreground">
        <HeroSection />
      </div>

      <main className="flex flex-col w-full bg-primary-foreground">
        <div className="flex flex-col  ">
          <About />
        </div>
        <div className="flex flex-col">
          {/* <Services /> */}
        </div>
        <div className="flex flex-col">
          <Team />
        </div>
        <div className="flex flex-col ">
          <Contact />
        </div>
        <div className="flex  ">
          <Footer />
        </div>
      </main>
    </div>
  );
}
