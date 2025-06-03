export const dynamic = "force-dynamic";
import { Metadata } from "next";
import Breadcumb from "@/components/Breadcumb";
import { getSingleBlog } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Script from "next/script";

// this is automatically inferred but you can define explicitly
interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ Page Component
export default async function BlogDetail({ params }: PageProps) {
  const post = await getSingleBlog(params.slug);

  if (!post) return <div>Blog not found.</div>;

  return (
    <div>
      <div>
        <Breadcumb title={post.title} subtitle="Blog Detail" />
      </div>
      <div className="container space-y-6 py-10">
        <div className="blog-meta">
          <a className="author" href={`/blog/${post.slug.current}`}>
            <i className="fal fa-user"></i>By Mamigas
          </a>
          <a href={`/blog/${post.slug.current}`}>
            <i className="fal fa-calendar"></i>
            {new Date(post.publishedAt).toLocaleDateString()}
          </a>
        </div>

        {post.mainImage && (
          <img
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            className="w-full max-h-[400px] object-cover rounded-xl"
          />
        )}

        <div className="prose max-w-full">
          <PortableText value={post.body} />
        </div>
      </div>
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}
