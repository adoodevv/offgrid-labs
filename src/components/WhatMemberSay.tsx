'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WhatMemberSay = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      text: "The EEA plays a crucial role in advancing the Ethereum ecosystem by helping enterprises, including Circle, better understand and navigate the Ethereum ecosystem, including its Layer 2 solutions. Their neutral guidance fosters confidence in stablecoins and real-world blockchain applications, making them a key partner in our industry.",
      author: "SANDRA PERSING",
      title: "VP OF DEVELOPER AND ECOSYSTEM MARKETING, CIRCLE",
      logo: "/logos/Accenture-Emblem.png",
    },
    {
      text: "We're proud to be part of the EEA, where we collaborate with L2 protocols and enterprises to accelerate Ethereum adoption. By leveraging our implementation expertise and industry knowledge, we help enterprises navigate the evolving Ethereum ecosystem and implement scalable blockchain solutions. Our involvement helps bridge the gap between enterprise needs and Ethereum's technological capabilities.",
      author: "CODY BURNS",
      title: "DIRECTOR INNOVATION, ACCENTURE",
      logo: "/logos/Accenture-Emblem.png",
    },
    {
      text: "EEA is the essential bridge to provide the standards, frameworks and education needed to integrate blockchain technology into enterprise operations seamlessly and securely.",
      author: "PAUL BRODY",
      title: "EY GLOBAL BLOCKCHAIN LEADER",
      logo: "/logos/ey.png",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getTranslateX = () => {
    if (isMobile) {
      return `-${activeIndex * 106}%`;
    }
    return `-${activeIndex * 33.33}%`;
  };

  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl bebas-neue-regular mb-12">WHAT OUR MEMBERS SAY</h1>
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${getTranslateX()})` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${isMobile ? 'w-full' : 'w-10/12 md:w-6/12'} flex-shrink-0 p-6 mx-2 transition-all duration-500 ease-in-out ${index === activeIndex ? 'bg-orange-300' : 'bg-neutral-900'}`}
              >
                <p className="mb-6 text-base">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4">
                    <Image src={testimonial.logo} alt={testimonial.author} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm opacity-75">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? 'bg-white' : 'bg-white/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMemberSay;