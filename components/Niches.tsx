import React from 'react'

const Niches = () => {
    return (
        <div>
            <div className="full flex justify-center items-center flex-col mt-5">
                <div className='my-5'>
                    <p className='lg:text-6xl text-3xl text-[#b5dacc] '>We look for builders <br />with <span className='text-[#f1f8f5] font-medium'>high output,</span><br /> a <span className='text-[#f1f8f5] font-medium'>give-first mentality</span>, and <br/> the <span className='text-[#f1f8f5] font-medium'>willingness to live in SF.</span></p>
                </div>

                <p className='text-[#b5dacc] text-4xl text-center my-4'>Niches we’re interested in</p>
                <div className='flex gap-x-4 text-white'>
                    <div>AI/ML</div>
                    <div>AR/VR</div>
                    <div>Web3</div>
                    <div>Robotics</div>
                    <div>Dev Tools</div>
                </div>
            </div>
        </div>
    )
}

export default Niches
