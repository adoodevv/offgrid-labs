import Image from 'next/image';
import Link from 'next/link';

const GroupOfProducts = () => {
  const companyLogos = [
    { name: 'Shika', src: '/logos/shika.png', color: 'border-yellow-500', invert: true, bgColor: 'bg-neutral-900', link: 'https://shikawallet.com/' },
    { name: 'ecofundme', src: '/logos/ecofundme.jpg', color: 'border-sky-500', invert: false, bgColor: 'bg-neutral-900/35', link: 'http://ecofundme.com/' },
    { name: 'cghs', src: '/logos/eth.png', color: 'border-green-500', invert: false, bgColor: 'bg-neutral-900 col-span-2 md:col-span-1', link: 'https://cghs-rose.vercel.app/' },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-white font-bold text-4xl pt-8 md:pt-12 sm:text-5xl md:text-6xl bebas-neue-regular">
          OGL GROUP OF PRODUCTS
        </h1>
        <p className="text-white text-base sm:text-lg mt-4 md:mt-8 opacity-80">
          From African Centric Products to Unicef Approved and QuickNode Accelerator Backed Sustainability Fintech Products
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-0 pb-6 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0">
          {companyLogos.map((logo, index) => (
            <Link href={logo.link} key={index} className={`group px-4 py-8 sm:py-10 md:py-14 flex items-center justify-center mx-0 md:mx-4 border-b-4 ${logo.color} ${logo.bgColor} mb-0 md:mb-8 relative overflow-hidden`}>
              <div
                className={`absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${logo.invert ? '' : 'hidden'}`}
              ></div>
              <Image
                src={logo.src}
                alt={logo.name}
                width={170}
                height={170}
                className={`relative h-16 sm:h-20 md:h-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ${logo.invert ? '' : ''}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GroupOfProducts