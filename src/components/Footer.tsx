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