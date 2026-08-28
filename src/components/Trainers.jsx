import React from 'react'
import islam from '../images/trainers/eslam.jpeg'
import kyrillos from '../images/trainers/kiro.jpeg'

export default function Trainers({ language, theme }) {

    const isDark = theme === 'dark'

    const content = {
        en: {
            label: 'OUR TRAINERS',
            heading: 'TRAIN WITH THE RIGHT PEOPLE'
        },

        ar: {
            label: 'مدربينا',
            heading: 'اتمرن مع الناس الصح'
        }
    }

    const trainers = [
        {
            name: 'CAPTAIN ISLAM',
            image: islam,
            alt: {
                en: 'Captain Islam',
                ar: 'كابتن إسلام'
            },
            specialty: {
                en: 'BOXING & KICKBOXING COACH',
                ar: 'مدرب بوكس وكيك بوكسينج'
            },
            description: {
                en: 'A boxing and kickboxing coach focused on developing strength, speed, fitness, and proper fighting technique.',
                ar: 'كابتن بوكس وكيك بوكسينج بيساعدك تطور قوتك وسرعتك ولياقتك، وتتعلم التكنيك الصح خطوة بخطوة.'
            },
            imagePosition: 'object-[50%_48%] lg:object-[50%_45%]'
        },
        {
            name: 'CAPTAIN KYRILLOS',
            image: kyrillos,
            alt: {
                en: 'Captain Kyrillos',
                ar: 'كابتن كيرلس'
            },
            specialty: {
                en: 'STRENGTH & FITNESS COACH',
                ar: 'مدرب حديد ولياقة'
            },
            description: {
                en: 'A calm and professional coach who helps members improve their strength, fitness, and overall performance.',
                ar: 'كابتن هادي ومحترم في التعامل، بيساعدك تطور قوتك ولياقتك وتوصل لأفضل مستوى تقدر عليه.'
            },
            imagePosition: 'object-[50%_45%]'
        }
    ]

    const current = content[language]

    return (
        <section
            id='trainers'
            className={`w-full px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 border-b border-t border-black ${isDark ? 'bg-[#111111]' : 'bg-[#F5F5F5]'
                }`}
        >

            <div className='max-w-6xl mx-auto'>

                {/* Section Heading */}
                <div
                    className='text-center outfitFont mb-10 md:mb-12'
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                >

                    <span className='text-[#D41414] text-sm md:text-base font-semibold'>
                        {current.label}
                    </span>

                    <h2
                        className={`bebasFont text-[34px] md:text-[42px] lg:text-[48px] leading-none mt-2 ${isDark ? 'text-white' : 'text-[#111111]'
                            }`}
                    >
                        {current.heading}
                    </h2>

                </div>


                {/* Trainers */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>

                    {trainers.map((trainer) => (
                        <div
                            key={trainer.name}
                            className={`rounded-2xl overflow-hidden ${isDark ? 'bg-[#1A1A1A]' : 'bg-white'
                                }`}
                            dir={language === 'ar' ? 'rtl' : 'ltr'}
                        >

                            {/* Image */}
                            <img
                                src={trainer.image}
                                alt={trainer.alt[language]}
                                className={`w-full h-80 md:h-82.5 lg:h-105 object-cover ${trainer.imagePosition}`}
                            />


                            {/* Content */}
                            <div className='p-5 md:p-6 outfitFont'>

                                <h3
                                    className={`bebasFont text-[28px] md:text-[32px] ${isDark ? 'text-white' : 'text-[#111111]'
                                        }`}
                                >
                                    {trainer.name}
                                </h3>

                                <span className='text-[#D41414] text-sm font-semibold'>
                                    {trainer.specialty[language]}
                                </span>

                                <p
                                    className={`text-[15px] md:text-[16px] leading-7 mt-3 ${isDark ? 'text-[#BDBDBD]' : 'text-[#444444]'
                                        }`}
                                >
                                    {trainer.description[language]}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}