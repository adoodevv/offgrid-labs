'use client';

import { useState, useEffect } from 'react';
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';

const WhatMemberSay = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      text: "So amazing to see builders bring financial inclusion to West Africa through Scroll Open!",
      author: "Sandy",
      title: "CO-FOUNDER, SCROLL",
      logo: "/profile/sandy.jpg",
      link: "https://x.com/sandyzkp/status/1901966014096498991",
    },
    {
      text: "We're proud to be part of the EEA, where we collaborate with L2 protocols and enterprises to accelerate Ethereum adoption.",
      author: "CODY BURNS",
      title: "DIRECTOR INNOVATION, ACCENTURE",
      logo: "/logos/Accenture-Emblem.png",
      link: "https://www.accenture.com/us-en/insights/blockchain/enterprise-ethereum-alliance",
    },
    {
      text: "EEA is the essential bridge to provide the standards, frameworks and education needed to integrate blockchain technology into enterprise operations seamlessly and securely.",
      author: "PAUL BRODY",
      title: "EY GLOBAL BLOCKCHAIN LEADER",
      logo: "/logos/ey.png",
      link: "https://www.ey.com/en_us/blockchain",
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

  const getTranslateX = () => {
    if (isMobile) {
      return `-${activeIndex * 106}%`;
    }
    return `-${activeIndex * 33.33}%`;
  };

  return (
    <section className="py-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl bebas-neue-regular mb-12">WHAT OUR MEMBERS SAY</h1>
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${getTranslateX()})` }}
          >
            {testimonials.map((testimonial, index) => (
              <Link href={testimonial.link} target="_blank" rel="noopener noreferrer" className={`${isMobile ? 'w-full' : 'w-10/12 md:w-6/12'} flex-shrink-0 p-6 mx-2 transition-all duration-500 ease-in-out rounded-lg ${index === activeIndex ? 'bg-orange-300' : 'bg-neutral-900'}`} key={index}>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                        <Image src={testimonial.logo} alt={testimonial.author} width={48} height={48} className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{testimonial.author}</p>
                        <p className="text-sm opacity-75">{testimonial.title}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-white border border-white rounded-full p-2">
                        <BsTwitterX className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg">{testimonial.text}</p>
                </div>
              </Link>
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