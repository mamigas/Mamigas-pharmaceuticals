import React from 'react'

function About() {
  return (
    <div>
      <div className="space" id="about-sec">
        <div className="shape-mockup" data-top="0" data-right="0">
          <img src="assets/img/shape/pattern_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup jump" data-bottom="10%" data-right="3%">
          <img src="assets/img/shape/medicine_1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/mamigas/mamigas-about.jpg" alt="About" />
                </div>
                <div className="about-info">
                  <h3 className="box-title">Mamigas</h3>
                  <p className="box-text">
                    Reliable Pharmaceutical <br />
                    Partner.
                  </p>
                  <div className="box-review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <a href="tel:+16356478965" className="box-link">
                    <i className="fa-solid fa-phone"></i> +163 564 78965
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-2 text-center text-xl-start">
                <div className="title-area mb-32">
                  <span className="sub-title">
                    <img
                      src="assets/img/theme-img/title_icon.svg"
                      alt="shape"
                    />
                    About Us Company
                  </span>
                  <h2 className="sec-title">
                    Affordable Pharmaceutical Supply Solutions
                  </h2>
                  <p className="sec-text">
                    At Mamigas Pharmaceuticals, our purpose is to enhance
                    community health by supplying safe, affordable, and
                    high-quality medicines to hospitals and pharmaceutical
                    distributors.
                  </p>
                </div>
                <div className="mb-30 mt-n1">
                  <div className="checklist style2 list-two-column">
                    <ul>
                      <li>
                        <i className="fas fa-heart-pulse"></i> Integrity
                      </li>
                      <li>
                        <i className="fas fa-heart-pulse"></i> Reliability
                      </li>
                      <li>
                        <i className="fas fa-heart-pulse"></i> Innovation
                      </li>
                      <li>
                        <i className="fas fa-heart-pulse"></i> Commitment
                      </li>
                      <li>
                        <i className="fas fa-heart-pulse"></i> Collaboration
                      </li>
                      <li>
                        <i className="fas fa-heart-pulse"></i> Quality
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a href="/about-us" className="th-btn">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;