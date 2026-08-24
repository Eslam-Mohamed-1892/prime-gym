import React from 'react'

export default function Contact() {
    return (
        <section
            id='contact'
            name='contact'
            className='w-full bg-[#F5F5F5] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'
        >

            <div className='max-w-6xl mx-auto'>

                {/* Section Heading */}
                <div className='text-center outfitFont mb-10 md:mb-12'>
                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        CONTACT US
                    </span>

                    <h2 className='bebasFont text-[#111111] text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2'>
                        COME TRAIN WITH US
                    </h2>
                </div>

                {/* Contact Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto'>

                    {/* Find Us */}
                    <div className='bg-white rounded-2xl p-6 md:p-7 outfitFont'>

                        <h3 className='bebasFont text-[#111111] text-[28px] md:text-[32px]'>
                            FIND US
                        </h3>

                        <div className='mt-5 space-y-5'>

                            <div>
                                <span className='text-[#D41414] text-sm font-semibold'>
                                    ADDRESS
                                </span>

                                <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-1'>
                                    Kobry El-Khawaga Street, after Beit El-Ezz Grill
                                </p>
                            </div>

                            <div>
                                <span className='text-[#D41414] text-sm font-semibold'>
                                    CAPTAIN ISLAM
                                </span>
                                <br />

                                <a className='text-[#444444] text-[15px] md:text-[16px] mt-1' href='tel:01156309623'>
                                    011 56309623
                                </a>
                            </div>

                            <div>
                                <span className='text-[#D41414] text-sm font-semibold'>
                                    CAPTAIN KYRILLOS
                                </span>
                                <br />

                                <a className='text-[#444444] text-[15px] md:text-[16px] mt-1' href='tel:01286013541'>
                                    012 86013541
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* Opening Hours */}
                    <div className='bg-white rounded-2xl p-6 md:p-7 outfitFont'>

                        <h3 className='bebasFont text-[#111111] text-[28px] md:text-[32px]'>
                            OPENING HOURS
                        </h3>

                        <div className='mt-5 space-y-6'>

                            {/* Gym */}
                            <div>
                                <span className='text-[#D41414] text-sm font-semibold'>
                                    GYM
                                </span>

                                <div className='mt-2 space-y-2'>
                                    <div>
                                        <p className='text-[#111111] font-semibold'>
                                            MEN
                                        </p>

                                        <p className='text-[#444444] text-[15px] md:text-[16px]'>
                                            2:00 PM - 12:00 AM
                                        </p>
                                    </div>

                                    <div>
                                        <p className='text-[#111111] font-semibold'>
                                            WOMEN
                                        </p>

                                        <p className='text-[#444444] text-[15px] md:text-[16px]'>
                                            10:00 AM - 2:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Boxing */}
                            <div>
                                <span className='text-[#D41414] text-sm font-semibold'>
                                    BOXING
                                </span>

                                <p className='text-[#111111] font-semibold mt-2'>
                                    SATURDAY & TUESDAY
                                </p>

                                <p className='text-[#444444] text-[15px] md:text-[16px] mt-1'>
                                    4:00 PM - 6:00 PM
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}