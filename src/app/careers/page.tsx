import CountUpNumber from '@/components/CountUpNUmber';
import FadeUpAnimation from '@/components/FadeUp';
import JobBoard from '@/components/JobBoard';
import { MdArrowOutward } from "react-icons/md";

export const metadata = {
   title: 'Careers | Offgrid Labs',
   description: 'Join us in our mission to Enable Borderless Access with Technology.',
   keywords: 'Offgrid Labs, Products, Technology, Borderless Access',
   openGraph: {
      title: 'Careers | Offgrid Labs',
      description: 'Join us in our mission to Enable Borderless Access with Technology.',
   },
}

const Careers = () => {
   return (
      <div className="pt-16 flex flex-col bg-black text-white">
         <div className="container flex flex-col mx-auto px-4 sm:px-6 py-8 md:py-12 items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular text-center">
               Join us in our mission to<br />
               <span className="bg-gradient-to-r from-yellow-400 via-green-300 to-green-400 bg-clip-text text-transparent">Enable Borderless Access with</span><br />
               <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Technology.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-lg mx-auto text-center">
               OFFGRIB LABS is a company dedicated to building edge technologies for sustainability and financial inclusion.
               Our Mission is to offer borderless financial  opportunity with technology
            </p>
            <button className="flex items-center justify-center sm:justify-start gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-white/10 border border-white/20 font-bold text-base sm:text-lg mt-8 hover:opacity-80 transition-all duration-300 cursor-pointer">
               Join Our Team
               <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
         </div>
         <div className="container flex flex-col lg:flex-row justify-between mx-auto px-4 sm:px-6 py-8 md:py-12 gap-8">
            <div className="lg:w-[45%]">
               <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular text-center lg:text-left">
                  Our Team
               </h1>
               <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-lg text-center lg:text-left">
                  We are a global team of experts in cryptography, decentralized systems,
                  and game theory. With a deep understanding of smart contracts, we are
                  committed to creating a fairer world. Join us as we revolutionize the
                  future through innovative solutions and collaboration.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-[50%]">
               <FadeUpAnimation delay={0.2}>
                  <div className="flex flex-col items-center justify-center bg-neutral-900 px-6 py-12 border-b-4 border-yellow-500">
                     <h2 className="flex items-center text-4xl sm:text-5xl md:text-6xl font-extrabold">
                        <CountUpNumber endValue={4} duration={1000} />
                        +
                     </h2>
                     <p className="text-lg sm:text-xl font-bold mt-2 text-center">Countries</p>
                  </div>
               </FadeUpAnimation>
               <FadeUpAnimation delay={0.4}>
                  <div className="flex flex-col items-center justify-center bg-neutral-900 px-6 py-12 border-b-4 border-sky-500">
                     <h2 className="flex items-center text-4xl sm:text-5xl md:text-6xl font-extrabold">
                        <CountUpNumber endValue={25} duration={1000} />+
                     </h2>
                     <p className="text-lg sm:text-xl font-bold mt-2 text-center">Years Experience</p>
                  </div>
               </FadeUpAnimation>
               <FadeUpAnimation delay={0.6}>
                  <div className="flex flex-col items-center justify-center bg-neutral-900 px-6 py-12 border-b-4 border-purple-500">
                     <h2 className="flex items-center text-4xl sm:text-5xl md:text-6xl font-extrabold">
                        <CountUpNumber endValue={2024} duration={2000} />
                     </h2>
                     <p className="text-lg sm:text-xl font-bold mt-2 text-center">Year Founded</p>
                  </div>
               </FadeUpAnimation>
            </div>
         </div>

         <div className="container flex flex-col mx-auto px-4 sm:px-6 py-8 md:py-12 items-center mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular text-center">
               Current Open Positions
            </h1>
            <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-lg mx-auto text-center">
               Join our dynamic team of innovators and explore exciting career opportunities
               below to make a meaningful impact in a collaborative environment. Browse open
               positions and take the next step in your career today!
            </p>
            <JobBoard />
         </div>
      </div>
   )
}

export default Careers
