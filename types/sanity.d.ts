// types/sanity.d.ts or a shared types file

export type Slug = {
    current: string;
  };
  
  export type Image = {
    asset: {
      _ref: string;
      _type: string;
      url?: string;
    };
  };
  
  export type Category = {
    _id: string;
    title: string;
    slug: Slug;
  };
  
  export type BlogPost = {
    _id: string;
    title: string;
    slug: Slug;
    publishedAt: string;
    body: any; // Use PortableTextBlock[] if you're using @portabletext/react
    mainImage?: Image;
    excerpt?: string;
    categories?: string[]; // or Category[] if you're populating the full object
  };
  
  export type Product = {
    _id: string;
    title: string;
    slug: Slug;
    description: string;
    price: number;
    stock: number;
    image?: Image;
    publishedAt: string;
    category: Category;
  };
  