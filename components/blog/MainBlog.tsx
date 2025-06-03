export const dynamic = "force-dynamic";

import React from "react";
import {
  getBlogPosts,
  getCategories,
  getRecentPosts,
} from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import Script from "next/script";

async function MainBlog() {
  const blogPosts = await getBlogPosts();
  const categories = await getCategories();
  const recentPosts = await getRecentPosts();
  console.log(recentPosts);
  return (
    <div>
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {blogPosts.map((post: any) => (
                <div
                  key={post.slug.current}
                  className="th-blog blog-single has-post-thumbnail"
                >
                  <div className="blog-img">
                    <a href={`/blog/${post.slug.current}`}>
                      <img
                        src={urlForImage(post.mainImage).url() || ""}
                        alt={post.title || ""}
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href={`/blog/${post.slug.current}`}>
                        <i className="fal fa-user"></i>By Mamigas
                      </a>
                      <a href={`/blog/${post.slug.current}`}>
                        <i className="fal fa-calendar"></i>
                        {new Date(post.publishedAt).toLocaleDateString() ||
                          "Unknown"}
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href={`/blog/${post.slug.current}`}>
                        {post.title || ""}
                      </a>
                    </h2>
                    <p className="blog-text">{post.excerpt || ""}</p>
                    <a
                      href={`/blog/${post.slug.current}`}
                      className="th-btn btn-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}

              {/* paggination starts here */}
              {/* <div className="th-pagination text-center">
                <ul>
                  <li>
                    <a href="blog.html">1</a>
                  </li>
                  <li>
                    <a href="blog.html">2</a>
                  </li>
                  <li>
                    <a href="blog.html">3</a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <i className="far fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* paggiantion ends here */}
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    {categories.map((category: any) => (
                      <li key={category._id}>
                        <a href={`/blog/category/${category.slug.current}`}>
                          {category.title.trim() || "No Category Title"}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    {recentPosts.map((post: any) => (
                      <div className="recent-post" key={post.slug.current}>
                        <div className="media-img">
                          <a href={`/blog/${post.slug.current}`}>
                            <img
                              src={urlForImage(post.mainImage)?.url() || ""}
                              alt={post.title || ""}
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href={`/blog/${post.slug.current}`}
                            >
                              {post.title || ""}
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href={`/blog/${post.slug.current}`}>
                              <i className="fal fa-calendar"></i>
                              {new Date(
                                post.publishedAt
                              )?.toLocaleDateString() || ""}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default MainBlog;
