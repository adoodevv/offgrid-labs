'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { SimpleBlogCard } from "@/lib/interface";
import { formatDate } from '@/lib/utils';
import { GoArrowUpRight } from "react-icons/go";

export default function BlogCard({ blog }: { blog: SimpleBlogCard }) {
   return (
      <div className="group overflow-hidden">
         <div className="relative h-62 w-full">
            <Image
               fill
               src={urlFor(blog.titleImage).url()}
               alt={blog.title}
               className="object-cover"
            />
         </div>

         <div className="py-5">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
               {blog.title}
            </h3>

            <p className="text-base md:text-lg text-neutral-500 line-clamp-3 mb-2 font-medium">
               {blog.smallDescription}
            </p>

            {blog.publishedAt && (
               <p className="text-base md:text-lg text-neutral-500 my-4">
                  {formatDate(blog.publishedAt)}
               </p>
            )}

            <Link
               href={`/blog/${blog.currentSlug}`}
               className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 w-full text-lg md:text-xl text-center bg-neutral-900 border border-white/10 text-white hover:opacity-80 transition-all duration-300"
            >
               Read More<GoArrowUpRight className="w-8 h-8 ml-1" />
            </Link>
         </div>
      </div>
   );
}