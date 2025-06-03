export const dynamic = "force-dynamic";
import Breadcumb from "@/components/Breadcumb";
import Product from "@/components/product/Product";
import {
  getAllProducts,
  getAllProdutsCategories,
  getProductsByCategory,
} from "@/lib/sanity/fetchQueries";
import Script from "next/script";
import React from "react";

async function page() {
  const products = await getAllProducts();
  const productsCategory = await getAllProdutsCategories();
  return (
    <div>
      {/* <Breadcumb title="Products" subtitle="Products" /> */}
      <Product products={products} productsCategory={productsCategory} />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default page;
