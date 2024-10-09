"use client"
import { Headset, NotebookTabs, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import 'animate.css';

export default function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === textRef.current) {
            entry.target.classList.add('animate__animated', 'animate__zoomIn');
          }
          if (entry.target === imageRef.current) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col py-12 w-full  scroll-mt-20 scroll-smooth min-h-[90vh]"
    >
      <div className="flex px-4 lg:px-12 space-x-4 space-y-4 w-full">
        <div className="mt-12 flex flex-col px-4 lg:px-12 w-full md:w-1/2" ref={textRef}>
          <h2 className="text-4xl font-bold text-primary">About Us</h2>
          <p className="mt-8">
            Kodetrix is a licensed firm focused on delivering cutting-edge
            technology solutions to individual clients and corporates. We
            specialize in harnessing the power of data analytics, AI, ML, and
            IoT to create real-world impact in sectors such as Finance,
            Agriculture, and Health.
          </p>
          <div className="mt-12 flex flex-col md:flex-row mt-6 md:space-x-4 gap-4">
            <div className="flex flex-col">
              <div className="mb-4 text-primary">
                <Headset size={40} />
              </div>
              <h3 className="font-semibold w-full">Expert Support</h3>
              <p className="text-muted-foreground">
                A diverse team of experts with a wide range of experience in
                complex domains.
              </p>
              <Link href="#" className="text-primary mt-2 hover:underline">
                Learn More
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 text-primary">
                <Users size={40} />
              </div>
              <h3 className="font-semibold w-full">Experienced Team</h3>
              <p className="text-muted-foreground">
                A diverse team of experts with a wide range of experience in
                complex domains.
              </p>
              <Link href="#" className="text-primary mt-2 hover:underline">
                Learn More
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 text-primary">
                <NotebookTabs size={40} />
              </div>
              <h3 className="font-semibold w-full">
                One Contract, All support
              </h3>
              <p className="text-muted-foreground">
                A diverse team of experts with a wide range of experience in
                complex domains.
              </p>
              <Link href="#" className="text-primary mt-2 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex mt-8 flex-col items-center justify-center w-full md:w-1/2" ref={imageRef}>
          <Image
            src="/hero1.jpeg"
            alt="Desk setup"
            className="rounded-lg"
            width={500}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
