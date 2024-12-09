import Offers from '@/components/Offers'
import PageChange from '@/components/pageChange'
import ShopBanner from '@/components/ShopBanner'
import ShopProduct from '@/components/ShopProducts'
import React from 'react'

const page = () => {
  return (
    <div>
      <ShopBanner/>
      <ShopProduct/>
      <PageChange/>
      <Offers/>
    </div>
  )
}

export default page