import React from 'react'
import about from '../images/about/about2.jpeg'
import { Link } from 'react-scroll'

export default function About({ language, theme }) {

    const isDark = theme === 'dark'

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
            className={`w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 ${isDark ? 'bg-[#111111] border-b border-[#2A2A2A]' : 'bg-[#F5F5F5]'}'
                }`}
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

                    {/* Label */}
                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        {current.label}
                    </span>


                    {/* Title */}
                    <h2
                        className={`bebasFont text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2 ${isDark ? 'text-white' : 'text-[#111111]'
                            }`}
                    >
                        {current.title}
                    </h2>


                    {/* Paragraphs */}
                    <p
                        className={`text-[15px] md:text-[16px] leading-7 mt-5 max-w-xl ${isDark ? 'text-[#BDBDBD]' : 'text-[#444444]'
                            }`}
                    >
                        {current.paragraph1}
                    </p>

                    <p
                        className={`text-[15px] md:text-[16px] leading-7 mt-3 max-w-xl ${isDark ? 'text-[#BDBDBD]' : 'text-[#444444]'
                            }`}
                    >
                        {current.paragraph2}
                    </p>


                    {/* Facilities */}
                    <div className='mt-6'>

                        <h3
                            className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-[#111111]'
                                }`}
                        >
                            {current.facilitiesTitle}
                        </h3>

                        <div
                            className={`grid grid-cols-2 gap-x-6 gap-y-3 mt-4 text-[14px] md:text-[15px] ${isDark ? 'text-[#BDBDBD]' : 'text-[#444444]'
                                }`}
                        >

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
                        className={`inline-block mt-6 px-6 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200 ${isDark
                                ? 'bg-white text-[#111111] active:bg-[#D41414] active:text-white'
                                : 'bg-[#111111] text-[#D41414] active:text-white active:bg-[#D41414]'
                            }`}
                    >
                        {current.button}
                    </Link>

                </div>

            </div>

        </section>
    )
}