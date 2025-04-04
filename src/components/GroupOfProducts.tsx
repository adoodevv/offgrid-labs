import Image from 'next/image';

const GroupOfProducts = () => {
  const companyLogos = [
    { name: 'Etherealize', src: '/logos/etherealize.png', color: 'border-yellow-500' },
    { name: 'Consensys', src: '/logos/consensys.png', color: 'border-sky-500' },
    { name: 'Ethereum Foundation', src: '/logos/ethereum-foundation.png', color: 'border-purple-500' },
    { name: 'Microsoft', src: '/logos/microsoft.png', color: 'border-purple-500' },
    { name: 'EY', src: '/logos/ey.png', color: 'border-blue-900' },
    { name: 'Accenture', src: '/logos/accenture.png', color: 'border-green-500' },
    { name: 'Santander', src: '/logos/santander.png', color: 'border-purple-500' },
    { name: 'Blockapps', src: '/logos/blockapps.png', color: 'border-green-500' },
    { name: 'JPMorgan', src: '/logos/jpmorgan.png', color: 'border-blue-900' },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-4 py-6 md:py-0">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl bebas-neue-regular">
          OGL GROUP OF PRODUCTS
        </h1>
        <p className="text-white text-base sm:text-lg mt-4 sm:mt-6 md:mt-8 opacity-80">
          From Fortune500 to major Ethereum bluechip companies
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-0 py-6 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className={`group bg-neutral-900 px-4 py-8 sm:py-10 md:py-14 flex items-center justify-center mx-0 md:mx-4 border-b-4 ${logo.color} mb-0 md:mb-8`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={250}
                height={250}
                className="h-16 sm:h-20 md:h-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GroupOfProducts