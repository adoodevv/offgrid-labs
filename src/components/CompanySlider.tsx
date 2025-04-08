'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CompanySlider = () => {
   const companyLogos = [
      { name: 'Shika', src: '/logos/shika.png' },
      { name: 'AyaHQ', src: '/logos/aya.webp' },
      { name: 'ABSA', src: '/logos/absa.png' },
      { name: 'unicef', src: '/logos/unicef.png' },
      { name: 'arbitrum', src: '/logos/arbitrum.png' },
      { name: 'pinax', src: '/logos/pinax.png' },
      { name: 'graph', src: '/logos/graph.png' },
      { name: 'Scroll', src: '/logos/scroll.png' },
      { name: 'Base', src: '/logos/base.png' },
   ];

   const [position, setPosition] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setPosition((prevPosition) => (prevPosition - 1) % (companyLogos.length * 200));
      }, 30);

      return () => clearInterval(interval);
   }, [companyLogos.length]);

   return (
      <div className="relative bg-neutral-900 py-6 md:py-8 overflow-hidden">
         <div
            className="flex items-center"
            style={{
               transform: `translateX(${position}px)`,
               width: `${companyLogos.length * 200}px`
            }}
         >
            {companyLogos.map((logo, index) => (
               <div key={index} className="mx-1 md:mx-8" style={{ width: '150px', minWidth: '150px' }}>
                  <Image
                     src={logo.src}
                     alt={logo.name}
                     width={150}
                     height={50}
                     className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
               </div>
            ))}
            {companyLogos.map((logo, index) => (
               <div key={`duplicate-${index}`} className="mx-1 md:mx-8" style={{ width: '150px', minWidth: '150px' }}>
                  <Image
                     src={logo.src}
                     alt={logo.name}
                     width={150}
                     height={50}
                     className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
               </div>
            ))}
         </div>
      </div>
   )
}

export default CompanySlider
