import Banner from '@/components/BlogBanner'
import Cart from '@/components/Cart'
import Offers from '@/components/Offers'
import React from 'react'

const page = () => (
  <div>
    <Banner title="Cart" currentPage='Cart'/>
    <Cart />
    <Offers />
  </div>
)

export default page