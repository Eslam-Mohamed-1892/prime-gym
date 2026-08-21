import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className='w-full bg-[#111111] fixed top-0 left-0 z-20'>

            <div className='w-full h-16 md:h-18 lg:h-20 flex justify-between items-center px-5 md:px-8 lg:px-12'>

                {/* Logo */}
                <div className='flex gap-2 bebasFont text-lg md:text-2xl lg:text-4xl'>
                    <span className='text-white'>PRIME</span>
                    <span className='text-[#D41414]'>GYM</span>
                </div>

                {/* Desktop Menu */}
                <nav className='text-white outfitFont hidden md:flex gap-5 md:text-[16px] font-semibold'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Programs</a>
                    <a>Trainers</a>
                    <a>Membership</a>
                    <a>Contact</a>
                    <a>Footer</a>
                </nav>

                {/* Mobile Menu Button */}
                <HiMenu
                    className="text-2xl text-white md:hidden cursor-pointer"
                    onClick={() => setOpen(!open)}
                />

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className='flex flex-col items-center gap-3 py-6 bg-[#111111] text-white outfitFont border-t border-[#D41414]'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Programs</a>
                    <a>Trainers</a>
                    <a>Membership</a>
                    <a>Contact</a>
                    <a>Footer</a>
                </div>
            )}

        </header>)
}
