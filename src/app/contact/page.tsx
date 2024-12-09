import Banner from '@/components/BlogBanner'
import Contact from '@/components/Contact'

import Offers from '@/components/Offers'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner title="Contact" currentPage='Contact' />
      <Contact/>
      <Offers/>
    </div>
  )
}

export default page