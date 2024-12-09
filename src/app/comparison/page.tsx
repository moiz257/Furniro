import Banner from '@/components/BlogBanner'
import Comparison from '@/components/comparison'
import Offers from '@/components/Offers'
import ProductComparison from '@/components/ProductComparison'
import ProductSpecifications from '@/components/warrenty'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner title={'Comparison'} currentPage={'Comparison'}/>
        <Comparison/>
        <ProductComparison/>
        <ProductSpecifications/>
        <Offers/>
    </div>
  )
}

export default page