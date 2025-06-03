import { defineQuery } from "next-sanity";

// GROQ Query for Blog Listing Page
const fetchBlogPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "categories": categories[]->title
}
`);

const fetchSingleBlog = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    mainImage,
    body,
  }
  `);

// Query for Recent Posts (limit 3)
const fetchRecentPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc)[0...3] {
  title,
  slug,
  mainImage,
  publishedAt
}
`);

// Query for Posts by Category
 const fetchPostsByCategory = defineQuery(`
    *[_type == "post" && references(*[_type == "category" && title == $category]._id)] {
      title,
      slug,
      mainImage,
      publishedAt
    }
  `);

// GROQ Query to Fetch All Categories
const fetchCategories = defineQuery(`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}
`);

const fetchPostsByCategorySlug = defineQuery(`
  *[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    "categories": categories[]->title
  }
`);

const fetchAllProducts = defineQuery(`*[_type == "product"]{
  _id,
  title,
  slug,
  description,
  price,
  stock,
  "imageUrl": image.asset->url,
  publishedAt,
  category->{
    _id,
    title
  }
} | order(publishedAt desc)`);

const fetchProductCategories = defineQuery(`
  *[_type == "productCategory"]{
  _id,
  title,
  slug,
  description
} | order(title asc)
`);

const fetchSingleProduct = defineQuery(`
  *[_type == "product" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  image,
  description,
  price,
  stock,
  publishedAt,
  "category": category->{
    _id,
    title
  }
}
`);

const fetchProductsByCategory =
  defineQuery(`*[_type == "product" && category->slug.current == $categorySlug]{
  _id,
  title,
  slug,
  image,
  description,
  price,
  stock,
  publishedAt,
  "category": category->{
    _id,
    title,
    slug
  }
}
`);

export {
  fetchBlogPosts,
  fetchRecentPosts,
  fetchPostsByCategory,
  fetchCategories,
  fetchSingleBlog,
  fetchPostsByCategorySlug,
  fetchAllProducts,
  fetchProductCategories,
  fetchSingleProduct,
  fetchProductsByCategory
};
