'use client'
import React from 'react'
import mainimage from '../../public/images/MuCIYKFPhmwssTeOgFOFuYJ4J8.svg'
import Image from 'next/image'
import Build from '@/components/build'
import Companies from '@/components/Companies'
import Get from '@/components/Get'
import Studio from '@/components/Studio'
import Faqs from '@/components/Faqs'


const Hero = () => {
    return (
        <div>
            <div className="w-full flex justify-center items-center flex-col text-center h-[90vh] text-white overflow-x-hidden overflow-y-hidden">
                {/* <p className='absolute m-auto text-7xl'>Studios</p> */}
                <Image src={mainimage} alt='hero image' />
                <h2 className='text-6xl py-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 mt-4'>Where we start <br />
                    companies from <br />scratch</h2>
            </div>
            <Build/>
            <Companies/>
            <Get/>
            <Studio/>
            <Faqs/>
        </div>
    )
}

export default Hero
