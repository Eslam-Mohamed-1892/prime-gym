import React from 'react'
import about from '../images/about/about2.jpeg'
import { Link } from 'react-scroll'

export default function About({ language }) {

    const content = {
        en: {
            label: 'ABOUT US',
            title: 'BUILT FOR THOSE WHO REFUSE TO STAY THE SAME',
            paragraph1: 'Prime Gym is more than just a place to work out. It is a space built for people who want to become stronger, healthier, and better every day.',
            paragraph2: 'With the right environment, dedicated trainers, and quality equipment, we help you push your limits and reach your goals.',
            facilitiesTitle: 'OUR FACILITIES',
            facilities: [
                'Private Lockers',
                'Changing Rooms',
                'Bathroom & Shower',
                'Member Card',
                'Daily Check-in Scanner'
            ],
            button: 'LEARN MORE'
        },

        ar: {
            label: 'مين احنا',
            title: 'مكان يخليك أقوى كل يوم',
            paragraph1: 'برايم جيم مش مجرد مكان تتمرن فيه، ده مكان معمول لكل واحد عايز يطور نفسه، يبقى أقوى، ويحسن لياقته ويكسر حدوده كل يوم.',
            paragraph2: 'مع المكان الصح، والمدربين المتخصصين، والمعدات المناسبة، كل تمرينة هنا بتقربك أكتر من الفورمة والهدف اللي نفسك توصله.',
            facilitiesTitle: 'عندنا إيه؟',
            facilities: [
                'خزائن خاصة',
                'غرف لتغيير الملابس',
                'حمام ودش',
                'كارت خاص للمشتركين',
                'سكانر للتسجيل اليومي'
            ],
            button: 'اعرف المزيد'
        }
    }

    const current = content[language]

    return (
        <section
            id='about'
            dir='ltr'
            className='w-full bg-[#F5F5F5] px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24'
        >

            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16'>

                {/* Image */}
                <div className='w-full md:w-[45%]'>
                    <img
                        src={about}
                        alt='Prime Gym'
                        className='w-full h-75 md:h-100 lg:h-112.5 object-cover rounded-2xl'
                    />
                </div>


                {/* Content */}
                <div
                    className='w-full md:w-[55%] outfitFont'
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                >

                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        {current.label}
                    </span>

                    <h2 className='bebasFont text-[34px] md:text-[42px] lg:text-[48px] text-[#111111] leading-none mt-2'>
                        {current.title}
                    </h2>

                    <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-5 max-w-xl'>
                        {current.paragraph1}
                    </p>

                    <p className='text-[#444444] text-[15px] md:text-[16px] leading-7 mt-3 max-w-xl'>
                        {current.paragraph2}
                    </p>


                    {/* Facilities */}
                    <div className='mt-6'>

                        <h3 className='text-[#111111] text-lg md:text-xl font-semibold'>
                            {current.facilitiesTitle}
                        </h3>

                        <div className='grid grid-cols-2 gap-x-6 gap-y-3 mt-4 text-[#444444] text-[14px] md:text-[15px]'>

                            {current.facilities.map((facility) => (
                                <span key={facility}>
                                    • {facility}
                                </span>
                            ))}

                        </div>

                    </div>


                    {/* Button */}
                    <Link
                        to='programs'
                        smooth={true}
                        className='inline-block mt-6 bg-[#111111] text-[#D41414] active:text-white active:bg-[#D41414] transition-colors duration-200 px-6 py-2 rounded-lg text-sm font-medium cursor-pointer'
                    >
                        {current.button}
                    </Link>

                </div>

            </div>

        </section>
    )
}