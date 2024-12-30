'use client'
import Faqs from '@/components/Faqs'
import Join from '@/components/Join'
import Leap from '@/components/Leap'
import Niches from '@/components/Niches'
import Check from '@/components/check'
import React from 'react'

const Fellowship = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[90vh] flex-col text-center">

        <h1 className='lg:text-6xl text-[#e6f2ee] py-2 my-2 text-3xl'>Where we invest <br />
          and advise</h1>
        <p className='text-[18px] text-[#e6f2ee] font-medium py-3'>Get up to $150k, a desk in our Lab, and tailored work <br/> sessions with experienced founders.</p>
      </div>

      <Check/>
      <Leap/>
      <Join/>
      <Niches/>
      <Faqs/>
    </div>
  )
}

export default Fellowship
