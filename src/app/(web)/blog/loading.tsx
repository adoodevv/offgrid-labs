import BlogSkeleton from '@/components/BlogSkeleton';

export default function Loading() {
   return (
      <div className="flex-grow flex flex-col relative overflow-hidden pt-16">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular">Blog</h1>
            <BlogSkeleton />
         </div>
      </div>
   );
}