import Script from 'next/script';
import React from 'react'

function Testimonials() {
  return (
    <div>
      <section className="space" id="testi-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
              Testimonials
            </span>
            <h2 className="sec-title">What Our Present Says?</h2>
          </div>
          <div
            className="swiper th-slider"
            id="testiSlide1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"2"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-card bg-smoke">
                  <div className="box-review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <div className="box-quote">
                    <img src="assets/img/icon/quote_1.svg" alt="Icon" />
                  </div>
                  <p className="box-text">
                    “Objectively deploy open-source web-readiness impactful
                    bandwidth. Compellingly coordinate business deliverables
                    rather equity invested technologies. Phosfluorescently
                    reinvent maintainable.”
                  </p>
                  <div className="box-profile">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_1.jpg"
                        alt="Avater"
                      />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title">Pelican Steve</h3>
                      <span className="box-desig">Neurologist</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-card bg-smoke">
                  <div className="box-review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <div className="box-quote">
                    <img src="assets/img/icon/quote_1.svg" alt="Icon" />
                  </div>
                  <p className="box-text">
                    “Objectively deploy open-source web-readiness impactful
                    bandwidth. Compellingly coordinate business deliverables
                    rather equity invested technologies. Phosfluorescently
                    reinvent maintainable.”
                  </p>
                  <div className="box-profile">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_2.jpg"
                        alt="Avater"
                      />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title">Alexa Milton</h3>
                      <span className="box-desig">Physiotherapist</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-card bg-smoke">
                  <div className="box-review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <div className="box-quote">
                    <img src="assets/img/icon/quote_1.svg" alt="Icon" />
                  </div>
                  <p className="box-text">
                    “Objectively deploy open-source web-readiness impactful
                    bandwidth. Compellingly coordinate business deliverables
                    rather equity invested technologies. Phosfluorescently
                    reinvent maintainable.”
                  </p>
                  <div className="box-profile">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_1.jpg"
                        alt="Avater"
                      />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title">Pelican Steve</h3>
                      <span className="box-desig">Neurologist</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-card bg-smoke">
                  <div className="box-review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <div className="box-quote">
                    <img src="assets/img/icon/quote_1.svg" alt="Icon" />
                  </div>
                  <p className="box-text">
                    “Objectively deploy open-source web-readiness impactful
                    bandwidth. Compellingly coordinate business deliverables
                    rather equity invested technologies. Phosfluorescently
                    reinvent maintainable.”
                  </p>
                  <div className="box-profile">
                    <div className="box-img">
                      <img
                        src="assets/img/testimonial/testi_1_2.jpg"
                        alt="Avater"
                      />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title">Alexa Milton</h3>
                      <span className="box-desig">Physiotherapist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-pagination"></div>
          </div>
        </div>
      </section>
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default Testimonials