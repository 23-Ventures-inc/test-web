'use client'
import React from 'react'
import mainimage from '../../public/images/MuCIYKFPhmwssTeOgFOFuYJ4J8.svg'
import Image from 'next/image'
import Build from '@/components/build'
import Companies from '@/components/Companies'
import Get from '@/components/Get'
import Studio from '@/components/Studio'
import Faqs from '@/components/Faqs'
import Process from '@/components/Process'
import Commit from '@/components/Commit'


const Hero = () => {
    return (
        <div>
            <div className="w-full flex justify-center items-center flex-col text-center h-[90vh] text-white overflow-x-hidden overflow-y-hidden">
                <Image src={mainimage} alt='hero image' className='lg:w-[230px] sm:w-[230px] w-[100px]' />
                <h2 className='lg:text-6xl py-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 mt-4 text-3xl sm:text-4xl'>
                Start your <br/>company from <br/>scratch</h2>

                <p className='text-2xl py-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 '>Give your best shot !</p>
            </div>
            <Process/>
            <Build/>
            <Commit/>
            <Companies/>
            <Get/>
            <Studio/>
            <Faqs/>
        </div>
    )
}

export default Hero
