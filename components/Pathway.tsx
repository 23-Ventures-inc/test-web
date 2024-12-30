import Image from 'next/image'
import React from 'react'
import img1 from '../public/images/web.png'
import img2 from '../public/images/backend.png'

const Pathway = () => {
    return (
        <div>
            <div className="w-full lg:px-[150px] flex flex-col justify-center items-center mt-5 ">
                <h1 className='text-[#e6f2ee] text-4xl font-medium'>Build with Us</h1>
                <p className='text-[#e6f2ee] text-4xl font-medium'>We offer 2 seasons</p>

                <div className='flex gap-x-4 py-5 text-center justify-center lg:flex-nowrap flex-wrap items-center'>
                    <div className='lg:w-[450px] my-2 bg-[#0a1511] h-[500px] rounded-3xl flex flex-col justify-center items-center'>
                        <Image src={img1} alt='pathway images' className='w-[100px] h-[100px]'/>
                        <h1 className='text-5xl font-medium text-[#e6f2ee] py-2'>Summer</h1>
                        <p className='text-[14px] font-semibold text-white py-2 px-2'>20 Weeks Exclusive High Intensity program <br/>
                            January - June</p>
                        <div className='flex justify-center items-center my-2'>
                            <button className='bg-white px-4 py-2 rounded-3xl'>APPLY NOW</button>
                        </div>
                        <div className='flex justify-center items-center flex-col py-4 px-6 rounded-2xl mx-3 text-white'>
                            <span>Duration : 6 Months</span>
                            <span>Location : Remote</span>
                            <span>Completely FREE</span>
                            <span>Completely FREE</span>

                        </div>
                    </div>
                    <div className='lg:w-[450px] my-2 bg-[#0a1511] h-[500px] rounded-3xl flex flex-col justify-center items-center'>
                        <Image src={img2} alt='pathway images' className='w-[100px] h-[100px]'/>
                        <h1 className='text-5xl font-medium text-[#e6f2ee] py-2'>Winter</h1>
                        <p className='text-[14px] font-semibold text-white py-2 px-2'>20 Weeks Exclusive High Intensity program <br/>

                            July - December</p>
                        <div className='flex justify-center items-center my-2'>
                            <button className='bg-white px-4 py-2 rounded-3xl'>Coming Soon</button>
                        </div>
                        <div className='flex justify-center items-center flex-col bg-gradient-to-r  py-4 rounded-2xl mx-3'>
                            <h1 className='text-5xl font-medium text-white/75 pb-2'>Winter</h1>
                            <p className='text-white'>20 Weeks High Intensity program <br/>
                                July - December</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pathway
