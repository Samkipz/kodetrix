"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };


  return (
    <section className="py-24 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-8 ">
          <div className="w-full lg:w-2/5 flex flex-col ">
            <div className="text-center lg:text-left ">
              <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-5">
                Meet our <span className="text-indigo-600">Team</span>
              </h2>
              <p className="text-gray-500 mb-10">
              Learn more about the talented individuals behind our company.
              </p>
              <a href="/" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 mx-auto lg:mx-0 flex justify-center text-gray-900 font-semibold transition-all hover:bg-gray-100">
                View All
              </a>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
          <Slider {...settings}>
            {team.map((member) => (
              <div key={member.id} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center w-64 h-96 mx-auto flex flex-col justify-between items-center">
                  <div className="flex-grow flex justify-center items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-32 h-32 mb-4 "
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 mb-4">{member.position}</p>
                    <p className="text-gray-500">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

export default TeamSlider;
