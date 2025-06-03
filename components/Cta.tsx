import React from 'react'

function Cta() {
  return (
    <div>
      <section
        className="overflow-hidden cta-sec4"
        data-bg-src="assets/img/bg/cta_bg_4.jpg"
      >
        <div className="container z-index-common">
          <div className="row align-items-end justify-content-center text-center text-xl-start">
            <div className="col-xl-7 col-lg-9 space-extra">
              <div className="title-area mb-32">
                <h2 className="sec-title text-white">
                  Welcoming new clients—excited to work with you!
                </h2>
                <p className="sec-text text-white">
                  Mamigas Pharmaceuticals is committed to supporting Ethiopia’s
                  healthcare system by supplying high-quality medicines to local
                  pharmaceutical suppliers and major hospitals. We prioritize
                  reliability, patient safety, and community health, striving to
                  enhance medical care through timely delivery and trusted
                  pharmaceutical solutions.
                </p>
              </div>
              <div className="btn-group justify-content-center">
                <a href="/products" className="th-btn shadow-1">
                  Our Products
                </a>
                <a href="/contact" className="th-btn style2 shadow-1">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="img-box2">
                <img src="assets/img/normal/cta_1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta