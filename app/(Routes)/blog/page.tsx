export const dynamic = "force-dynamic";
import MainBlog from "@/components/blog/MainBlog";
import Breadcumb from "@/components/Breadcumb";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <Breadcumb title="Our Latest Blog's" subtitle="Blog" />
      <MainBlog />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default page;
