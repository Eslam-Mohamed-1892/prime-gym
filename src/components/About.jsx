import React from 'react'
import about from '../images/about/about2.jpeg'
import { Link } from 'react-scroll'

export default function About() {
    return (
        <section 
        id='about'
        className='w-full bg-[#F5F5F5] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'
        >
            
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16'>

                {/* Image */}
                <div className='w-full md:w-[45%]'>
                    <img
                        src={about}
                        alt="Prime Gym"
                        className='w-full h-75 md:h-100 lg:h-112.5 object-cover rounded-2xl'
                    />
                </div>

                {/* Content */}
                <div className='w-full md:w-[55%] outfitFont'>
                    
                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        ABOUT US
                    </span>

                    <h2 className='bebasFont text-[34px] md:text-[42px] lg:text-[48px] text-[#111111] leading-none mt-2'>
                        BUILT FOR THOSE WHO REFUSE TO STAY THE SAME
                    </h2>

                    <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-5 max-w-xl'>
                        Prime Gym is more than just a place to work out.
                        It is a space built for people who want to become
                        stronger, healthier, and better every day.
                    </p>

                    <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-3 max-w-xl'>
                        With the right environment, dedicated trainers, and
                        quality equipment, we help you push your limits and
                        reach your goals.
                    </p>

                    <Link to='programs' smooth={true} className='inline-block mt-6 bg-[#111111] text-[#D41414] active:text-white active:bg-[#D41414] transition-colors duration-200 px-6 py-2 rounded-lg text-sm font-medium cursor-pointer'>
                        LEARN MORE
                    </Link>

                </div>

            </div>

        </section>
    )
}