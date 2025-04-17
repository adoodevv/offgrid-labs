import CompanySlider from '@/components/CompanySlider';
import GlitchText from '@/components/GlitchText';

const Hero = () => {
   return (
      <section
         className="bg-cover bg-center bg-no-repeat relative"
         style={{ backgroundImage: 'url("/hero.jpg")' }}
      >
         <div className="absolute inset-0 bg-black/60" />
         <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center items-start min-h-screen">
            <div className="max-w-3xl backdrop-blur-md bg-black/40 p-8 rounded-2xl shadow-xl">
               <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100">
                  <span className="bg-gradient-to-r from-yellow-400 via-green-300 to-green-400 bg-clip-text text-transparent">OGL:</span>{" "}<GlitchText>THE LEADING NONPROFIT DRIVING</GlitchText>
                  <span className="block mt-2">
                     <span className="text-yellow-400">ENTERPRISE</span>{" "}
                     <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">ETHEREUM</span>{" "}
                     <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ADOPTION</span>
                  </span>
               </h1>
               <p className="mt-6 text-lg text-gray-300 font-light">
                  As a trusted convener, OGL brings together businesses, developers, and the broader
                  ecosystem to drive innovation and foster collaboration for a decentralized future.
               </p>
            </div>
         </div>
         <div className="z-10 absolute bottom-0 left-0 w-full">
            <CompanySlider />
         </div>
      </section>
   );
};

export default Hero;
