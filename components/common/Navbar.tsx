"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import logoimage from '../../public/images/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full bg-[#04090e] fixed top-0 z-50 overflow-x-hidden">
            <div className="flex justify-between items-center lg:px-[100px] px-4 py-2">
                {/* Logo */}
                <div className="text-white text-lg font-semibold"><Image src={logoimage} alt='logo image' className='w-[60px] h-auto'/></div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-x-5 items-center font-sans">
                    <Link href="/process" className="hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Process</Link>
                    <Link href="/Fellowship" className="hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Fellowship</Link>
                    <Link href="/Portfolio" className="hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Portfolio</Link>
                    <Link href="/Lab" className="hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Lab</Link>
                    <Link href="/Team" className="hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Team</Link>
                    <div className="flex justify-center items-center bg-[#EBEBEB] px-5 py-3 rounded-3xl text-[14px]">
                        <Link href="/" className="hover:text-[#ffff00] text-[12px]">Apply</Link>
                        <FaArrowRight className="text-[12px]" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    <button onClick={toggleMenu} className=" focus:outline-none">
                        {isMenuOpen ? <div className='flex justify-center items-center bg-[#0a1511] py-2 px-3 rounded-3xl text-[16px]'>Close<MdOutlineArrowDropUp size={24} /></div> : <div className='flex justify-center items-center bg-[#0a1511] py-2 px-3 rounded-3xl text-[16px]'> Menu<MdOutlineArrowDropDown size={24} /></div>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#04090e] px-4 py-4 space-y-3">
                    <Link href="/" onClick={toggleMenu} className="block hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Studio</Link>
                    <Link href="/Fellowship" onClick={toggleMenu} className="block hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Fellowship</Link>
                    <Link href="/Portfolio" onClick={toggleMenu} className="block hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Portfolio</Link>
                    <Link href="/Lab" onClick={toggleMenu} className="block hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Lab</Link>
                    <Link href="/Team" onClick={toggleMenu} className="block hover:text-[#EBEBEB] text-[#95959b] text-[14px]">Team</Link>
                    <div className="flex justify-center items-center bg-[#EBEBEB] px-4 py-2 rounded-3xl text-[14px] gap-x-1">
                        <Link href="/" onClick={toggleMenu} className="hover:text-[#ffff00] text-[14px]">Apply</Link>
                        <FaArrowRight className="text-[14px]" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
