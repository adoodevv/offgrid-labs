'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CompanySlider = () => {
   const companyLogos = [
      { name: 'Etherealize', src: '/logos/etherealize.png' },
      { name: 'Consensys', src: '/logos/consensys.png' },
      { name: 'Ethereum Foundation', src: '/logos/ethereum-foundation.png' },
      { name: 'Microsoft', src: '/logos/microsoft.png' },
      { name: 'EY', src: '/logos/ey.png' },
      { name: 'Accenture', src: '/logos/accenture.png' },
      { name: 'Santander', src: '/logos/santander.png' },
      { name: 'JPMorgan', src: '/logos/jpmorgan.png' },
      { name: 'Blockapps', src: '/logos/blockapps.png' },
   ];

   const [position, setPosition] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setPosition((prevPosition) => (prevPosition - 1) % (companyLogos.length * 200));
      }, 30);

      return () => clearInterval(interval);
   }, [companyLogos.length]);

   return (
      <div className="relative bg-white/10 py-8 overflow-hidden">
         <div
            className="flex items-center"
            style={{
               transform: `translateX(${position}px)`,
               width: `${companyLogos.length * 200}px`
            }}
         >
            {companyLogos.map((logo, index) => (
               <div key={index} className="mx-8" style={{ width: '150px', minWidth: '150px' }}>
                  <Image
                     src={logo.src}
                     alt={logo.name}
                     width={150}
                     height={50}
                     className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
               </div>
            ))}
            {companyLogos.map((logo, index) => (
               <div key={`duplicate-${index}`} className="mx-8" style={{ width: '150px', minWidth: '150px' }}>
                  <Image
                     src={logo.src}
                     alt={logo.name}
                     width={150}
                     height={50}
                     className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
               </div>
            ))}
         </div>
      </div>
   )
}

export default CompanySlider
