import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Header({ language }) {

    const [open, setOpen] = useState(false)

    const navLinks = [
        {
            en: 'Home',
            ar: 'الرئيسية',
            to: 'home'
        },
        {
            en: 'About',
            ar: 'مين احنا',
            to: 'about'
        },
        {
            en: 'Programs',
            ar: 'البرامج',
            to: 'programs'
        },
        {
            en: 'Trainers',
            ar: 'المدربين',
            to: 'trainers'
        },
        {
            en: 'Membership',
            ar: 'العضوية',
            to: 'membership'
        },
        {
            en: 'Contact',
            ar: 'تواصل معنا',
            to: 'contact'
        }
    ]

    return (
        <header
            id='header'
            className='w-full bg-[#111111] fixed top-0 left-0 z-20'
        >

            {/* Header Bar */}
            <div className='w-full h-16 md:h-18 lg:h-20 flex justify-between items-center px-5 md:px-8 lg:px-12'>

                {/* Logo */}
                <Link
                    dir='ltr'
                    to='home'
                    smooth={true}
                    className='flex gap-2 bebasFont text-lg md:text-2xl lg:text-4xl cursor-pointer'
                >
                    <span className='text-white'>PRIME</span>
                    <span className='text-[#D41414]'>GYM</span>
                </Link>


                {/* Desktop Menu */}
                <nav className='hidden md:flex gap-5 text-white outfitFont text-[16px] font-semibold'>

                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={800}
                            offset={-40}
                            activeClass='text-[#D41414]'
                            spy={true}
                            className='cursor-pointer'
                        >
                            {link[language]}
                        </Link>
                    ))}

                </nav>


                {/* Mobile Menu Button */}
                <HiMenu
                    className='text-2xl text-white md:hidden cursor-pointer'
                    onClick={() => setOpen(!open)}
                />

            </div>


            {/* Mobile Menu */}
            {open && (
                <nav className='flex flex-col items-center gap-3 py-6 bg-[#111111] text-white outfitFont border-t border-[#D41414]'>

                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-40}
                            onClick={() => setOpen(false)}
                            className='cursor-pointer'
                        >
                            {link[language]}
                        </Link>
                    ))}

                </nav>
            )}

        </header>
    )
}