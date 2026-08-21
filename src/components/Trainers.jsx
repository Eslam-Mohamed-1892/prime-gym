import React from 'react'
import islam from '../images/trainers/eslam.jpeg'
import kyrillos from '../images/trainers/kiro.jpeg'

export default function Trainers() {
    return (
        <section className='w-full bg-[#F5F5F5] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'>
            
            <div className='max-w-6xl mx-auto'>

                {/* Section Heading */}
                <div className='text-center outfitFont mb-10 md:mb-12'>
                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        OUR TRAINERS
                    </span>

                    <h2 className='bebasFont text-[#111111] text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2'>
                        TRAIN WITH THE RIGHT PEOPLE
                    </h2>
                </div>

                {/* Trainers */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>

                    {/* Islam */}
                    <div className='bg-white rounded-2xl overflow-hidden'>
                        <img
                            src={islam}
                            alt="Captain Islam"
                            className='w-full h-[320px] md:h-[330px] lg:h-[420px] object-[50%_48%] lg:object-[50%_45%] object-cover'
                        />

                        <div className='p-5 md:p-6 outfitFont'>
                            <h3 className='bebasFont text-[#111111] text-[28px] md:text-[32px]'>
                                CAPTAIN ISLAM
                            </h3>

                            <span className='text-[#D41414] text-sm font-semibold'>
                                BOXING & KICKBOXING COACH
                            </span>

                            <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-3'>
                                A boxing and kickboxing coach focused on developing
                                strength, speed, fitness, and proper fighting technique.
                            </p>
                        </div>
                    </div>

                    {/* Kyrillos */}
                    <div className='bg-white rounded-2xl overflow-hidden'>
                        <img
                            src={kyrillos}
                            alt="Captain Kyrillos"
                            className='w-full h-[320px] md:h-[330px] lg:h-[420px] object-[50%_45%] object-cover'
                        />

                        <div className='p-5 md:p-6 outfitFont'>
                            <h3 className='bebasFont text-[#111111] text-[28px] md:text-[32px]'>
                                CAPTAIN KYRILLOS
                            </h3>

                            <span className='text-[#D41414] text-sm font-semibold'>
                                STRENGTH & FITNESS COACH
                            </span>

                            <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-3'>
                                A calm and professional coach who helps members
                                improve their strength, fitness, and overall performance.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}