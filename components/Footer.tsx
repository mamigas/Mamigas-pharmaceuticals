import React from 'react'

function Footer() {
  return (
    <div>
      <footer
        className="footer-wrapper footer-layout1"
        data-bg-src="assets/img/bg/footer_bg_1.jpg"
      >
        <div className="container z-index-common">
          <div className="newsletter-wrap"></div>
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a href="home-medical-clinic.html">
                        <img
                          src="assets/img/mamigas/mamigas-logo-medium.png"
                          alt="Mamigas"
                        />
                      </a>
                    </div>
                    <p className="about-text">
                      Subscribe to out newsletter today to receive latest news
                      administrate cost effective for tactical data.
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-location-dot"></i> 2478 Street City
                      Ohio 90255
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-envelope"></i>
                      <a
                        href="mailto:info@mediax.com"
                        className="info-box_link"
                      >
                        info@mediax.com
                      </a>
                    </p>
                    <p className="footer-info">
                      <i className="fal fa-phone"></i>
                      <a href="tel:+40276328246" className="info-box_link">
                        +(402) 763 282 46
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
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
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Popular service</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="/service">Reliable Medicine Supply</a>
                      </li>
                      <li>
                        <a href="/service">Specialized Product Range</a>
                      </li>
                      <li>
                        <a href="/service">Efficient Logistics Network</a>
                      </li>
                      <li>
                        <a href="/service">Dedicated Customer Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row gy-2 align-items-center">
              <div className="col-md-7">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright"></i>{" "}
                  {new Date().getFullYear()}
                  <a href="home-medical-clinic.html"> Mamigas</a>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-md-5 text-center text-md-end">
                <div className="th-social">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.whatsapp.com/">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer