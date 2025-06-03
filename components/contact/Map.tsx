import React from 'react'

function Map() {
  return (
    <div>
      <div className="">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.936655887118!2d38.78255131432161!3d8.98817449355995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fdcbf9f045%3A0xa91d9ba6a43e4b62!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1716828935412!5m2!1sen!2set"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map