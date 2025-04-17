import { SimpleBlogCard } from "@/lib/interface";
import { client } from '@/lib/sanity';
import BlogCard from './BlogCard';

async function getData() {
  const query = `
  *[_type == 'blog'] | order(publishedAt desc) [0...3] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    publishedAt
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function LatestBlogPosts() {
  const data: SimpleBlogCard[] = await getData();

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden pt-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular">Latest Blog Posts</h1>

        {data.length === 0 ? (
          <p className="text-lg mt-8 opacity-80">Coming soon...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data.map((blog, index) => (
              <BlogCard delay={index * 0.2} key={blog.currentSlug || index} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}