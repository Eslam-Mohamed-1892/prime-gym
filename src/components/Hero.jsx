import React from 'react'
import hero from '../images/hero/hero.jpg'
import { Link } from 'react-scroll'

export default function Hero({ language }) {

    const content = {
        en: {
            title: 'BUILD YOUR PRIME',
            textOne: 'Push your limits.',
            textTwo: 'Become stronger.',
            button: 'JOIN NOW'
        },

        ar: {
            title: 'ابني نسختك الأقوى',
            textOne: 'اتحدى حدودك.',
            textTwo: 'كن أقوى.',
            button: 'اشترك الآن'
        }
    }

    return (
        <section
            id='home'
            className='w-full h-screen bg-cover bg-position-[60%_center] lg:bg-center bg-no-repeat pt-16 md:pt-18 lg:pt-20'
            style={{ backgroundImage: `url(${hero})` }}
        >

            <div className='w-full h-full bg-black/40 flex flex-col justify-start md:justify-center gap-5 text-white outfitFont px-5 md:px-8 lg:px-12 py-10'>

                <h1 className='bebasFont text-[36px] md:text-[44px] lg:text-[52px] leading-[0.95]'>
                    {content[language].title}
                </h1>

                <p className='text-[16px] lg:text-[17px]'>
                    {content[language].textOne}
                </p>

                <p className='text-[16px] lg:text-[17px]'>
                    {content[language].textTwo}
                </p>

                <Link
                    to='membership'
                    smooth={true}
                    className='inline-block w-fit text-[13px] md:text-[14px] bg-[#D41414] text-white active:text-black active:bg-white transition-colors duration-200 cursor-pointer px-5 py-2 font-medium rounded-lg'
                >
                    {content[language].button}
                </Link>

            </div>

        </section>
    )
}