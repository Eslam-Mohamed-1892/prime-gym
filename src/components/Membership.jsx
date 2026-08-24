import React from 'react'
import { Link } from 'react-scroll'

export default function Membership() {
    return (
        <section
            id='membership'
            className='w-full bg-[#111111] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'
        >

            <div className='max-w-6xl mx-auto'>

                {/* Section Heading */}
                <div className='text-center outfitFont mb-10 md:mb-12'>
                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        MEMBERSHIP
                    </span>

                    <h2 className='bebasFont text-white text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2'>
                        CHOOSE WHAT FITS YOU
                    </h2>
                </div>

                {/* Membership Plans */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>

                    {/* Single Session */}
                    <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-7 outfitFont flex flex-col'>

                        <h3 className='bebasFont text-white text-[28px] md:text-[32px]'>
                            SINGLE
                            <br />
                            SESSION
                        </h3>
                        <p className='text-[#BDBDBD] text-[15px] md:text-[16px] mt-2'>
                            Pay per session and train whenever you need.
                        </p>

                        <div className='mt-6'>
                            <p className='text-white text-3xl md:text-4xl font-semibold'>
                                30 EGP
                            </p>

                            <p className='text-[#D41414] text-sm mt-1'>
                                35 EGP with Cardio
                            </p>
                        </div>

                        <Link to='contact' smooth={true} className='w-fit mt-6 bg-[#D41414] text-white active:bg-white active:text-black transition-colors duration-200 px-5 py-2 rounded-lg text-[13px] md:text-[14px] font-medium cursor-pointer'>
                            JOIN NOW
                        </Link>

                    </div>

                    {/* Monthly */}
                    <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-7 outfitFont flex flex-col'>

                        <h3 className='bebasFont text-white text-[28px] md:text-[32px]'>
                            MONTHLY MEMBERSHIP
                        </h3>

                        <p className='text-[#BDBDBD] text-[15px] md:text-[16px] mt-2'>
                            Train throughout the month with one simple membership.
                        </p>

                        <div className='mt-6'>
                            <p className='text-white text-3xl md:text-4xl font-semibold'>
                                300 EGP
                            </p>

                            <p className='text-[#D41414] text-sm mt-1'>
                                350 EGP with Cardio
                            </p>
                        </div>

                        <Link to='contact' smooth={true} className='w-fit mt-6 bg-[#D41414] text-white active:bg-white active:text-black transition-colors duration-200 px-5 py-2 rounded-lg text-[13px] md:text-[14px] font-medium cursor-pointer'>
                            JOIN NOW
                        </Link>

                    </div>

                    {/* Boxing */}
                    <div className='bg-[#1A1A1A] rounded-2xl p-6 md:p-7 outfitFont flex flex-col'>

                        <h3 className='bebasFont text-white text-[28px] md:text-[32px]'>
                            BOXING MEMBERSHIP
                        </h3>

                        <p className='text-[#BDBDBD] text-[15px] md:text-[16px] mt-2'>
                            Train with Captain Islam and improve your boxing skills and fitness.
                        </p>

                        <div className='mt-6'>
                            <p className='text-white text-3xl md:text-4xl font-semibold'>
                                300 EGP
                            </p>

                            <p className='text-[#D41414] text-sm mt-1'>
                                Per Month
                            </p>
                        </div>

                        <Link to='contact' smooth={true} className='w-fit mt-6 bg-[#D41414] text-white active:bg-white active:text-black transition-colors duration-200 px-5 py-2 rounded-lg text-[13px] md:text-[14px] font-medium cursor-pointer'>
                            JOIN NOW
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    )
}