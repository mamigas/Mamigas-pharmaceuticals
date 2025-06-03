import React from 'react'
import "@/assets/css/app.min.css";
import "@/assets/css/style.css";
import "@/assets/css/fontawesome.min.css";

function loading() {
  return (
    <div className="preloader">
      <button className="th-btn preloaderCls">Cancel Preloader</button>
      <div className="preloader-inner"><div className="loader"></div></div>
    </div>
  )
}

export default loading
