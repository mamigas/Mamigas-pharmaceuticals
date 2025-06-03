import React from 'react'

function Services() {
  return (
    <div>
      <section
        className="overflow-hidden bg-smoke space"
        id="service-sec"
        data-bg-src="assets/img/bg/service_bg_1.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Our Services
                </span>
                <h2 className="sec-title">
                  Mamigas Pharmaceuticals Technical Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="service-card"
                data-bg-src="assets/img/service/service_card_1.jpg"
              >
                <div className="box-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="Service" />
                </div>
                <div className="box-icon">
                  <img src="assets/img/icon/service_card_1.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">Reliable Medicine Supply</a>
                </h3>
                <p className="box-text">Medicine Supply</p>
                <a href="/service" className="th-btn btn-sm style2 theme-color">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="service-card"
                data-bg-src="assets/img/service/service_card_1.jpg"
              >
                <div className="box-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="Service" />
                </div>
                <div className="box-icon">
                  <img src="assets/img/icon/service_card_1.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">24/7 Medication Access</a>
                </h3>
                <p className="box-text">Medication Access</p>
                <a href="/service" className="th-btn btn-sm style2 theme-color">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="service-card"
                data-bg-src="assets/img/service/service_card_1.jpg"
              >
                <div className="box-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="Service" />
                </div>
                <div className="box-icon">
                  <img src="assets/img/icon/service_card_1.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">On-Time Medicine Delivery</a>
                </h3>
                <p className="box-text">Medicine Delivery</p>
                <a href="/service" className="th-btn btn-sm style2 theme-color">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="service-card"
                data-bg-src="assets/img/service/service_card_1.jpg"
              >
                <div className="box-shape">
                  <img src="assets/img/bg/service_card_bg.png" alt="Service" />
                </div>
                <div className="box-icon">
                  <img src="assets/img/icon/service_card_1.svg" alt="Icon" />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    Seamless Prescription Delivery
                  </a>
                </h3>
                <p className="box-text">Seamless Prescription</p>
                <a href="/service" className="th-btn btn-sm style2 theme-color">
                  Read More
                </a>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_5.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_5.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Gynecologists</a>
              </h3>
              <p className="box-text">30+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
                >Read More</a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_6.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_6.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Ophthalmology</a>
              </h3>
              <p className="box-text">24+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
                >Read More</a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_7.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_7.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Orthopedics</a>
              </h3>
              <p className="box-text">26+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
                >Read More</a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="service-card"
              data-bg-src="assets/img/service/service_card_8.jpg"
            >
              <div className="box-shape">
                <img src="assets/img/bg/service_card_bg.png" alt="Service" />
              </div>
              <div className="box-icon">
                <img src="assets/img/icon/service_card_8.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Cardiology</a>
              </h3>
              <p className="box-text">20+ Doctors</p>
              <a
                href="service-details.html"
                className="th-btn btn-sm style2 theme-color"
                >Read More</a>
            </div>
          </div>  */}
          </div>
          <div className="mt-5 pt-2 space-extra-bottom">
            <p className="round-text">
              <span className="text">
                You Get Our More services...
                <a href="/service" className="line-btn">
                  Explore All Services
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services