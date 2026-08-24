import React from 'react'
import { Link } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer
            className='w-full bg-[#111111] px-5 md:px-8 lg:px-12 py-10 md:py-12'
        >

            <div className='max-w-6xl mx-auto'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>

                    {/* Logo */}
                    <Link
                        to='home'
                        smooth={true}
                        className='flex gap-2 bebasFont text-2xl md:text-3xl cursor-pointer'
                    >
                        <span className='text-white'>PRIME</span>
                        <span className='text-[#D41414]'>GYM</span>
                    </Link>

                    {/* Links */}
                    <nav className='flex flex-wrap justify-center gap-4 md:gap-6 outfitFont text-sm md:text-[15px] font-semibold'>

                        <Link
                            to='home'
                            smooth
                            duration={800}
                            offset={-40}
                            className='text-white cursor-pointer active:text-[#D41414]'
                        >
                            Home
                        </Link>

                        <Link
                            to='about'
                            smooth
                            duration={800}
                            offset={-40}
                            className='text-white cursor-pointer active:text-[#D41414]'
                        >
                            About
                        </Link>

                        <Link
                            to='programs'
                            smooth
                            duration={800}
                            offset={-40}
                            className='text-white cursor-pointer active:text-[#D41414]'
                        >
                            Programs
                        </Link>

                        <Link
                            to='trainers'
                            smooth
                            duration={800}
                            offset={-40}
                            className='text-white cursor-pointer active:text-[#D41414]'
                        >
                            Trainers
                        </Link>

                        <Link
                            to='membership'
                            smooth
                            duration={800}
                            offset={-40}
                            className='text-white cursor-pointer active:text-[#D41414]'
                        >
                            Membership
                        </Link>

                        <Link
                            to='contact'
                            smooth
                            duration={800}
                            offset={-40}
                            className='text-white cursor-pointer active:text-[#D41414]'
                        >
                            Contact
                        </Link>

                    </nav>

                    {/* WhatsApp */}
                    <div className='flex items-center gap-4 outfitFont'>

                        <a
                            href='https://wa.me/201156309623'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-1.5 text-white text-sm cursor-pointer active:text-[#D41414] transition-colors duration-200'
                        >
                            <FaWhatsapp className='text-xl' />
                            <span>Islam</span>
                        </a>

                        <a
                            href='https://wa.me/201286013541'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-1.5 text-white text-sm cursor-pointer active:text-[#D41414] transition-colors duration-200'
                        >
                            <FaWhatsapp className='text-xl' />
                            <span>Kyrillos</span>
                        </a>

                    </div>
                </div>

                {/* Divider */}
                <div className='w-full h-px bg-[#2A2A2A] my-7'></div>

                {/* Copyright */}
                <div className='text-center outfitFont text-[#BDBDBD] text-[13px] md:text-[14px]'>
                    © 2026 Prime Gym. All rights reserved.
                </div>

            </div>

        </footer>
    )
}