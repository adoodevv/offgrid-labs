'use client';

import Link from 'next/link';
import { useState } from 'react';

const filters = ['Business Development', 'Engineering', 'Finance', 'Marketing', 'Other', 'People', 'Product'];

const jobs = [
   { title: 'Partnerships Manager, DeFi', category: 'Business Development', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Partnerships Manager, Ecosystems', category: 'Business Development', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Sr. Partnership Manager, Fintech', category: 'Business Development', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Blockchain Engineer - Smart Contracts', category: 'Engineering', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Director of Accounting', category: 'Finance', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Director of Brand Marketing', category: 'Marketing', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Marketing Events Coordinator', category: 'Marketing', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Growth Marketing Lead, Gaming', category: 'Marketing', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Executive Assistant', category: 'People', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: 'Lead Developer Relations', category: 'Product', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
   { title: "Don't see the right role for you? Apply here!", category: 'Other', link: 'https://jobs.lever.co/', type: 'Remote, Full-Time' },
];

export default function JobBoard() {
   const [selectedFilter, setSelectedFilter] = useState<Filter>(null);

   interface Job {
      title: string;
      category: string;
   }

   type Filter = string | null;

   const toggleFilter = (filter: string): void => {
      setSelectedFilter((prev: Filter) => (prev === filter ? null : filter));
   };

   const filteredJobs = selectedFilter
      ? jobs.filter(job => job.category === selectedFilter)
      : jobs;

   return (
      <div className="mt-8">
         <div className="flex flex-wrap justify-center gap-2 mb-12 mt-20">
            {filters.map((filter) => (
               <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`text-lg sm:text-xl px-4 py-2 ${selectedFilter === filter ? 'bg-white text-black' : 'bg-neutral-900 text-white hover:opacity-50'
                     }`}
               >
                  {filter}
               </button>
            ))}
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
               <div key={index} className="w-full">
                  <Link href={job.link} className="hover:opacity-80 block h-full">
                     <div className="px-4 py-8 bg-neutral-900 w-full h-full">
                        <h2 className="text-lg sm:text-xl font-semibold">{job.title}</h2>
                        <p className="text-sm sm:text-base text-neutral-500">{job.category}, {job.type}</p>
                        <button className="text-base sm:text-lg mt-6 px-4 py-2 bg-white text-black hover:scale-105 transition-all duration-300">
                           Learn more
                        </button>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}