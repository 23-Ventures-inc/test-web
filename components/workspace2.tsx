import Image from 'next/image'
import React from 'react'
import { workspace } from '@/data'

const Workspace2 = () => {
  return (
    <div>
        <div className="full flex justify-center items-center flex-col my-5">
              <div>
              <h1 className='lg:text-6xl text-[#e6f2ee] text-center text-3xl'>A workspace and <br/>hardware lab for founders<br/> and tinkerers</h1>
              </div>
              <div className="flex flex-wrap justify-center gap-5 mt-5 ">
                {workspace.map((data, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className="w-[300px] h-[220px]">
                            <Image
                                src={data.img}
                                alt={'Company logo'}
                                className="rounded-3xl object-cover w-full h-full"
                            />
                        </div>
                        <h2 className='font-semibold py-2 text-2xl text-[#e6f2ee]'>{data.title}</h2>
                        <p className='w-[280px] text-[18px] text-[#d6eae2]'>{data.description}</p>
                    </div>
                ))}
            </div>
            </div>
    </div>
  )
}

export default Workspace2
