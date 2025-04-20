'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
   const [showLoading, setShowLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
   }, []);

   if (!showLoading) return null;

   return (
      <div className="relative inset-0 z-50 w-full h-screen bg-black overflow-hidden">
         <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

         <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64">
               <div className="absolute inset-0 rounded-full bg-gray-900/20 animate-pulse"></div>
               <div className="absolute inset-4 rounded-full bg-gray-800/30 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
               <div className="absolute inset-8 rounded-full bg-gray-700/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>

               <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                     src="/logo.png"
                     alt="Logo"
                     width={150}
                     height={150}
                     className="w-20 h-20 text-red-500 animate-pulse"
                  />
               </div>
            </div>
         </div>

         <div className="absolute inset-0 bg-scanlines bg-[length:100%_2px] opacity-10"></div>

         <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white font-mono text-sm tracking-widest animate-pulse">
               INITIALIZING SYSTEM...
            </p>
            <div className="w-48 h-1 bg-white/50 mx-auto mt-2 overflow-hidden">
               <div className="h-full bg-white animate-progress"></div>
            </div>
         </div>

         <div className="absolute inset-0 bg-black opacity-0 animate-flicker"></div>
      </div>
   );
}