import AppHero from '@/components/appointement/AppHero'
import Breadcumb from '@/components/Breadcumb'
import Script from 'next/script'
import React from 'react'

function page() {
  return (
    <div>
        <Breadcumb title="Appointements" subtitle="Appointements"/>
        <AppHero/>
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        
    </div>
  )
}

export default page