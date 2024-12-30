import Workspace from '@/components/workspace'
import Workspace2 from '@/components/workspace2'
import React from 'react'

const Lab = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[90vh] flex-col">

        <h1 className='lg:text-[90px] text-[#e6f2ee] sm:text-center text-[30px]'>Our SF Lab is where </h1>
        <div className='flex items-center gap-x-3 lg:flex-nowrap flex-wrap justify-center'>
          <span className='lg:text-[90px] text-[#e6f2ee] text-start sm:text-center text-[30px]'>epic happens</span>
          <div className='flex justify-center items-center bg-[#e6f2ee] px-6 py-3 rounded-3xl text-[16px]'>Come visit us</div>
        </div>
      </div>

      <Workspace/>
      <Workspace2/>
    </div>
  )
}

export default Lab
