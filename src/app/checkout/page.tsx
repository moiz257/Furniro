import Banner from '@/components/BlogBanner'
import Checkout from '@/components/CheckOut'
import Offers from '@/components/Offers'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner title={'Checkout'} currentPage={'Checkout'}/>
        <Checkout/>
        <Offers/>
    </div>
  )
}

export default page