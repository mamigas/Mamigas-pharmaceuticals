import React from 'react'

function WhyChoose() {
  return (
    <div>
      <div className="overflow-hidden space">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 text-center text-xl-start">
              <div className="pe-xxl-5 mb-40 mb-xl-0">
                <div className="title-area mb-32">
                  <span className="sub-title">
                    <img
                      src="assets/img/theme-img/title_icon.svg"
                      alt="shape"
                    />
                    Why Choose Us
                  </span>
                  <h2 className="sec-title">Always Here for Your Pharma Needs</h2>
                </div>
                <div className="choose-feature-wrap">
                  <div className="choose-feature">
                    <div className="box-number">01</div>
                    <div className="media-body">
                      <h3 className="box-title">Trusted & Professional Support</h3>
                      <p className="box-text">
                        Providing reliable pharmaceutical solutions with
                        expertise and care to healthcare partners.
                      </p>
                    </div>
                  </div>
                  <div className="choose-feature">
                    <div className="box-number">02</div>
                    <div className="media-body">
                      <h3 className="box-title">Reliable Supply Chain</h3>
                      <p className="box-text">
                        Ensuring timely and consistent delivery of quality
                        medicines across Ethiopia.
                      </p>
                    </div>
                  </div>
                  <div className="choose-feature">
                    <div className="box-number">03</div>
                    <div className="media-body">
                      <h3 className="box-title">Comprehensive Product Range</h3>
                      <p className="box-text">
                        Offering a wide selection of pharmaceuticals to meet
                        diverse healthcare needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="img-box3">
                <img
                  src="assets/img/mamigas/mamigas-why-chhose.jpg"
                  alt="Why"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose