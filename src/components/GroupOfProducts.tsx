import Image from 'next/image';

const GroupOfProducts = () => {
  const companyLogos = [
    { name: 'Shika', src: '/logos/shika.png', color: 'border-green-500', invert: false },
    { name: 'AyaHQ', src: '/logos/aya.webp', color: 'border-yellow-500' },
    { name: 'ABSA', src: '/logos/absa.png', color: 'border-sky-500' },
    { name: 'unicef', src: '/logos/unicef.png', color: 'border-purple-500' },
    { name: 'arbitrum', src: '/logos/arbitrum.png', color: 'border-purple-500' },
    { name: 'pinax', src: '/logos/pinax.png', color: 'border-blue-900' },
    { name: 'graph', src: '/logos/graph.png', color: 'border-green-500' },
    { name: 'Scroll', src: '/logos/scroll.png', color: 'border-green-500', },
    { name: 'Base', src: '/logos/base.png', color: 'border-blue-900' },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-white font-bold text-4xl pt-8 md:py-12 sm:text-5xl md:text-6xl bebas-neue-regular">
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
                width={170}
                height={170}
                className={`h-16 sm:h-20 md:h-28 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${logo.invert ? 'invert' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GroupOfProducts