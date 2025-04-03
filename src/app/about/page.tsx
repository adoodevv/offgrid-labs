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
               <div className="container mx-auto px-6 py-12">
                  <h1 className="w-4/5 text-xl md:text-3xl lg:text-5xl font-bold leading-tight">
                     CONNECTING ETHEREUM ECOSYSTEM TO <br /> ENTERPRISES
                  </h1>
                  <div className="flex gap-8">
                     <div className="pt-12 text-yellow-500">
                        <FaEthereum className="w-16 h-16" />
                     </div>
                     <div className="pt-4">
                        <h2 className="text-2xl font-bold pt-6">Our Mission</h2>
                        <p className="text-xl pt-4">The EEA is the premier non-profit trade organization bridging Ethereum, Layer 2 solutions, and enterprises. We promote the entire Ethereum ecosystem through education, standardization, and collaboration. Meet our members and board of directors.<br />
                           We believe Ethereum is more than technology—it&apos;s a community built on openness and inclusion, designed to be accessible to everyone worldwide. The Enterprise Ethereum Alliance (EEA) serves as the bridge connecting this revolutionary ecosystem to global enterprises.<br />
                           Our vision is clear: By uniting Layer 2 solutions under the EEA umbrella, we create a stronger, more coherent voice for Ethereum in the enterprise space. This collaboration across the ecosystem—including L2 networks, enterprises, and developers—drives innovation thats greater than the sum of its parts.</p>
                     </div>
                  </div>
                  <div className="flex py-20 gap-4">
                     <button className="flex items-center gap-2 py-3 px-4 bg-white/10 border border-white/20 font-bold text-lg hover:opacity-80 transition-all duration-300 cursor-pointer">
                        Members of the Board
                        <MdArrowOutward className="w-5 h-5" />
                     </button>
                     <button className="flex items-center gap-2 py-3 px-4 bg-white/10 border border-white/20 font-bold text-lg hover:opacity-80 transition-all duration-300 cursor-pointer">
                        The OGL Team
                        <MdArrowOutward className="w-5 h-5" />
                     </button>
                     <button className="flex items-center gap-2 py-3 px-4 bg-white/10 border border-white/20 font-bold text-lg hover:opacity-80 transition-all duration-300 cursor-pointer">
                        Members
                        <MdArrowOutward className="w-5 h-5" />
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
