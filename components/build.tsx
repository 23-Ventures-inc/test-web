import React from 'react'
import read from '../public/images/read book.jpg'
import Image from 'next/image'

const Build = () => {
  return (
    <div>
      <div className="w-full lg:px-[150px] flex flex-col justify-center items-center mt-5 ">
        <h1 className='text-[#baddd0] text-4xl font-medium'>Build with Us</h1>

        <div className='flex gap-x-4 py-5 text-center justify-center lg:flex-nowrap flex-wrap items-center'>
          <div className='lg:w-[450px] relative my-2'>
            <Image src={read} alt='build images' className='rounded-3xl object-cover w-full' />
            <div className='absolute bottom-7'>
              <h1 className='text-2xl font-medium text-white/75 pb-2'>Studio</h1>
              <h2 className='text-6xl font-semibold text-white py-2'>Founder</h2>
              <div className='flex justify-center items-center bg-gradient-to-r from-teal-700 via-teal-900 to-teal-800 py-4 px-6 rounded-2xl mx-3'>
                <p className='text-white'>Embark on your founder mission with the funding and support of the Founders, Inc. Studio team as your cofounder.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-[450px] relative my-2'>
            <Image src={read} alt='build images' className='rounded-3xl object-cover w-full' />
            <div className='absolute bottom-7'>
            <h1 className='text-2xl font-medium text-white/75 pb-2'>Studio</h1>
              <h2 className='text-6xl font-semibold text-white py-2'>Engineer</h2>
              <div className='flex justify-center items-center bg-gradient-to-r from-teal-700 via-teal-900 to-teal-800  py-4 px-6 rounded-2xl mx-3'>
                <p className='text-white'>Not ready to build your own company but want the thrill of building a startup? Join the Studio team as an engineer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Build
