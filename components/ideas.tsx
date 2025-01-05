import Image from 'next/image'
import React from 'react'
import img1 from '../public/images/img1.jpg'
import img2 from '../public/images/img2.jpg'
import img3 from '../public/images/img3.jpg'
import img4 from '../public/images/img4.jpg'
import img5 from '../public/images/img5.png'
import img6 from '../public/images/img6.jpg'

const Ideas = () => {
    return (
        <div>
            <div className="w-full my-5 flex justify-center items-center flex-col py-5 text-center h-[600px] relative z-50 bg-[#030908]">
                <h1 className='text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 my-2'>We build people < br />

                    beyond ideas</h1>

                <p className='text-xl font-medium py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500'>This is not just about <br />

                    backing ideas, its about backing people !!</p>
                <div className=' flex w-full h-full -z-50 absolute py-2'>
                    <div className='flex items-start w-[35] h-full'>
                        <Image src={img1} alt='' />
                    </div>
                    <div className='flex items-end w-[35] h-full'>
                        <div className='bg-white  w-full'>
                            <Image src={img2} alt='' />
                        </div>
                    </div>
                    <div className='flex items-center w-[35] h-full'>
                        <div className='bg-white  w-full'>
                            <Image src={img3} alt='' />
                        </div>
                    </div>
                    <div className='flex items-end w-[35] h-full'>
                        <div className='bg-white  w-full'>
                            <Image src={img4} alt='' />
                        </div>
                    </div>
                    <div className='flex items-start w-[35] h-full'>
                        <div className='bg-white  w-full'>
                            <Image src={img5} alt='' />
                        </div>
                    </div>
                    <div className='flex items-end w-[35] h-full'>
                        <div className='bg-white  w-full'>
                            <Image src={img6} alt='' />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Ideas
