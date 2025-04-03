'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

type TBreadCrumbProps = {
   containerClasses?: string;
   listClasses?: string;
   activeClasses?: string;
   capitalizeLinks?: boolean;
};

const Breadcrumb = ({
   containerClasses = 'flex items-center text-lg',
   listClasses = 'text-white/60 font-semibold hover:opacity-80 transition-all',
   activeClasses = 'text-white font-bold opacity-100',
   capitalizeLinks = true,
}: TBreadCrumbProps) => {
   const paths = usePathname();
   const pathNames = paths ? paths.split('/').filter((path) => path) : [];

   if (pathNames.length === 0) return null;

   return (
      <nav aria-label="breadcrumb" className="pt-22">
         <ul className={containerClasses}>
            {pathNames.map((link, index) => {
               let href = `/${pathNames.slice(0, index + 1).join('/')}`;
               let isLast = index === pathNames.length - 1;
               let itemClasses = isLast ? `${activeClasses}` : `${listClasses}`;

               let itemLink = link.replace(/-/g, ' ');
               if (capitalizeLinks) {
                  itemLink = itemLink
                     .split(' ')
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                     .join(' ')
                     .toUpperCase();
               }

               return (
                  <React.Fragment key={index}>
                     {index > 0 && (
                        <span className="mx-4 text-gray-500">
                           <FaChevronRight className="h-3 w-3" />
                        </span>
                     )}
                     <li>
                        <Link href={href} className={itemClasses}>
                           {itemLink}
                        </Link>
                     </li>
                  </React.Fragment>
               );
            })}
         </ul>
      </nav>
   );
};

export default Breadcrumb;
