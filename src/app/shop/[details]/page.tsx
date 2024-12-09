import Details from '@/components/detail'
import ProductDetail from '@/components/ProductDetails'
import Rated from '@/components/TopRated'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProductDetail/>
      <Details/>
      <Rated/>
    </div>
  )
}

export default page