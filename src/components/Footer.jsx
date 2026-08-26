import React from 'react'
import { Link } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer({ language }) {

    const content = {
        en: {
            navLinks: [
                { name: 'Home', to: 'home' },
                { name: 'About', to: 'about' },
                { name: 'Programs', to: 'programs' },
                { name: 'Trainers', to: 'trainers' },
                { name: 'Membership', to: 'membership' },
                { name: 'Contact', to: 'contact' }
            ],

            trainers: [
                {
                    name: 'Islam',
                    whatsapp: 'https://wa.me/201156309623'
                },
                {
                    name: 'Kyrillos',
                    whatsapp: 'https://wa.me/201286013541'
                }
            ],

            copyright: '© 2026 Prime Gym. All rights reserved.'
        },

        ar: {
            navLinks: [
                { name: 'الرئيسية', to: 'home' },
                { name: 'مين احنا', to: 'about' },
                { name: 'البرامج', to: 'programs' },
                { name: 'المدربين', to: 'trainers' },
                { name: 'العضوية', to: 'membership' },
                { name: 'تواصل معنا', to: 'contact' }
            ],

            trainers: [
                {
                    name: 'إسلام',
                    whatsapp: 'https://wa.me/201156309623'
                },
                {
                    name: 'كيرلس',
                    whatsapp: 'https://wa.me/201286013541'
                }
            ],

            copyright: '© 2026 Prime Gym. جميع الحقوق محفوظة.'
        }
    }

    const current = content[language]

    return (
        <footer
            className='w-full bg-[#111111] px-5 md:px-8 lg:px-12 py-10 md:py-12'
        >

            <div className='max-w-6xl mx-auto'>

                <div
                    className='flex flex-col md:flex-row justify-between items-center gap-6'
                    dir={language === 'ar' ? 'rtl' : 'ltr'}                >

                    {/* Logo */}
                    <Link
                        to='home'
                        smooth={true}
                        dir='ltr'
                        className='flex gap-2 bebasFont text-2xl md:text-3xl cursor-pointer'
                    >
                        <span className='text-white'>PRIME</span>
                        <span className='text-[#D41414]'>GYM</span>
                    </Link>


                    {/* Links */}
                    <nav
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                        className='flex flex-wrap justify-center gap-4 md:gap-6 outfitFont text-sm md:text-[15px] font-semibold'
                    >

                        {current.navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={800}
                                offset={-40}
                                className='text-white cursor-pointer active:text-[#D41414]'
                            >
                                {link.name}
                            </Link>
                        ))}

                    </nav>


                    {/* WhatsApp */}
                    <div
                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                        className='flex items-center gap-4 outfitFont'
                    >

                        {current.trainers.map((trainer) => (
                            <a
                                key={trainer.name}
                                href={trainer.whatsapp}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 text-white text-sm cursor-pointer active:text-[#D41414] transition-colors duration-200'
                            >
                                <FaWhatsapp className='text-xl' />
                                <span>{trainer.name}</span>
                            </a>
                        ))}

                    </div>

                </div>


                {/* Divider */}
                <div className='w-full h-px bg-[#2A2A2A] my-7'></div>


                {/* Copyright */}
                <div
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                    className='text-center outfitFont text-[#BDBDBD] text-[13px] md:text-[14px]'
                >
                    {current.copyright}
                </div>

            </div>

        </footer>
    )
}