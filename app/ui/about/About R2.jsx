"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  CircleChevronRight,
  Headset,
  NotebookTabs,
  SquareCheckBig,
  Users,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ avatarUrl, title, subtitle }) => {
  return (
    <div className="flex items-start gap-3">
      <Image src={avatarUrl} alt={title} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col items-start gap-1">
        <div className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          {title}
        </div>
        <div className="text-gray-500 text-sm dark:text-white">{subtitle}</div>
      </div>
    </div>
  );
};

const AccordionItem = ({ header, children, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg mb-2 overflow-hidden dark:bg-black">
      <button
        onClick={onClick}
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 dark:bg-black dark:text-white"
      >
        {header}
        <ChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white text-left dark:bg-black dark:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function CompanyAboutSlider() {
  const [activeKey, setActiveKey] = useState(1);
  const [currentSection, setCurrentSection] = useState("");
  const sectionRef = useRef(null);

  const items = [
    {
      key: 1,
      header: {
        avatarUrl: "/expertise_icon.png",
        title: "Technical Excellence",
        subtitle: "Industry-leading expertise and proven track record",
      },
      content: (
        <>
          <p>
            Our team combines deep technical knowledge with years of practical
            experience in delivering innovative solutions.
          </p>
          <p className="mt-4">
            <strong>Expert Team:</strong> Our developers and consultants are
            certified professionals in React, Next.js, Flutter, and other
            cutting-edge technologies, ensuring top-quality deliverables for
            every project.
          </p>
          <p className="mt-4">
            <strong>Proven Methodology:</strong> We follow industry best
            practices and modern development approaches, including:
            <ul className="list-disc ml-6 mt-2">
              <li>Agile development methodology</li>
              <li>Test-driven development</li>
              <li>Continuous integration and deployment</li>
              <li>Regular code reviews and quality assurance</li>
            </ul>
          </p>
        </>
      ),
    },
    {
      key: 2,
      header: {
        avatarUrl: "/customer_focus_icon.png",
        title: "Client-Centric Approach",
        subtitle: "Your success is our priority",
      },
      content: (
        <>
          <p>
            We believe in building lasting partnerships with our clients through
            transparent communication and dedicated support.
          </p>
          <p className="mt-4">
            <strong>Collaborative Partnership:</strong> We work closely with you
            to understand your unique needs and challenges, ensuring solutions
            that perfectly align with your business objectives.
          </p>
          <p className="mt-4">
            <strong>Dedicated Support:</strong> Our commitment to your success
            includes:
            <ul className="list-disc ml-6 mt-2">
              <li>24/7 technical support</li>
              <li>Regular progress updates</li>
              <li>Transparent project management</li>
              <li>Post-deployment maintenance and optimization</li>
            </ul>
          </p>
        </>
      ),
    },
    {
      key: 3,
      header: {
        avatarUrl: "/innovation_icon.png",
        title: "Innovation & Adaptability",
        subtitle: "Staying ahead of technology trends",
      },
      content: (
        <>
          <p>
            We consistently invest in emerging technologies and innovative
            solutions to keep your business ahead of the curve.
          </p>
          <p className="mt-4">
            <strong>Future-Ready Solutions:</strong> Our focus on innovation
            ensures that your solutions are not just meeting today&apos;s needs
            but are prepared for tomorrows challenges. We regularly upgrade our
            skills and toolsets to incorporate the latest technological
            advancements and industry best practices.
          </p>
          <p className="mt-4">
            <strong>Flexible &amp; Scalable:</strong> Our solutions are designed
            to grow with your business, providing the flexibility to adapt to
            changing market conditions and business requirements.
          </p>
        </>
      ),
    },
    {
      key: 4,
      header: {
        avatarUrl: "/value_icon.png",
        title: "Value-Driven Results",
        subtitle: "Maximizing return on your technology investment",
      },
      content: (
        <>
          <p>
            We deliver tangible business value through cost-effective solutions
            and measurable outcomes.
          </p>
          <p className="mt-4">
            <strong>Cost-Effective Solutions:</strong> Our efficient development
            processes and resource optimization help minimize costs while
            maintaining high quality standards.
          </p>
          <p className="mt-4">
            <strong>Measurable Impact:</strong> We focus on delivering:
            <ul className="list-disc ml-6 mt-2">
              <li>Improved operational efficiency</li>
              <li>Reduced time-to-market</li>
              <li>Enhanced user experience</li>
              <li>Increased ROI on technology investments</li>
              <li>Scalable and maintainable solutions</li>
            </ul>
          </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value as needed
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-10 px-5 w-full  scroll-mt-20 scroll-smooth min-h-[70vh] "
    >
      <div className="container xl:max-w-6xl mx-auto ">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          Who We Are
        </h2>
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center max-h-96 overflow-y-auto">
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

          {/* Right Section (Why Us) */}
          <div className="w-full md:w-1/2 p-2 ">
          <div className="w-full p-2 ">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              Why Us
            </h2>
          </div>  
            <div className="border border-gray-300 rounded-lg p-2 dark:bg-black">
              {items.map((item) => (
                <AccordionItem
                  key={item.key}
                  isOpen={activeKey === item.key}
                  onClick={() =>
                    setActiveKey(activeKey === item.key ? null : item.key)
                  }
                  header={<Header {...item.header} />}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
