'use client'
import React, { useEffect, useState } from 'react'
import Ideas from './ideas'
import Pathway from './Pathway'
import Image from 'next/image'
import { companies } from '@/data'
import Subscribe from './subscribe'
import withLocomotiveScroll from '@/hoc/LocomotiveWrapper'

const Hero = () => {


    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
    
      if (!isClient) {
        return null;
      }

    return (
        <div>
            <div className="w-full flex justify-center items-center flex-col text-center h-[90vh] overflow-x-hidden overflow-y-hidden" data-scroll data-scroll-speed="0.9">
                <h1 className='text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-600 to-white py-4 px-2 z-10'>Where Entrepreneurs
                    <br />
                    don’t stop dreaming !</h1>
                <div className='flex justify-center items-center bg-[#EBEBEB] px-6 py-3 rounded-3xl text-[16px] my-4 font-medium z-10'>APPLY for

                    Summer Batch 2025</div>
            </div>
            <Ideas/>
            <Pathway/>

      <div className=' lg:px-[150px] flex justify-center items-center flex-col my-5'>
      <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 py-4">
            100+ founders strong
            </h1>
            <div className="flex flex-wrap justify-center gap-5 mt-5 text-white">
                {companies.map((data, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className="p-2 rounded-2xl border border-[#29473b] w-[260px] h-[200px]">
                            <Image
                                src={data.img}
                                alt={'Company logo'}
                                className="rounded-2xl object-cover w-full h-full"
                            />
                        </div>
                        <h2 className='font-semibold py-1'>{data.title}</h2>
                        <p className='w-[250px] text-[14px] text-white/75'>{data.description}</p>
                    </div>
                ))}
            </div>
      </div>
      <Subscribe/>
        </div>
    )
}

export default withLocomotiveScroll(Hero)
