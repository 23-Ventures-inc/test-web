import React from 'react'
import icon1 from '../public/images/icons/icons8-dollar-64.png'
import icon2 from '../public/images/icons/icons8-clock-64.png'
import icon3 from '../public/images/icons/icons8-startup-96.png'
import Image from 'next/image'


const Commit = () => {
    return (
        <div>
            <div className="flex my-12 justify-evenly align-center lg:px-[150px]  lg:flex-nowrap flex-wrap py-12">
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-medium text-transparent bg-gradient-to-r from-white to-slate-600 bg-clip-text'>
                        every season <br />
                        we commit
                    </h1>
                </div>
                <div className='flex flex-col lg:text-3xl text-center text-white text-2xl w-[450px]'>
                    <div className='flex items-center justify-center'> <Image src={icon1} alt='dollor' width={64} height={64}/> <p className=' text-transparent bg-gradient-to-r from-white to-slate-500 bg-clip-text font-medium'> 200+ hours of 

                        mentorshipp and advice from the 10%
                        industry leaders </p></div>
                    <div className='flex items-center justify-center'> <Image src={icon2} alt='dollor' width={64} height={64}/>
                        <p className=' text-transparent bg-gradient-to-r from-white to-slate-500 bg-clip-text font-medium'>  Upto minimum 500k Dollars in funding in total

                            with connecting Vc’s</p>
                    </div>
                    <div className='flex items-center justify-center'><Image src={icon3} alt='dollor' width={64} height={64}/>
                      <div className='flex flex-col'>
                      <p className=' text-transparent bg-gradient-to-r from-white to-slate-500 bg-clip-text font-medium'>   5 startup founder’s to present themselves and
                            be with us for the long time </p>
                            <p className=' text-transparent bg-gradient-to-r from-white to-slate-500 bg-clip-text font-medium'>
                            teaching each startup founder a way to

                            do business in today’s era.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commit
