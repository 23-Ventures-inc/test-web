import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mb-0'>
      <div className="w-full mb-0 flex justify-center flex-col items-center h-[400px] text-center">
        <h1 className='text-5xl  py-2  text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600'>Want to build <br /> with us?</h1>
        <p className='text-[16px]  text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600 py-4'>Let&apos;s talk in person! Fill out this form and someone<br />
          from our team will reach out!</p>

        <div className='link flex justify-center items-center bg-[#EBEBEB] px-4 py-3 rounded-3xl text-[16px] my-2'>Come visit us</div>
      </div>

      <div className="flex text-white justify-between gap-x-2 lg:px-[200px] items-center my-4 lg:flex-nowrap flex-wrap">
        <div><h2 className='text-[14px]'>© 2024 Founders, Inc</h2></div>
        <div className='links flex gap-x-4'>
          {['Studio', 'Fellowship', 'Portfolio', 'Lab', 'Team'].map((item, index) => (
            <Link
              key={index}
              href={''}
              className="relative group text-[14px] font-medium"
            >
              <span className="relative z-10">{item}</span>
              {/* Before */}
              <span className="absolute inset-0 -z-10 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 before:group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="icons flex gap-x-4">
          <div className='flex justify-center items-center p-3 bg-[#0a1511] rounded-full'><FaXTwitter /></div>
          <div className='flex justify-center items-center p-3 bg-[#0a1511] rounded-full'><FaLinkedinIn /></div>
          <div className='flex justify-center items-center p-3 bg-[#0a1511] rounded-full'><FaYoutube /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
