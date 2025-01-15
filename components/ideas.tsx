
import Image from 'next/image'
import React from 'react'
import img1 from '../public/images/img1.jpg'
import img2 from '../public/images/img2.jpg'
import img3 from '../public/images/img3.jpg'
import img4 from '../public/images/img4.jpg'
import img5 from '../public/images/img5.png'
import img6 from '../public/images/img6.jpg'
import ParticlesBackground from './ParticlesBackground'

const Ideas = () => {
    return (
        <div className="w-full my-5 flex justify-center items-center flex-col py-5 text-center h-[700px] relative z-10 bg-[#030908]">
            <ParticlesBackground/>
            <h1 className="text-3xl md:text-6xl lg:text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 my-2 font-medium">
                We build people <br />
                beyond ideas
            </h1>

            <p className="text-lg md:text-xl font-medium py-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                This is not just about <br />
                backing ideas, it&apos; s about backing people !!
            </p>

            <div className="w-full lg:h-full -z-10 absolute py-2 ">
                <div className="relative w-full h-full flex justify-center items-center">
                    <Image src={img1} alt="" className="absolute w-[25vw] md:w-[15vw] lg:w-[12vw] h-[150px] md:h-[250px] lg:h-[350px] top-10 left-[-2%] object-cover rounded-3xl" />
                    <Image src={img2} alt="" className="absolute w-[18vw] md:w-[10vw] lg:w-[8vw] h-[80px] md:h-[120px] lg:h-[150px] top-0 left-[25%] object-cover rounded-3xl" />
                    <Image src={img4} alt="" className="absolute w-[14vw] md:w-[8vw] lg:w-[6vw] h-[60px] md:h-[90px] lg:h-[120px] top-48 left-[45%] object-cover rounded-3xl" />
                    <Image src={img3} alt="" className="absolute w-[14vw] md:w-[8vw] lg:w-[6vw] h-[60px] md:h-[90px] lg:h-[120px] top-80 left-[45%] object-cover rounded-3xl" />
                    <Image src={img3} alt="" className="absolute w-[14vw] md:w-[8vw] lg:w-[6vw] h-[60px] md:h-[80px] lg:h-[100px] top-10 right-[30%] object-cover rounded-3xl" />
                    <Image src={img3} alt="" className="absolute w-[20vw] md:w-[16vw] lg:w-[14vw] h-[100px] md:h-[140px] lg:h-[180px] bottom-10 left-[20%] object-cover rounded-3xl" />
                    <Image src={img4} alt="" className="absolute w-[20vw] md:w-[12vw] lg:w-[9vw] h-[100px] md:h-[140px] lg:h-[180px] top-5 right-[13%] object-cover rounded-3xl" />
                    <Image src={img5} alt="" className="absolute w-[20vw] md:w-[16vw] lg:w-[14vw] h-[120px] md:h-[160px] lg:h-[200px] bottom-10 right-[20%] object-cover rounded-3xl" />
                    <Image src={img6} alt="" className="absolute w-[25vw] md:w-[18vw] lg:w-[12vw] h-[180px] md:h-[300px] lg:h-[370px] top-56 right-[-2%] object-cover rounded-3xl" />
                </div>
            </div>
        </div>
    )
}

export default Ideas


