export const dynamic = "force-dynamic";

import React from 'react'
import { getBlogPosts, getAllProducts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image"; 

async function Blogs() {
    const blogPosts = await getBlogPosts();
    const products = await getAllProducts();
    // console.log(products);
  
  return (
    <div>
      <section
        className="space"
        id="blog-sec"
        data-bg-src="assets/img/bg/blog_bg_1.jpg"
      >
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  Our Blog
                </span>
                <h2 className="sec-title">Our Latest News & Blogs</h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <a href="/blog" className="th-btn style4">
                  View All Post
                </a>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                {blogPosts.map((post: any) => (
                  <div className="swiper-slide" key={post.slug.current}>
                    <div className="blog-card">
                      <div className="blog-img">
                        <img
                          src={
                            urlForImage(post.mainImage)
                              ?.width(400)
                              .height(250)
                              .url() || ""
                          }
                          alt={post.title || ""}
                        />
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <a href={`/blog/${post.slug.current}`}>
                            <i className="fal fa-user"></i>By{" "}
                            {post.author?.name || "Mamigas"}
                          </a>
                          <a href={`/blog/${post.slug.current}`}>
                            <i className="fal fa-calendar"></i>
                            {new Date(post.publishedAt).toLocaleDateString() ||
                              ""}
                          </a>
                        </div>
                        <h3 className="box-title">
                          <a href={`/blog/${post.slug.current}`}>
                            {post.title && post.title.length > 50
                              ? post.title.slice(0, 50) + "..."
                              : post.title || ""}
                          </a>
                        </h3>
                        <a
                          href={`/blog/${post.slug.current}`}
                          className="th-btn btn-sm"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              data-slider-prev="#blogSlider1"
              className="slider-arrow slider-prev"
            >
              <i className="far fa-arrow-left"></i>
            </button>
            <button
              data-slider-next="#blogSlider1"
              className="slider-arrow slider-next"
            >
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs