import React from 'react'
import logo from '../images/logo.jpeg'
import { HiMenu } from "react-icons/hi";

export default function Header() {
    return (
        <header className='w-full h-16 md:h-18 lg:h-20 bg-[#111111] flex justify-between items-center px-5 md:px-8 lg:px-12 fixed top-0 left-0 z-20'>
            <div className='flex gap-2 bebasFont text-lg md:text-2xl lg:text-4xl'>
                <span className='text-white'>PRIME</span>
                <span className='text-[#D41414]'>GYM</span>
            </div>
            <nav className='text-[#FFFFFF] outfitFont hidden md:flex gap-5 md:text-[16px] font-semibold cursor-pointer'>
                <a>Home</a>
                <a>About</a>
                <a>Programs</a>
                <a>Trainers</a>
                <a>Membership</a>
                <a>Contact</a>
                <a>Footer</a>
            </nav>
            <HiMenu className="text-2xl text-white flex md:hidden" />
        </header>
    )
}
