export interface SimpleBlogCard {
   title: string;
   smallDescription: string;
   currentSlug: string;
   titleImage: any;
   publishedAt: string;
}

export interface FullBlog {
   currentSlug: string;
   title: string;
   content: string;
   titleImage: any;
   publishedAt: string;
   data: {
      title: string;
      content: string;
      titleImage: any;
      publishedAt: string;
   };
}

export interface BlogArticleProps {
   params: {
      slug: string;
   };
}
