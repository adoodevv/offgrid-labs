export default function BlogPostSkeleton() {
   return (
      <div className="flex-grow flex flex-col relative overflow-hidden pt-16">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="h-12 bg-gray-200 rounded-full w-3/4 mb-6 animate-pulse"></div>

            <div className="flex items-center gap-4 mb-8">
               <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
               <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded-full w-32 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-24 animate-pulse"></div>
               </div>
            </div>

            <div className="aspect-video bg-gray-200 rounded-xl mb-8 animate-pulse"></div>

            <div className="space-y-4">
               {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded-full animate-pulse"
                     style={{ width: i % 3 === 0 ? '90%' : i % 2 === 0 ? '80%' : '95%' }}></div>
               ))}
               <div className="h-64 bg-gray-200 rounded-xl mt-8 animate-pulse"></div>
               {[...Array(6)].map((_, i) => (
                  <div key={i + 10} className="h-4 bg-gray-200 rounded-full animate-pulse"
                     style={{ width: i % 2 === 0 ? '85%' : '75%' }}></div>
               ))}
            </div>
         </div>
      </div>
   );
}