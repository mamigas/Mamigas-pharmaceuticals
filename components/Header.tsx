"use client";
import React, { useState } from "react";
import "@/assets/css/app.min.css";
import "@/assets/css/style.css";
import "@/assets/css/fontawesome.min.css";
import CartButton from "./CartButton";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="th-header header-layout1">
        {/* Header Top */}
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-sm-inline-block">
                      <i className="fas fa-phone icon-btn"></i>
                      <b>Phone:</b>
                      <a href="tel:+1636543569">+163-654-3569</a>
                    </li>
                    <li className="d-none d-sm-inline-block">
                      <i className="fas fa-envelope icon-btn"></i>
                      <b>Email:</b>
                      <a href="mailto:info@mediax.com">info@mamigas.com</a>
                    </li>
                    <li className="d-none d-xxl-inline-block">
                      <i className="fas fa-location-dot icon-btn"></i> 1 Barnes
                      Jewish Hospital Plaza, United States
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <span className="social-title">Follow Us On: </span>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Main */}
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        src="/assets/img/mamigas/mamigas-logo-medium.png"
                        alt="Mamigas"
                      />
                    </a>
                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="col-auto d-none d-lg-block">
                  <nav className="main-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/service">Service</a>
                      </li>
                      <li>
                        <a href="/products">Products</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                      {/* <li>
                        <a href="/get-a-quote">Get a Quote</a>
                      </li> */}
                      <li>
                        <CartButton />
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Mobile Hamburger Button */}
                {!isMobileMenuOpen && (
                  <div className="col-auto d-lg-none ">
                    <button
                      onClick={toggleMobileMenu}
                      className="th-menu-toggle"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                    <CartButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0  bg-opacity-50"
              onClick={toggleMobileMenu}
            ></div>

            {/* Sidebar */}
            <div className="relative w-72 bg-white h-full shadow-lg overflow-y-auto p-6 z-50">
              {/* Close Button */}

              <div className="mb-6 flex mx-2">
                {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
                <div>
                  <img
                    src="/assets/img/mamigas/mamigas-logo-medium.png"
                    alt="Mamigas"
                    className="h-10"
                  />
                </div>

                {/* <div className="header-button absolute top-4 right-0 ">
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none "
                    onClick={toggleMobileMenu}
                  >
                    <i className="far fa-times"></i>
                  </button>
                </div> */}
              </div>

              <nav className="space-y-4">
                {[
                  {
                    name: "Home",
                    href: "/",
                    id: 1,
                  },
                  {
                    name: "About",
                    href: "/about-us",
                    id: 2,
                  },
                  {
                    name: "Services",
                    href: "/service",
                    id: 3,
                  },
                  {
                    name: "Products",
                    href: "/products",
                    id: 4,
                  },
                  {
                    name: "Appointment",
                    href: "/appointment",
                    id: 5,
                  },
                  {
                    name: "Blog",
                    href: "/blog",
                    id: 6,
                  },
                  {
                    name: "Contact",
                    href: "/contact",
                    id: 7,
                  },
                  // {
                  //   name: "Get a Quote",
                  //   href: "/get-a-quote",
                  //   id: 8,
                  // },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center  py-1"
                  >
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

