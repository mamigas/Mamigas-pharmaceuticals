import React from 'react'

function Process() {
  return (
    <div>
      <section className="space" data-bg-src="assets/img/bg/process_bg_1.jpg">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
              Work Process
            </span>
            <h2 className="sec-title">Let’s See How We Work Process</h2>
          </div>
          <div className="process-card-wrap">
            <div className="process-card">
              <div className="box-img">
                <div className="img">
                  <img src="assets/img/normal/process_card_1.jpg" alt="icon" />
                </div>
                <p className="box-number">01</p>
              </div>
              <h3 className="box-title">Client Onboarding</h3>
              <p className="box-text">
                We begin by understanding your pharmaceutical needs and
                establishing a strong working relationship.
              </p>
            </div>
            <div className="process-card">
              <div className="box-img">
                <div className="img">
                  <img src="assets/img/mamigas/onboard.jpeg" alt="icon" />
                </div>
                <p className="box-number">02</p>
              </div>
              <h3 className="box-title">Order Processing</h3>
              <p className="box-text">
                Once onboarded, we handle your medicine orders with speed,
                accuracy, and attention to quality.
              </p>
            </div>
            <div className="process-card">
              <div className="box-img">
                <div className="img">
                  <img src="assets/img/mamigas/delivery.jpeg" alt="icon" />
                </div>
                <p className="box-number">03</p>
              </div>
              <h3 className="box-title">Delivery & Confirmation</h3>
              <p className="box-text">
                Medications are securely delivered and verified to ensure safe,
                timely arrival to your facility.
              </p>
            </div>
            <div className="process-card">
              <div className="box-img">
                <div className="img">
                  <img src="assets/img/mamigas/support.png" alt="icon" />
                </div>
                <p className="box-number">04</p>
              </div>
              <h3 className="box-title">Ongoing Support</h3>
              <p className="box-text">
                Our service doesn't stop at delivery—we provide continuous
                assistance and restocking support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process