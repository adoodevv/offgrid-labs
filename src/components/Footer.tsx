import Link from 'next/link';
import Image from 'next/image';
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
   return (
      <footer className="bg-white/10 text-white py-12 mt-8">
         <div className="container mx-auto px-6">
            <div className="mb-8">
               <Image
                  src="/ethlogo.png"
                  alt="Enterprise Ethereum Alliance Logo"
                  width={250}
                  height={60}
                  className="h-12 w-auto"
               />
            </div>

            <div className="w-full h-px bg-gray-700 my-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
               {/* About Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">About</h3>
                  <ul className="space-y-2">
                     <li><Link href="/ogl-members" className="text-gray-400 hover:text-white">OGL Members</Link></li>
                     <li><Link href="/members-of-the-board" className="text-gray-400 hover:text-white">Members of the board</Link></li>
                     <li><Link href="/members-spotlight" className="text-gray-400 hover:text-white">Members spotlight</Link></li>
                     <li><Link href="/the-ogl-team" className="text-gray-400 hover:text-white">The OGL Team</Link></li>
                  </ul>
               </div>

               {/* Groups Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">Groups</h3>
                  <ul className="space-y-2">
                     <li><Link href="/ogl-groups" className="text-gray-400 hover:text-white">OGL Groups</Link></li>
                  </ul>
               </div>

               {/* Content Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">Content</h3>
                  <ul className="space-y-2">
                     <li><Link href="/technical-specifications" className="text-gray-400 hover:text-white">Technical specifications</Link></li>
                     <li><Link href="/webinars" className="text-gray-400 hover:text-white">Webinars</Link></li>
                     <li><Link href="/eea-primers" className="text-gray-400 hover:text-white">OGL Primers</Link></li>
                     <li><Link href="/surveys-reports" className="text-gray-400 hover:text-white">Surveys & Reports</Link></li>
                  </ul>
               </div>

               {/* News & Events Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">News & Events</h3>
                  <ul className="space-y-2">
                     <li><Link href="/press-releases" className="text-gray-400 hover:text-white">Press Releases</Link></li>
                     <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  </ul>
               </div>

               {/* FAQs Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">FAQs</h3>
               </div>
            </div>

            <div className="w-full h-px bg-gray-700 my-8"></div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center">
               {/* Legal Links */}
               <div className="flex space-x-6 mb-4 md:mb-0">
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                     Privacy Policy
                  </Link>
                  <Link href="/terms-condition" className="text-gray-400 hover:text-white">
                     Terms and Condition
                  </Link>
               </div>

               {/* Social Media Icons */}
               <div className="flex space-x-4 items-center">
                  <Link href="https://www.linkedin.com/company/enterprise-ethereum-alliance"
                     className="text-gray-400 hover:text-white"
                     target="_blank"
                     rel="noopener noreferrer">
                     <CiLinkedin className="h-7 w-7 text-white" />
                  </Link>
                  <Link href="https://twitter.com/EntEthAlliance"
                     className="text-gray-400 hover:text-white"
                     target="_blank"
                     rel="noopener noreferrer">
                     <BsTwitterX className="h-5 w-5 text-white" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}