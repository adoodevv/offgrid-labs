'use client'

import { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
   const [openDropdown, setOpenDropdown] = useState<keyof DropdownMenus | null>(null);

   const dropdownMenus = {
      about: [
         { title: "Board of Directors", href: "/about/board-of-directors" },
         { title: "OGL Leadership", href: "/about/ogl-leadership" },
         { title: "OGL Members", href: "/about/ogl-members" },
         { title: "Members Spotlight", href: "/about/members-spotlight" },
         { title: "Blog", href: "/about/blog" },
      ],
      become: [{ title: "FAQs", href: "/become-a-member/faqs" }],
      more: [
         { title: "Press Releases", href: "/more/press-releases" },
         { title: "Technical specifications", href: "/more/technical-specifications" },
         { title: "Surveys & Reports", href: "/more/surveys-reports" },
         { title: "OGL Primers", href: "/more/ogl-primers" },
      ],
   };

   type DropdownKey = keyof typeof dropdownMenus;

   interface DropdownMenu {
      title: string;
      href: string;
   }

   interface DropdownMenus {
      about: DropdownMenu[];
      become: DropdownMenu[];
      more: DropdownMenu[];
   }


   const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };

   const handleMouseEnter = (dropdown: DropdownKey) => {
      setActiveDropdown(dropdown);
   };

   const handleMouseLeave = () => {
      setActiveDropdown(null);
   };

   const toggleDropdown = (key: keyof DropdownMenus) => {
      setOpenDropdown(openDropdown === key ? null : key);
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
               <div className="hidden items-center gap-6 md:flex font-bold">
                  <div className="flex items-center gap-2">
                     <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("about")}
                        onMouseLeave={handleMouseLeave}
                     >
                        <Link
                           href="/about"
                           className="group flex items-center gap-1 text-sm rounded-md px-5 py-3 hover:bg-white/10 transition-colors"
                        >
                           About
                           <FaChevronRight className={`h-3 w-3 transition-transform ${activeDropdown === "about" ? "rotate-90" : ""} duration-300 ml-2`} />
                        </Link>
                        {activeDropdown === "about" && (
                           <div className="absolute top-full left-0 w-48 py-2 z-50">
                              {dropdownMenus.about.map((item) => (
                                 <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-3 text-sm bg-neutral-900 rounded-md mb-2 hover:opacity-80 transition-opacity"
                                 >
                                    {item.title}
                                 </Link>
                              ))}
                           </div>
                        )}
                     </div>
                     <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("become")}
                        onMouseLeave={handleMouseLeave}
                     >
                        <Link
                           href="/become-a-member"
                           className="group flex items-center gap-1 text-sm rounded-md px-5 py-3 hover:bg-white/10 transition-colors"
                        >
                           Become A Member
                           <FaChevronRight className={`h-3 w-3 transition-transform ${activeDropdown === "become" ? "rotate-90" : ""} duration-300 ml-2`} />
                        </Link>
                        {activeDropdown === "become" && (
                           <div className="absolute top-full left-0 w-48 py-2 z-50">
                              {dropdownMenus.become.map((item) => (
                                 <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-3 text-sm bg-neutral-900 rounded-md mb-2 hover:opacity-80 transition-opacity"
                                 >
                                    {item.title}
                                 </Link>
                              ))}
                           </div>
                        )}
                     </div>
                     <Link href="/ogl-groups" className="text-sm rounded-md px-5 py-3 hover:bg-white/10 transition-colors">
                        OGL Groups
                     </Link>
                     <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("more")}
                        onMouseLeave={handleMouseLeave}
                     >
                        <Link
                           href="/more"
                           className="group flex items-center gap-1 text-sm rounded-md px-5 py-3 hover:bg-white/10 transition-colors"
                        >
                           More
                           <FaChevronRight className={`h-3 w-3 transition-transform ${activeDropdown === "more" ? "rotate-90" : ""} duration-300 ml-2`} />
                        </Link>
                        {activeDropdown === "more" && (
                           <div className="absolute top-full left-0 w-52 py-2 z-50">
                              {dropdownMenus.more.map((item) => (
                                 <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-3 text-sm bg-neutral-900 rounded-md mb-2 hover:opacity-80 transition-opacity"
                                 >
                                    {item.title}
                                 </Link>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Link
                        href="/join-ogl"
                        className="rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white/20"
                     >
                        Join OGL
                     </Link>
                     <Link
                        href="/submit-rfp"
                        className="rounded-full border border-white px-6 py-2 text-sm text-white bg-white/10 transition-colors hover:bg-white/20"
                     >
                        Submit RFP
                     </Link>
                  </div>
               </div>
            </div>
            <div className="md:hidden">
               <HiOutlineMenuAlt3 className="h-8 w-8 text-white" onClick={toggleMobileMenu} />
            </div>
         </nav>

         {mobileMenuOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"></div>}
         {mobileMenuOpen && (
            <div className="fixed top-0 right-0 w-4/5 h-full bg-black text-white z-50 p-6 shadow-lg overflow-y-auto">
               <div className="flex justify-between items-center">
                  <Link href="/">
                     <Image src="/ethlogo.png" alt="Logo" width={190} height={40} className="h-14 w-auto" />
                  </Link>
                  <button onClick={toggleMobileMenu} className="text-2xl rounded-full p-2 bg-white/10">
                     <AiOutlineClose />
                  </button>
               </div>
               <ul className="mt-10 text-lg">
                  {Object.keys(dropdownMenus).map((key) => (
                     <li key={key}>
                        <button onClick={() => toggleDropdown(key as keyof DropdownMenus)} className="w-full flex justify-between items-center py-8 border-b border-white/20">
                           {key.charAt(0).toUpperCase() + key.slice(1)}
                           <FaChevronRight className={`transition-transform ${openDropdown === key ? "rotate-90" : ""} duration-300 ml-2`} />
                        </button>
                        {openDropdown === key && (
                           <ul className="pl-4 py-2 space-y-2">
                              {dropdownMenus[key].map((item) => (
                                 <li key={item.href}>
                                    <Link href={item.href} className="block py-2 text-white/80 hover:text-white">
                                       {item.title}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  ))}
                  <li className="py-8 border-b border-white/20">
                     <Link href="/ogl-groups">OGL Groups</Link>
                  </li>
               </ul>
               <div className="mt-8 space-y-4">
                  <Link href="/join-ogl" className="block text-center border border-white py-3 rounded-full hover:bg-white hover:text-black transition">
                     Join OGL
                  </Link>
                  <Link href="/submit-rfp" className="block text-center border border-white bg-white/10 py-3 rounded-full hover:bg-white hover:text-black transition">
                     Submit RFP
                  </Link>
               </div>
            </div>
         )}
         <div className="h-20 sm:h-28"></div>
      </>
   );
};

export default Navbar;