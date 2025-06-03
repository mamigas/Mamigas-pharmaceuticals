import React from 'react'

function Branch() {
  return (
    <div>
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="location-card">
                <h3 className="box-title">Bole Branch</h3>
                <p className="footer-info">
                  <i className="far fa-location-dot"></i> Bole Dembel
                </p>
                <p className="footer-info">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:info@contacthp.com" className="info-box_link">
                    info@contacthp.com
                  </a>
                </p>
                <p className="footer-info">
                  <i className="far fa-phone"></i>
                  <a href="tel:+17145375160" className="info-box_link">
                    +171 4537 5160
                  </a>
                </p>
              </div>
              <div className="contact-feature">
                <div className="box-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="media-body">
                  <h3 className="box-title">Opening Hours</h3>
                  <p className="box-text">Mon to sat: 8:00am - 9:00pm</p>
                  <p className="box-schedule">Sunday - Closed</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="location-card active">
                <h3 className="box-title">Megenaga Branch</h3>
                <p className="footer-info">
                  <i className="far fa-location-dot"></i> Megenaga, Yogyakarta
                </p>
                <p className="footer-info">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:info@contacusa.com" className="info-box_link">
                    info@contacusa.com
                  </a>
                </p>
                <p className="footer-info">
                  <i className="far fa-phone"></i>
                  <a href="tel:+17067218623" className="info-box_link">
                    +170 6721 8623
                  </a>
                </p>
              </div>
              <div className="contact-feature">
                <div className="box-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="media-body">
                  <h3 className="box-title">Opening Hours</h3>
                  <p className="box-text">Mon to sat: 8:00am - 9:00pm</p>
                  <p className="box-schedule">Sunday - Closed</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="location-card">
                <h3 className="box-title">Mexico Branch</h3>
                <p className="footer-info">
                  <i className="far fa-location-dot"></i> 260 Lygon St, Brunswick
                  East VIC 3057, Addis Ababa
                </p>
                <p className="footer-info">
                  <i className="far fa-envelope"></i>
                  <a href="mailto:info@contactaus.com" className="info-box_link">
                    info@contactaus.com
                  </a>
                </p>
                <p className="footer-info">
                  <i className="far fa-phone"></i>
                  <a href="tel:+61399882015" className="info-box_link">
                    +613 9988 2015
                  </a>
                </p>
              </div>
              <div className="contact-feature">
                <div className="box-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="media-body">
                  <h3 className="box-title">Opening Hours</h3>
                  <p className="box-text">Mon to sat: 8:00am - 9:00pm</p>
                  <p className="box-schedule">Monday - Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branch