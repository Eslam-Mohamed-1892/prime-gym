import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-scroll'

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header
            id='header'
            className='w-full bg-[#111111] fixed top-0 left-0 z-20'
        >

            <div className='w-full h-16 md:h-18 lg:h-20 flex justify-between items-center px-5 md:px-8 lg:px-12'>

                {/* Logo */}
                <Link to='home' smooth={true} className='flex gap-2 bebasFont text-lg md:text-2xl lg:text-4xl cursor-pointer'>
                    <span className='text-white'>PRIME</span>
                    <span className='text-[#D41414]'>GYM</span>
                </Link>

                {/* Desktop Menu */}
                <nav className='text-white outfitFont hidden md:flex gap-5 md:text-[16px] font-semibold cursor-pointer'>
                    <Link to='home' smooth={true} duration={800} offset={-40} activeClass='text-[#D41414]' spy={true}>
                        Home
                    </Link>

                    <Link to='about' smooth={true} duration={800} offset={-40} activeClass='text-[#D41414]' spy={true}>
                        About
                    </Link>

                    <Link to='programs' smooth={true} duration={800} offset={-40} activeClass='text-[#D41414]' spy={true}>
                        Programs
                    </Link>

                    <Link to='trainers' smooth={true} duration={800} offset={-40} activeClass='text-[#D41414]' spy={true}>
                        Trainers
                    </Link>

                    <Link to='membership' smooth={true} duration={800} offset={-40} activeClass='text-[#D41414]' spy={true}>
                        Membership
                    </Link>

                    <Link to='contact' smooth={true} duration={800} offset={-40} activeClass='text-[#D41414]' spy={true}>
                        Contact
                    </Link>
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

                    <Link
                        to='home'
                        smooth
                        duration={500}
                        offset={-40}
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to='about'
                        smooth
                        duration={500}
                        offset={-40}
                        onClick={() => setOpen(false)}
                    >
                        About
                    </Link>

                    <Link
                        to='programs'
                        smooth
                        duration={500}
                        offset={-40}
                        onClick={() => setOpen(false)}
                    >
                        Programs
                    </Link>

                    <Link
                        to='trainers'
                        smooth
                        duration={500}
                        offset={-40}
                        onClick={() => setOpen(false)}
                    >
                        Trainers
                    </Link>

                    <Link
                        to='membership'
                        smooth
                        duration={500}
                        offset={-40}
                        onClick={() => setOpen(false)}
                    >
                        Membership
                    </Link>

                    <Link
                        to='contact'
                        smooth
                        duration={500}
                        offset={-40}
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>

                </div>
            )}

        </header>)
}
