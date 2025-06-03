import React from 'react'

function CTA() {
  return (
    <div>
      <section className="space" data-bg-src="assets/img/bg/cta_bg_6.jpg">
        <div className="container py-40">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h2 className="h1 sec-title text-white">
                <span className="text-theme">Mediax</span> is Leading & Modern
                Technologies Hospital
              </h2>
              <div className="btn-group justify-content-center">
                <a href="contact.html" className="th-btn style4 shadow-1">
                  Make An Appointment
                </a>
                <a href="contact.html" className="th-btn shadow-1">
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA