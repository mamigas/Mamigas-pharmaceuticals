
import type { Metadata } from "next";
import "@/assets/css/app.min.css";
import "@/assets/css/style.css";
import "@/assets/css/fontawesome.min.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import ClientCartProvider from "./ClientCartProvider";

// google-site-verification=VrlRFuTxfSfr7HzML_UAqijG8pZr2N-7Rj1n_zStfL4

export const metadata = {
  metadataBase: new URL("https://mamigaspharmaceuticals.com"),
  title: "Mamigas Pharmaceuticals | Trusted Medicine Supplier",
  description:
    "Mamigas Pharmaceuticals is a reliable pharmaceutical supplier based in Ethiopia. We provide high-quality medicines to hospitals and distributors, supporting better healthcare through dependable service and ethical practices.",
  verification: {
    google: "VrlRFuTxfSfr7HzML_UAqijG8pZr2N-7Rj1n_zStfL4", // Update if different
  },
  openGraph: {
    title: "Mamigas Pharmaceuticals | Trusted Medicine Supplier",
    description:
      "Mamigas Pharmaceuticals supplies certified, affordable medicines to hospitals and pharmaceutical distributors across Ethiopia.",
    url: "https://mamigaspharmaceuticals.com", // Replace with your actual domain
    siteName: "Mamigas Pharmaceuticals",
    images: [
      {
        url: "/favicon.ico", // Replace with your actual image path
        alt: "Mamigas Pharmaceuticals Preview",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mamigas Pharmaceuticals | Trusted Medicine Supplier",
    description:
      "Supplying certified, high-quality pharmaceuticals to healthcare providers across Ethiopia.",
    site: "@mamigaspharma", // Replace with your actual Twitter handle if available
    creator: "@mamigaspharma", // Replace with your actual Twitter handle if available
    images: [
      {
        url: "/favicon.ico", // Replace with your actual image path
        alt: "Mamigas Pharmaceuticals Preview",
      },
    ],
  },
  links: {
    linkedin: "https://www.linkedin.com/company/mamigaspharma", // Replace with actual page
    github: "", // Leave empty or remove if not applicable
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body className={``}>
        <ClientCartProvider>
          <Header />
          {children}
          <Footer />
        </ClientCartProvider>
        {/* Proper JS loading */}
        <Script
          src="/assets/js/vendor/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/app.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
