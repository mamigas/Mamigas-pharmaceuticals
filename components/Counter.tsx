import React from 'react'

function Counter() {
  return (
    <div>
        <div
      className="z-index-common"
      data-pos-for="#team-sec"
      data-sec-pos="bottom-half"
    >
      <div className="container">
        <div className="counter-card-wrap">
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number"><span className="counter-number">69</span>k</span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">Satisfied Clients</p>
          </div>
          <div className="divider"></div>
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number"><span className="counter-number">236</span></span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">Partnered Specialists</p>
          </div>
          <div className="divider"></div>
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number"><span className="counter-number">19</span>k</span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">Deliveries Fulfilled</p>
          </div>
          <div className="divider"></div>
          <div className="counter-card">
            <h2 className="box-number">
              <span className="number"><span className="counter-number">320</span></span>
              <span className="plus">+</span>
            </h2>
            <p className="box-text">National Awards Win</p>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Counter