import React from 'react'

function AppHero() {
  return (
    <div>
      <div className="overflow-hidden space">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-9">
              <div className="title-area">
                <span className="sub-title2">With Access To</span>
                <h2 className="sec-title mb-0">24 HOUR Support</h2>
                <h3 className="sec-heading">Assistance</h3>
                <p className="sec-text">
                  Our company utilizes advanced pharmaceutical technology and
                  modern labs to ensure high-quality drug development and
                  reliable solutions, delivering the best standards in
                  healthcare products.
                </p>
              </div>
            </div>
          </div>
          <form
            action="https://html.themeholy.com/mediax/demo/mail.php"
            method="POST"
            className="appointment-form2"
          >
            <h4 className="form-title">Make An Appointment</h4>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
              </div>

              <div className="form-group col-md-6">
                <select
                  name="dept"
                  id="dept"
                  className="form-select"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Choose Category
                  </option>
                  <option value="usage">Usage</option>
                  <option value="research">Research</option>
                  <option value="compliance">Compliance</option>
                  <option value="training">Training</option>
                </select>
              </div>
              {/* <div className="form-group col-md-6">
                <select
                  name="choose-doctor"
                  id="choose-doctor"
                  className="form-select"
                >
                  <option
                    value=""
                    disabled="disabled"
                    selected="selected"
                    hidden
                  >
                    Choose Doctor
                  </option>
                  <option value="Dr. Hamid Uddin">Dr. Hamid Uddin</option>
                  <option value="Dr. Jabed Justin">Dr. Jabed Justin</option>
                  <option value="Dr. Michael Morgan">Dr. Michael Morgan</option>
                  <option value="Dr. Faujia Fardin">Dr. Faujia Fardin</option>
                </select>
              </div> */}
              <div className="form-group col-12">
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={3}
                  className="form-control"
                  placeholder="Type Appointment Note...."
                ></textarea>
              </div>
              <div className="form-btn col-12">
                <button className="th-btn btn-fw">BOOK AN APPOINTMENT</button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppHero