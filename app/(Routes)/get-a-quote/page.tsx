import Breadcumb from '@/components/Breadcumb'
import React from 'react'
import Cart from '../../../components/cart/Cart'

function page() {
  return (
    <div>
      <Breadcumb title="Get a quote" subtitle="Get a quote" />
      <Cart/>
    </div>
  )
}

export default page