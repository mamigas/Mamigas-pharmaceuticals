import React from "react";

function ServicesBanner() {
  return (
    <section className="space-bottom">
      <div className="container z-index-common">
        <div
          className="cta-sec5 mega-hover bg-cover bg-center text-white p-16 rounded-xl"
          style={{
            backgroundImage: "url('/assets/img/bg/cta_bg_5.jpg')",
          }}
        >
          <h2 className="sec-title mb-6 text-white">
            Delivering innovative, trusted pharmaceutical solutions for better
            health.
          </h2>
          <a href="/contact" className="th-btn style4 shadow-1">
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesBanner;
