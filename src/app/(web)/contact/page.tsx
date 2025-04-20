import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import FadeUpAnimation from "@/components/FadeUp";

export const metadata = {
   title: 'Contact Us | Offgrid Labs',
   description: 'Join us in our mission to Enable Borderless Access with Technology.',
   keywords: 'Offgrid Labs, Products, Technology, Borderless Access',
   openGraph: {
      title: 'Contact Us | Offgrid Labs',
      description: 'Join us in our mission to Enable Borderless Access with Technology.',
   },
}

const Contact = () => {
   return (
      <div className="container flex flex-col mx-auto px-4 sm:px-6 py-20">
         <div className="flex flex-col bg-black text-white">
            <div className="flex-grow flex flex-col relative overflow-hidden">
               <div className="flex flex-col mx-auto px-4 sm:px-6 py-8 md:py-12 items-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular text-center">
                     Contact Us
                  </h1>
                  <p className="mt-6 text-lg sm:text-xl opacity-80 max-w-lg mx-auto text-center">
                     Offgrid Labs is researching and developing scaling solutions for Ethereum smart contracts. To learn more, please connect with us below.
                  </p>
               </div>
            </div>
         </div>
         <div className="flex mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <FadeUpAnimation delay={0.2}>
                  <Link href="jobs.lever.co/offgridlabs">
                     <div className="flex flex-col items-center justify-center bg-neutral-900 px-22 py-16 border-b-4 border-yellow-500 hover:scale-95 transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">People & Talent</h2>
                        <p className="text-base sm:text-lg mt-4 text-white/60">For Career inquiries</p>
                        <p className="flex items-center text-lg sm:text-xl font-bold mt-8">jobs.lever.co/offgridlabs <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></p>
                     </div>
                  </Link>
               </FadeUpAnimation>
               <FadeUpAnimation delay={0.4}>
                  <Link href="mailto:partnerships@offgridlabs.com">
                     <div className="flex flex-col items-center justify-center bg-neutral-900 px-22 py-16 border-b-4 border-sky-500 hover:scale-95 transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">Partnership</h2>
                        <p className="text-base sm:text-lg mt-4 text-white/60">For partnership inquiries</p>
                        <p className="flex items-center text-lg sm:text-xl font-bold mt-8">partnerships@offgridlabs.com <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></p>
                     </div>
                  </Link>
               </FadeUpAnimation>
               <FadeUpAnimation delay={0.6}>
                  <Link href="mailto:offgridlabspr@mgroupsc.com">
                     <div className="flex flex-col items-center justify-center bg-neutral-900 px-22 py-16 border-b-4 border-purple-500 hover:scale-95 transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">Press & Events</h2>
                        <p className="text-base sm:text-lg mt-4 text-white/60">For media & Events requests</p>
                        <p className="flex items-center text-lg sm:text-xl font-bold mt-8">offgridlabspr@mgroupsc.com <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></p>
                     </div>
                  </Link>
               </FadeUpAnimation>
            </div>
         </div>
      </div >
   )
}

export default Contact
