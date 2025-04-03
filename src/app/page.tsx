import Image from 'next/image';
import CompanySlider from '@/components/CompanySlider';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col bg-black text-white">
      <div className="flex-grow flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 md:pr-12 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-green-300 to-green-400 bg-clip-text text-transparent">
                  EEA:
                </span>{" "}
                THE LEADING NONPROFIT DRIVING
                <span className="mt-2 block">
                  <span className="text-yellow-400">ENTERPRISE</span>{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    ETHEREUM
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    ADOPTION
                  </span>
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg">
                As a trusted convener, EEA brings together businesses, developers, and the broader ecosystem to drive innovation and foster collaboration for a decentralized future.
              </p>
            </div>
            <div className="md:w-5/12 mt-12 md:mt-0 z-10">
              <div className="relative">
                <Image
                  src="/eth-hands.png"
                  alt="Ethereum hands with butterfly"
                  width={550}
                  height={550}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanySlider />
    </section>
  );
}
