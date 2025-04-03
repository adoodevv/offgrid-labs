import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
   return (
      <footer className="bg-white/10 text-white py-12 mt-8">
         <div className="container mx-auto px-6">
            {/* Logo */}
            <div className="mb-8">
               <Image
                  src="/ethlogo.png"
                  alt="Enterprise Ethereum Alliance Logo"
                  width={250}
                  height={60}
                  className="h-12 w-auto"
               />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-700 my-8"></div>

            {/* Footer Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
               {/* About Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">About</h3>
                  <ul className="space-y-2">
                     <li><Link href="/eea-members" className="text-gray-400 hover:text-white">EEA Members</Link></li>
                     <li><Link href="/members-of-the-board" className="text-gray-400 hover:text-white">Members of the board</Link></li>
                     <li><Link href="/members-spotlight" className="text-gray-400 hover:text-white">Members spotlight</Link></li>
                     <li><Link href="/the-eea-team" className="text-gray-400 hover:text-white">The EEA Team</Link></li>
                  </ul>
               </div>

               {/* Groups Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">Groups</h3>
                  <ul className="space-y-2">
                     <li><Link href="/eea-groups" className="text-gray-400 hover:text-white">EEA Groups</Link></li>
                  </ul>
               </div>

               {/* Content Column */}
               <div>
                  <h3 className="text-lg font-medium mb-4">Content</h3>
                  <ul className="space-y-2">
                     <li><Link href="/technical-specifications" className="text-gray-400 hover:text-white">Technical specifications</Link></li>
                     <li><Link href="/webinars" className="text-gray-400 hover:text-white">Webinars</Link></li>
                     <li><Link href="/eea-primers" className="text-gray-400 hover:text-white">EEA Primers</Link></li>
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
                  <ul className="space-y-2">
                     {/* Empty list as shown in the image */}
                  </ul>
               </div>
            </div>

            {/* Divider */}
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
               <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/company/enterprise-ethereum-alliance"
                     className="text-gray-400 hover:text-white"
                     target="_blank"
                     rel="noopener noreferrer">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                     </svg>
                  </Link>
                  <Link href="https://twitter.com/EntEthAlliance"
                     className="text-gray-400 hover:text-white"
                     target="_blank"
                     rel="noopener noreferrer">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                     </svg>
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}