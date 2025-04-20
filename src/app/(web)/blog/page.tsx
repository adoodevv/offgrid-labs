import { SimpleBlogCard } from "@/lib/interface";
import { client } from '@/lib/sanity';
import BlogCard from "@/components/BlogCard";

export const metadata = {
   title: 'Blog | Offgrid Labs',
   description: 'Explore articles and updates from Offgrid Labs.',
   keywords: 'Offgrid Labs, Products, Technology, Borderless Access',
   openGraph: {
      title: 'Blog | Offgrid Labs',
      description: 'Explore articles and updates from Offgrid Labs.',
   },
};


async function getData() {
   const query = `
  *[_type == 'blog'] | order(publishedAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    publishedAt
  }`;

   const data = await client.fetch(query);
   return data;
}

export default async function Blog() {
   const data: SimpleBlogCard[] = await getData();

   return (
      <div className="flex-grow flex flex-col relative overflow-hidden py-20">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl my-6">Blog</h1>

            {data.length === 0 ? (
               <p className="text-lg mt-8 opacity-80">Coming soon...</p>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {data.map((blog, index) => (
                     <BlogCard key={blog.currentSlug || index} blog={blog} />
                  ))}
               </div>
            )}
         </div>
      </div>

   )
}
