export default function BlogSkeleton() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
         {[...Array(6)].map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 animate-pulse">
               <div className="h-48 bg-gray-200 rounded-md"></div>
               <div className="h-6 bg-gray-200 rounded mt-4 w-3/4"></div>
               <div className="h-4 bg-gray-200 rounded mt-2 w-full"></div>
               <div className="h-4 bg-gray-200 rounded mt-2 w-5/6"></div>
               <div className="h-4 bg-gray-200 rounded mt-2 w-1/2"></div>
            </div>
         ))}
      </div>
   );
}