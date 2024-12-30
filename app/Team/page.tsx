import { companies } from '@/data'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[90vh] flex-col">
        <h1 className='text-6xl text-white/50 py-2'>Team</h1>
        <p className='text-[18px] text-white font-medium py-3 text-center'>The Founders, Inc. team has one job:
          <br />empower our founders to build amazing companies</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-5 text-white lg:px-[120px]">
                {companies.map((data, index) => (
                    <div key={index} className='flex flex-col text-center justify-center items-center'>
                        <div className="w-[320px] h-[330px]">
                            <Image
                                src={data.img}
                                alt={'Company logo'}
                                className="rounded-3xl object-cover w-full h-full"
                            />
                        </div>
                        <h2 className='font-semibold py-2 text-2xl'>{data.title}</h2>
                        <p className='w-[280px] text-[18px] text-white/75 '>{data.description}</p>
                    </div>
                ))}
            </div>


            <div>
              <h1>Want to join <br/>the team?</h1>
            </div>
    </div>
  )
}

export default Team
