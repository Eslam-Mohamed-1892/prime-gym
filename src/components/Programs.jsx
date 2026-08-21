import React from 'react'
import boxing from '../images/programs/boxing.jpg'
import strength from '../images/programs/strength.jpg'

export default function Programs() {
    return (
        <section className='w-full bg-[#111111] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'>
            
            <div className='max-w-6xl mx-auto'>

                {/* Section Heading */}
                <div className='text-center outfitFont mb-10 md:mb-12'>
                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        OUR PROGRAMS
                    </span>

                    <h2 className='bebasFont text-white text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2'>
                        TRAIN FOR MORE THAN JUST LOOKS
                    </h2>
                </div>

                {/* Programs */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>

                    {/* Strength Training */}
                    <div className='bg-[#1A1A1A] rounded-2xl overflow-hidden'>
                        <img
                            src={strength}
                            alt="Strength Training"
                            className='w-full h-[280px] md:h-[320px] object-cover'
                        />

                        <div className='p-5 md:p-6 outfitFont'>
                            <h3 className='bebasFont text-white text-[28px] md:text-[32px]'>
                                STRENGTH TRAINING
                            </h3>

                            <p className='text-[#BDBDBD] text-[15px] md:text-[16px] leading-7 mt-2'>
                                Build strength, improve your fitness, and push your
                                body beyond its limits.
                            </p>

                            <button className='mt-5 bg-[#D41414] text-white px-5 py-2 rounded-lg text-sm font-medium cursor-pointer active:bg-white active:text-[#111111] transition-colors duration-200'>
                                LEARN MORE
                            </button>
                        </div>
                    </div>

                    {/* Boxing */}
                    <div className='bg-[#1A1A1A] rounded-2xl overflow-hidden'>
                        <img
                            src={boxing}
                            alt="Boxing Training"
                            className='w-full h-[280px] md:h-[320px] object-cover'
                        />

                        <div className='p-5 md:p-6 outfitFont'>
                            <h3 className='bebasFont text-white text-[28px] md:text-[32px]'>
                                BOXING
                            </h3>

                            <p className='text-[#BDBDBD] text-[15px] md:text-[16px] leading-7 mt-2'>
                                Learn proper technique, improve your conditioning,
                                and develop speed and discipline.
                            </p>

                            <button className='mt-5 bg-[#D41414] text-white px-5 py-2 rounded-lg text-sm font-medium cursor-pointer active:bg-white active:text-[#111111] transition-colors duration-200'>
                                LEARN MORE
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}