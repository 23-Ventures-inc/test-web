import React from 'react';
import { companies } from '@/data';
import Image from 'next/image';
import '../styles/styles.css'

const Companies = () => {
    return (
        <div className="w-full flex flex-col items-center my-5 lg:px-[150px]" data-scroll >
      <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 py-4" data-scroll-speed="0.9">
                Studio Companies:
            </h1>
            <div className="flex flex-wrap justify-center gap-5 mt-5 text-white" data-scroll-speed="0.9">
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
    );
};

export default Companies;
