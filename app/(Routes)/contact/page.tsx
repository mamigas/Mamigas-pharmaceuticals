import Breadcumb from '@/components/Breadcumb'
import Branch from '@/components/contact/Branch'
import ContactForm from '@/components/contact/ContactForm'
import Map from '@/components/contact/Map'
import Script from 'next/script'
import React from 'react'

function page() {
  return (
    <div>
      <Breadcumb title="Contact" subtitle="Contact" />
      <Branch />
      <ContactForm />
      <Map />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default page