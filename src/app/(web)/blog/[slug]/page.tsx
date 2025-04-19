import type { FullBlog } from "@/lib/interface"
import { client, urlFor } from "@/lib/sanity"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Image from "next/image"

export const metadata = {
   title: 'Blog | Offgrid Labs',
   description: 'Explore articles and updates from Offgrid Labs.',
   openGraph: {
      title: 'Blog | Offgrid Labs',
      description: 'Explore articles and updates from Offgrid Labs.',
   },
};

const components: PortableTextComponents = {
   block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
      normal: ({ children }) => <p className="mb-4">{children}</p>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
   },
   list: {
      bullet: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
   },
   listItem: {
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
      number: ({ children }) => <li className="mb-1">{children}</li>,
   },
   marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ value, children }) => <a href={value.href} className="text-blue-600 hover:underline">{children}</a>,
   },
}

export const revalidate = 30

async function getData(slug: string) {
   const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      publishedAt
    }
  `
   const data = await client.fetch(query, { slug })
   return data
}

export default async function BlogArticle({
   params,
}: {
   params: { slug: string }
}) {
   const { slug } = await params
   const data: FullBlog = await getData(slug)

   return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 font-neue">
         <header className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl bebas-neue-regular text-center leading-tight mb-6">
               {data.title}
            </h1>

            {data.publishedAt && (
               <p className="text-neutral-500 text-center mb-8">
                  {new Date(data.publishedAt).toLocaleDateString('en-US', {
                     year: 'numeric',
                     month: 'long',
                     day: 'numeric',
                  })}
               </p>
            )}

            <div className="relative w-full md:w-2/3 aspect-video rounded-lg overflow-hidden shadow-lg">
               <Image
                  src={urlFor(data.titleImage).url()}
                  alt={`${data.title} - featured image`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                  priority
                  className="object-cover"
               />
            </div>
         </header>

         <article className="max-w-3xl mx-auto mt-12">
            <div className="prose prose-sm sm:prose md:prose-lg lg:prose-2xl prose-slate mx-auto">
               <PortableText value={data.content} components={components} />
            </div>
         </article>
      </main>
   )
}
