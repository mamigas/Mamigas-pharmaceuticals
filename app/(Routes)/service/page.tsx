import Breadcumb from '@/components/Breadcumb'
import Services from '@/components/Services'
import ServicesBanner from '@/components/services/ServicesBanner'
import WorkingHours from '@/components/WorkingHours'
import Script from 'next/script'
import React from 'react'

function page() {
  return (
    <div>
      <Breadcumb title="Services" subtitle="Services" />
      <Services />
      <ServicesBanner />
      <WorkingHours />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}

export default page