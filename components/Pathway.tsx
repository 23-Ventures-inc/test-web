import Image from 'next/image'
import React, { useState } from 'react'
import img1 from '../public/images/web.png'
import img2 from '../public/images/backend.png'
import { AnimatePresence, motion } from 'framer-motion'

const Pathway = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="w-full lg:px-[150px] flex flex-col justify-center items-center my-12 py-12">
                <h1 className='text-[#e6f2ee] text-4xl font-medium'>Build with Us</h1>
                <p className='text-[#e6f2ee] text-4xl font-medium'>We offer 2 seasons</p>

                <div className='flex gap-x-4 py-5 text-center justify-center lg:flex-nowrap flex-wrap items-center'>
                    {/* Summer Section */}
                    <div className='lg:w-[450px] my-2 bg-[#081311]  rounded-3xl flex flex-col justify-center items-center'>
                        <Image src={img1} alt='pathway images' className='w-[100px] h-[100px] my-2' />
                        <h1 className='lg:text-6xl font-medium text-[#e6f2ee] py-4'>Summer</h1>
                        <p className='text-[14px] font-semibold text-white py-2 px-2'>
                            20 Weeks Exclusive High Intensity program <br />
                            January - June
                        </p>
                        <div className='flex justify-center items-center my-2'>
                            <button className='bg-white px-4 py-2 rounded-3xl'>APPLY NOW</button>
                        </div>
                        <AnimatePresence>
                            {show && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 1, ease: 'easeInOut' }}
                                    className='flex justify-center items-center flex-col py-5 px-6  my-3 rounded-2xl mx-3 text-white'
                                >
                                    <span>Duration : 6 Months</span>
                                    <span>Location : Remote</span>
                                    <span>Completely FREE</span>


                                    <p>Funding : Connecting with

                                        Vc’s if you hit the milestones

                                        ( Exception not Agency )
                                    </p>
                                    <p>
                                        Types : Agency, Saas,
                                        Marketplace, AI SAAS, Web3
                                    </p>

                                    <p>
                                        Additionals :

                                        Experience, community,
                                        culture, KPI’s, Strategize and
                                        planning, process and system
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Winter Section */}
                    <div className='lg:w-[450px] my-2 bg-[#081311]  rounded-3xl flex flex-col justify-center items-center'>
                        <Image src={img2} alt='pathway images' className='w-[100px] h-[100px] my-2' />
                        <h1 className='lg:text-6xl font-medium text-[#e6f2ee] py-4'>Winter</h1>
                        <p className='text-[14px] font-semibold text-white py-2 px-2'>
                            20 Weeks Exclusive High Intensity program <br />
                            July - December
                        </p>
                        <div className='flex justify-center items-center my-2'>
                            <button className='bg-white px-4 py-2 rounded-3xl'>Coming Soon</button>
                        </div>
                        <AnimatePresence>
                            {show && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 1, ease: 'easeInOut' }}
                                    className='flex justify-center items-center flex-col bg-gradient-to-r py-4 rounded-2xl mx-3 text-white'
                                >
                                    <h1 className='text-7xl font-medium text-white/75 pb-2'>Winter</h1>
                                    <p>20 Weeks High Intensity program <br />
                                        July - December
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Toggle Button */}
                <div className="text-center mt-4">
                    <button
                        onClick={() => setShow(!show)}
                        className="px-6 py-2 bg-transparent text-white font-semibold rounded-3xl shadow-md transition border border-teal-700"
                    >
                        {show ? 'Close' : 'Expand'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pathway
