'use client';

import React, { useState } from 'react';

const MeetTheLeadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leaders = [
    {
      id: 0,
      name: "John Doe",
      title: "Co-Founder",
      image: "/profile/person1.jpg"
    },
    {
      id: 1,
      name: "Paul Brody",
      title: "Chairman",
      image: "/profile/person2.jpg"
    }
  ];

  const handleImageClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular mb-6">MEET THE LEADERSHIP</h1>
      <p className="text-base sm:text-lg my-4 sm:my-6 md:y-8 opacity-80">EEA leadership is the mix of Web3 native and Enterprise leaders.</p>

      <div className="flex gap-4">
        {leaders.map((leader, index) => (
          <div
            key={leader.id}
            className="relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out"
            style={{
              flex: index === activeIndex ? '2' : '1',
              height: '500px'
            }}
            onClick={() => handleImageClick(index)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${leader.image})`,
                transform: index === activeIndex ? 'scale(1)' : 'scale(1.2)',
              }}
            />
            {index === activeIndex && (
              <div className="absolute bottom-0 left-0 p-4 w-full transition-opacity duration-700">
                <h2 className="text-2xl font-bold">{leader.name}</h2>
                <p>{leader.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheLeadership;