export default {
   name: 'blog',
   type: 'document',
   title: 'Blog',
   fields: [
      {
         name: 'title',
         type: 'string',
         title: 'Title of blog article',
      },
      {
         name: 'slug',
         type: 'slug',
         title: 'Slug of blog article',
         options: {
            source: 'title',
            maxLength: 96,
         },
      },
      {
         name: 'publishedAt',
         title: 'Published At',
         type: 'datetime',
      },
      {
         name: 'titleImage',
         type: 'image',
         title: 'Title Image',
      },
      {
         name: 'smallDescription',
         type: 'text',
         title: 'Small Description',
      },
      {
         name: 'content',
         type: 'array',
         title: 'Content',
         of: [
            {
               type: 'block',
            },
         ],
      }
   ]
}