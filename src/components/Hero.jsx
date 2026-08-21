import React from 'react'
import hero from '../images/hero.jpg'

export default function Hero() {
    return (
        <section
            className='w-full h-screen bg-cover bg-position-[60%_center] lg:bg-center bg-no-repeat pt-16 md:pt-18 lg:pt-20'
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className='w-full h-full bg-black/40 flex flex-col justify-start md:justify-center gap-5 text-white outfitFont px-5 md:px-8 lg:px-12 py-10'>
            <h1 className='bebasFont text-[36px] md:text-[44px] lg:text-[52px] leading-[0.95]'>BUILD YOUR PRIME</h1>
            <p className='text-[16px] lg:text-[17px]'>Push your limits.</p>
            <p className='text-[16px] lg:text-[17px]'>Become stronger.</p>
            <button className='w-[50%] md:w-[25%] text-[14px] md:text-[15px] bg-[#111111] text-[#D41414] active:text-white cursor-pointer p-1 font-medium rounded-lg'>JOIN NOW</button>
            </div>
        </section>
    )
}
