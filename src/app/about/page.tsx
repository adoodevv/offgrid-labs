import React from 'react'
import Layout from '@/pages/Layout';
import { FaEthereum } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import GroupOfProducts from '@/components/GroupOfProducts';

const About = () => {
   return (
      <Layout>
         <section className="flex flex-col bg-black text-white">
            <div className="flex-grow flex flex-col relative overflow-hidden">
               <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                  <h1 className="w-full md:w-4/5 text-4xl sm:text-5xl md:text-6xl bebas-neue-regular leading-tight">
                     CONNECTING ETHEREUM ECOSYSTEM TO <br className="hidden sm:block" /> ENTERPRISES
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                     <div className="pt-6 sm:pt-12 text-yellow-500">
                        <FaEthereum className="w-12 h-12 sm:w-16 sm:h-16" />
                     </div>
                     <div className="pt-0 sm:pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold pt-4 sm:pt-6">Our Mission</h2>
                        <p className="text-base sm:text-lg md:text-xl pt-2 sm:pt-4">
                           The EEA is the premier non-profit trade organization bridging Ethereum, Layer 2 solutions, and enterprises. We promote the entire Ethereum ecosystem through education, standardization, and collaboration. Meet our members and board of directors.<br className="hidden sm:block" />
                           We believe Ethereum is more than technology—it&apos;s a community built on openness and inclusion, designed to be accessible to everyone worldwide. The Enterprise Ethereum Alliance (EEA) serves as the bridge connecting this revolutionary ecosystem to global enterprises.<br className="hidden sm:block" />
                           Our vision is clear: By uniting Layer 2 solutions under the EEA umbrella, we create a stronger, more coherent voice for Ethereum in the enterprise space. This collaboration across the ecosystem—including L2 networks, enterprises, and developers—drives innovation thats greater than the sum of its parts.
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col sm:flex-row py-10 md:py-20 gap-3 sm:gap-4">
                     <button className="flex items-center justify-center sm:justify-start gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-white/10 border border-white/20 font-bold text-base sm:text-lg hover:opacity-80 transition-all duration-300 cursor-pointer">
                        Members of the Board
                        <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5" />
                     </button>
                     <button className="flex items-center justify-center sm:justify-start gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-white/10 border border-white/20 font-bold text-base sm:text-lg hover:opacity-80 transition-all duration-300 cursor-pointer">
                        The OGL Team
                        <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5" />
                     </button>
                     <button className="flex items-center justify-center sm:justify-start gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-white/10 border border-white/20 font-bold text-base sm:text-lg hover:opacity-80 transition-all duration-300 cursor-pointer">
                        Members
                        <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5" />
                     </button>
                  </div>
               </div>
            </div>
         </section>
         <GroupOfProducts />
      </Layout>
   )
}

export default About