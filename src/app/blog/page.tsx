import React from 'react'

const Blog = () => {
   return (
      <div className="flex-grow flex flex-col relative overflow-hidden">
         <div className="container mx-auto px-4 pt-12">
            <h1 className="text-6xl bebas-neue-regular">BOARD MEMBERS OF THE OGL: <br /> MEET OUR LEADERSHIP TEAM </h1>
            <p className="text-lg mt-8 opacity-80">
               The EEA is a member-led industry organization whose objective is to drive the use of Enterprise Ethereum and Mainnet Ethereum <br /> blockchain technology as an open-standard to empower ALL enterprises.  Meet our Board of Directors and the EEA Staff.
            </p>
         </div>
         <div className="container mx-auto py-12 grid grid-cols-4">
            {/* Replace with your blog posts */}
            <div className="col-span-4">
               <h2 className="text-4xl font-bold">Blog Posts</h2>
               <p className="text-lg mt-4">Coming soon...</p>
            </div>
         </div>
      </div>
   )
}

export default Blog
