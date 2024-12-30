import React from 'react'

const Leap = () => {
    return (
        <div className='flex w-full justify-center items-center'>
            <div className="w-[1100px] mt-5 flex justify-center flex-col bg-[#08100d] rounded-3xl">
                <div className='p-6'>
                    <h1 className='text-center py-2 font-medium lg:text-[28px] text-white/75 text-[18px]'>This is about making the leap</h1>
                    <div className='flex gap-x-6 justify-evenly my-2 lg:flex-nowrap flex-wrap'>
                        <div>
                            <h1 className='text-center text-white/75 py-2'>From</h1>
                            <span className='text-center lg:text-[95px] text-white text-[40px]'>Builder</span>
                            <div className='mt-2 text-white py-3'>
                                <p className='text-[18px] font-medium py-1'>I am a prolific builder of side projects</p>
                                <p className='text-[18px] font-medium py-1'>I&apos;m an excellent Engineer</p>
                                <p className='text-[18px] font-medium py-1'>I dream of building a company some day</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-center text-white/75 py-2'>To</h1>
                            <span className='text-center lg:text-[95px] text-white text-[40px]'>Founder</span>
                            <div className='mt-2 text-white py-3'>
                                <p className='text-[18px] font-medium py-1'>I know how to build great products and teams</p>
                                <p className='text-[18px] font-medium py-1'>I am savvy at growth and distribution</p>
                                <p className='text-[18px] font-medium py-1'>I know exactly what it takes to win</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leap
