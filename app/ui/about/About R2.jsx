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
      <img 
        src={avatarUrl} 
        alt={title} 
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col items-start gap-1">
        <div className="font-medium">{title}</div>
        <div className="text-gray-500 text-sm">{subtitle}</div>
      </div>
    </div>
  );
};

const AccordionItem = ({ header, children, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg mb-2 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50"
      >
        {header}
        <ChevronDown 
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div
        className={`transition-all duration-200 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-white text-left">{children}</div>
      </div>
    </div>
  );
};

export default function CompanyAboutSlider() {
  const [activeKey, setActiveKey] = useState(1);
  const [currentSection, setCurrentSection] = useState('');
  const sectionRef = useRef(null);

  const items = [
    {
      key: 1,
      header: {
        avatarUrl: "/application_10382731.png",
        title: "Custom Software Development",
        subtitle: "Transforming ideas into powerful digital solutions"
      },
      content: (
        <>
          <p>
            At Kodetrix, we craft bespoke software solutions that drive business growth and innovation.
          </p>
          <p className="mt-4">
            <strong>Web & Mobile Excellence:</strong> Our expert team specializes in developing cutting-edge applications using React, Next.js, and Flutter frameworks. We deliver responsive, scalable, and user-centric solutions that work seamlessly across all platforms and devices.
          </p>
          <p className="mt-4">
            <strong>Future-Ready Development:</strong> We employ industry best practices and modern architecture patterns to ensure your software is not just functional today but ready for tomorrow's challenges. From progressive web apps to native mobile applications, we build solutions that stand the test of time.
          </p>
          <p className="mt-4">
            <strong>End-to-End Solutions:</strong> Our development process encompasses everything from initial concept and design to deployment and maintenance, ensuring a comprehensive solution that aligns perfectly with your business objectives.
          </p>
        </>
      )
    },
    {
      key: 2,
      header: {
        avatarUrl: "/economy_10382474.png",
        title: "IT Consultancy & Procurement",
        subtitle: "Strategic technology guidance and trusted procurement solutions"
      },
      content: (
        <>
          <p>
            Leverage our extensive expertise to navigate the complex technology landscape and make informed IT decisions.
          </p>
          <p className="mt-4">
            <strong>Comprehensive Consulting:</strong> Our consultancy services cover:
            <ul className="list-disc ml-6 mt-2">
              <li>Network Architecture & DataComm Solutions</li>
              <li>Business Technology Strategy</li>
              <li>Digital Transformation Roadmaps</li>
              <li>Cybersecurity Assessment & Planning</li>
              <li>Enterprise Architecture Design</li>
              <li>Technology Stack Optimization</li>
              <li>IT Governance & Compliance</li>
            </ul>
          </p>
          <p className="mt-4">
            <strong>Procurement Excellence:</strong> Our procurement services include vendor evaluation, technology assessment, cost optimization, and direct procurement facilitation through our network of trusted partners, ensuring you get the best value for your technology investments.
          </p>
        </>
      )
    },
    {
      key: 3,
      header: {
        avatarUrl: "/cognitive_10382753.png",
        title: "Data Analytics & Business Intelligence",
        subtitle: "Transform your data into actionable insights"
      },
      content: (
        <p>
          Unlock the power of your data with our comprehensive analytics solutions. We help organizations harness their data through advanced analytics, visualization, and reporting tools. Our services include data warehouse design, ETL pipeline development, predictive analytics, and custom dashboard creation. We employ cutting-edge technologies and methodologies to deliver insights that drive strategic decision-making and business growth.
        </p>
      )
    },
    {
      key: 4,
      header: {
        avatarUrl: "/cloud-computing_10382559.png",
        title: "Managed IT Services",
        subtitle: "Comprehensive IT support and automation solutions"
      },
      content: (
        <>
          <p>
            Experience worry-free IT operations with our managed services portfolio.
          </p>
          <p className="mt-4">
            <strong>IT Support Excellence:</strong> 24/7 technical support, system monitoring, maintenance, and rapid incident resolution to keep your business running smoothly.
          </p>
          <p className="mt-4">
            <strong>Automation & DevOps:</strong> Streamline your operations with:
            <ul className="list-disc ml-6 mt-2">
              <li>CI/CD Pipeline Implementation</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Container Orchestration</li>
              <li>Automated Testing & Deployment</li>
              <li>Performance Monitoring & Optimization</li>
            </ul>
          </p>
          <p className="mt-4">
            <strong>Coming Soon - Cloud Services:</strong> Comprehensive cloud solutions leveraging AWS and Azure platforms for scalable, secure, and efficient cloud infrastructure management.
          </p>
        </>
      )
    }
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
        rootMargin: '0px',
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
      className="flex flex-col md:justify-center md:items-center xl:justify-start py-10 px-5 w-full  scroll-mt-20 scroll-smooth min-h-[70vh]"
    >
      <div className="container xl:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          Who We Are
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
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
          <div className="w-full md:w-1/2">
              <div className="border border-gray-300 rounded-lg p-2">
                {items.map((item) => (
                  <AccordionItem
                    key={item.key}
                    isOpen={activeKey === item.key}
                    onClick={() => setActiveKey(activeKey === item.key ? null : item.key)}
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
