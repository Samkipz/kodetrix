"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ display: "block", cursor: "pointer" }}
      onClick={onClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="url(#gradient)" 
        strokeWidth="2" 
        className="w-6 h-6"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#60A5FA", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#1D4ED8", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="none" />
        <path 
          d="M9 12h6M12 9l3 3-3 3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ display: "block", cursor: "pointer" }}
      onClick={onClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="url(#gradient)" 
        strokeWidth="2" 
        className="w-6 h-6"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#60A5FA", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#1D4ED8", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="none" />
        <path 
          d="M15 12H9M12 15l-3-3 3-3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
      </svg>
    </div>
  );
};

const TeamSlider = () => {
  const team = [
    {
      id: 1,
      image: "https://example.com/member1.png",
      name: "John Doe",
      position: "CEO",
      bio: "John is a visionary leader with a passion for innovation and growth...",
    },
    {
      id: 2,
      image: "https://example.com/member2.png",
      name: "Jane Smith",
      position: "CTO",
      bio: "Jane specializes in technology strategy and software engineering...",
    },
    {
      id: 3,
      image: "https://example.com/member3.png",
      name: "Emily Johnson",
      position: "Marketing Lead",
      bio: "Emily has a strong background in digital marketing and brand development...",
    },
    {
      id: 4,
      image: "https://example.com/member4.png",
      name: "Michael Brown",
      position: "Lead Developer",
      bio: "Michael leads the development team, focusing on cutting-edge technologies...",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef = React.createRef();

  return (
    <section
    id="team"
    className="flex flex-col justify-center items-center py-2 w-full scroll-mt-20 scroll-smooth min-h-[90vh]">
      <div className="container xl:max-w-6xl mx-auto">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-8">
          <div className="w-full lg:w-2/5 flex flex-col">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-5">
                <span className="dark:text-white">Meet our </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 lg:ml-2 lg:text-left text-center">Team</span>
              </h2>
              <p className="text-gray-500 leading-relaxed font-light text-xl pb-2 text-center md:text-left mb-4">
                Learn more about the talented individuals behind our company.
              </p>
            </div>
          </div>
        <div className="w-full lg:w-3/4 overflow-hidden flex flex-col items-end">
          <div className="w-full lg:w-4/5 overflow-hidden">
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {team.map((member) => (
                <div key={member.id} className="p-2">
                  <div className="bg-white rounded-lg shadow-lg text-center w-full h-96 mx-auto flex flex-col justify-between items-center dark:bg-background">
                    <div className="w-full h-1/2 flex justify-center items-center overflow-hidden rounded-t-lg ">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-center items-center p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">{member.position}</p>
                      <p className="text-gray-500 dark:text-gray-400">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* Arrow Container */}
          <div className="flex w-full lg:w-4/5 justify-center mt-4 space-x-4">
              <PrevArrow onClick={() => sliderRef.slickPrev()} />
              <NextArrow onClick={() => sliderRef.slickNext()} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TeamSlider;
