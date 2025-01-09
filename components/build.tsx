import React from 'react'
import read from '../public/images/read book.jpg'
import Image from 'next/image'

const Build = () => {
  return (
    <div>
      <div className="w-full lg:px-[150px] flex flex-col justify-center items-center my-10 ">
        <h1 className='text-[#baddd0] text-4xl font-medium'>Build with Us</h1>

        <div className='flex gap-x-4 py-5 text-center justify-center flex-wrap items-end'>
          <div className='lg:w-[350px] relative my-2 flex justify-center items-center'>
            <Image src={read} alt='build images' className='rounded-3xl object-cover w-full' />
            <div className='absolute -bottom-1'>
              <h1 className='text-2xl font-medium text-white/75 pb-2'>Agency</h1>
              <h2 className='text-6xl font-semibold text-white py-2'>Founder</h2>
              <div className='flex justify-center items-center py-2 px-6 rounded-2xl mx-3'>
                <button className='bg-[#EBEBEB] px-4 py-3 rounded-3xl text-[16px] my-2'>Apply Now</button>
              </div>
            </div>
          </div>
          <div className='lg:w-[350px] relative my-2 flex justify-center items-center'>
            <Image src={read} alt='build images' className='rounded-3xl object-cover w-full' />
            <div className='absolute -bottom-1'>
              <h1 className='text-2xl font-medium text-white/75 pb-2'>AI and SAAS</h1>
              <h2 className='text-6xl font-semibold text-white py-2'>Founder</h2>
              <div className='flex justify-center items-center py-2 px-6 rounded-2xl mx-3'>
                <button className='bg-[#EBEBEB] px-4 py-3 rounded-3xl text-[16px] my-2'>Apply Now</button>
              </div>
            </div>
          </div>
          <div className='lg:w-[350px] relative my-2 flex justify-center items-center'>
            <Image src={read} alt='build images' className='rounded-3xl object-cover w-full' />
            <div className='absolute -bottom-1'>
              <h1 className='text-2xl font-medium text-white/75 pb-2'>Web3</h1>
              <h2 className='text-6xl font-semibold text-white py-2'>Founder</h2>
              <div className='flex justify-center items-center py-2 px-6 rounded-2xl mx-3'>
                <button className='bg-[#EBEBEB] px-4 py-3 rounded-3xl text-[16px] my-2'>Apply Now</button>
              </div>
            </div>
          </div>
          <div className='lg:w-[350px] relative my-2 flex justify-center items-center'>
            <Image src={read} alt='build images' className='rounded-3xl object-cover w-full' />
            <div className='absolute -bottom-1'>
              <h1 className='text-2xl font-medium text-white/75 pb-2'>MarketPlace</h1>
              <h2 className='text-6xl font-semibold text-white py-2'>Founder</h2>
              <div className='flex justify-center items-center py-2 px-6 rounded-2xl mx-3'>
                <button className='bg-[#EBEBEB] px-4 py-3 rounded-3xl text-[16px] my-2'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Build
