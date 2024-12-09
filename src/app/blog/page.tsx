import Blog from '@/components/Blog'
import Banner from '@/components/BlogBanner'
import Offers from '@/components/Offers'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner title="Blog" currentPage='Blog' />
        <Blog/>
        <Offers/>
    </div>
  )
}

export default page