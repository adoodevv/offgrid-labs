'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const pathname = usePathname();

   const menu = [
      { title: "Blog", href: "/blog" },
      { title: "Team", href: "/team" },
      { title: "Contact", href: "/contact" },
      { title: "Products", href: "/products" },
      { title: "Careers", href: "/careers" },
   ];

   const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };

   return (
      <>
         <nav className="fixed flex top-0 w-full bg-black/50 backdrop-blur-md shadow-lg h-20 sm:h-28 z-40 items-center">
            <div className="container mx-auto flex items-center justify-between px-4 py-6">
               <div className="flex items-center gap-4">
                  <Link href="/" className="flex items-center">
                     <Image
                        src="/ethlogo.png"
                        alt="Offgrid Labs Logo"
                        width={190}
                        height={40}
                        className="h-14 w-auto"
                     />
                  </Link>
                  <div className="ml-4 flex items-center gap-2">
                     <Link href="https://linkedin.com" className="cursor-pointer">
                        <CiLinkedin className="h-7 w-7 text-white" />
                     </Link>
                     <Link href="https://x.com" className="cursor-pointer">
                        <BsTwitterX className="h-5 w-5 text-white" />
                     </Link>
                  </div>
               </div>
               <div className="hidden text-white items-center gap-6 md:flex font-bold">
                  <div className="hidden items-center gap-6 md:flex font-bold">
                     {menu.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                           <Link
                              key={index}
                              href={item.href}
                              className={`flex items-center gap-1 text-sm rounded-md px-5 py-3 transition-colors ${isActive ? "bg-neutral-900" : "hover:bg-neutral-900"
                                 }`}
                           >
                              {item.title}
                           </Link>
                        );
                     })}
                  </div>
               </div>
            </div>
            <div className="md:hidden pr-4">
               <HiOutlineMenuAlt3 className="h-8 w-8 text-white" onClick={toggleMobileMenu} />
            </div>
         </nav>

         {mobileMenuOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"></div>}
         {mobileMenuOpen && (
            <div className="fixed top-0 right-0 w-4/5 h-full bg-black text-white z-50 shadow-lg overflow-y-auto">
               <div className="flex justify-between items-center px-6 py-6">
                  <Link href="/">
                     <Image src="/ethlogo.png" alt="Logo" width={190} height={40} className="h-14 w-auto" />
                  </Link>
                  <button onClick={toggleMobileMenu} className="text-2xl rounded-full p-2 bg-white/10">
                     <AiOutlineClose />
                  </button>
               </div>
               <ul className="mt-10 text-lg px-6">
                  {menu.map((item, index) => {
                     const isActive = pathname === item.href;
                     return (
                        <li
                           key={index}
                           className={`w-full flex justify-between items-center py-4 px-2 border-b border-white/20 ${isActive ? "text-neutral-400" : ""
                              }`}
                        >
                           <Link
                              href={item.href}
                              className="flex items-center gap-2 w-full"
                           >
                              {item.title}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
         )}
         <div className="h-20 sm:h-28"></div>
      </>
   );
};

export default Navbar;