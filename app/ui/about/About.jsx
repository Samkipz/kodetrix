// "use client";
// import { Headset, NotebookTabs, Users } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import "animate.css";

// export default function About() {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1, // Trigger when 10% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target === textRef.current) {
//             entry.target.classList.add("animate__animated", "animate__zoomIn");
//           }
//           if (entry.target === imageRef.current) {
//             entry.target.classList.add(
//               "animate__animated",
//               "animate__fadeInUp"
//             );
//           }
//         }
//       });
//     }, observerOptions);

//     if (textRef.current) observer.observe(textRef.current);
//     if (imageRef.current) observer.observe(imageRef.current);

//     return () => {
//       if (textRef.current) observer.unobserve(textRef.current);
//       if (imageRef.current) observer.unobserve(imageRef.current);
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="flex flex-col md:justify-center md:items-center py-2 w-full  scroll-mt-20 scroll-smooth min-h-[90vh] "
//     >
//       <div className="container flex flex-col md:flex-row justify-between items-center xl:max-w-6xl mx-auto">
//         <div className="flex flex-col px-4 w-full md:w-1/2" ref={textRef}>
//           <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 text-center md:text-left">
//             About Us
//           </h2>
//           <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
//             Kodetrix is a licensed firm focused on delivering cutting-edge
//             technology solutions to individual clients and corporates. We
//             specialize in harnessing the power of data analytics, AI, ML, and
//             IoT to create real-world impact in sectors such as Finance,
//             Agriculture, and Health.
//           </p>
//           <div className="flex flex-col md:flex-row mt-6 md:space-x-4 gap-4">
//             <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
//               <div className="flex justify-center md:justify-normal mb-4 text-primary">
//                 <Headset size={40} />
//               </div>
//               <h3 className="font-semibold w-full">Expert Support</h3>
//               <p className="text-muted-foreground">
//                 A diverse team of experts with a wide range of experience in
//                 complex domains.
//               </p>
//               <Link href="#" className="text-primary mt-2 hover:underline">
//                 Learn More
//               </Link>
//             </div>
//             <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
//               <div className="flex justify-center md:justify-normal mb-4 text-primary">
//                 <Users size={40} />
//               </div>
//               <h3 className="font-semibold w-full">Experienced Team</h3>
//               <p className="text-muted-foreground">
//                 A diverse team of experts with a wide range of experience in
//                 complex domains.
//               </p>
//               <Link href="#" className="text-primary mt-2 hover:underline">
//                 Learn More
//               </Link>
//             </div>
//             <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
//               <div className="flex justify-center md:justify-normal mb-4 text-primary">
//                 <NotebookTabs size={40} />
//               </div>
//               <h3 className="font-semibold w-full">
//                 One Contract, All support
//               </h3>
//               <p className="text-muted-foreground">
//                 A diverse team of experts with a wide range of experience in
//                 complex domains.
//               </p>
//               <Link href="#" className="text-primary mt-2 hover:underline">
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div
//           className="hidden md:flex mt-8 flex-col items-center justify-center w-full md:w-1/2"
//           ref={imageRef}
//         >
//           <Image
//             src="/about.jpeg"
//             alt="About Us Image"
//             className="rounded-lg"
//             width={500}
//             height={400}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Headset, NotebookTabs, Users } from "lucide-react";

export default function CompanyAboutSlider() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const images = ["/Agrik.jpg", "/health.jpg", "/Education.jpg", "/RE.jpeg"];
  const carouselText = [
    "Agriculture text",
    "Health industry text",
    "Education industry text",
    "Real Estate industry text",
  ];
  const descriptionText = [
    "Some text about Agriculture ",
    "Some text about Health industry ",
    "Some text about Education industry ",
    "Some text about Real Estate industry ",
  ];

  return (
    <div className="container xl:max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row items-center w-full h-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-4">
          <p className="mt-4 md:mt-6 text-center md:text-left text-sm sm:text-base">
            Kodetrix is a licensed firm focused on delivering cutting-edge
            technology solutions to individual clients and corporates. We
            specialize in harnessing the power of data analytics, AI, ML, and
            IoT to create real-world impact in sectors such as Finance,
            Agriculture, and Health.
          </p>

          <div className="flex flex-col md:flex-row mt-6 md:space-x-4 gap-4">
            <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
              <div className="flex justify-center md:justify-normal mb-4 text-primary">
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
            <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
              <div className="flex justify-center md:justify-normal mb-4 text-primary">
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
            <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
              <div className="flex justify-center md:justify-normal mb-4 text-primary">
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

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="relative w-full">
                  <Image
                    src={src}
                    width={500}
                    height={400}
                    alt={`Slide ${index + 1}`}
                    className="object-cover"
                    priority
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute text-white top-1/3 w-full text-center">
              <p className="font-bold text-3xl">{carouselText[current - 1]}</p>
              <div className="flex justify-center gap-2 mt-4">
                <p className="text-xl px-2">{descriptionText[current - 1]}</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
