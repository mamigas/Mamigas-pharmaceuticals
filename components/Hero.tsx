import React from 'react'

function Hero() {
  return (
    <div>
      <div
        className="th-hero-wrapper hero-2"
        id="hero"
        data-bg-src="assets/img/hero/hero_bg_2_1.jpg"
      >
        <div className="hero-inner">
          <div className="container">
            <div className="hero-style2">
              <span className="sub-title">
                <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                Reliable 24/7 Pharmaceutical Supply Service
              </span>
              <h1 className="hero-title2">
                <span className="title1">
                  Pharmaceutical<span className="line-text"> Supply.</span>
                </span>
                <span className="title2">Support.</span>
              </h1>
              <p className="hero-text">
                Mamigas Pharmaceuticals is dedicated to supplying quality
                medicines to hospitals and distributors, supporting patient care
                and advancing community health across Ethiopia.
              </p>
              <div className="btn-group justify-content-center">
                <a href="/about-us" className="th-btn">
                  About Us
                </a>
                <a href="/service" className="th-btn style4">
                  See All Services
                </a>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img
              className="h-auto w-auto"
              src="assets/img/hero/drugs-hero-mamigas.png"
              alt="Image"
            />
          </div>
          <div className="hero-shape1">
            <img src="assets/img/hero/hero_shape_2_1.svg" alt="shape" />
          </div>
          <div className="hero-shape2">
            <img src="assets/img/hero/hero_shape_2_2.svg" alt="shape" />
          </div>
          <div className="hero-shape3">
            <img src="assets/img/hero/hero_shape_2_3.svg" alt="shape" />
          </div>
          <div className="hero-shape4">
            <img src="assets/img/hero/hero_shape_2_4.svg" alt="shape" />
          </div>
          <div className="hero-shape5">
            <img src="assets/img/hero/hero_shape_2_5.svg" alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero